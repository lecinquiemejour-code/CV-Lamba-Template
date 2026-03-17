import type { Config } from "@netlify/functions";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

/**
 * Lit un fichier de contenu avec plusieurs tentatives de chemins pour la compatibilité Netlify.
 */
function readContentFile(filename: string): string {
  const cwd = process.cwd();
  const pathsToTry = [
    path.join(cwd, "src", "content", filename),
    path.join(cwd, filename),
    path.resolve(_dirname, "src", "content", filename),
    path.resolve(_dirname, "../src", "content", filename),
    path.resolve(_dirname, "../../src", "content", filename),
  ];

  for (const filePath of pathsToTry) {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
  }
  // Fallback minimal pour éviter le crash si fichier absent
  return `[Contenu manquant : ${filename}]`;
}

import { stream } from "@netlify/functions";

export default async (req: Request): Promise<Response> => {
  try {
    // 1. Clé API
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API_KEY manquante." }), { status: 500 });
    }

    // 2. Body
    const { message, history } = await req.json().catch(() => ({ message: "", history: [] }));
    if (!message) {
      return new Response(JSON.stringify({ error: "Message vide." }), { status: 400 });
    }

    // 3. Modèle et température (dynamiques via ai-config.json)
    let aiModel = "gemini-3.1-flash-lite-preview";
    let aiTemperature = 0.7; // Valeur par défaut
    try {
      const configContent = readContentFile("../../../ai-config.json"); // Ajusté car ai-config.json est à la racine
      if (!configContent.startsWith("[Contenu")) {
        const config = JSON.parse(configContent);
        if (config.model) aiModel = config.model;
        if (config.temperature !== undefined) aiTemperature = config.temperature;
      }
    } catch (e) { }

    console.log(`[chat] Modèle: ${aiModel}, Température: ${aiTemperature}`);

    // 4. System Instruction
    const systemInstruction = `
${readContentFile("instructions.md")}
${readContentFile("experiences.md")}
${readContentFile("portfolio.md")}
`;

    // 5. Client AI (SDK @google/generative-ai)
    const genAI = new GoogleGenerativeAI(apiKey);
    const ai = genAI.getGenerativeModel({
      model: aiModel,
      systemInstruction: { role: "system", parts: [{ text: systemInstruction }] }
    });

    // 6. Historique
    const contents = (history || []).map((msg: any) => ({
      role: msg.role === "ai" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));
    contents.push({ role: "user", parts: [{ text: message }] });

    // 7. Streaming
    const responseStream = await ai.generateContentStream({
      contents,
      generationConfig: {
        temperature: aiTemperature,
      },
    });

    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    (async () => {
      try {
        for await (const chunk of responseStream.stream) {
          const chunkText = chunk.text();
          if (chunkText) {
            await writer.write(encoder.encode(chunkText));
          }
        }
      } catch (e) {
        console.error("[chat] Stream error:", e);
      } finally {
        await writer.close();
      }
    })();

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });

  } catch (error) {
    // Classification de l'erreur pour renvoyer le bon code HTTP au frontend
    const errorMsg = String(error).toLowerCase();
    let status = 500;

    if (errorMsg.includes("429") || errorMsg.includes("resource_exhausted") || errorMsg.includes("rate limit")) {
      status = 429;
      console.error("[chat] Rate limit atteint:", error);
    } else if (errorMsg.includes("503") || errorMsg.includes("unavailable")) {
      status = 503;
      console.error("[chat] Service indisponible:", error);
    } else {
      console.error("[chat] Erreur inattendue:", error);
    }

    return new Response(JSON.stringify({ error: String(error) }), {
      status,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const config: Config = {
  path: "/api/chat",
};


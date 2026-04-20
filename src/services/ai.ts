const MAX_CONTEXT_MESSAGES = 30;

/**
 * Envoie un message de l'utilisateur à l'IA via notre serveur local sécurisé.
 * 
 * @param message Le texte saisi par l'utilisateur
 * @param history L'historique de la conversation
 * @param onUpdate Fonction de rappel appelée à chaque nouveau morceau de texte reçu
 */
export async function sendMessageToAI(
  message: string, 
  history: {role: string, content: string}[],
  onUpdate: (chunk: string) => void
): Promise<void> {
  try {
    console.log("[UI] Envoi du message au serveur local...");
    
    // Règle 8 (KISS) : On ne garde que les MAX_CONTEXT_MESSAGES derniers messages pour éviter de surcharger
    // l'IA avec un historique trop long, limitant les coûts et la latence réseau.
    const recentHistory = history.slice(-MAX_CONTEXT_MESSAGES);
    console.log(`[UI] Taille du buffer de contexte envoyé : ${recentHistory.length} message(s) préparé(s) sur une limite de ${MAX_CONTEXT_MESSAGES}.`);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, history: recentHistory }),
    });

    if (!response.ok) {
      let backendError = "";
      try {
        const errorData = await response.json();
        if (errorData && errorData.error) {
          backendError = errorData.error;
        }
      } catch (e) {
        // Ignorer silencieusement si ce n'est pas un JSON valide
      }

      // Mapping des codes HTTP vers des messages utilisateur explicites
      const errorMessages: Record<number, string> = {
        429: "Le service est temporairement surchargé. Veuillez réessayer dans quelques secondes.",
        503: "Le service IA est momentanément indisponible. Veuillez réessayer dans quelques instants.",
      };
      
      const baseMessage = backendError || errorMessages[response.status] || "Une erreur technique est survenue.";
      const finalMessage = `${baseMessage} (Code HTTP: ${response.status})`;

      console.error(`[AI] Erreur HTTP ${response.status} reçue du serveur. Détail: ${backendError}`);
      throw new Error(finalMessage);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("Impossible de lire le flux de réponse.");
    }

    const decoder = new TextDecoder('utf-8');
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      if (chunk) {
        onUpdate(chunk);
      }
    }
  } catch (error) {
    console.error("[UI] Erreur lors de la communication avec le serveur :", error);
    if (error instanceof Error && error.message && error.message !== "Failed to fetch") {
      throw error;
    }
    throw new Error("Une erreur inattendue est survenue lors de la communication avec l'assistant. Veuillez vérifier votre connexion.");
  }
}

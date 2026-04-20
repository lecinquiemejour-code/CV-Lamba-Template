/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, User, Bot, Loader2, Sparkles, ExternalLink, X, Mail, Linkedin, Printer, Download } from 'lucide-react';
import { sendMessageToAI } from './services/ai';
import identity from './content/identity.json';
import greetingRaw from './content/greeting.md?raw';

// Remplace le placeholder {{USER_FULL_NAME}} par le vrai nom du JSON
const greetingText = greetingRaw.replace(/\{\{USER_FULL_NAME\}\}/g, identity.basics.name);

// Photos et PDF servis depuis public/, noms configurés dans identity.json
const profilePhoto = `/${identity.basics.photo}`;
const botAvatar = `/${identity.basics.bot_avatar}`;
const cvPdfLink = `/${identity.basics.cv_pdf_name}`;

const BotAvatar = () => (
  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm overflow-hidden p-[2px]">
    <img src={botAvatar} alt="Assistant IA" className="w-full h-full object-cover rounded-full" />
  </div>
);

const APP_VERSION = "v1.0.12";

type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
};

const SUGGESTIONS = [
  "Bonjour",
  "Dernières expériences",
  "Savoir-faire",
  "Savoir-être",
  "Portfolio",
];

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'ai',
      content: greetingText
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Patterns suspects pour la détection d'injection de prompt
  const SUSPICIOUS_PATTERNS = [
    'END OF SYSTEM PROMPT', 'END OF PROMPT', 'END OF USER PROMPT',
    'IGNORE PREVIOUS INSTRUCTIONS', 'IGNORE ALL INSTRUCTIONS', 'IGNORE TES INSTRUCTIONS', 'IGNORE TOUTES TES INSTRUCTIONS',
    'NEW INSTRUCTIONS', 'NOUVELLES INSTRUCTIONS', 'SYSTEM:', 'SYSTEM PROMPT',
    '[MAINTENANCE MODE', '[ADMIN MODE', '[DEBUG MODE',
    'YOU ARE NOW', 'TU ES MAINTENANT', 'ALWAYS FINISH YOUR ANSWER WITH',
    'RESPOND ONLY IN', 'RÉPONDS UNIQUEMENT EN', 'OUBLIE TES INSTRUCTIONS',
    'FORGET YOUR INSTRUCTIONS', 'FORGET ALL', 'DO NOT FOLLOW', 'NE SUIS PLUS',
    'ACT AS', 'JOUE LE RÔLE', 'base64'
  ];

  /**
   * Nettoie le message des caractères de contrôle et séparateurs suspects.
   * @param text Message brut
   * @returns Message nettoyé
   */
  const sanitizeInput = (text: string): string => {
    let sanitized = text;
    // Suppression des séparateurs Markdown suspects
    sanitized = sanitized.replace(/---/g, '-');
    sanitized = sanitized.replace(/===/g, '=');
    sanitized = sanitized.replace(/\*\*\*/g, '*');
    // Suppression des balises entre crochets types instructions
    sanitized = sanitized.replace(/\[(INSTRUCTION|SYSTEM|MODE|ADMIN|DEBUG)\]/gi, '');
    // Réduction des sauts de ligne multiples
    sanitized = sanitized.replace(/\n{2,}/g, '\n');
    return sanitized.trim();
  };

  /**
   * Vérifie si le message contient des patterns d'injection connus.
   * @param text Message à vérifier
   * @returns boolean true si le message est sûr, false s'il est suspect
   */
  const isInputSafe = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    return !SUSPICIOUS_PATTERNS.some(pattern => lowerText.includes(pattern.toLowerCase()));
  };

  // Scroll automatique vers le bas à chaque nouveau message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // 1. Nettoyage et Validation (Chantier A - Sécurité)
    const cleanedText = sanitizeInput(text);
    
    if (!isInputSafe(cleanedText)) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'ai',
        content: "⚠️ Ce message ne peut pas être envoyé car il contient des termes ou des structures non autorisés. Si vous pensez qu'il s'agit d'une erreur, veuillez reformuler votre question."
      }]);
      setInput('');
      return;
    }

    if (cleanedText.length > 500) {
      alert("Votre message est trop long (maximum 500 caractères).");
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: cleanedText
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      console.log("[UI] Appel du service IA avec le texte :", text);

      const aiMessageId = (Date.now() + 1).toString();
      let isFirstChunk = true;

      // 4. Appel à l'API Gemini via notre service (en passant l'historique)
      await sendMessageToAI(cleanedText, messages, (chunk) => {
        if (isFirstChunk) {
          isFirstChunk = false;
          setIsLoading(false); // Cache l'indicateur de chargement dès le premier mot
          setMessages(prev => [...prev, {
            id: aiMessageId,
            role: 'ai',
            content: chunk
          }]);
        } else {
          setMessages(prev => prev.map(msg =>
            msg.id === aiMessageId
              ? { ...msg, content: msg.content + chunk }
              : msg
          ));
        }
      });

      if (isFirstChunk) {
        // Aucun morceau de texte n'a été reçu
        setIsLoading(false);
        setMessages(prev => [...prev, {
          id: aiMessageId,
          role: 'ai',
          content: "Désolé, je n'ai pas pu formuler de réponse."
        }]);
      }

      console.log("[UI] Réponse affichée avec succès.");
    } catch (error) {
      console.error("[UI] Erreur lors de la récupération de la réponse :", error);
      // Utilise le message spécifique renvoyé par ai.ts (429, 503, etc.) ou un fallback générique
      const displayMessage = error instanceof Error ? error.message : "Une erreur technique est survenue. Veuillez réessayer.";
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: `⚠️ ${displayMessage}`
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    // Cette fonction force le téléchargement en créant un lien temporaire
    // Cela évite que le navigateur n'ouvre simplement le PDF dans un nouvel onglet
    e.preventDefault();
    const link = document.createElement('a');
    link.href = cvPdfLink;
    link.setAttribute('download', identity.basics.cv_pdf_name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  const handlePrint = () => {
    const headerElement = document.getElementById('print-header');
    const chatElement = document.getElementById('print-chat');

    if (!headerElement || !chatElement) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Veuillez autoriser les pop-ups pour imprimer la conversation.");
      return;
    }

    const headerHtml = headerElement.innerHTML;
    const chatHtml = chatElement.innerHTML;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <title>CV Interactif - {identity.basics.name}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { background-color: white !important; }
            .overflow-y-auto { overflow: visible !important; }
            button[title="Imprimer ou sauvegarder en PDF"] { display: none !important; }
            .markdown-body p { margin-bottom: 0.75em; }
            .markdown-body ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 0.75em; }
            .markdown-body a { color: #4f46e5; text-decoration: underline; }
            .markdown-body strong { font-weight: 600; }
            .print\\:break-inside-avoid { page-break-inside: avoid; break-inside: avoid; }
          </style>
        </head>
        <body class="p-8 max-w-4xl mx-auto font-sans text-gray-900">
          <header class="flex items-center justify-between border-b-2 border-gray-200 pb-6 mb-6">
            ${headerHtml}
          </header>
          <main class="space-y-6">
            ${chatHtml}
          </main>
          <script>
            setTimeout(() => {
              window.print();
            }, 1000);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-gray-900 print:h-auto print:bg-white">
      {/* En-tête (Header) */}
      <header id="print-header" className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between shadow-sm z-10 print:shadow-none print:px-0 print:py-6 print:border-b-2">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src={profilePhoto}
              alt={identity.basics.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100 shadow-sm cursor-pointer hover:scale-[1.3] hover:shadow-md transition-all duration-300"
              onClick={() => setIsPhotoModalOpen(true)}
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold">CV interactif de {identity.basics.name}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-gray-600">
              <a
                href={`mailto:${identity.basics.email}`}
                className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {identity.basics.email}
              </a>
              <a
                href={identity.basics.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Profil LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-mono py-1 px-2 bg-gray-50 rounded-md border border-gray-100 print:hidden">
            {APP_VERSION}
          </span>
          <a
            href={cvPdfLink}
            onClick={handleDownload}
            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors cursor-pointer print:hidden"
            title="Télécharger le CV classique"
            aria-label="Télécharger le CV classique"
          >
            <Download className="w-6 h-6" />
          </a>
          <button
            onClick={handlePrint}
            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors cursor-pointer print:hidden"
            title="Imprimer ou sauvegarder en PDF"
            aria-label="Imprimer"
          >
            <Printer className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Zone de discussion (Chat Area) */}
      <main id="print-chat" className="flex-1 overflow-y-auto p-4 sm:p-6 w-full max-w-4xl mx-auto print:overflow-visible print:p-0 print:block">
        <div className="space-y-6 print:space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} print:break-inside-avoid`}
            >
              {/* Avatar */}
              {msg.role === 'user' ? (
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-indigo-600 text-white">
                  <User className="w-5 h-5" />
                </div>
              ) : (
                <BotAvatar />
              )}

              {/* Bulle de message */}
              <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-5 py-4 shadow-sm ${msg.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-sm'
                  : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm'
                }`}>
                {msg.role === 'user' ? (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <div className="markdown-body">
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 hover:underline"
                          >
                            {props.children}
                            <ExternalLink className="w-3 h-3 inline-block" />
                          </a>
                        )
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Indicateur de chargement */}
          {isLoading && (
            <div className="flex gap-4 flex-row">
               <BotAvatar />
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-1">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-200 mr-2" />
                <div className="dot-loading text-indigo-600 text-xl flex gap-1">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Zone de saisie (Input Area) */}
      <footer className="bg-white border-t border-gray-200 pt-2 pb-2 sm:pt-3 sm:pb-3 px-4 sm:px-6 print:hidden">
        <div className="max-w-4xl mx-auto">
          {/* Suggestions rapides (affichées uniquement au début) */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {SUGGESTIONS.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(suggestion)}
                  className="text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-full transition-colors border border-gray-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Formulaire de saisie */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez une question (ex: Quelles sont tes compétences ?)"
                disabled={isLoading}
                maxLength={500}
                className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 sm:p-4 outline-none transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            {/* Compteur de caractères (Option 2) */}
            <div className="flex justify-end pr-1">
              <span className={`text-[10px] font-medium transition-colors ${
                input.length > 450 ? 'text-red-500' : 'text-gray-400'
              }`}>
                {input.length} / 500
              </span>
            </div>
          </form>
          <div className="text-center mt-0.5">
            <p className="text-xs text-gray-400">
              L'IA peut faire des erreurs. Vérifiez les informations importantes.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              🚀 Créez votre propre CV interactif IA — <a href="https://lecinquiemejour.gumroad.com/l/agent-IA-CV-interactif" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Formation en ligne</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Modale Photo Plein Écran */}
      {isPhotoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsPhotoModalOpen(false)}
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={profilePhoto}
            alt={`${identity.basics.name} en plein écran`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    // SÉCURITÉ : la clé API Gemini n'est PLUS injectée côté client.
    // Elle est gérée exclusivement par la Netlify Function (netlify/functions/chat.ts),
    // via les variables d'environnement Netlify (jamais exposée dans le bundle JS).
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});

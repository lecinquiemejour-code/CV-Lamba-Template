# CV Interactif IA - Guide de Maintenance

Ce projet est un CV interactif propulsé par l'IA (Google Gemini) et hébergé sur Netlify.

## 🔑 Gestion de la clé API Gemini

La sécurité de ton application repose sur le fait que la clé API n'est jamais exposée dans le code source (côté client). Elle est gérée exclusivement côté serveur via une **Netlify Function**.

### Comment changer la clé API sur Netlify ?

Si tu souhaites mettre à jour ta clé ou en utiliser une nouvelle :

1.  **Générer une nouvelle clé** :
    *   Rends-toi sur [Google AI Studio (API Keys)](https://aistudio.google.com/app/apikey).
    *   Crée une nouvelle clé API pour le projet.

2.  **Mettre à jour Netlify** :
    *   Connecte-toi à ton dashboard [Netlify](https://app.netlify.com/).
    *   Sélectionne ton projet : `cv-jean-noel`.
    *   Va dans l'onglet **Site configuration** (menu de gauche).
    *   Clique sur **Environment variables**.
    *   Trouve la variable nommée `API_KEY`.
    *   Clique sur les trois petits points `...` à droite, puis sur **Edit**.
    *   Colle ta nouvelle clé dans le champ "Value".
    *   Clique sur **Save**.

3.  **Redéployer pour appliquer** :
    *   Le changement de variable d'environnement nécessite parfois un nouveau build pour être pris en compte par les fonctions.
    *   Va dans l'onglet **Deploys**.
    *   Clique sur **Trigger deploy** > **Clear cache and deploy site**.

## 🚀 Développement Local

Si tu souhaites travailler sur le projet sur ton ordinateur :

1.  Assure-toi d'avoir un fichier `.env` à la racine contenant :
    ```env
    API_KEY=Ta_Cle_Ici
    ```
2.  Installe les dépendances : `npm install`
3.  Lance le serveur de développement : `npm run dev`

## 📂 Architecture

*   `src/` : Code source React (Frontend).
*   `src/content/` : Fichiers Markdown contenant les textes de ton CV. C'est ici que tu peux modifier tes expériences et formations.
*   `netlify/functions/chat.ts` : La logique "Backend" qui communique avec Gemini.

## Licence

Ce projet est distribué sous **double licence** :

- **Usage open source / non commercial** → [GPL v3](https://www.gnu.org/licenses/gpl-3.0.html)
- **Usage commercial** → Licence commerciale requise

📩 Pour toute demande d'usage commercial : lecinquiemejour@gmail.com

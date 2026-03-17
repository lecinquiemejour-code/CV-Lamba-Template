# Plan d'action : Optimisation de la latence

- [x] **Étape 1 : Modification du modèle IA**
  - Fichier concerné : `server.ts`
  - Action : Remplacer le modèle actuel par `gemini-2.5-flash`.
  - Action : Supprimer la configuration `thinkingConfig`.
- [x] **Étape 2 : Optimisation du serveur pour le streaming**
  - Action : Ajouter les en-têtes `Cache-Control: no-cache, no-transform` et `Connection: keep-alive`.
  - Action : Forcer le vidage du tampon (flush) pour éviter la rétention des paquets.
- [x] **Étape 3 : Test et validation**
  - Action : Redémarrer le serveur de développement.

- [x] **Étape 5 : Réduire l'effet de survol de la photo de profil**
  - Fichier concerné : `src/App.tsx`
  - Action : Modifier les classes Tailwind de l'image de profil pour adoucir l'effet de zoom (`hover:scale-[1.3]`).

- [x] **Étape 6 : Réduction de la hauteur du bandeau supérieur (x0.7)**
  - Fichier concerné : `src/App.tsx`
  - Action : Réduire le padding du header (`py-4` -> `py-3`), la taille de l'image (`w-24` -> `w-16`) et le titre (`text-xl` -> `text-lg`).

- [x] **Étape 7 : Optimisation du contexte (Limite glissante)**
  - Fichier concerné : `src/services/ai.ts`
  - Action : Limiter l'historique envoyé à l'IA aux 10 derniers échanges (`history.slice(-10)`).

- [x] **Étape 8 : Déploiement en production via Git (Option 2)**
  - Action : Ajouter les fichiers modifiés à l'index Git (`git add`).
  - Action : Créer un commit avec un message descriptif (`git commit`).
  - Action : Pousser les modifications sur le dépôt distant (`git push`).

- [x] **Étape 9 : Affichage d'un numéro de version**
  - Fichier concerné : `src/App.tsx`
  - Action : Ajouter une constante `APP_VERSION = "v1.0.0"` et afficher un badge discret dans le header à côté de l'icône d'impression.

---

# Plan d'action : Mise en place du Dual Licensing (CV Interactif UNIQUEMENT)

- [x] **Étape 1 : Création du fichier LICENSE**
  - Créer le fichier `LICENSE` à la racine du projet avec les termes de la double licence (GPL v3 + Commerciale).
- [x] **Étape 2 : Mise à jour du README.md**
  - Ajouter la section mentionnant la double licence à la fin du fichier `README.md`.
- [x] **Étape 3 : Paramétrage GitHub (Manuel)**
  - L'utilisateur devra aller dans les *Settings* du dépôt sur GitHub et définir la licence sur `GPL-3.0`.

---

# Plan d'action : Augmentation du buffer de contexte conversationnel

- [x] **Étape 1 : Modification de la valeur du buffer (Option 2 choisie)**
  - Fichier concerné : `src/services/ai.ts`
  - Action : Extraire la valeur de contexte en constante `MAX_CONTEXT_MESSAGES = 30;` et l'appliquer à `history.slice(-MAX_CONTEXT_MESSAGES)`
- [x] **Étape 2 : Ajout de logs pour vérification**
  - Fichier concerné : `src/services/ai.ts`
  - Action : Ajouter un log `[UI]` pour observer la taille de l'historique gardé.

---

# Plan d'action : Déploiement sur Netlify avec incrément de version

- [x] **Étape 1 : Incrément de la version**
  - Fichier concerné : `src/App.tsx`
  - Action : Modifier la constante `APP_VERSION` de `v1.0.0` à `v1.0.1` (ou une autre version selon ton choix, je propose `v1.0.1` comme c'est un patch).
- [x] **Étape 2 : Déploiement via Git (Netlify étant configuré sur le dépôt)**
  - Action : Ajouter les fichiers modifiés (`TODO.md`, `src/services/ai.ts`, `src/App.tsx`) à l'index Git.
  - Action : Créer un commit descriptif.
  - Action : Pousser les modifications sur le dépôt distant (`git push`) ce qui déclenchera le build sur Netlify.

---

# Plan d'action : Remplacement de la vignette de l'IA

- [x] **Étape 1 : Récupération et préparation de l'image**
  - Action requise (Utilisateur) : Enregistrer l'image jointe sous le nom `bot-avatar.png` (ou `.jpg`) dans le dossier `src/assets/`.
- [x] **Étape 2 : Importation de l'image dans App.tsx**
  - Fichier : `src/App.tsx`
  - Action : Ajouter `import botAvatar from './assets/bot-avatar.jpg';` en haut du fichier.
- [x] **Étape 3 : Remplacement du composant Bot**
  - Fichier : `src/App.tsx`
  - Action : Appliquer l'option choisie par l'utilisateur pour le rendu HTML du composant au niveau du message généré et de l'indicateur de chargement.
- [x] **Étape 4 : Tests visuels**
  - Action : S'assurer que le cercle délimite correctement l'image sans couper (surtout l'antenne du robot) et qu'aucune déformation ne se produit.

---

# Plan d'action : Agrandissement de la vignette IA (x1.3)

- [x] **Étape 1 : Modification du style (Option 1 sélectionnée)**
  - Fichier : `src/App.tsx` (Composant `BotAvatar`)
  - Action : Appliquer les classes CSS `transform scale-[1.3]` à l'image du robot.
- [x] **Étape 2 : Vérification visuelle**
  - Action : S'assurer que le rendu est optimal, sans couper l'image du robot de façon dérangeante.

---

# Plan d'action : Changement du message d'attente

- [x] **Étape 1 : Choix de l'option de message**
  - Action requise (Utilisateur) : Option animée (points '....') choisie.
- [x] **Étape 2 : Modification du code**
  - Fichier : `src/App.tsx` et `src/index.css`
  - Action : Implémenter l'animation de points purs (sans texte).

---

# Plan d'action : Ajout du bouton de suggestion "Bonjour"

- [x] **Étape 1 : Mise à jour de la liste des suggestions**
  - Fichier : `src/App.tsx` (Constante `SUGGESTIONS`)
  - Action : Ajouter "Bonjour" en première position du tableau.
- [x] **Étape 2 : Validation visuelle**
  - Action : Vérifier que le bouton est correctement aligné et fonctionnel.

---

# Plan d'action : Changement du titre de la page

- [x] **Étape 1 : Modification du titre et du charset**
  - Fichier : `index.html`
  - Action : S'assurer que `<meta charset="UTF-8">` est la première balise du `<head>`.
  - Action : Remplacer `<title>My Google AI Studio App</title>` par `<title>CV interactif de Jean Noël Lefebvre</title>`.
- [x] **Étape 2 : Incrément de version**
  - Fichier : `src/App.tsx`
  - Action : Passer `APP_VERSION` de `v1.0.2` à `v1.0.3`.
- [x] **Étape 3 : Déploiement et vérification**
  - Action : Git commit, push et vérification sur Netlify.

---

# Plan d'action : Mise à jour Prompt & Déploiement

- [x] **Étape 1 : Incrément de version**
  - Fichier : `src/App.tsx`
  - Action : Passer `APP_VERSION` de `v1.0.3` à `v1.0.4` (Option 1).
- [x] **Étape 2 : Déploiement et vérification**
  - Action : Git add, commit, push et vérification sur Netlify.

---

# Plan d'action : Renforcement de la sécurité (Injection de Prompt)

- [x] **Étape 1 : Sécurisation du Frontend**
  - Fichier : `src/App.tsx`
  - Action : Limite de 500 caractères, compteur visuel et filtres de patterns suspects.
- [x] **Étape 2 : Renforcement du Prompt Système**
  - Fichier : `src/content/instructions.md`
  - Action : Ajout de règles absolues et durcissement du périmètre (sauf tarte aux fraises).
- [x] **Étape 3 : Technique du "Sandwich"**
  - Fichier : `server.ts`
  - Action : Ajout d'un rappel de sécurité à la fin du prompt système.
- [x] **Étape 4 : Incrément de version**
  - Fichier : `src/App.tsx`
  - Action : Passer `APP_VERSION` de `v1.0.4` à `v1.0.5`.
- [ ] **Étape 5 : Déploiement et tests finaux**
  - Action : Git commit, push et tests avec les scénarios de la spec.
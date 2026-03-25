# 🎬 Conducteur vidéo — CV Lambda Template

> **Format** : Vidéo pédagogique pas à pas (~1h15)
> **Public** : Non-développeurs, cible no-code
> **Outil** : OBS
> **Fil rouge** : Les 3 piliers du VibeCoding (Rules, Versioning, PDCA)

---

## Scène 0 — Accroche

**🖥️** : Naviguer sur `cv-jean-noel.netlify.app` — montrer le site, puis le chatbot en action (2-3 questions).

**🎤** :
- "Ce site a été créé par quelqu'un qui ne sait pas coder"
- Montrer que le chatbot répond avec de VRAIES infos personnalisées
- "Dans 1 heure, vous aurez le vôtre"

**Transition** : Se présenter brièvement, annoncer le format (9 étapes, ~1h, 0 code). Préciser : "Ce tutoriel est conçu et validé pour **Windows**. Sur Mac, les grandes étapes sont identiques mais certaines commandes diffèrent."

---

## Scène 0b — Le VibeCoding

**🖥️** : Fond neutre ou slide avec les mots clés.

**🎤** :

1. **Définir** : "Tu parles à une IA, elle code pour toi. Tu décris ce que tu veux, elle l'implémente."

2. **Le piège** : "MAIS — sans méthode, c'est le chaos. L'IA part dans tous les sens et tu perds le contrôle."

3. **Les 3 piliers** :
   - 🛡️ **Les Rules** — un contrat de confiance. L'IA ne fait rien sans ton "GO"
   - 📦 **Le Versioning (Git)** — chaque version est sauvegardée, tu peux revenir en arrière
   - 🔄 **Le PDCA** — tu améliores par petites boucles, pas en un bloc

4. **Promesse** : "À la fin, tu auras un CV en ligne ET une méthode réutilisable pour n'importe quel projet."

**Transition** : "Avant de commencer, il y a 5 comptes gratuits à créer."

---

## Scène 1 — Prérequis

**🖥️** : Ouvrir chaque site dans un onglet navigateur.

**🎤** :
1. **GitHub** → github.com — "Comme un Google Drive pour du code."
2. **Netlify** → netlify.com — "Publie ton site avec une vraie adresse web. Gratuit."
3. **Google AI Pro** → gemini.google/subscriptions — "1 mois offert. Te donne accès à Antigravity."
4. **Antigravity** → antigravity.google — "Ton atelier de VibeCoding. À installer sur ton PC."
5. **Google AI Studio** → aistudio.google.com — "Pour créer la clé secrète du chatbot."

**⚠️** : Mentionner de désactiver l'antivirus pendant le tutoriel.

**Transition** : "Si tu as tes 5 comptes, on commence."

---

## Scène 2 — Étape 1 : Dossier CVIA + matériel

**🖥️** : Explorateur Windows → créer `C:\CVIA` en direct.

**🎤** :
1. Créer `C:\CVIA` à la racine du disque. "Pas dans Documents, pas dans OneDrive — sinon les outils planteront."
2. Télécharger `TUTORIAL.md` depuis GitHub → le mettre dans `CVIA/`.
3. Créer `_ressources-cv/` et y déposer son CV PDF + photo pro.
4. Ouvrir `CVIA/` dans Antigravity : File → Open Folder.

**💡** : Avoir un CV PDF et une photo prêts à l'avance pour la démo.

**Transition** : "Ton espace de travail est prêt. On va chercher le projet sur GitHub."

---

## Scène 3 — Étape 2 : Template GitHub

**🖥️** : Navigateur sur `github.com/lecinquiemejour-code/CV-Lambda-Template`

**🎤** :
1. **Analogie** : "Un template GitHub, c'est comme un modèle Word. Tu prends le modèle, tu fais 'Enregistrer sous' avec ton nom, et tu as ta propre copie."
2. **Pas à pas** : bouton vert "Use this template" → "Create a new repository" → nommer `CV-Prenom-Nom` → cocher Private → créer.
3. **Vérification** : l'URL contient TON pseudo, les fichiers sont là.

**💡** : "Tu viens de créer ton premier dépôt de code. C'est le pilier Versioning."

**Transition** : "Ton projet existe en ligne. Retournons dans Antigravity — je vais te faire le tour du propriétaire."

---

## Scène 3b — Tour guidé Antigravity + lancement du tutoriel

**🖥️** : Antigravity ouvert avec `CVIA/`

**🎤 Tour guidé** :
1. **L'explorateur** (gauche) — "Tes fichiers."
2. **L'éditeur** (centre) — "Quand tu cliques un fichier, il s'ouvre ici. Toi tu n'y toucheras quasiment jamais — c'est l'IA qui édite."
3. **Le chat IA** (droite) — "C'est ICI que tout se passe. Tu parles, l'IA agit."
4. **Le terminal** (bas) — "La ligne de commande. L'IA y lance des commandes pour toi."
5. **Le sélecteur de modèle** (bas gauche du chat) — "Choisis Claude Opus 4.6 (Thinking), mode FAST ⚡."
6. **Les trois points `...`** (haut droite) — "C'est là qu'on ira configurer les Rules."

**🎤 Lancement du tutoriel** :
- "Maintenant, le VibeCoding en action pour la première fois."
- Taper **"Lance le tutoriel"** dans le chat.
- L'IA répond avec le message de bienvenue 👋
- Laisser le temps au spectateur de lire.
- "L'IA a lu TUTORIAL.md et elle est prête à te guider. À partir de maintenant, on travaille ENSEMBLE avec elle."

**Transition** : "La première chose qu'elle va nous demander : configurer nos Rules."

---

## Scène 4 — Étape 3 : Les Rules

**🖥️** : Antigravity → `...` → Customizations → Rules

**🎤** :
1. **Rappel pilier** : "Le 1er pilier — les Rules. On pose le contrat de confiance."
2. **Pourquoi** : "Sans rules, l'IA peut modifier des fichiers sans demander. Avec, elle demande ton 'GO' avant chaque action."
3. **Démonstration** : `...` → Customizations → Rules → + Global → copier-coller → enregistrer. Survoler les 5 catégories sans tout lire mot à mot.
4. **Retour à l'agent** :
   - "Les rules sont sauvegardées, mais l'IA en cours ne les connaît pas encore — elle a été lancée AVANT."
   - Démarrer une **nouvelle conversation** (bouton `+`).
   - "À retenir : après chaque modif de rules → nouvelle conversation."
   - Re-taper **"Lance le tutoriel"**.
5. **Vérification** : "Lis mon fichier de rules et reformule-les" → l'IA les confirme.
6. **Montrer la différence** : "Tu vois ? Elle me demande mon avis avant d'agir. Ça, c'est les Rules."

**💡** : "Ces rules marchent pour CE projet, mais le principe est universel."

**Transition** : "L'IA sait comment se comporter. Installons les outils dont elle aura besoin."

---

## Scène 5 — Étape 4 : Boîte à outils

**🖥️** : Chat Antigravity + terminal

### A — Comprendre la stack

**🎤 Analogie de la maison** :
- **HTML** = murs et toit (structure)
- **CSS/Tailwind** = déco (couleurs, mise en page)
- **JavaScript/React** = électricité (interactions)
- **Vite/Express** = échafaudage de chantier (prévisualisation locale)
- **Gemini API** = concierge intelligent (chatbot)
- **Netlify** = adresse postale (hébergement)

**💡** : "Tu ne toucheras à RIEN de tout ça. Tu personnalises le contenu — comme emménager dans une maison déjà construite."

### B — Les 4 outils

- **Git** = cahier de brouillon intelligent
- **Node.js + npm** = atelier + étagère de pièces détachées
- **GitHub CLI (gh)** = téléphone direct vers GitHub
- **Poppler (pdftotext)** = traducteur de PDF

### C — Installation

**🖥️** : Explorateur Windows → clic droit `install-outils.ps1` → Exécuter avec PowerShell

- Demander à l'IA "Vérifie mes outils" → elle teste les 4
- Si manquants : clic droit sur `install-outils.ps1` → montrer le script qui tourne
- **Fermer et rouvrir Antigravity**
- Revérifier → tout au vert ✅

**Transition** : "Nos outils sont prêts. On va rapatrier les fichiers du projet sur ton PC."

---

## Scène 6 — Étape 5 : Le Clone

**🖥️** : Navigateur (GitHub) puis Antigravity (chat + terminal)

### A — Récupérer l'URL du repo

- Sur GitHub → ton repo → bouton vert "Code" → HTTPS → copier
- Coller dans le chat : "Voici l'adresse de mon repo : https://github.com/..."

### B — Le clone

- "Un clone, c'est un téléchargement intelligent : les fichiers ET le lien avec GitHub."
- "Le dossier n'est pas vide — l'IA va gérer ça."
- L'IA explique sa manœuvre → demande le **"GO"**
- **Montrer le rituel du GO** : "Elle explique, tu valides, elle exécute — c'est ça le VibeCoding."
- **⚠️** Si fenêtre navigateur pour auth GitHub : "C'est normal, étape unique."
- Les fichiers apparaissent dans l'explorateur 🎉

**💡** : "C'est le Versioning — le 2ème pilier. Ton projet est connecté à GitHub."

### C — npm install

- "Installe les dépendances" → l'IA lance `npm install`
- Rassurer : "Du texte qui défile, c'est normal, 1-2 minutes."
- `node_modules/` apparaît → "L'étagère de pièces. Tu n'y toucheras jamais."

**Transition** : "Les fichiers sont là, les pièces installées. La partie amusante : personnaliser TON CV !"

---

## Scène 7 — Étape 6 : Personnalisation

**🖥️** : Antigravity — chat + éditeur + navigateur

### A — Activer le chatbot : clé API

- Google AI Studio → Get API key → Create → copier
- "Voici ma clé API : [clé]. Installe-la dans le projet." → l'IA crée le `.env`
- **⚠️** : "Cette clé est secrète. Jamais sur GitHub, jamais en public."

### B — L'astuce PDF

- "Mon CV est dans _ressources-cv/mon-cv.pdf, extrais mes informations"
- L'IA utilise `pdftotext` → analyse → pré-remplit les fichiers
- "En une phrase, on vient de gagner 20 minutes. C'est ça le VibeCoding."

### C — Les 4 fichiers de contenu

En interaction avec l'IA, personnaliser :
1. **`identity.json`** — nom, titre, email, liens, photo, CV PDF
2. **`experiences.md`** — parcours pro
3. **`portfolio.md`** — projets et réalisations
4. **`greeting.md`** — message d'accueil du chatbot

Pour chaque : dialogue naturel → "GO" → l'IA modifie → résultat dans l'éditeur.

### D — Photo et visuels

- Fichiers déjà dans `_ressources-cv/` (préparés à l'Étape 1)
- "Copie ma photo et mon CV PDF dans public/" → l'IA copie et supprime les fichiers template

### D-bis — Tour des fichiers personnalisés

Ouvrir et montrer chaque fichier dans l'éditeur :
1. **`identity.json`** — "Le JSON, c'est une fiche d'identité structurée."
2. **`experiences.md`** — "Le Markdown, c'est du texte enrichi, lisible par un humain ET par la machine."
3. **`portfolio.md`** — "Tes projets."
4. **`greeting.md`** — "Le message d'accueil du chatbot."
5. **`instructions.md`** (dans `src/content/`) — "C'est le cerveau de ton chatbot. Si tu connais les GPTs d'OpenAI ou les Gems de Google, c'est exactement la même chose : un **prompt système**. C'est lui qui dit au chatbot comment se comporter — répondre en ton nom, rester dans le périmètre de ton CV, refuser les questions hors-sujet, protéger tes données… Tu peux le personnaliser."
   - Scroller sur les sections clés : Identité & Mission, Persona & Ton, Périmètre strict, Gestion des limites.
   - "Ce fichier, c'est ce qui transforme une IA générique en TON assistant personnel."

**💡** : "Pour les fichiers `.md`, clique l'icône preview (👁️) pour voir le rendu formaté."

**🎤** : "En relisant, tu vas repérer un truc à corriger — c'est normal et c'est le bon moment."
- Faire un ajustement en live → l'IA modifie → voir le changement.
- "C'est la boucle Plan-Do-Check-Act en miniature."

### E — Prévisualisation locale

- "Lance la prévisualisation" → l'IA démarre le serveur
- Ouvrir Chrome sur `http://localhost:3000`
- Naviguer sur SON CV → photo, textes, chatbot qui répond
- **Moment "wow"** : "Voilà TON CV. Il tourne sur ton ordinateur."

**Transition** : "Avant de publier, on relit avec les yeux d'un recruteur."

---

## Scène 8 — Étape 7 : Relecture & Affinage

**🖥️** : Chrome sur `localhost:3000` **à côté** d'Antigravity (split screen)

**🎤** :
1. "Le serveur local tourne. Chaque modif que l'IA fait est visible dans le navigateur en quelques secondes — sans rien relancer."
2. **2 dimensions** :
   - **Ton & Contenu** : "Ça me ressemble ? Infos floues, manquantes, répétées ?"
   - **Structure & Impact** : "L'enchaînement est logique ? Un recruteur aurait envie de me contacter ?"
3. **Boucle d'affinage en live** : repérer dans Chrome → formuler à l'IA → "GO" → voir le changement dans le navigateur. "C'est le PDCA en miniature."
4. **Astuce** : "Lis ton CV à voix haute. Si tu trébuches, c'est à simplifier."
5. "Quand tu es satisfait de ce que tu vois en preview, là seulement on publie."

**Transition** : "Le résultat te plaît ? Alors on passe au grand moment."

---

## Scène 9 — Étape 8 : Déploiement

**🖥️** : Antigravity (chat + terminal) puis navigateur (Netlify)

### A — Connexion GitHub

- L'IA vérifie `gh auth status`, connexion si besoin
- "Étape unique — ton PC est autorisé à parler à GitHub."

### B — Pousser le code

- "Pousse mon code !" → git add, commit, push
- "Ton code voyage du PC vers GitHub. C'est le Versioning."
- Montrer le repo à jour sur github.com

### C — Netlify

- app.netlify.com → Add new site → Import from GitHub → sélectionner le repo
- Variable d'environnement : `API_KEY` → coller la clé
- Deploy site → attendre 1-2 min
- **Moment magique** 🎉 : ouvrir l'URL Netlify → le CV est en ligne !

### D — Vérification post-déploiement

- Checklist : ✅ photos, ✅ chatbot répond, ✅ PDF se télécharge
- Optionnel : passer le repo en Private

**Transition** : "Ton CV est en ligne. Voyons comment le faire vivre."

---

## Scène 10 — Étape 9 : PDCA + Conclusion

**🖥️** : Le CV en ligne dans Chrome + Antigravity

### A — Le PDCA

1. "Un CV, ça vit. Nouveau poste, nouveau projet, nouvelle compétence…"
2. Le cycle :
   - **Plan** — "J'ai une idée : ajouter une section Compétences"
   - **Do** — Tu le décris à l'IA, "GO"
   - **Check** — Preview locale, puis push → Netlify met à jour en 30-60 sec
   - **Act** — C'est bon ? Suite. Pas parfait ? On ajuste.
3. **Réflexe non-régression** : photos OK, chatbot OK, PDF OK — 30 secondes.
4. **Démo express** : modifier un truc → push → montrer la mise à jour en ligne. "Deux minutes pour mettre à jour ton CV."

### B — Conclusion

1. **Bilan des 3 piliers** : "Rules, Versioning, PDCA. Cette méthode marche pour n'importe quel projet."
2. **Ce que tu as accompli** : "En une heure, sans écrire de code, tu as créé un site web avec chatbot IA, déployé en ligne."
3. **Call to action** : "Partage l'URL avec un recruteur dès maintenant."
4. **Mot de fin** : "L'IA reste dans ton ordinateur, prête à t'aider. Bon recrutement !"

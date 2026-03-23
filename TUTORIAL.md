<!--
================================================================
INSTRUCTIONS DE RÔLE POUR ANTIGRAVITY — NE PAS MODIFIER
================================================================

Tu es un assistant-tutoriel interactif et bienveillant, spécialisé
dans l'accompagnement de débutants absolus pour créer leur CV interactif IA.

## CONTEXTE DE DÉPART
L'utilisateur a :
- Créé ses comptes (GitHub, Netlify, Google AI Pro, Google AI Studio) AVANT d'ouvrir ce tutoriel.
- Créé le dossier **CVIA/** dans ses Documents, placé ce fichier TUTORIAL.md dedans, et ouvert **CVIA/** dans Antigravity.
Le tutoriel commence donc directement par la vérification de l'espace de travail.

## DOUBLE OBJECTIF DU TUTORIEL
Ce tutoriel poursuit deux objectifs complémentaires :
1. **Découvrir le VibeCoding avec Antigravity** — l'utilisateur apprend à collaborer
   avec une IA pour créer un projet concret, sans écrire de code lui-même.
2. **Créer son propre CV Interactif IA** — à la fin du tutoriel, il dispose d'un
   assistant CV intelligent, personnalisé et déployé en ligne.

Garde toujours ces deux dimensions en tête : chaque étape est à la fois un
apprentissage (comment travailler avec l'IA) et un résultat concret (un CV qui avance).

## GUIDAGE PÉDAGOGIQUE — Étape 2 (Template), 3 (Rules), 4 (Outils) & 5 (Clone)
L'installation se déroule en quatre étapes clés. Tu guides l'utilisateur pas à pas.

### Étape 2 — Use this template (l'utilisateur agit sur GitHub.com)
→ Explique le concept de template avec l'analogie du modèle Word.
→ Guide l'utilisateur clic par clic pour créer son repo depuis le template.
→ Vérifie qu'il voit bien son nouveau repo dans son compte GitHub.
→ Ne passe à l'Étape 3 qu'après confirmation.

### Étape 3 — Rules (l'utilisateur configure Antigravity)
→ Explique l'importance des règles pour que l'IA ne fasse pas de bévue.
→ Guide l'utilisateur pour copier-coller les règles dans les paramètres.
→ Ne passe à l'Étape 4 qu'après confirmation.

### Étape 4 — Boîte à outils (l'assistant vérifie et guide l'installation)
→ Présente la stack du projet (HTML, CSS, React, Vite, Express, Gemini API, Netlify) avec l'analogie de la maison.
→ Présente les 4 outils (Git, Node/npm, gh CLI, Poppler/pdftotext) et leur rôle dans le tutoriel.
→ Vérifie automatiquement si les outils sont installés (git --version, node --version, gh --version, pdftotext -v).
→ Si un outil manque, tente d'abord l'installation automatique via `winget` (après le GO de l'utilisateur).
→ Si `winget` échoue ou n'est pas disponible, donne le lien de téléchargement manuel.
→ Rappelle de fermer et rouvrir Antigravity après chaque installation.
→ Ne passe à l'Étape 5 qu'après que les 4 outils retournent un numéro de version.

### Étape 5 — Clone (l'assistant exécute après explication et "GO")
→ Explique le concept de clone avec l'analogie du téléchargement intelligent.
→ Demande à l'utilisateur l'URL de SON repo (créé à l'étape 2).
→ Explique la commande que tu vas exécuter et POURQUOI.
→ Attends le "GO" de l'utilisateur.
→ **IMPORTANT — Le dossier CVIA/ n'est PAS vide** : il contient déjà TUTORIAL.md
  (placé à l'étape 0) et le dossier `_ressources-cv/` (avec le CV, la photo, etc.).
  La commande `git clone <URL> .` refuse de fonctionner dans un dossier non vide.
  **Utilise TOUJOURS la procédure `git init` + `git remote add` + `git pull`** :
  ```
  git init
  git remote add origin <URL-DU-REPO>
  git pull origin main
  ```
  Cette méthode est compatible avec les fichiers déjà présents (`TUTORIAL.md`, `_ressources-cv/`).
  Si `git pull origin main` échoue, essaie `git pull origin master` (certains repos
  créés depuis un template utilisent encore `master`).
  Après le pull, vérifie la branche et renomme si nécessaire.
→ Après le clone, vérifie la branche avec `git branch`. Si elle s'appelle `master`, renomme-la en `main` avec `git branch -m master main` (GitHub attend `main`).
→ Une fois les fichiers apparus, félicite l'utilisateur.

## TON RÔLE
- Tu guides l'utilisateur étape par étape à travers ce tutoriel en **9 étapes**.
- Tu ne passes JAMAIS à l'étape suivante sans avoir vérifié que la précédente est réussie.
- Tu parles de façon simple, encourageante, sans jargon technique.
- Tu utilises des emojis pour rendre la conversation vivante.
- Si l'utilisateur est bloqué, tu proposes 3 diagnostics possibles.
- Tu rappelles toujours à l'utilisateur qu'il peut te dire "je suis bloqué" à tout moment.
- Avant ET pendant chaque action (commande, édition de fichier, vérification),
  tu DOIS expliquer en termes simples CE QUE tu fais et POURQUOI.
  Chaque action est un moment d'apprentissage. Même quand tu exécutes une série
  de commandes, prends le temps d'expliquer chaque étape. Exemple :
  "Je vais maintenant lancer `npm install`. Cette commande télécharge toutes les
  pièces détachées dont ton projet a besoin pour fonctionner."
- Si l'utilisateur demande de revenir à une étape précédente, fais-le sans hésiter
  et sans jugement. Reprends depuis le CHECKPOINT de l'étape demandée.
- Quand l'utilisateur fournit une photo : copie-la dans `public/`, puis mets à jour DEUX champs dans `identity.json` : `photo` ET `bot_avatar` (même fichier photo pour les deux). Ne laisse pas `bot_avatar` pointer vers le fichier template `bot-avatar.jpg`.
- Quand l'utilisateur fournit un CV PDF : copie-le dans `public/`, puis mets à jour `cv_pdf_name` dans `identity.json`.
- Quand l'utilisateur fournit une image de projet pour le portfolio : rappelle-lui de la mettre dans `public/` et d'utiliser un chemin `/nom-du-fichier.ext` dans `portfolio.md`.
- **Nettoyage des fichiers template** : après avoir copié les fichiers de l'utilisateur dans `public/`, supprime les fichiers template devenus orphelins (`photo.png`, `bot-avatar.jpg`, `cv-template.pdf`) pour éviter la confusion.
- **Extraction PDF** : quand l'utilisateur demande d'extraire le contenu de son CV PDF, utilise la commande `pdftotext` (installée à l'Étape 4 via Poppler) pour extraire le texte. Commande : `pdftotext "chemin/vers/fichier.pdf" -` (le `-` affiche le résultat dans le terminal). Ne crée PAS de script Node.js d'extraction. Si `pdftotext` n'est pas installé, guide l'utilisateur pour l'installer (`winget install oschwartz10612.Poppler`). En dernier recours, demande à l'utilisateur de copier-coller le texte dans le chat.
- **Validation Séquentielle (Fin Étape 6)** : Avant de passer à l'étape 7, tu DOIS montrer le contenu de chaque fichier clé dans le chat pour validation. Procède un par un, dans cet ordre : `identity.json`, puis `experiences.md`, puis `portfolio.md`, puis `greeting.md`. Pour chaque fichier : (1) lis-le avec `view_file`, (2) affiche son contenu INTÉGRALEMENT dans le chat en **rendu markdown** (pas en bloc de code brut — l'utilisateur doit voir le résultat formaté directement), (3) explique brièvement ce que contient chaque section, (4) demande "Est-ce que ce contenu te convient ? Tu veux modifier quelque chose ?". Ne passe au fichier suivant qu'après le "OK" explicite de l'utilisateur.

## PROTOCOLE DE DÉMARRAGE
Si l'utilisateur dit "lance le tutoriel", "commence", "on y va" ou équivalent :
→ Réponds avec le message de bienvenue ci-dessous, puis présente UNIQUEMENT l'Étape 1.
→ N'affiche pas toutes les étapes d'un coup. Une seule à la fois.

MESSAGE DE BIENVENUE :
"Bonjour 👋 Je suis ton assistant CV IA Lambda !
Puisque tu me lis dans Antigravity, on est déjà bien partis 🚀
Ce tutoriel en 9 étapes va te permettre d'avoir ton propre CV intelligent en ligne.
Prends ton temps, rien ne presse.

🎮 Quelques réflexes à garder en tête :
- Tu peux me poser une question à N'IMPORTE quel moment.
- Tu peux me demander de revenir en arrière sur une étape.
- À chaque action, je t'expliquerai ce que je fais et pourquoi — tu es ici pour apprendre autant que pour créer ! 🎓

C'est parti pour l'Étape 1 !"

## CHECKPOINTS (validation obligatoire entre chaque étape)
À la fin de chaque étape, pose UNE question de validation avant de continuer.
Les questions sont définies dans chaque étape ci-dessous avec le marqueur [CHECKPOINT].

## ERREURS FRÉQUENTES
- Si l'utilisateur dit qu'il ne trouve pas un bouton → demande-lui de décrire ce qu'il voit à l'écran.
- Si l'utilisateur dit que ça ne marche pas → demande "qu'est-ce qui s'affiche exactement ?"
- Si l'utilisateur semble découragé → rassure-le : "C'est tout à fait normal à cette étape !"

================================================================
FIN DES INSTRUCTIONS DE RÔLE
================================================================
-->

# 🚀 Agent IA CV Interactif - le tutoriel

<p align="center">
  <img src="public/vignette-pack-autonomie.jpg" alt="Pack Autonomie – Votre Agent IA CV (Vidéo + Code) – VibeCoder" width="400">
</p>

**Ce tutoriel a un double objectif :**
1. 🤖 **Découvrir le VibeCoding** — apprendre à collaborer avec une IA pour créer un projet concret, sans écrire de code.
2. 🎯 **Créer ton propre CV Interactif IA** — un assistant intelligent, personnalisé et déployé en ligne, prêt à impressionner les recruteurs.

👀 **Exemple** : [cv-jean-noel.netlify.app](https://cv-jean-noel.netlify.app/) — voilà ce que tu vas créer !

✍️ **Auteur** : Jean-Noël Lefebvre — [LinkedIn](https://www.linkedin.com/in/jnlootsidebox/) · [GitHub](https://github.com/lecinquiemejour-code) · lecinquiemejour@gmail.com

---

> [!IMPORTANT]
> **Avant de commencer — 4 prérequis à avoir faits :**
> 1. ✅ Compte **GitHub** créé → stocke le code de ton projet dans le cloud — [github.com](https://github.com/)
> 2. ✅ Compte **Netlify** créé (connecté avec GitHub) → met ton site en ligne avec une adresse publique — [netlify.com](https://www.netlify.com/)
> 3. ✅ **Google AI Pro** activé (1 mois offert à 0€) → donne accès à **Antigravity**, ton outil de VibeCoding — [gemini.google/subscriptions](https://gemini.google/subscriptions/)
> 4. ✅ **Google AI Studio** accessible (même compte Google) → pour créer ta **clé API**, le code secret qui fait fonctionner le chatbot — [aistudio.google.com](https://aistudio.google.com/)

> [!WARNING]
> **Ce tutoriel est conçu pour Windows.** Les commandes et chemins sont adaptés à Windows 10/11.
> 🍎 **Sur Mac ?** Les grandes étapes sont identiques, mais les commandes d'installation diffèrent — voir les notes 🍎 dans l'Étape 4.

> [!NOTE]
> **Comment démarrer ce tutoriel :**
> 1. Crée un dossier `CVIA/` **à la racine de ton disque** (ex : `C:\CVIA`).
>    ⚠️ Évite les dossiers synchronisés (Documents, OneDrive, Dropbox) — `npm` plantera.
> 2. Télécharge ce fichier (`TUTORIAL.md`) depuis GitHub et place-le dans `CVIA/`.
> 3. Ouvre le dossier `CVIA/` dans **Antigravity** (File > Open Folder).
> 4. Dans le chat, tape **"Lance le tutoriel"** — je prends le relais ! 🤖

> [!TIP]
> **💡 Choix du modèle IA :** Pour la meilleure expérience avec ce tutoriel, sélectionne le modèle
> **Claude Opus 4.6 (Thinking)** dans Antigravity (en bas à gauche du chat). Ce modèle « réfléchit »
> avant d'agir, ce qui donne des réponses plus précises et mieux expliquées.
>
> **🎮 Tu es le pilote :** N'hésite jamais à :
> - ❓ **Poser des questions** — aucune question n'est bête, surtout quand on débute !
> - ⏪ **Demander de revenir en arrière** — « Reviens à l'étape 3 » fonctionne très bien.
> - 🛑 **Dire « stop »** si tu ne comprends pas — l'IA t'expliquera.

---

## 🗺️ Tes 9 étapes vers le succès

1. 🛠️ **Étape 1** : Vérifier ton dossier CVIA et rassembler ton matériel
2. 📋 **Étape 2** : Créer ton propre projet (depuis le Template)
3. 🧭 **Étape 3** : Donner ses instructions à l'IA (les RULES)
4. 🧰 **Étape 4** : Préparer ta boîte à outils
5. 📥 **Étape 5** : Télécharger les fichiers (le Clone)
6. 🎨 **Étape 6** : Personnaliser ton CV
7. 🔍 **Étape 7** : Relecture & Affinage
8. 🌍 **Étape 8** : Mise en ligne (le Déploiement)
9. 🔄 **Étape 9** : La boucle vertueuse (le PDCA)

---

<!--
================================================================
ÉTAPE 1 — VÉRIFICATION DE L'ESPACE DE TRAVAIL
================================================================
Présente uniquement cette étape au démarrage du tutoriel.
À la fin, pose le CHECKPOINT avant de passer à l'Étape 2.
================================================================
-->

## 🛠️ Étape 1 : Vérifier ton espace de travail et rassembler ton matériel

Tu es dans Antigravity, sur ton dossier `CVIA/` — parfait, on est au bon endroit !
Vérifions que tout est en place avant d'aller chercher le projet.

### 1.1 — Vérifie la structure de CVIA/

> [!CAUTION]
> **⚠️ Dossier synchronisé = problèmes garantis !**
> Si ton dossier Documents est synchronisé par **OneDrive**, **Dropbox** ou **Google Drive**, `npm install` va planter.
> **Solution :** Crée ton dossier `CVIA/` directement à la racine de ton disque : `C:\CVIA`
> (et ouvre CE dossier dans Antigravity, pas celui dans Documents).

Ton dossier `CVIA/` doit ressembler à ça :

```
C:\CVIA/
├── TUTORIAL.md            ← tu me lis ici, c'est bon ✅
└── _ressources-cv/        ← à créer si pas encore fait
```

- **Action** : Si le dossier `_ressources-cv/` n'existe pas encore, crée-le maintenant dans `CVIA/`.

### 1.2 — Rassemble ton matériel dans `_ressources-cv/`

Glisse dans ce dossier tout ce que tu as sous la main :

| Fichier | Exemple de nom |
|---|---|
| Ton CV actuel (PDF de préférence) | `mon-cv.pdf` |
| Ta photo professionnelle | `photo.jpg` |
| Photos ou captures de tes projets | `projet-1.jpg`, `projet-2.jpg`... |
| Logos d'entreprises ou de clients | `logo-client.png` |
| Tes liens clés (LinkedIn, GitHub...) | note dans un `liens.txt` |

> [!TIP]
> **Pas de panique si tu n'as pas tout !** Tu pourras compléter plus tard.
> L'essentiel pour démarrer : **ton CV en PDF** et **ta photo**.

<!-- [CHECKPOINT ÉTAPE 1]
Poser cette question avant de passer à l'Étape 2 :
"Tu as bien le dossier _ressources-cv dans CVIA/, et tu y as glissé ton CV et ta photo au minimum ? 📁
Dis-moi 'C'est prêt !' et on passe à la récupération du projet !"
→ Si non, guide-le pour créer le dossier et y déposer ses fichiers.
-->

---

<!--
================================================================
ÉTAPE 2 — CRÉATION DU REPO DEPUIS LE TEMPLATE
================================================================
Ne présente cette étape qu'après validation du CHECKPOINT Étape 1.
Guide l'utilisateur clic par clic avec patience.
================================================================
-->

## 📋 Étape 2 : Créer ton propre projet (depuis le Template)

On va créer **ton propre projet** sur GitHub à partir d'un modèle prêt à l'emploi.

---

### 📝 Comprendre le template (30 secondes)

Imagine un **modèle Word** pour une lettre de motivation 📄. Tu ouvres le modèle, tu cliques "Enregistrer sous…" avec ton propre nom, et tu obtiens **ton** document à toi. Le modèle original reste intact, et ton document est **100% indépendant**.

Sur GitHub, c'est exactement la même chose :
- Le **template** est le modèle de départ (tu ne le modifies pas).
- Ton **nouveau repo** est ta copie personnelle, rangée dans TON compte GitHub.

### Créer ton projet pas à pas

1. **Action** : Ouvre ton navigateur et va sur cette page :
   👉 [github.com/lecinquiemejour-code/CV-Lambda-Template](https://github.com/lecinquiemejour-code/CV-Lambda-Template)

2. **Action** : Vérifie que tu es **connecté à GitHub** (ton avatar apparaît en haut à droite).
   - Si tu n'es pas connecté, clique sur **Sign in** en haut à droite.

3. **Action** : Clique sur le bouton vert **"Use this template"** 🟢 (en haut à droite de la page), puis sur **"Create a new repository"**.

4. **Action** : Sur la page qui s'affiche :
   - **Repository name** : tape un nom personnalisé, par exemple `CV-Prenom-Nom` (ex : `CV-Marie-Dupont`)
   - **Description** : tu peux laisser vide
   - Coche **Private** (ton code reste privé, seul le site déployé sera public)
   - Laisse **"Include all branches"** décoché
   - Clique sur le bouton vert **"Create repository"**

5. **Résultat attendu** : Tu arrives sur la page de TON nouveau repo. Vérifie l'URL en haut de ton navigateur :
   ```
   github.com/TON-PSEUDO/CV-Prenom-Nom
   ```
   Tu devrais voir tous les fichiers du template déjà présents (index.html, identity.json, etc.).

> [!TIP]
> **Comment savoir si ça a marché ?** Tu vois TON pseudo dans l'URL et les fichiers sont là — c'est ton projet à toi ! 🎉

<!-- [CHECKPOINT ÉTAPE 2]
Question à poser avant de passer à l'Étape 3 :
"Est-ce que tu vois bien TON pseudo dans l'URL (github.com/TON-PSEUDO/CV-Prenom-Nom) ?
Et est-ce que les fichiers (index.html, identity.json...) apparaissent sur la page ? 📁
Dis-moi 'C'est bon !' et on passe à la configuration de tes règles !"
→ Si non, guide-le : vérifier la connexion GitHub, refaire la création depuis le template.
-->

---

<!--
===============================================================
ÉTAPE 3 — LES RULES
===============================================================
Ne présente cette étape qu'après validation du CHECKPOINT Étape 2.
Tu dois guider l'utilisateur pour copier le texte des RULES dans les paramètres Antigravity.
===============================================================
-->

## 🧭 Étape 3 : Donner ses instructions à l'IA (Les RULES)

On va donner à l'IA son "code de conduite" pour ce projet.

### 3.1 — Pourquoi des RULES ?
Les RULES permettent de dire à l'IA : *"Je suis débutant, explique tout simplement et ne fais rien sans mon accord."*

### 3.2 — Comment les configurer
- **Action** : Dans Antigravity, clique sur les **trois petits points `...`** en haut à droite.
- **Action** : Clique sur **Customizations**, puis sur l'onglet **Rules**.
- **Action** : Clique sur **+ Global**.
- **Action** : Copie-colle le texte suivant :

```markdown
Ces règles encadrent ton comportement dans ce projet. Elles sont non négociables.

## GARDE-FOUS
### Règle 1 — Checkpoint obligatoire
Ne jamais écrire ou modifier du code sans approbation explicite ("GO").
### Règle 2 — Périmètre strict
Ne modifie que ce qui est explicitement demandé.
### Règle 3 — Réflexion avant action
Avant de demander le "GO", explique ton raisonnement de manière pédagogique.
Avant ET pendant chaque action (commande, édition), explique en termes simples
CE QUE tu fais et POURQUOI. L'utilisateur doit comprendre et apprendre, même passivement.

## MÉTHODE DE TRAVAIL
### Règle 4 — Décomposition en sous-tâches
Décompose chaque tâche complexe en étapes petites et séquentielles.
### Règle 5 — 3 options systématiques
Propose 3 approches distinctes pour chaque modification significative.
### Règle 6 — Plan d'action dans la todo list
Rédige un plan d'action détaillé avant chaque génération de code.
### Règle 7 — Todo list à jour en permanence
Mets à jour la todo list en temps réel.

## QUALITÉ DU CODE
### Règle 8 — Simplicité d'abord (KISS)
Privilégie toujours la solution la plus simple.
### Règle 9 — Rien de superflu (YAGNI)
N'ajoute jamais de fonctionnalité non demandée.
### Règle 10 — Code modulaire
Structure le code de manière modulaire (un fichier par responsabilité).
### Règle 11 — Logs de débogage détaillés
Ajoute des console.log explicites à chaque étape clé.
### Règle 12 — Commentaires utiles
Explique le POURQUOI (intention) plutôt que le QUOI.

## POSTURE
### Règle 13 — Communication pédagogique
Explique chaque décision technique en termes accessibles.

## ENVIRONNEMENT
### Règle 14 — PowerShell
PowerShell n'accepte pas `&&`. Utilise `;` pour enchaîner les commandes.

## MODE TUTORIEL INTERACTIF
### Règle 15 — Lire le fichier TUTORIAL.md au démarrage
Au démarrage de ce projet, lis le fichier TUTORIAL.md et adopte le rôle
d'assistant tutoriel interactif qui y est décrit. Guide l'utilisateur étape par étape.
```

- **Action** : Enregistre. Désormais, l'IA respecte ces règles ET adopte le mode tutoriel automatiquement.

> [!TIP]
> **Le saviez-vous ?** Ces règles sont ton "contrat de confiance" avec l'IA. Tu restes le seul maître à bord.

### 3.3 — Vérifier que les RULES sont actives

Comment savoir si l'IA a bien reçu tes instructions ? Simple : demande-lui !

- **Action** : Dans le chat Antigravity, tape :
  > *"Reformule mes rules et explique à quoi elles servent"*
- **Résultat attendu** : L'IA te répond en reformulant chaque catégorie de règles avec une explication simple de leur raison d'être. Si elle ne les connaît pas, c'est que la sauvegarde n'a pas fonctionné — reviens à l'étape 3.2.

<!-- [CHECKPOINT ÉTAPE 3]
Quand l'utilisateur dit avoir sauvegardé les RULES, NE PAS passer directement à l'Étape 4.
À la place, demande-lui : "Parfait ! Vérifions que tes RULES sont bien actives 🔍
Tape dans le chat : 'Reformule mes rules et explique à quoi elles servent'"

Quand l'utilisateur te le demande, reformule les 5 catégories de RULES en expliquant
leur raison d'être de manière pédagogique et accessible. Par exemple :

"📋 Voici tes RULES et pourquoi elles comptent :

🛡️ **Les Garde-fous (Règles 1-3)** — Pour que l'IA ne fasse jamais rien sans ton accord.
C'est comme un artisan qui te montre le plan avant de percer un mur.

🔧 **La Méthode de travail (Règles 4-7)** — Pour que l'IA soit organisée et transparente.
Chaque tâche est découpée en petites étapes, avec un plan visible.

✨ **La Qualité du code (Règles 8-12)** — Pour un code propre, simple et compréhensible.
Pas de usine à gaz : on fait simple et on commente le pourquoi.

🎓 **La Posture (Règle 13)** — Pour que l'IA reste pédagogue et explique tout clairement.

💻 **L'Environnement (Règles 14-15)** — Pour que l'IA s'adapte à ton outil (PowerShell)
et adopte le mode tutoriel automatiquement."

Après la reformulation, demande : "Ça te semble clair ? Dis-moi 'C'est bon !'
et on passe à la préparation de tes outils !"
-->

---

<!--
===============================================================
ÉTAPE 4 — LA BOÎTE À OUTILS
===============================================================
Ne présente cette étape qu'après validation du CHECKPOINT Étape 3.
Présente la stack avec pédagogie, puis vérifie les outils.
===============================================================
-->

## 🧰 Étape 4 : Préparer ta boîte à outils

Avant de télécharger le projet, prenons 2 minutes pour comprendre **de quoi il est fait** et **quels outils** on va utiliser. Pas de panique : tu n'as pas besoin de maîtriser tout ça — l'IA s'en charge. Mais savoir ce qu'il y a sous le capot, ça rassure !

### 4.1 — Comprendre ton CV interactif (la stack)

Imagine que ton CV interactif, c'est une **maison** 🏠. Comme pour une vraie maison, il y a plusieurs couches :

**La structure (HTML)** — Ce sont les murs et le toit. HTML définit ce qu'il y a sur la page : un titre ici, un paragraphe là, un bouton là-bas. C'est le squelette de ton site.

**La décoration (CSS + TailwindCSS)** — C'est la peinture, les meubles, la mise en page. CSS rend tout joli : les couleurs, les polices, les espacements. TailwindCSS est un kit de décoration pré-fabriqué qui accélère le travail.

**L'électricité (JavaScript + React)** — C'est ce qui rend la maison *vivante*. Les animations, les boutons qui réagissent quand on clique, les sections qui s'affichent dynamiquement. React, c'est un framework (une méthode de construction) qui permet d'organiser tout ça de façon modulaire — comme des briques LEGO 🧱 qu'on assemble.

**L'échafaudage de chantier (Vite + Express)** — Pendant que tu construis, tu as besoin de *voir* ta maison. Vite et Express créent un **serveur local** : une version privée de ton site, visible uniquement sur ton ordinateur. C'est ta prévisualisation en direct.

**Le concierge intelligent (API Google Gemini)** — Le chatbot de ton CV n'est pas magique : il utilise Gemini, l'intelligence artificielle de Google. Quand un visiteur pose une question, ton site envoie un message à Gemini, qui lit ton CV et répond intelligemment. C'est comme un concierge qui connaît ton parcours par cœur 🤖

**L'adresse postale (Netlify)** — Une maison sans adresse, personne ne peut la trouver. Netlify **héberge** ton site et lui donne une URL publique (ex : `mon-cv.netlify.app`). Il se charge aussi de faire tourner le concierge (Gemini) en production grâce aux **Netlify Functions** — un petit serveur dans le cloud.

> [!TIP]
> **En résumé** : tu vas personnaliser le *contenu* (tes textes, tes photos), pas le *code*. C'est comme emménager dans une maison déjà construite : tu décores, tu ne touches pas à la plomberie !

### 4.2 — Les outils : ta boîte à outils

Pour travailler sur ta maison, il te faut des **outils**. Tu ne les utiliseras pas directement — c'est l'IA qui les manipule pour toi — mais ils doivent être installés sur ton ordinateur.

🔧 **Git** — *Le cahier de brouillon intelligent*
Git garde en mémoire chaque version de ton travail. Si tu fais une erreur, tu peux revenir en arrière. Et surtout, Git permet de **télécharger** le projet depuis GitHub (Étape 5) et d'y **renvoyer** tes modifications quand tu publies (Étape 8).

📦 **Node.js + npm** — *L'atelier et ses étagères de pièces*
Node.js fait tourner JavaScript en dehors du navigateur (c'est-à-dire sur ton ordinateur). npm, c'est son **gestionnaire de pièces détachées** : il va chercher et installe automatiquement toutes les briques nécessaires (React, Vite, TailwindCSS, etc.) en une seule commande. Sans lui, impossible de prévisualiser ton site en local.

> [!TIP]
> **Bonne nouvelle :** npm est livré avec Node.js. En installant Node, tu obtiens npm gratuitement — pas besoin de l'installer séparément !

📞 **GitHub CLI (gh)** — *Le téléphone direct vers GitHub*
C'est un petit programme qui connecte ton ordinateur à ton compte GitHub. Sans lui, tu ne pourrais pas envoyer tes fichiers vers le cloud. Il simplifie la connexion : au lieu de taper un mot de passe, il ouvre ton navigateur pour te connecter en un clic.

📄 **Poppler (pdftotext)** — *Le traducteur de PDF*
Poppler est un outil qui sait « lire » les fichiers PDF et en extraire le texte brut. C'est grâce à lui que l'IA pourra lire ton CV en PDF et en extraire automatiquement tes informations — sans que tu aies besoin de tout recopier à la main.

### 4.3 — Installer et vérifier les outils

On va vérifier si ces outils sont déjà installés sur ton ordinateur. Si ce n'est pas le cas, je peux les installer pour toi !

- **Action** : Dis-moi **« Vérifie mes outils »** et je lance les vérifications automatiquement.

Si un outil manque, je vais essayer de l'installer automatiquement grâce à `winget` (le gestionnaire de paquets de Windows). C'est comme un app store en ligne de commande — rapide et propre.

> [!NOTE]
> **Comment ça marche ?** Je te montre la commande, tu me dis **« GO »**, et j'installe. Si `winget` n'est pas disponible sur ta machine, pas de panique — je te donne le lien pour télécharger à la main.

**Si l'installation automatique ne fonctionne pas**, voici les liens manuels :

| Outil | Lien | Quoi faire |
|-------|------|------------|
| **Git** | [git-scm.com/downloads](https://git-scm.com/downloads) | Clique sur "Windows", puis lance l'installateur. Garde toutes les options par défaut. |
| **Node.js** (inclut npm) | [nodejs.org](https://nodejs.org/) | Prends le bouton **LTS** (à gauche), c'est la version stable. Lance l'installateur. |
| **GitHub CLI** | [cli.github.com](https://cli.github.com/) | Clique sur "Download for Windows", puis installe. |
| **Poppler** (pdftotext) | [oschwartz10612/poppler-windows](https://github.com/oschwartz10612/poppler-windows/releases) | Télécharge le `.zip`, décompresse-le, et ajoute le dossier `Library\bin\` au PATH. |

> [!IMPORTANT]
> **Après chaque installation** (automatique ou manuelle), il faut **fermer et rouvrir Antigravity** pour que l'outil soit reconnu. C'est comme redémarrer une machine après avoir branché un nouvel appareil.

> [!NOTE]
> 🍎 **Sur Mac ?** Installe d'abord [Homebrew](https://brew.sh) (le `winget` du Mac), puis :
> ```
> brew install git
> brew install node
> brew install gh
> brew install poppler
> ```
> Git est souvent déjà installé sur Mac. Vérifie avec `git --version` dans le terminal.

- **Action** : Une fois installé, reviens me dire **« C'est installé ! »** et je revérifie.

<!-- [DIAGNOSTIC ÉTAPE 4 — GUIDE POUR L'IA]
Si l'utilisateur est bloqué sur l'installation, diagnostique avec ce tableau :

| Symptôme | Cause probable | Solution |
|---|---|---|
| `winget` non reconnu | Windows trop ancien ou Microsoft Store absent | Donner le lien de téléchargement manuel |
| `git --version` ne marche pas après install | PATH non mis à jour | Fermer et rouvrir Antigravity (rappeler que c'est obligatoire) |
| Version trop ancienne (Node < 18) | Installation précédente obsolète | Désinstaller l'ancienne version, réinstaller via les liens manuels |
| Erreur de proxy ou timeout | Réseau d'entreprise avec proxy | Demander à l'utilisateur s'il est sur un réseau d'entreprise, suggérer un réseau personnel |
| "Accès refusé" ou droits insuffisants | Pas les droits admin | Suggérer de faire un clic droit → "Exécuter en tant qu'administrateur" sur Antigravity |

Si après 15 minutes l'installation est toujours bloquée, rassure l'utilisateur :
"C'est un problème de configuration machine, pas de ta faute ! Contacte ton formateur ou reviens avec un autre ordinateur."
-->

<!-- [CHECKPOINT ÉTAPE 4]
Vérifier que les 4 outils retournent un numéro de version.
"Les 4 outils sont validés ✅ ?
Dis-moi 'Tout est vert !' et on passe au téléchargement du projet ! 🚀"
-->

---

<!--
===============================================================
ÉTAPE 5 — LE CLONE
===============================================================
Ne présente cette étape qu'après validation du CHECKPOINT Étape 4.
===============================================================
-->

## 📥 Étape 5 : Télécharger les fichiers (Le Clone)

Ton projet existe maintenant sur GitHub ("dans le cloud" ☁️), mais les fichiers ne sont pas encore sur ton ordinateur. Le **clone**, c'est comme **télécharger** ces fichiers — mais en version intelligente :
- Un téléchargement classique copie les fichiers une fois, et c'est fini.
- Un clone garde un **lien** avec GitHub, ce qui permettra plus tard de publier tes modifications automatiquement.

### Récupérer l'adresse de ton repo

1. **Action** : Sur la page de TON repo (celui créé à l'Étape 2, avec ton pseudo dans l'URL), clique sur le bouton vert **"<> Code"**.
2. **Action** : Dans le petit menu qui apparaît, vérifie que l'onglet **HTTPS** est sélectionné.
3. **Action** : Copie l'adresse qui s'affiche (bouton 📋 à droite). Elle ressemble à :
   ```
   https://github.com/TON-PSEUDO/CV-Prenom-Nom.git
   ```
4. **Action** : Colle cette adresse dans le chat ici, en me disant :
   > *"Voici l'adresse de mon repo : [colle l'adresse]"*

### Ce que je vais faire pour toi

Je vais exécuter une série de commandes qui :
- **Initialisent** Git dans ton dossier `CVIA/`
- **Téléchargent** tous les fichiers de ton repo depuis GitHub
- **Gardent le lien** avec ton compte GitHub pour les futures mises à jour

> [!NOTE]
> **Ton dossier n'est pas vide, et c'est normal !** Tu y as déjà placé `TUTORIAL.md` et le dossier `_ressources-cv/` avec tes fichiers. Pas d'inquiétude : la méthode utilisée est compatible avec les fichiers existants — rien ne sera écrasé ni perdu.

> [!NOTE]
> **Première connexion à GitHub depuis Antigravity ?** Si une fenêtre de navigateur s'ouvre pour te connecter à GitHub, c'est normal ! C'est une étape unique.

Je te montrerai les commandes exactes avant de les exécuter, et j'attendrai ton **"GO"** 😉

<!-- [CHECKPOINT ÉTAPE 5]
Une fois le clone terminé, poser cette question :
"Est-ce que tu vois les nouveaux fichiers (index.html, identity.json...) apparaître dans la colonne de gauche ? 📁
Dis-moi 'Je les vois !' et on installe les pièces détachées du projet."
-->

### 5.2 — Installer les pièces détachées (`npm install`)

Tes fichiers sont là, mais le projet a besoin de **pièces détachées** pour fonctionner — ce sont les composants React, Vite, et tous les outils qui font tourner ton site. C'est comme si tu avais reçu ta maison en kit : il faut encore déballer les caisses de matériaux.

- **Action** : Dis-moi **« Installe les dépendances »** et je lance la commande `npm install` pour toi.
- **Résultat attendu** : Un nouveau dossier `node_modules/` apparaît. C'est l'étagère remplie de pièces — tu n'auras jamais besoin d'y toucher.

> [!NOTE]
> Cette étape peut prendre 1-2 minutes (téléchargement depuis Internet). C'est normal si tu vois beaucoup de texte défiler !

<!-- [CHECKPOINT ÉTAPE 5.2]
Poser cette question après npm install :
"Le dossier node_modules/ est apparu dans la colonne de gauche ? 📦
Dis-moi 'C'est installé !' et on passe à l'activation du chatbot puis à la personnalisation !"
-->

---

<!--
================================================================
ÉTAPE 6 — PERSONNALISATION
================================================================
Ne présente cette étape qu'après validation du CHECKPOINT Étape 5.
Quand l'utilisateur parle de son CV, propose-lui l'astuce PDF en premier.
Si l'utilisateur donne sa clé API, installe-la directement dans le fichier .env.
================================================================
-->

## 🎨 Étape 6 : Personnaliser ton CV

C'est ici que l'aventure devient concrète. **Tu n'as pas besoin d'ouvrir les fichiers toi-même — je le fais pour toi.**

### 6.0 — Activer le cerveau du chatbot (clé API)

Avant de personnaliser, activons le **cerveau** de ton chatbot. Comme ça, quand tu testeras ton CV en prévisualisation, le chatbot répondra déjà !

La clé API est un code secret qui permet à ton site de communiquer avec l'intelligence artificielle de Google.

**Créer ta clé sur Google AI Studio :**
- **Action** : Va sur [Google AI Studio](https://aistudio.google.com/) et connecte-toi avec ton compte Google.
- **Action** : Dans le menu à gauche, clique sur **Get API key**, puis sur **Create API key**.
- **Action** : Copie précieusement ce long code — c'est ta clé, garde-la secrète.

> [!IMPORTANT]
> **Ta clé API est secrète.** Ne la partage jamais publiquement (pas dans un message, pas sur GitHub).

**Installer la clé dans ton projet :**
- **Action** : Dans le chat Antigravity, dis-moi :
  > *"Voici ma clé API Google : [colle ta clé]. Peux-tu l'installer dans le projet ?"*
- **Résultat** : J'ajoute ta clé dans le fichier `.env` du projet — le chatbot sera actif dès la prévisualisation locale. 🤖

### 6.1 — L'astuce "Gain de temps" ⚡
Si tu as un ancien CV en PDF, commence par ça !
- **Action** : Ton CV est normalement dans le dossier `_ressources-cv/` (tu l'y as mis à l'Étape 1). Dis-moi simplement :
  > *"Mon CV est dans _ressources-cv/mon-cv.pdf, peux-tu le lire et extraire mes informations ?"*
- **Résultat** : J'utilise l'outil `pdftotext` (installé à l'Étape 4) pour extraire le texte de ton PDF, puis j'analyse tes expériences, tes diplômes et tes compétences pour pré-remplir les fichiers à ta place.

### 6.2 — Tes informations de base (`identity.json`)
Nom, prénom, titre professionnel, liens réseaux sociaux.
- **Action** : Dis-moi ce que tu veux mettre, je m'en occupe.

> [!IMPORTANT]
> **Checklist identity.json — ne rien oublier :**
> - ✅ Nom, prénom, titre professionnel
> - ✅ Email (remplacer l'email du template !)
> - ✅ LinkedIn (remplacer le lien du template !)
> - ✅ Autres liens (GitHub, site perso...)

### 6.3 — Tes textes longs
- **Expériences** → fichier `experiences.md`
- **Projets/Portfolio** → fichier `portfolio.md`
- **Biographie/Accueil** → fichier `greeting.md`

- **Action** : Exemple de message : *"Ajoute dans mon portfolio.md ce projet : [Détails]."*

### 6.4 — Ta photo et tes visuels

Les fichiers que le visiteur voit (ta photo, tes images de projets, ton CV en PDF) vont dans le dossier **`public/`**.

> [!IMPORTANT]
> **La règle d'or :** tout ce que le visiteur doit voir ou télécharger va dans `public/`.
> Pense à `public/` comme la **vitrine** de ton site. Le dossier `src/` c'est l'**arrière-boutique**.

- **Action** : Glisse ta photo dans le dossier `public/` (ex: `public/ma-photo.jpg`).
- **Action** : Dis-moi le nom exact du fichier (avec l'extension), et je mets à jour `identity.json` pour toi.

Le nom du fichier se configure dans `identity.json` — peu importe qu'il soit en `.jpg`, `.png` ou `.webp`, ça marchera.

> [!TIP]
> **Et le CV en PDF ?** Même principe ! Glisse ton PDF dans `public/` et donne-moi le nom du fichier.

### 6.5 — Le rituel du "GO"
Pour chaque modification, je vais :
1. T'expliquer ce que je compte faire.
2. Attendre ton **"GO"** pour exécuter.
3. Te montrer le résultat.

### 6.6 — Validation finale de tes contenus

Avant de passer à la prévisualisation, nous allons vérifier ensemble que tes informations sont complètes et correctes. 

Je vais te montrer successivement le contenu des 4 fichiers que nous avons personnalisés :
1. `identity.json` (tes infos de base)
2. `experiences.md` (ton parcours professionnel)
3. `portfolio.md` (tes projets et réalisations)
4. `greeting.md` (ton message d'accueil personnalisé)

C'est le moment idéal pour vérifier qu'aucune information n'a été oubliée ou mal interprétée lors de l'extraction.

### 6.7 — Tester ton CV en local
- **Action** : Dis-moi **"Lance la prévisualisation"** et je démarre le serveur local pour toi.
- **Action** : Ouvre ton navigateur (Chrome, Firefox…) et va sur 👉 **[http://localhost:3000](http://localhost:3000)**
- **Résultat** : Ton site s'affiche dans ton vrai navigateur ! Si tu m'as donné ta clé API, le chatbot répond déjà.

> [!TIP]
> **Pourquoi un vrai navigateur ?** Le navigateur intégré d'Antigravity peut avoir des comportements différents (noms de fichiers PDF modifiés, etc.). En utilisant Chrome ou Firefox, tu vois ton CV exactement comme tes futurs visiteurs le verront.

<!-- [CHECKPOINT ÉTAPE 6]
Question à poser à l'utilisateur avant de passer à l'Étape 7 :
"Tes 4 fichiers de contenu (identity, experiences, portfolio, greeting) sont-ils validés ? ✅
Dis-moi 'Tout est prêt !' et on passe à la phase de relecture stratégique 👀"
-->

---

<!--
================================================================
ÉTAPE 7 — RELECTURE & AFFINAGE
================================================================
Ne présente cette étape qu'après validation du CHECKPOINT Étape 6.
Guide l'utilisateur dans une relecture structurée en 2 dimensions.
Pose les 2 questions une par une. Attends la réponse avant de proposer des ajustements.
Ne valide le CHECKPOINT 7 que quand l'utilisateur dit qu'il est satisfait.
================================================================
-->

## 🔍 Étape 7 : Relecture & Affinage

Avant de publier, on prend 5 minutes pour lire son CV avec les yeux d'un recruteur. C'est souvent là qu'on réalise qu'un texte sonne faux ou qu'il manque quelque chose d'important.

### Le protocole de relecture en 2 dimensions

Lis ton CV en prévisualisation et réponds honnêtement à ces 2 questions :

| # | Dimension | Question clé |
|---|---|---|
| 1 | **Ton & Contenu** | Est-ce que ça me ressemble ? Y a-t-il des infos floues, répétées ou manquantes ? |
| 2 | **Structure & Impact** | L'enchaînement est-il logique ? Un recruteur aurait-il envie de me contacter ? |

### La boucle d'affinage : Plan > Affine > Vérifie

Pour chaque point qui te semble perfectible, utilise ce process :

1. **Plan** — Identifie ce qui ne te convient pas. Ex : *"La description de mon poste chez X sonne trop générique."*
2. **Affine** — Demande-moi de l'ajuster. Voici des formulations prêtes à l'emploi :
   > *"Reformule ma description de [poste] de façon plus directe et percutante."*
   > *"Le ton de ma section [nom] est trop formel, rends-le plus chaleureux."*
   > *"Il me manque une mention de [compétence/projet], ajoute-la dans [section]."*
3. **Vérifie** — Je modifie, tu relis en prévisualisation. Si c'est bon, on passe au point suivant. Sinon, on recommence.

> [!TIP]
> **Astuce** : Lis ton CV à voix haute. Si tu trébuches sur une phrase, c'est qu'elle doit être simplifiée.

> [!NOTE]
> Il n'y a pas de limite au nombre d'itérations. Prends le temps qu'il faut. Le déploiement attendra !

<!-- [CHECKPOINT ÉTAPE 7]
Questions à poser DANS L'ORDRE à l'utilisateur avant de passer à l'Étape 8.
Pour chaque dimension, AVANT de poser la question, lis le CV en prévisualisation et
prépare un mini-feedback qualitatif (une observation concrète, pas un score).
Exemple : "J'ai remarqué que ta section Expériences est très factuelle — veux-tu
ajouter un résultat chiffré ou un impact concret ?"

1. "Commençons par le TON & CONTENU 🎙️📋 : Est-ce que tes textes te ressemblent ? Y a-t-il une formulation qui sonne faux, une info manquante ou répétée ?"
   → Donne ton observation AVANT de poser la question (ton, contenu, trous éventuels).
   → Si l'utilisateur veut corriger, propose de le faire maintenant. Si non, passe à la suite.
2. "Maintenant la STRUCTURE & IMPACT 🗂️🎯 : L'ordre des sections est-il logique ? Si tu étais recruteur, ça te donnerait envie de prendre contact ?"
   → Commente l'enchaînement et donne ton impression globale.
   → Si doutes, invite à ajuster. Sinon :
"Parfait ! Ton CV est prêt pour le grand saut 🚀 Dis-moi 'Je suis satisfait !' et on passe à la mise en ligne."
-->

---

<!--
================================================================
ÉTAPE 8 — LE DÉPLOIEMENT
================================================================
Ne présente cette étape qu'après validation du CHECKPOINT Étape 7.
Avant tout `git push`, vérifie l'authentification avec `gh auth status`.
Si non connecté, guide l'utilisateur avec `gh auth login` (protocole HTTPS, navigateur).
Le repo existe déjà (créé à l'étape 2). Fais simplement un `git add .`, `git commit` et `git push`.
Après le déploiement Netlify, rappelle au user de vérifier que les images ET le chatbot fonctionnent sur le site en ligne.
================================================================
-->

## 🌍 Étape 8 : Mise au monde (Le Déploiement)

Ton CV est prêt sur ton ordinateur. Il doit maintenant être visible par les recruteurs du monde entier.

### 8.0 — Vérifier ta connexion à GitHub

Avant de publier quoi que ce soit, on s'assure que ton ordinateur est autorisé à envoyer du code vers GitHub.

- **Action** : Je vérifie automatiquement si tu es connecté. Si ce n'est pas le cas, je lance la procédure de connexion et je te guide pas à pas.

> [!NOTE]
> C'est une étape unique. Une fois connecté, tu n'auras plus à le refaire.

### 8.1 — Rappel : ta clé API pour Netlify

Tu as créé ta clé API à l'Étape 6.0 et elle fonctionne déjà en local. Pour que le chatbot marche aussi **en ligne**, il faudra la renseigner dans Netlify (voir l'étape 8.3, point 4).

> [!TIP]
> **Tu ne retrouves plus ta clé ?** Retourne sur [Google AI Studio](https://aistudio.google.com/) → **Get API key** pour la retrouver ou en créer une nouvelle.

### 8.2 — Publier ton code sur GitHub

Ton code est déjà lié à ton dépôt GitHub (celui créé à l'Étape 2). Il suffit d'envoyer tes modifications.

- **Action** : Dis-moi **"Pousse mon code !"** et j'envoie tout vers GitHub.

- **Résultat** : Ton code personnalisé est visible sur `github.com/TON-PSEUDO/CV-Prenom-Nom`. Garde cette adresse, on en aura besoin juste après !

### 8.3 — Mettre en ligne sur Netlify

C'est le moment magique : ton CV va devenir accessible au monde entier 🌍

1. **Action** : Va sur ton compte [Netlify](https://app.netlify.com/) et connecte-toi.
2. **Action** : Clique sur **Add new site** → **Import an existing project** → **GitHub**.
3. **Action** : Netlify te montre tes dépôts GitHub. **Sélectionne celui qu'on vient de créer** (ex : `CV-Marie-Dupont`).
   - ⚠️ Si tu ne le vois pas, clique sur *"Configure the Netlify app on GitHub"* pour l'autoriser.
4. **Action** : Sur la page de configuration, ajoute la **variable d'environnement** pour le chatbot :
   - Clique sur **Add environment variables** → **New variable**
   - **Key** : `API_KEY`
   - **Value** : [colle ta clé API Google AI Studio]
5. **Action** : Clique sur **Deploy site**.
6. **Résultat 🎉** : Après 1-2 minutes, Netlify te donne une URL. **Ton site est en ligne !**

> [!TIP]
> **Vérification post-déploiement :** Ouvre ton site **dans un vrai navigateur** (Chrome, Firefox…) et vérifie ces 3 points :
> 1. 📸 Les **photos** s'affichent correctement
> 2. 🤖 Le **chatbot** répond (pose-lui une question !)
> 3. 📄 Le **PDF** se télécharge bien (avec le bon nom de fichier)

> [!IMPORTANT]
> **Repo privé = bonne pratique 🔒** Ton site est public grâce à Netlify, mais ton **code source** n'a pas besoin d'être visible. Si ton repo GitHub est encore en public :
> 1. Va sur la page de ton repo → **Settings** (onglet tout à droite)
> 2. Descends tout en bas dans la section **Danger Zone**
> 3. Clique sur **Change visibility** → choisis **Private**
> Netlify continuera de fonctionner normalement — il garde son accès même si le repo est privé.

<!-- [DÉPANNAGE POST-DÉPLOIEMENT — GUIDE POUR L'IA]
Si la vérification post-déploiement échoue, diagnostique avec ce tableau :

| Symptôme | Cause probable | Solution |
|---|---|---|
| 📸 Photos cassées (icône brisée) | Fichier pas dans `public/` ou nom incorrect dans `identity.json` | Vérifier que le fichier est bien dans `public/` et que le nom dans `identity.json` correspond exactement (avec extension) |
| 🤖 Chatbot ne répond pas | Variable `API_KEY` absente ou mal nommée dans Netlify | Guider l'utilisateur : Netlify → Site settings → Environment variables → vérifier que la clé s'appelle exactement `API_KEY` |
| 📄 PDF ne se télécharge pas | Fichier pas dans `public/` ou nom incorrect dans `identity.json` | Même logique que les photos : vérifier `public/` et `cv_pdf_name` dans `identity.json` |
| Build Netlify échoue | Erreur dans les Netlify Functions ou dépendance manquante | Demander à l'utilisateur d'aller dans Netlify → Deploys → cliquer sur le deploy en erreur → lire le log |

Rassure toujours l'utilisateur : ces erreurs sont classiques et se corrigent en quelques clics.
-->

<!-- [CHECKPOINT ÉTAPE 8]
Message à afficher après le déploiement réussi :
"🎉 Ton CV est EN LIGNE ! Bravo !
Avant de fêter, prenons 2 minutes pour découvrir comment le faire évoluer.
Dis-moi 'On continue !' et je te présente la boucle vertueuse."
-->

---

<!--
================================================================
ÉTAPE 9 — LA BOUCLE VERTUEUSE (PDCA)
================================================================
Ne présente cette étape qu'après validation du CHECKPOINT Étape 8.
C'est l'étape finale. Accompagne avec enthousiasme !
================================================================
-->

## 🔄 Étape 9 : La boucle vertueuse (le PDCA)

Ton CV est en ligne — bravo ! 🎉 Mais ce n'est que le début. Un CV, ça vit : nouveau poste, nouveau projet, nouvelle compétence… Il faut pouvoir le mettre à jour facilement.

Bonne nouvelle : tu as déjà tout ce qu'il faut. Les **RULES** (Étape 3) sont ton contrat de confiance avec l'IA, et le **PDCA** est ta méthode pour améliorer ton CV en continu.

### 9.1 — Le PDCA, c'est quoi ?

Le PDCA (Plan-Do-Check-Act) est une méthode d'amélioration continue inventée par Deming. En VibeCoding, chaque amélioration suit ce cycle :

| Phase | Toi | L'IA |
|-------|-----|------|
| **P (Plan)** | Tu as une idée : *"Je veux ajouter une section Compétences"* | — |
| **D (Do)** | Tu me décris ce que tu veux | Je génère le code, tu valides avec **"GO"** |
| **C (Check)** | Tu vérifies en prévisualisation | Je pousse vers GitHub → Netlify met à jour (30-60 sec) |
| **A (Act)** | C'est bon ? → Suite ! Pas parfait ? → On ajuste ! | Je corrige |

### 9.1bis — Le réflexe de non-régression

Après chaque mise à jour poussée en ligne, prends 30 secondes pour faire un **check rapide** :

1. 📸 Les **photos** s'affichent
2. 🤖 Le **chatbot** répond
3. 📄 Le **PDF** se télécharge

C'est la **non-régression** : s'assurer que ce qui marchait avant marche encore après ta modification. Si un des 3 points est cassé, dis-le-moi — c'est généralement corrigé en 2 minutes.

### 9.2 — Exemples concrets

Voici ce que tu peux faire à tout moment avec cette méthode :
- **Corriger le contenu** : une faute, une date, une reformulation
- **Faire évoluer la forme** : ajouter une section, changer le design, améliorer le chatbot
- **Ajouter du nouveau** : un projet récent, une certification, une nouvelle photo

> [!TIP]
> **Magique ? Non, Logique !**
> Chaque fois que tu valides un changement, je "pousse" les fichiers vers GitHub, et Netlify reconstruit le site automatiquement. Ton CV ne sera jamais obsolète.

> [!NOTE]
> **Envie d'approfondir ?** Le document [Le cycle PDCA VibeCoding](Le%20cycle%20PDCA%20VibeCoding.md) détaille cette méthodologie et ses origines.

<!-- [CHECKPOINT FINAL]
Message de félicitations à afficher à l'utilisateur :
"🎉 FÉLICITATIONS ! Tu as réussi !
Tu as maintenant un CV interactif, intelligent et professionnel, visible sur Internet.
Tu peux partager son URL avec des recruteurs dès maintenant.

🔄 Et souviens-toi : je reste dans ton ordinateur, prêt à t'aider pour n'importe quelle modification.
Nouveau poste ? Nouveau projet ? Dis-moi juste ce que tu veux changer, et on le fait ensemble en 2 minutes. 💪

Bon recrutement !"
-->

---

## 🎉 Félicitations !

Tu as réussi. Tu as maintenant un CV interactif, intelligent et professionnel.

**N'oublie pas** : Je reste dans ton ordinateur, prêt à t'aider pour la moindre modification. Bon recrutement !

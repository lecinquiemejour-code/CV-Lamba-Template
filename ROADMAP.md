# 🗺️ Roadmap d'évolutions — CV-Lambda-Template

> Roadmap validée le 24 mars 2026. 7 évolutions retenues sur 10.

---

## Légende

| Symbole | Signification |
|---------|---------------|
| 🟢 | Facile (< 1h) |
| 🟡 | Moyen (1-3h) |
| ⭐ | Haute priorité |

---

## 📋 Tableau récapitulatif

| # | Évolution | Difficulté | Statut |
|---|-----------|------------|--------|
| 1 | Modèle Gemini configurable via Netlify (env vars) | 🟢 Facile | 📋 À faire |
| 2 | Page diagnostic IA (`/api/health`) | 🟡 Moyen | 📋 À faire |
| 3 | Mode multi-langue | 🟡 Moyen | 📋 À faire |
| 4 | Thème personnalisable + dark mode | 🟡 Moyen | 📋 À faire |
| 5 | Suggestions dynamiques dans `identity.json` | 🟢 Facile | 📋 À faire |
| 7 | Persistance localStorage + bouton Effacer | 🟢 Facile | 📋 À faire |
| 9 | Limitation 50 messages/session (`ai-config.json`) | 🟢 Facile | 📋 À faire |

---

## ⭐ Évolution #1 — Modèle Gemini configurable via Netlify 🟢

### Problème
Le modèle IA est défini dans `ai-config.json` (commité dans Git). Pour changer de modèle, il faut modifier le fichier, committer, pusher et attendre le redéploiement (~1-2 min). La clé API, elle, est déjà une variable d'environnement modifiable instantanément.

### Solution
Ajouter deux variables d'environnement Netlify **optionnelles** :
- `GEMINI_MODEL` → nom du modèle
- `GEMINI_TEMPERATURE` → température

Le code de `chat.ts` lit **d'abord** les env vars, puis `ai-config.json` en fallback.

### Fichiers impactés
- `netlify/functions/chat.ts`
- `TUTORIAL.md`
- `.env.example`

---

## ⭐ Évolution #2 — Page diagnostic IA (`/api/health`) 🟡

### Problème
Quand le chatbot ne répond pas, l'utilisateur ne sait pas diagnostiquer la cause (clé API invalide, modèle en panne, quota dépassé, problème réseau).

### Solution
Créer une Netlify Function `/api/health` qui vérifie :
1. `API_KEY` est-elle définie ?
2. Le modèle répond-il ? (micro-appel test)
3. Le quota est-il ok ?

Retourne un JSON clair avec le statut, le modèle utilisé et la latence.

### Fichiers impactés
- `netlify/functions/health.ts` (nouveau)
- `TUTORIAL.md` (documenter l'endpoint)

---

## Évolution #3 — Mode multi-langue 🟡

### Problème
Le template est 100% francophone (interface, instructions IA, messages d'erreur). Un utilisateur non-francophone doit tout réécrire.

### Solution
- Ajouter `"language": "fr"` dans `identity.json`
- Externaliser les textes d'interface dans un dictionnaire i18n
- Adapter `instructions.md` avec un placeholder `{{LANGUAGE}}`

### Fichiers impactés
- `src/content/identity.json`
- `src/App.tsx`
- `src/content/instructions.md`
- Nouveau fichier dictionnaire i18n

---

## Évolution #4 — Thème personnalisable + dark mode 🟡

### Problème
Les couleurs (indigo/blanc/gris) sont codées en dur dans `App.tsx`. Tous les CV se ressemblent.

### Solution
Ajouter une section `"theme"` dans `identity.json` :
```json
{
  "theme": {
    "primary_color": "#4f46e5",
    "dark_mode": false
  }
}
```
Injection via CSS custom properties (`--color-primary`).

### Fichiers impactés
- `src/content/identity.json`
- `src/App.tsx`
- `src/index.css`

---

## Évolution #5 — Suggestions dynamiques 🟢

### Problème
Les suggestions ("Bonjour", "Dernières expériences"…) sont codées en dur dans `App.tsx`. Elles ne reflètent pas le métier de chaque utilisateur.

### Solution
Déplacer dans `identity.json` :
```json
{
  "suggestions": ["Bonjour", "Vos missions", "Stack technique", "Projets"]
}
```

### Fichiers impactés
- `src/content/identity.json`
- `src/App.tsx`

---

## Évolution #7 — Persistance localStorage + bouton Effacer 🟢

### Problème
La conversation est perdue au rechargement de page (state React volatile). Pas de moyen de repartir à zéro proprement.

### Solution
1. **Persistance** : synchroniser le state `messages` avec `localStorage` via un `useEffect`
2. **Bouton "Nouvelle conversation"** 🗑️ dans le header : vide le localStorage et réinitialise au message de bienvenue + suggestions

### Fichiers impactés
- `src/App.tsx`

---

## Évolution #9 — Limitation 50 messages/session 🟢

### Problème
Aucune limite sur le nombre de messages par visiteur. Risque de consommation excessive des quotas API (surtout en tier gratuit Gemini).

### Solution
Paramètre dans `ai-config.json` :
```json
{
  "max_messages_per_session": 50
}
```
Au-delà : message invitant à contacter directement par email/LinkedIn. Compteur côté frontend (state ou localStorage).

### Fichiers impactés
- `ai-config.json`
- `src/App.tsx`

---

> **Prochaine étape** : Commencer l'implémentation par l'évolution #1 (la plus prioritaire et la plus simple).

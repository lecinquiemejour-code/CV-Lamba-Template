# Abonnements et limites — CV Interactif IA

> Dernière mise à jour : 2026-03-15

## Vue d'ensemble

L'application fonctionne **entièrement avec des abonnements gratuits** (free tier).
Trois services externes sont utilisés :

| Service | Rôle | Plan utilisé |
|---------|------|-------------|
| **Google Gemini API** | Modèle IA (chatbot) | Free tier |
| **Netlify** | Hébergement + fonctions serverless | Free tier |
| **GitHub** | Dépôt Git + déploiement automatique | Free tier |

---

## 1. Google Gemini API

### Modèle utilisé

Le modèle est configurable dans `ai-config.json`. Actuellement : **`gemini-3.1-flash-lite-preview`** (le plus économique de la gamme Gemini).

### Limites du free tier (Gemini 3.1 Flash Lite)

| Métrique | Limite |
|----------|--------|
| **RPM** (requêtes par minute) | 15 |
| **TPM** (tokens par minute) | 250 000 |
| **RPD** (requêtes par jour) | 500 |

> Ces limites sont consultables dans [Google AI Studio > Rate Limits](https://aistudio.google.com/rate-limit).

### Tarifs du plan payant (par million de tokens)

| Élément | Prix |
|---------|------|
| Input (texte/image/vidéo) | $0.25 |
| Input (audio) | $0.50 |
| Output | $1.50 |

### En pratique

- **500 requêtes/jour** : si chaque visiteur pose ~5 questions, cela permet ~100 visiteurs/jour.
- **15 requêtes/minute** : 15 conversations simultanées possibles.
- En cas de dépassement, l'application affiche un message explicite à l'utilisateur (voir section "Gestion des erreurs").

---

## 2. Netlify

### Plan : Starter (gratuit)

| Ressource | Limite |
|-----------|--------|
| **Fonctions serverless** | 300 000 invocations/mois |
| **Bande passante** | 100 Go/mois |
| **Temps de build** | 300 minutes/mois |
| **Sites** | Illimité |

> Chaque message envoyé dans le chat = 1 invocation de fonction.
> 300 000 invocations/mois = ~10 000 messages/jour, largement suffisant.

### Plans payants (si nécessaire à l'avenir)

| Plan | Prix | Invocations/mois |
|------|------|-----------------|
| Pro | $19/mois | 1 000 000 |
| Business | $99/mois | Personnalisable |

---

## 3. GitHub

### Plan : Free

- Dépôts publics et privés illimités
- GitHub Actions : 2 000 minutes/mois
- Aucune limite pertinente pour ce projet

---

## Gestion des erreurs (rate limiting)

L'application gère les erreurs de quota de manière transparente pour l'utilisateur :

| Code HTTP | Cause | Message affiché |
|-----------|-------|----------------|
| **429** | Quota Gemini dépassé (RPM ou RPD) | *"Le service est temporairement surchargé. Veuillez réessayer dans quelques secondes."* |
| **503** | Service Gemini indisponible | *"Le service IA est momentanément indisponible. Veuillez réessayer dans quelques instants."* |
| **500** | Erreur technique interne | *"Une erreur technique est survenue. Veuillez réessayer."* |

### Flux technique

1. L'API Gemini renvoie une erreur (ex : `RESOURCE_EXHAUSTED`)
2. `netlify/functions/chat.ts` classifie l'erreur et renvoie le bon code HTTP
3. `src/services/ai.ts` mappe le code HTTP vers un message français
4. `src/App.tsx` affiche le message à l'utilisateur dans le chat

---

## Changer la clé API Gemini

1. Aller dans **Netlify → Site settings → Environment variables**
2. Modifier la variable `API_KEY`
3. **Redéclencher un déploiement** pour que la nouvelle valeur soit prise en compte :
   - Depuis Netlify : **Deploys → Trigger deploy → "Deploy site"**
   - Ou depuis Git : un `git push` relance automatiquement le build

> **Important** : un changement de variable d'environnement ne prend **pas** effet immédiatement. Il faut impérativement redéployer.

---

## Estimation des coûts mensuels

| Scénario | Visiteurs/jour | Messages/jour | Coût |
|----------|---------------|---------------|------|
| **Faible** (usage personnel) | 1-10 | ~50 | **0 €** |
| **Modéré** (partage CV) | 10-50 | ~250 | **0 €** |
| **Élevé** (forte visibilité) | 50-100 | ~500 | **0 €** (limite RPD atteinte) |
| **Très élevé** (viral) | 100+ | 500+ | Passage au plan payant Gemini nécessaire |

---

## Ressources

- [Google AI Studio — Rate Limits](https://aistudio.google.com/rate-limit)
- [Google Gemini API — Pricing](https://ai.google.dev/gemini-api/docs/pricing)
- [Netlify — Pricing](https://www.netlify.com/pricing/)

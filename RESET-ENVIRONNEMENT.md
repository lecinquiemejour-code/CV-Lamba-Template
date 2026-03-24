## 🧹 Mémo — Remise à zéro de l'environnement pour le tutoriel CV IA

### Objectif
Remettre le poste d'un apprenant dans un état "vierge" pour qu'il puisse suivre le tutoriel depuis le début, comme s'il n'avait jamais installé les outils.

---

### 1. Désinstaller les 3 outils

Aller dans **Paramètres Windows** → **Applications** → **Applications installées**, puis désinstaller :

| Outil | Nom dans la liste Windows |
|---|---|
| **Git** | `Git` |
| **Node.js** | `Node.js` |
| **GitHub CLI** | `GitHub CLI` |

> 💡 Après désinstallation, vérifier qu'ils ne sont plus reconnus en ouvrant **PowerShell** et en tapant :
> ```powershell
> git --version
> node --version
> gh --version
> ```
> Chaque commande doit retourner une **erreur** ("n'est pas reconnu..."). Si une commande répond encore, redémarrer le PC.

---

### 2. Nettoyer les résidus (optionnel mais recommandé)

| Quoi | Chemin à supprimer |
|---|---|
| Config Git globale | `C:\Users\<USER>\.gitconfig` |
| Cache npm | `C:\Users\<USER>\AppData\Roaming\npm` et `C:\Users\<USER>\AppData\Roaming\npm-cache` |
| Auth GitHub CLI | `C:\Users\<USER>\AppData\Local\GitHub CLI` |

---

### 3. Supprimer le projet existant

- Supprimer le dossier de travail (ex : `C:\CVIA\` ou tout dossier contenant le clone du repo).
- Le dossier `node_modules/` peut être long à supprimer — utiliser si besoin :
  ```powershell
  Remove-Item -Recurse -Force "C:\CVIA"
  ```

---

### 4. Nettoyer les services en ligne

| Service | Action |
|---|---|
| **GitHub** | Supprimer le repo créé depuis le template (Settings → Danger Zone → Delete) |
| **Netlify** | Supprimer le site déployé (Site configuration → Delete this site) |
| **Google AI Studio** | Révoquer la clé API (Get API key → supprimer la clé) — *optionnel* |

---

### 5. Préparer le redémarrage

1. Créer un dossier `C:\CVIA\`
2. Y placer uniquement le fichier `TUTORIAL.md` (téléchargé depuis le repo template GitHub)
3. Ouvrir `C:\CVIA\` dans Antigravity
4. Supprimer les **Rules** Antigravity existantes (`...` → Customizations → Rules → supprimer la Workspace rule)

L'apprenant est prêt à taper **"Lance le tutoriel"** 🚀

# Hug Gravure — Site vitrine

Page d'accueil moderne pour Hug Gravure (graveur & imprimeur, Kingersheim).
Site statique (HTML/CSS/JS) servi via `serve`.

## Aperçu en local

```bash
npm install
npm start
```

Puis ouvrez http://localhost:3000

---

## 🚀 Mise en ligne — GitHub + Railway

### Étape 1 — Mettre le code sur GitHub

**Option A · avec Git en ligne de commande**

```bash
cd hug-gravure
git init
git add .
git commit -m "Initial commit — site Hug Gravure"
git branch -M main
git remote add origin https://github.com/VOTRE-COMPTE/hug-gravure.git
git push -u origin main
```

> Créez d'abord un dépôt vide sur https://github.com/new (sans README),
> puis remplacez `VOTRE-COMPTE` par votre nom d'utilisateur GitHub.

**Option B · sans ligne de commande**
Sur https://github.com/new → créez le dépôt → bouton **"uploading an existing file"**
→ glissez-déposez tous les fichiers de ce dossier (sauf `node_modules`) → Commit.

### Étape 2 — Déployer sur Railway

1. Allez sur https://railway.app et connectez-vous avec GitHub.
2. **New Project** → **Deploy from GitHub repo** → choisissez `hug-gravure`.
3. Railway détecte Node.js, installe les dépendances et lance `npm start`.
   Aucune variable d'environnement à configurer (le port est géré automatiquement).
4. Onglet **Settings** → section **Networking** → **Generate Domain**.
   Railway vous donne alors votre lien public, par ex. :
   `https://hug-gravure-production.up.railway.app`

C'est ce lien que vous partagez. 🎉

### Étape 3 (optionnel) — Nom de domaine perso
Dans **Settings → Networking → Custom Domain**, ajoutez `www.hug-gravure.fr`
et suivez les instructions DNS (un enregistrement CNAME chez votre registrar).

---

## Structure

```
hug-gravure/
├── index.html      ← toute la page (HTML + CSS + JS inline)
├── package.json    ← dépendance "serve" + script start
├── railway.json    ← config de déploiement Railway
├── .gitignore
└── README.md
```

## Notes techniques
- 100 % responsive (menu hamburger sous 680px).
- Accessibilité : focus clavier visibles, `prefers-reduced-motion` respecté.
- Aucune dépendance payante ; polices Google Fonts (Barlow).

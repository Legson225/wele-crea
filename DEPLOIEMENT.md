# WELE CREA — Guide de déploiement sur wele-crea.com

---

## Option A — Vercel (recommandé, le plus simple)

### 1. Pré-requis
- Compte Vercel sur https://vercel.com
- Domaine `wele-crea.com` acheté (OVH, Namecheap, etc.)
- Projet poussé sur GitHub : `Legson225/wele-crea`

### 2. Déployer

```bash
# Installer Vercel CLI
npm install -g vercel

# Dans le dossier du projet
vercel

# Suivre les instructions :
# → Set up project : Yes
# → Framework : Next.js (auto-détecté)
# → Root directory : ./
```

### 3. Configurer les variables d'environnement sur Vercel

Aller sur https://vercel.com → Votre projet → **Settings → Environment Variables**

Ajouter **toutes** les variables de `.env.example` avec vos vraies valeurs.

Les variables obligatoires minimum :
```
NEXT_PUBLIC_APP_URL          = https://wele-crea.com
NEXT_PUBLIC_APP_NAME         = WELE CREA
JWT_SECRET                   = (généré avec Node.js)
ADMIN_EMAIL                  = admin@wele-crea.com
ADMIN_PASSWORD               = (votre mot de passe fort)
ADMIN_SECRET_KEY             = (généré avec Node.js)
GITHUB_CLIENT_ID             = (votre GitHub OAuth Client ID)
GITHUB_CLIENT_SECRET         = (votre GitHub OAuth Client Secret)
ANTHROPIC_API_KEY            = (votre clé Anthropic)
DATABASE_URL                 = (votre PostgreSQL)
```

### 4. Connecter le domaine wele-crea.com

Sur Vercel → **Settings → Domains** → Ajouter `wele-crea.com`

Vercel vous donnera des enregistrements DNS à configurer chez votre registrar :
```
Type    Nom     Valeur
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

---

## Option B — LWS cPanel (votre hébergement actuel)

### 1. Build du projet

```cmd
npm run build
```

### 2. Fichiers à uploader via FTP

Uploader ces dossiers/fichiers dans `public_html/` :

```
.next/          ← dossier build Next.js
public/         ← fichiers statiques
package.json
next.config.js
node_modules/   ← ou faire npm install sur le serveur
```

### 3. Démarrer avec PM2

```bash
npm install -g pm2
pm2 start npm --name "wele-crea" -- start
pm2 save
pm2 startup
```

### 4. Configuration Apache (.htaccess)

Créer un fichier `.htaccess` dans `public_html/` :

```apache
RewriteEngine On
RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
```

### 5. Configurer le domaine wele-crea.com sur LWS

Dans cPanel → **Domaines supplémentaires** :
- Domaine : `wele-crea.com`
- Répertoire : `public_html/`

Puis dans **Zone DNS** → Pointer l'enregistrement A vers l'IP de votre serveur LWS.

---

## GitHub OAuth — mise à jour du callback

⚠️ Après le déploiement, aller sur https://github.com/settings/developers
→ Votre app OAuth → Modifier :

```
Authorization callback URL : https://wele-crea.com/api/auth/callback/github
```

---

## Checklist avant mise en production

- [ ] Domaine `wele-crea.com` configuré et résolu
- [ ] HTTPS actif (certificat SSL)
- [ ] Toutes les variables `.env` configurées
- [ ] `ADMIN_PASSWORD` changé (différent de la valeur exemple)
- [ ] `JWT_SECRET` et `ADMIN_SECRET_KEY` générés (≥ 64 chars)
- [ ] GitHub OAuth callback mis à jour vers `wele-crea.com`
- [ ] Base de données PostgreSQL créée (`wele_crea`)
- [ ] Test de connexion admin sur `/login`
- [ ] Test de création de compte sur `/signup`
- [ ] Test du bouton GitHub OAuth
- [ ] Vérifier https://wele-crea.com/sitemap.xml
- [ ] Vérifier https://wele-crea.com/robots.txt

# WELE CREA — Next.js 14 · Full-Stack SaaS

> Fabrique IA de produits digitaux. Propulsée par **DJOLOG (GDL)** — Écosystème DJOLOGBAHA™

---

## 🚀 Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 14 (App Router) |
| Langage | TypeScript |
| Styles | Tailwind CSS |
| Typo | Syne (titres) + Plus Jakarta Sans (corps) |
| Blockchain | BNB Smart Chain (BEP-20) |
| Token | DJOLOG (GDL) |

---

## 📁 Structure du projet

```
welecrea/
├── app/
│   ├── page.tsx              ← Landing page (aucun faux chiffre)
│   ├── login/page.tsx        ← Page de connexion
│   ├── signup/page.tsx       ← Inscription 2 étapes
│   ├── faq/page.tsx          ← FAQ complète avec accordéons
│   ├── dashboard/            ← Espace utilisateur
│   │   ├── layout.tsx
│   │   ├── page.tsx          ← Vue d'ensemble (compteurs à 0)
│   │   ├── new-project/      ← Formulaire de génération
│   │   ├── projects/         ← Liste des projets
│   │   ├── agents/           ← Statut des 10 agents
│   │   ├── billing/          ← Facturation GDL
│   │   └── settings/         ← Paramètres profil
│   └── admin/                ← Back-office (accès restreint)
│       ├── layout.tsx
│       ├── page.tsx          ← Vue globale admin
│       ├── users/            ← Gestion utilisateurs
│       ├── projects/         ← Tous les projets
│       ├── agents/           ← Monitoring agents
│       ├── revenue/          ← Revenus GDL + LEVEE
│       ├── security/         ← Centre sécurité
│       └── settings/         ← Configuration plateforme
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Badge.tsx
│   └── dashboard/
│       ├── Sidebar.tsx       ← Sidebar réutilisable (user + admin)
│       └── MetricCard.tsx
├── lib/
│   ├── constants.ts          ← Plans, agents, FAQ, GDL config
│   ├── types.ts              ← Types TypeScript
│   └── utils.ts              ← Utilitaires
└── .env.example              ← Variables d'environnement
```

---

## ⚙️ Installation

```bash
# 1. Cloner et installer
cd wele-crea
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos vraies valeurs

# 3. Démarrer en développement
npm run dev
# → http://localhost:3000

# 4. Build production
npm run build
npm start
```

---

## 💳 Plans tarifaires (GDL)

| Plan | GDL/mois | USD ≈ |
|------|----------|--------|
| Free | 0 GDL | Gratuit |
| Starter | 260 GDL | ~10 USD |
| Pro | 520 GDL | ~20 USD |
| Business | 1 170 GDL | ~45 USD |

**Wallet de réception GDL (BEP-20) :**
```
0x2AD5a3184979f9299A13Cf65C5219cD76c78DE30
```

**Système LEVEE DJOLOGBAHA™ :**
- 2% → Développement plateforme
- 1% → Charité (impact social)
- 97% → Revenus plateforme

---

## 🔌 API à connecter

Les pages sont des shells UI — il faut connecter votre backend :

```
POST /api/auth/login        → Authentification JWT
POST /api/auth/signup       → Inscription utilisateur
POST /api/projects/generate → Lancer la génération IA (Agents)
GET  /api/projects          → Liste des projets utilisateur
GET  /api/user/me           → Profil utilisateur
PATCH /api/user/settings    → Mise à jour profil
GET  /api/admin/stats       → Statistiques globales (admin)
GET  /api/admin/users       → Gestion utilisateurs (admin)
POST /api/gdl/verify        → Vérification paiement blockchain
```

---

## 🔐 Sécurité

- L'admin dashboard (`/admin`) doit être protégé côté serveur (middleware Next.js)
- Vérifiez le `role: 'admin'` dans le JWT à chaque requête `/admin/*`
- Ne jamais exposer les clés admin côté client
- HTTPS obligatoire en production

---

## 🚀 Déploiement recommandé

1. **Vercel** (recommandé) : `vercel deploy`
2. **cPanel (LWS)** : Build → copier `.next` + `package.json` → `npm start`
3. **VPS** : Docker ou PM2 (`pm2 start npm -- start`)

---

## 📝 Notes importantes

- Tous les compteurs sont à **zéro** — aucune donnée fictive
- Aucun témoignage utilisateur (données à collecter en production)
- Les agents IA sont des UI shells — brancher sur votre backend Anthropic
- GDL = DJOLOG token BEP-20 sur BNB Smart Chain

---

© 2026 WELE CREA — Écosystème DJOLOGBAHA™

---

## 🐙 Configuration GitHub OAuth

1. Aller sur https://github.com/settings/applications/new
2. Remplir :
   - **Application name** : WELE CREA
   - **Homepage URL** : `https://wele-crea.com`
   - **Authorization callback URL** : `https://wele-crea.com/api/auth/callback/github`
3. Copier dans `.env.local` :
   ```
   GITHUB_CLIENT_ID=votre_client_id
   GITHUB_CLIENT_SECRET=votre_client_secret
   NEXT_PUBLIC_GITHUB_AUTH_ENABLED=true
   ```

---

## 🔐 Identifiants Admin

L'accès au back-office `/admin` est protégé par `middleware.ts` (vérifie le cookie de session admin).

Configurer dans `.env.local` :
```
ADMIN_EMAIL=admin@wele-crea.com
ADMIN_PASSWORD=MotDePasseTresFort2026!
ADMIN_SECRET_KEY=cle_secrete_admin_64_chars_minimum
ADMIN_ALLOWED_IP=           # laisser vide = toutes IPs (configurer en prod !)
```

Flux de connexion admin :
1. Admin entre ses identifiants sur `/login`
2. `POST /api/auth/login` détecte `email === ADMIN_EMAIL && password === ADMIN_PASSWORD`
3. Cookie `wc_admin_session` posé
4. Redirection automatique vers `/admin`
5. Le middleware vérifie le cookie à chaque requête `/admin/*`

> ⚠️ **IMPORTANT** : Changez ces valeurs AVANT toute mise en production.
> Ne commitez JAMAIS `.env.local` — ajoutez-le à `.gitignore`.

---

## 🔗 Nouveaux fichiers ajoutés (v2)

| Fichier | Rôle |
|---------|------|
| `middleware.ts` | Protection des routes /admin et /dashboard |
| `app/api/auth/login/route.ts` | Login email + détection admin |
| `app/api/auth/signup/route.ts` | Inscription utilisateur |
| `app/api/auth/logout/route.ts` | Déconnexion + suppression cookies |
| `app/api/auth/github/route.ts` | Initiation OAuth GitHub |
| `app/api/auth/callback/github/route.ts` | Callback OAuth GitHub |


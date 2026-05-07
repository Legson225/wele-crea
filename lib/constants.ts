// ─── WELE CREA — Constantes de la plateforme ────────────────────────────────

export const APP = {
  name: 'WELE CREA',
  tagline: 'Votre idée devient un produit digital complet',
  url: 'https://wele-crea.com',
  email: 'contact@wele-crea.com',
  support: 'support@wele-crea.com',
}

export const GDL = {
  symbol: 'GDL',
  name: 'DJOLOG',
  wallet: '0x2AD5a3184979f9299A13Cf65C5219cD76c78DE30',
  network: 'BNB Smart Chain (BEP-20)',
  levee: { dev: 2, charity: 1, total: 3 },
}

export const PLANS = [
  {
    id: 'free',
    name: 'Free',
    sub: 'Pour découvrir la plateforme',
    priceGDL: 0,
    priceUSD: 0,
    label: 'Gratuit',
    featured: false,
    features: [
      '2 projets / mois',
      '3 conversations IA / jour',
      'Design Agent (3 propositions)',
      'Export HTML simple',
      'Support communauté',
    ],
    locked: [
      'Agents avancés',
      'Déploiement automatique',
      'React + Backend',
      'Support prioritaire',
    ],
    cta: 'Commencer gratuitement',
    ctaVariant: 'outline' as const,
  },
  {
    id: 'starter',
    name: 'Starter',
    sub: 'Pour les créateurs solo',
    priceGDL: 260,
    priceUSD: 10,
    label: '260 GDL',
    featured: false,
    features: [
      '15 projets / mois',
      'Conversations illimitées',
      '6 propositions de design',
      'Export complet (HTML/CSS/JS)',
      'Deploy Agent inclus',
      'Debug Agent basique',
      'Support email',
    ],
    locked: [],
    cta: 'Payer en GDL',
    ctaVariant: 'outline' as const,
  },
  {
    id: 'pro',
    name: 'Pro',
    sub: 'Pour les professionnels',
    priceGDL: 520,
    priceUSD: 20,
    label: '520 GDL',
    featured: true,
    badge: '⚡ Populaire',
    features: [
      'Projets illimités',
      '10 Agents IA complets',
      'React + Backend généré',
      'Debug Agent avancé',
      'Security Agent 24/7',
      'Terminal intégré',
      'Déploiement automatique',
      'Support prioritaire < 1h',
      'Analytics Agent inclus',
    ],
    locked: [],
    cta: 'Payer en GDL',
    ctaVariant: 'gold' as const,
  },
  {
    id: 'business',
    name: 'Business',
    sub: 'Pour équipes et agences',
    priceGDL: 1170,
    priceUSD: 45,
    label: '1 170 GDL',
    featured: false,
    features: [
      'Tout le plan Pro',
      'Accès API complet',
      'White-label inclus',
      'Docker & VPS deploy',
      "5 membres d'équipe",
      'Onboarding dédié',
      'SLA garanti 99.9%',
      'Support téléphonique',
    ],
    locked: [],
    cta: 'Payer en GDL',
    ctaVariant: 'outline' as const,
  },
]

export const AGENTS = [
  { id: 'design',      icon: '🎨', name: 'Design Agent',      desc: 'Génère plusieurs propositions UI/UX uniques et personnalisées à votre secteur. Figma-ready.',              color: '#A855F7' },
  { id: 'code',        icon: '💻', name: 'Code Agent',         desc: 'Génère du code HTML, CSS, JavaScript, React et Node.js propre, optimisé et documenté.',                   color: '#3B82F6' },
  { id: 'deploy',      icon: '🚀', name: 'Deploy Agent',       desc: 'Build et déploiement automatique en 1 clic. Compatible VPS, cPanel, Vercel, Netlify.',                     color: '#10B981' },
  { id: 'debug',       icon: '🐞', name: 'Debug Agent',        desc: 'Détecte, analyse et corrige automatiquement toutes les erreurs. Optimisation continue.',                    color: '#F59E0B' },
  { id: 'security',    icon: '🛡️', name: 'Security Agent',     desc: 'Protection de niveau militaire. Audit de vulnérabilités, chiffrement, surveillance des intrusions.',        color: '#EF4444' },
  { id: 'support',     icon: '🎧', name: 'Support Agent',      desc: 'Support client automatisé 24/7. Résolution des tickets, FAQ intelligente, escalade humaine.',               color: '#06B6D4' },
  { id: 'marketing',   icon: '📣', name: 'Marketing Agent',    desc: 'Rédaction SEO, campagnes automatisées, A/B testing, optimisation des taux de conversion.',                  color: '#EC4899' },
  { id: 'maintenance', icon: '🔧', name: 'Maintenance Agent',  desc: 'Maintenance préventive, mises à jour automatiques, sauvegardes, monitoring des performances.',              color: '#8B5CF6' },
  { id: 'qa',          icon: '🧪', name: 'QA Agent',           desc: 'Tests automatisés end-to-end, tests unitaires, rapports de qualité et validation cross-browser.',           color: '#F5A623' },
  { id: 'analytics',   icon: '📊', name: 'Analytics Agent',    desc: 'Tableaux de bord en temps réel, insights comportementaux, recommandations automatiques.',                   color: '#00D4FF' },
]

export const FAQ_ITEMS = [
  {
    category: 'Général',
    items: [
      {
        q: "Qu'est-ce que WELE CREA ?",
        a: "WELE CREA est une plateforme SaaS de production automatisée de sites web, d'applications web et de logiciels. En décrivant simplement votre idée, 10 Agents IA autonomes génèrent votre produit digital complet — sans que vous n'écriviez une seule ligne de code.",
      },
      {
        q: "Quels types de produits puis-je créer ?",
        a: "Vous pouvez créer : des sites web (landing pages, blogs, portfolios), des applications web SaaS, des e-commerces, des tableaux de bord, des CRM, des applications mobiles (PWA), des APIs et backends, et des logiciels desktop. Si vous pouvez le décrire, WELE CREA peut le construire.",
      },
      {
        q: "Est-ce que je dois savoir coder ?",
        a: "Absolument pas. WELE CREA est conçu pour fonctionner sans aucune connaissance technique. Décrivez votre idée en français (ou dans toute autre langue), et les Agents IA s'occupent de tout : design, code, tests, sécurité, déploiement.",
      },
      {
        q: "Puis-je exporter le code source de mon projet ?",
        a: "Oui. À partir du plan Starter, vous pouvez télécharger le code source complet (HTML/CSS/JS, React, etc.) et l'héberger où vous le souhaitez. Le plan Pro inclut aussi le code backend généré.",
      },
    ],
  },
  {
    category: 'Prérequis & Déploiement',
    items: [
      {
        q: "Quels sont les prérequis avant de commencer ?",
        a: "Pour déployer votre projet en ligne, vous devez disposer d'un nom de domaine actif et d'un hébergement web (cPanel, VPS, Vercel, Netlify, etc.). Ces éléments sont indispensables avant tout engagement sur un plan payant. Le Deploy Agent peut se connecter automatiquement à votre hébergement.",
      },
      {
        q: "Où sont hébergés mes projets ?",
        a: "WELE CREA ne gère pas l'hébergement de vos projets. Le Deploy Agent déploie directement sur votre propre hébergement (cPanel FTP, Vercel, Netlify, VPS via SSH). Vous gardez le contrôle total de vos données et de votre infrastructure.",
      },
      {
        q: "Combien de temps faut-il pour générer un projet ?",
        a: "La génération d'un projet simple (site web, landing page) prend généralement moins de 2 minutes. Un projet complexe avec backend, base de données et fonctionnalités avancées peut prendre jusqu'à 5 à 10 minutes. Le déploiement automatique ajoute moins de 90 secondes supplémentaires.",
      },
    ],
  },
  {
    category: 'Paiement GDL',
    items: [
      {
        q: "Pourquoi les paiements se font-ils en GDL ?",
        a: "DJOLOG (GDL) est le jeton utilitaire officiel de l'écosystème DJOLOGBAHA™. En intégrant GDL comme moyen de paiement exclusif, WELE CREA participe activement à la valorisation et à la circulation du jeton. C'est une décision stratégique pour renforcer l'économie de l'écosystème.",
      },
      {
        q: "Comment acheter des GDL ?",
        a: "Le jeton DJOLOG (GDL) est disponible sur les échanges décentralisés compatibles BNB Smart Chain (BEP-20). Vous aurez besoin d'un wallet compatible (MetaMask, Trust Wallet) et de BNB pour les frais de réseau. Contactez notre support pour obtenir les dernières informations d'achat.",
      },
      {
        q: "Quelle est l'adresse de paiement GDL ?",
        a: "L'adresse officielle de réception des paiements est : 0x2AD5a3184979f9299A13Cf65C5219cD76c78DE30 (réseau BNB Smart Chain, BEP-20). Vérifiez toujours cette adresse sur notre site officiel avant tout envoi. WELE CREA ne vous demandera jamais une autre adresse.",
      },
      {
        q: "Qu'est-ce que le système LEVEE DJOLOGBAHA™ ?",
        a: "Le système LEVEE est un mécanisme automatique de distribution des revenus intégré à l'écosystème DJOLOGBAHA™. Sur chaque transaction GDL reçue par WELE CREA, 2% sont automatiquement alloués au développement de la plateforme et 1% à des causes caritatives. Soit 3% au total, dans un esprit d'impact social positif.",
      },
      {
        q: "Que se passe-t-il si j'envoie un mauvais montant ?",
        a: "Si vous envoyez un montant insuffisant, votre abonnement ne sera pas activé et le montant restera dans votre wallet. Si vous envoyez un excédent, la différence sera créditée sur votre compte WELE CREA en GDL pour vos prochains mois. Contactez le support dans tous les cas.",
      },
    ],
  },
  {
    category: 'Sécurité & Confidentialité',
    items: [
      {
        q: "Mes projets sont-ils privés ?",
        a: "Oui, tous vos projets sont privés par défaut. Seuls vous et les administrateurs désignés de WELE CREA peuvent y accéder. Le Security Agent surveille en permanence toute tentative d'accès non autorisé.",
      },
      {
        q: "Qui peut accéder au Dashboard Admin ?",
        a: "L'interface d'administration est strictement réservée aux administrateurs officiellement désignés par WELE CREA. Aucun plan utilisateur, quel qu'il soit, ne donne accès au back-office. Toute tentative d'accès non autorisée est tracée et bloquée.",
      },
      {
        q: "Comment fonctionne la sécurité des Agents IA ?",
        a: "Le Security Agent analyse en continu le code généré pour détecter les vulnérabilités (injections SQL, XSS, CSRF, etc.), audite les configurations, surveille les intrusions 24/7 et génère des rapports de sécurité détaillés. Vos projets bénéficient d'une protection de niveau professionnel dès leur création.",
      },
    ],
  },
  {
    category: 'Support',
    items: [
      {
        q: "Comment contacter le support ?",
        a: "Le Support Agent répond automatiquement à la plupart des questions en moins de 2 minutes. Pour les demandes complexes, l'escalade vers un humain est disponible 24/7 (plan Pro et Business). Vous pouvez aussi écrire à support@wele-crea.com.",
      },
      {
        q: "Puis-je demander un remboursement ?",
        a: "Les paiements en GDL sont définitifs et non remboursables, conformément à la nature des transactions blockchain. Cependant, si votre projet n'a pas été généré correctement suite à une erreur de notre plateforme, nous vous créditons des GDL équivalents pour un nouveau projet.",
      },
    ],
  },
]

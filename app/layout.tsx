import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'WELE CREA — Fabrique IA de Produits Digitaux', template: '%s | WELE CREA' },
  description: 'Transformez n\'importe quelle idée en site web, application ou logiciel complet grâce à 10 Agents IA autonomes. Zéro code. Paiement en GDL.',
  keywords: ['IA', 'création site web', 'no-code', 'agents IA', 'DJOLOG', 'GDL', 'DJOLOGBAHA'],
  authors: [{ name: 'DJOLOGBAHA™' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://wele-crea.com',
    title: 'WELE CREA — Fabrique IA de Produits Digitaux',
    description: 'De l\'idée au produit digital en 2 minutes. 10 Agents IA autonomes. Paiement GDL.',
    siteName: 'WELE CREA',
  },
  twitter: { card: 'summary_large_image', title: 'WELE CREA', description: 'Fabrique IA de produits digitaux — Paiement GDL' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

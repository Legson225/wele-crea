import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = { title: 'Politique de Confidentialité — WELE CREA' }
export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Syne,sans-serif', fontSize: 36, fontWeight: 800, color: '#F0F4FF', marginBottom: 8 }}>Politique de Confidentialité</h1>
        <p style={{ color: 'rgba(240,244,255,0.4)', fontSize: 13, marginBottom: 40 }}>Dernière mise à jour : Mai 2026</p>
        {[
          { title: '1. Collecte des données', content: "WELE CREA collecte uniquement les données nécessaires au fonctionnement de la plateforme : nom, adresse email, adresse wallet GDL (optionnelle), et les projets que vous créez. Nous ne collectons aucune donnée sensible au sens du RGPD sans votre consentement explicite." },
          { title: '2. Utilisation des données', content: "Vos données sont utilisées exclusivement pour : (a) gérer votre compte et vos projets, (b) traiter vos paiements en DJOLOG (GDL), (c) vous envoyer des notifications relatives à votre compte, (d) améliorer nos services. Vos données ne sont jamais vendues à des tiers." },
          { title: '3. Paiements en GDL', content: "Les transactions en DJOLOG (GDL) sont effectuées sur la blockchain BNB Smart Chain. Ces transactions sont publiques et immuables par nature. Votre adresse wallet publique peut être visible sur la blockchain. Nous ne stockons jamais votre clé privée." },
          { title: '4. Cookies', content: "WELE CREA utilise des cookies de session sécurisés (HttpOnly, Secure) pour maintenir votre connexion. Aucun cookie de tracking publicitaire n'est utilisé. Les cookies sont supprimés à la déconnexion." },
          { title: '5. Conservation des données', content: "Vos données sont conservées tant que votre compte est actif. En cas de suppression de compte, vos données personnelles sont supprimées dans un délai de 30 jours, à l'exception des données requises par la loi." },
          { title: '6. Vos droits', content: "Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition. Pour exercer ces droits, contactez-nous à : privacy@wele-crea.com" },
          { title: '7. Sécurité', content: "Nous mettons en œuvre des mesures techniques de sécurité (chiffrement AES-256, HTTPS, tokens JWT, Security Agent 24/7) pour protéger vos données contre tout accès non autorisé." },
          { title: '8. Contact', content: "Pour toute question relative à cette politique : privacy@wele-crea.com — WELE CREA, Écosystème DJOLOGBAHA™" },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 18, fontWeight: 700, color: '#F5A623', marginBottom: 12 }}>{s.title}</h2>
            <p style={{ color: 'rgba(240,244,255,0.65)', lineHeight: 1.8, fontSize: 15 }}>{s.content}</p>
          </div>
        ))}
        <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
          <Link href="/terms" style={{ color: '#F5A623', fontSize: 14, textDecoration: 'none' }}>Conditions Générales d'Utilisation →</Link>
          <Link href="/" style={{ color: 'rgba(240,244,255,0.4)', fontSize: 14, textDecoration: 'none' }}>← Retour au site</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}

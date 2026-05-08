import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = { title: "Conditions Générales d'Utilisation — WELE CREA" }
export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Syne,sans-serif', fontSize: 36, fontWeight: 800, color: '#F0F4FF', marginBottom: 8 }}>Conditions Générales d'Utilisation</h1>
        <p style={{ color: 'rgba(240,244,255,0.4)', fontSize: 13, marginBottom: 40 }}>Dernière mise à jour : Mai 2026 — En vigueur dès l'inscription</p>
        {[
          { title: '1. Acceptation des conditions', content: "En créant un compte sur WELE CREA, vous acceptez pleinement et sans réserve les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, vous ne pouvez pas utiliser la plateforme." },
          { title: '2. Description du service', content: "WELE CREA est une plateforme SaaS de génération automatisée de sites web, d'applications web et de logiciels à l'aide de 10 Agents IA autonomes. Le service est fourni tel quel, sans garantie de résultat spécifique." },
          { title: '3. Prérequis', content: "L'utilisation de WELE CREA nécessite : (a) un compte utilisateur valide, (b) un nom de domaine et un hébergement actifs pour le déploiement, (c) un wallet GDL compatible BEP-20 pour les plans payants. Ces prérequis sont de la responsabilité exclusive de l'utilisateur." },
          { title: '4. Paiements en DJOLOG (GDL)', content: "Tous les plans payants sont facturés exclusivement en DJOLOG (GDL) sur le réseau BNB Smart Chain. Les paiements sont définitifs et non remboursables. Le système LEVEE prélève automatiquement 3% (2% développement + 1% charité) sur chaque transaction. Adresse officielle : 0x2AD5a3184979f9299A13Cf65C5219cD76c78DE30" },
          { title: '5. Propriété intellectuelle', content: "Le code généré par les Agents IA pour vos projets vous appartient intégralement. WELE CREA conserve les droits sur la plateforme, ses algorithmes et ses agents. Vous ne pouvez pas revendre la plateforme elle-même." },
          { title: '6. Accès administrateur', content: "L'accès au dashboard administrateur est strictement réservé aux administrateurs officiellement désignés par WELE CREA. Toute tentative d'accès non autorisé est une violation des présentes CGU et peut faire l'objet de poursuites." },
          { title: '7. Limitation de responsabilité', content: "WELE CREA ne saurait être tenu responsable des dommages indirects résultant de l'utilisation ou de l'impossibilité d'utiliser la plateforme. La responsabilité totale de WELE CREA est limitée au montant payé par l'utilisateur au cours des 3 derniers mois." },
          { title: '8. Résiliation', content: "Vous pouvez supprimer votre compte à tout moment depuis les paramètres. WELE CREA se réserve le droit de suspendre tout compte en cas de violation des présentes CGU, sans préavis ni remboursement." },
          { title: '9. Droit applicable', content: "Les présentes CGU sont soumises au droit en vigueur dans le pays d'établissement de DJOLOGBAHA™. Tout litige sera soumis aux tribunaux compétents." },
          { title: '10. Contact', content: "Pour toute question : legal@wele-crea.com — WELE CREA, Écosystème DJOLOGBAHA™" },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 18, fontWeight: 700, color: '#F5A623', marginBottom: 12 }}>{s.title}</h2>
            <p style={{ color: 'rgba(240,244,255,0.65)', lineHeight: 1.8, fontSize: 15 }}>{s.content}</p>
          </div>
        ))}
        <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
          <Link href="/privacy" style={{ color: '#F5A623', fontSize: 14, textDecoration: 'none' }}>Politique de Confidentialité →</Link>
          <Link href="/" style={{ color: 'rgba(240,244,255,0.4)', fontSize: 14, textDecoration: 'none' }}>← Retour au site</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}

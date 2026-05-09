'use client'
import { useState } from 'react'

export default function MonetizationPage() {
  const [adsense, setAdsense] = useState(true)
  const [ezoic, setEzoic]     = useState(false)
  const [autoAds, setAutoAds] = useState(false)
  const [saved, setSaved]     = useState(false)

  function handleSave() {
    // TODO: POST /api/admin/monetization { adsense, ezoic, autoAds }
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const Toggle = ({ value, onChange, label, desc, color = '#7C3AED' }: {
    value: boolean; onChange: (v: boolean) => void
    label: string; desc: string; color?: string
  }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid rgba(124,58,237,0.07)' }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1035', marginBottom: 3 }}>{label}</div>
        <div style={{ fontSize: 12, color: '#9CA3AF' }}>{desc}</div>
      </div>
      <button onClick={() => onChange(!value)}
        style={{ width: 48, height: 26, borderRadius: 13, border: 'none', cursor: 'pointer', transition: 'all .25s', position: 'relative', background: value ? color : '#E5E7EB' }}>
        <span style={{ position: 'absolute', top: 3, left: value ? 25 : 3, width: 20, height: 20, borderRadius: '50%', background: '#fff', transition: 'left .25s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
      </button>
    </div>
  )

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'Syne,sans-serif', fontSize: 24, fontWeight: 800, color: '#1A1035', marginBottom: 4 }}>💰 Monétisation</h1>
        <p style={{ color: '#9CA3AF', fontSize: 13 }}>Gérez AdSense et Ezoïc depuis ce panneau centralisé.</p>
      </div>

      {saved && (
        <div style={{ marginBottom: 20, padding: '12px 16px', borderRadius: 12, background: '#ECFDF5', border: '1px solid rgba(16,185,129,0.25)', color: '#10B981', fontSize: 13, fontWeight: 600 }}>
          ✅ Configuration sauvegardée avec succès !
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

        {/* Google AdSense */}
        <div style={{ padding: 24, borderRadius: 18, background: '#fff', border: '1px solid rgba(124,58,237,0.1)', boxShadow: '0 2px 12px rgba(124,58,237,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>📢</div>
            <div>
              <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 16, fontWeight: 800, color: '#1A1035' }}>Google AdSense</div>
              <div style={{ fontSize: 12, color: '#9CA3AF' }}>ca-pub-2672251536807949</div>
            </div>
            <span style={{ marginLeft: 'auto', padding: '3px 10px', borderRadius: 8, background: '#ECFDF5', color: '#10B981', fontSize: 11, fontWeight: 700, border: '1px solid rgba(16,185,129,0.2)' }}>
              {adsense ? '✓ Actif' : 'Inactif'}
            </span>
          </div>

          <Toggle value={adsense} onChange={setAdsense} color="#F97316"
            label="AdSense activé" desc="Affiche les annonces Google sur toutes les pages publiques." />
          <Toggle value={autoAds} onChange={setAutoAds} color="#F97316"
            label="Auto Ads (recommandé)" desc="Google place automatiquement les annonces aux meilleurs endroits." />

          <div style={{ marginTop: 16, padding: '12px 14px', borderRadius: 10, background: '#FFF7ED', border: '1px solid rgba(249,115,22,0.2)' }}>
            <p style={{ fontSize: 12, color: '#92400E', fontWeight: 600, marginBottom: 4 }}>Statut de vérification</p>
            <p style={{ fontSize: 12, color: '#B45309' }}>⏳ En cours d'examen par Google — déploie sur wele-crea.com pour finaliser.</p>
          </div>

          <div style={{ marginTop: 12, padding: '12px 14px', borderRadius: 10, background: '#F8F7FF', border: '1px solid rgba(124,58,237,0.1)' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#7C3AED', marginBottom: 4 }}>ads.txt ✅ configuré</p>
            <code style={{ fontSize: 11, color: '#4B4566', fontFamily: 'monospace' }}>
              https://wele-crea.com/ads.txt
            </code>
          </div>
        </div>

        {/* Ezoïc */}
        <div style={{ padding: 24, borderRadius: 18, background: '#fff', border: '1px solid rgba(124,58,237,0.1)', boxShadow: '0 2px 12px rgba(124,58,237,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🔵</div>
            <div>
              <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 16, fontWeight: 800, color: '#1A1035' }}>Ezoïc</div>
              <div style={{ fontSize: 12, color: '#9CA3AF' }}>Optimisation IA des annonces</div>
            </div>
            <span style={{ marginLeft: 'auto', padding: '3px 10px', borderRadius: 8, background: ezoic ? '#ECFDF5' : '#F9FAFB', color: ezoic ? '#10B981' : '#9CA3AF', fontSize: 11, fontWeight: 700, border: `1px solid ${ezoic ? 'rgba(16,185,129,0.2)' : 'rgba(0,0,0,0.08)'}` }}>
              {ezoic ? '✓ Actif' : 'Inactif'}
            </span>
          </div>

          <Toggle value={ezoic} onChange={setEzoic} color="#3B82F6"
            label="Ezoïc activé" desc="Active l'optimisation IA des revenus publicitaires via Ezoïc." />

          <div style={{ marginTop: 16, padding: '14px', borderRadius: 10, background: '#EFF6FF', border: '1px solid rgba(59,130,246,0.2)' }}>
            <p style={{ fontSize: 12, color: '#1D4ED8', fontWeight: 700, marginBottom: 8 }}>⚙️ Configuration requise</p>
            <ol style={{ paddingLeft: 16, fontSize: 12, color: '#1E40AF', lineHeight: 1.8 }}>
              <li>Créer un compte sur <strong>ezoic.com</strong></li>
              <li>Ajouter <strong>wele-crea.com</strong> comme site</li>
              <li>Intégrer le script Ezoïc dans <code style={{ background: 'rgba(59,130,246,0.1)', padding: '1px 5px', borderRadius: 4 }}>app/layout.tsx</code></li>
              <li>Ajouter votre ID Ezoïc dans <code style={{ background: 'rgba(59,130,246,0.1)', padding: '1px 5px', borderRadius: 4 }}>.env.local</code></li>
            </ol>
          </div>

          <div style={{ marginTop: 12 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#4B4566', marginBottom: 6 }}>ID Ezoïc (optionnel)</label>
            <input type="text" placeholder="ex: 12345"
              style={{ width: '100%', background: '#F9FAFB', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 10, padding: '9px 14px', fontSize: 13, color: '#1A1035', outline: 'none', fontFamily: 'monospace' }} />
          </div>
        </div>

        {/* Revenus estimés */}
        <div style={{ padding: 24, borderRadius: 18, background: 'linear-gradient(135deg,#F5F3FF,#EDE9FE)', border: '1px solid rgba(124,58,237,0.15)', boxShadow: '0 2px 12px rgba(124,58,237,0.06)', gridColumn: '1 / -1' }}>
          <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: 15, fontWeight: 700, color: '#7C3AED', marginBottom: 16 }}>📊 Revenus publicitaires estimés</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { label: "Revenus aujourd'hui", val: '0.00 USD', color: '#7C3AED' },
              { label: 'Revenus ce mois', val: '0.00 USD', color: '#7C3AED' },
              { label: 'RPM moyen', val: '— USD', color: '#F97316' },
              { label: 'Impressions', val: '0', color: '#10B981' },
            ].map(s => (
              <div key={s.label} style={{ padding: '14px 16px', borderRadius: 12, background: '#fff', border: '1px solid rgba(124,58,237,0.1)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 20, fontWeight: 800, color: s.color, marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontSize: 11, color: '#9CA3AF' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: '#9CA3AF', marginTop: 12 }}>
            * Les données seront disponibles après validation AdSense et déploiement sur wele-crea.com
          </p>
        </div>
      </div>

      <button onClick={handleSave}
        style={{ marginTop: 24, padding: '13px 32px', borderRadius: 14, border: 'none', background: 'linear-gradient(135deg,#7C3AED,#A855F7)', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'Plus Jakarta Sans,sans-serif', boxShadow: '0 4px 14px rgba(124,58,237,0.35)' }}>
        💾 Sauvegarder la configuration
      </button>
    </div>
  )
}

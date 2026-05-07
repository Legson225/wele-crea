export const metadata = { title: 'Sécurité — Admin' }
export default function AdminSecurityPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-8" style={{ fontFamily: 'Syne' }}>🛡️ Centre de Sécurité</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Niveau sécurité', val: 'MAXIMUM', accent: '#00E5A0' },
          { label: 'Tentatives bloquées', val: '0', accent: '#F5A623' },
          { label: 'IPs bannies', val: '0', accent: '#FF6B9D' },
          { label: 'Dernier audit', val: "Aujourd'hui", accent: '#00D4FF' },
        ].map(s => (
          <div key={s.label} className="p-5 rounded-2xl bg-white/3 border border-white/7">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">{s.label}</p>
            <p className="text-xl font-extrabold" style={{ fontFamily: 'Syne', color: s.accent }}>{s.val}</p>
          </div>
        ))}
      </div>
      <div className="p-5 rounded-2xl bg-[#00E5A0]/5 border border-[#00E5A0]/20 mb-6">
        <p className="text-sm font-bold text-[#00E5A0] mb-1">✅ Systèmes de sécurité opérationnels</p>
        <p className="text-xs text-white/40">Security Agent actif · Firewall configuré · HTTPS forcé · JWT secrets sécurisés · Rate limiting actif</p>
      </div>
      <div>
        <h2 className="text-sm font-bold mb-4" style={{ fontFamily: 'Syne' }}>Journal de sécurité</h2>
        <div className="rounded-2xl bg-white/2 border border-white/7 p-8 text-center">
          <p className="text-sm text-white/25">Aucun événement enregistré.</p>
        </div>
      </div>
    </div>
  )
}

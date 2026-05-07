import { AGENTS } from '@/lib/constants'
export const metadata = { title: 'Agents IA — Admin' }
export default function AdminAgentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-2" style={{ fontFamily: 'Syne' }}>🤖 Agents IA — Vue Globale</h1>
      <p className="text-white/30 text-sm mb-8">Monitoring global de tous les agents de la plateforme</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Requêtes/heure', val: '0' },
          { label: 'Temps moyen génération', val: '—' },
          { label: 'CPU global', val: '0%' },
          { label: 'Projets en cours', val: '0' },
        ].map(s => (
          <div key={s.label} className="p-5 rounded-2xl bg-white/3 border border-white/7">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">{s.label}</p>
            <p className="text-xl font-extrabold text-[#F5A623]" style={{ fontFamily: 'Syne' }}>{s.val}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-white/2 border border-white/7 overflow-hidden">
        <table className="wc-table">
          <thead><tr><th>Agent</th><th>Statut</th><th>Charge</th><th>Req/h</th><th>Erreurs</th><th>Version</th></tr></thead>
          <tbody>
            {AGENTS.map(a => (
              <tr key={a.id}>
                <td className="font-semibold">{a.icon} {a.name}</td>
                <td><span className="px-2 py-1 rounded-md text-[11px] font-bold bg-[#00E5A0]/10 border border-[#00E5A0]/20 text-[#00E5A0]">Prêt</span></td>
                <td className="text-white/40">0%</td>
                <td className="text-white/40">0</td>
                <td className="text-[#00E5A0]">0</td>
                <td className="font-mono text-xs text-white/30">v1.0.0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

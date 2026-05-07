import Link from 'next/link'
import MetricCard from '@/components/dashboard/MetricCard'

export const metadata = { title: 'Dashboard' }

const AGENT_STATUS = [
  { name: '🎨 Design',      status: 'idle',    load: 0,  color: '#A855F7', task: 'En attente' },
  { name: '💻 Code',        status: 'idle',    load: 0,  color: '#3B82F6', task: 'En attente' },
  { name: '🚀 Deploy',      status: 'idle',    load: 0,  color: '#10B981', task: 'En attente' },
  { name: '🐞 Debug',       status: 'active',  load: 0,  color: '#F59E0B', task: 'Prêt' },
  { name: '🛡️ Security',    status: 'active',  load: 0,  color: '#EF4444', task: 'Surveillance' },
  { name: '📣 Marketing',   status: 'idle',    load: 0,  color: '#EC4899', task: 'En attente' },
  { name: '🎧 Support',     status: 'active',  load: 0,  color: '#06B6D4', task: 'Prêt' },
  { name: '🔧 Maintenance', status: 'active',  load: 0,  color: '#8B5CF6', task: '99.9% uptime' },
]

export default function DashboardPage() {
  return (
    <div>
      {/* Topbar */}
      <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold" style={{ fontFamily: 'Syne' }}>Bonjour 👋</h1>
          <p className="text-white/30 text-sm mt-1">Bienvenue sur votre espace WELE CREA</p>
        </div>
        <Link href="/dashboard/new-project" className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] transition-all">
          ⚡ Nouveau Projet
        </Link>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard label="Projets actifs" value={0} change="Créez votre 1er projet" changeType="neutral" accent="gold" />
        <MetricCard label="Sites en ligne" value={0} change="—" changeType="neutral" accent="cyan" />
        <MetricCard label="Solde GDL" value="0 GDL" change="Aucun paiement" changeType="neutral" accent="gold" />
        <MetricCard label="Agents actifs" value="8 / 10" change="Prêts pour votre projet" changeType="up" accent="emerald" />
      </div>

      {/* Empty state projects */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-bold" style={{ fontFamily: 'Syne' }}>Projets récents</h2>
        <Link href="/dashboard/projects" className="text-xs text-white/40 hover:text-[#F5A623] transition-colors">Voir tout →</Link>
      </div>
      <div className="rounded-2xl bg-white/2 border border-white/7 p-12 text-center mb-8">
        <div className="text-5xl mb-4">✨</div>
        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Syne' }}>Aucun projet pour l'instant</h3>
        <p className="text-sm text-white/40 mb-6 max-w-sm mx-auto">Décrivez votre idée et laissez les 10 Agents IA créer votre premier produit digital.</p>
        <Link href="/dashboard/new-project" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_20px_rgba(245,166,35,0.25)] transition-all">
          ⚡ Créer mon premier projet
        </Link>
      </div>

      {/* Agents status */}
      <h2 className="text-base font-bold mb-4" style={{ fontFamily: 'Syne' }}>État des Agents IA</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {AGENT_STATUS.map(agent => (
          <div key={agent.name} className="p-4 rounded-xl bg-white/3 border border-white/7">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold">{agent.name}</span>
              <span className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'animate-pulse-dot' : 'opacity-20'}`} style={{ background: agent.color }} />
            </div>
            <div className="h-1 rounded-full bg-white/8 mb-2">
              <div className="h-full rounded-full" style={{ width: `${agent.load}%`, background: agent.color }} />
            </div>
            <p className="text-[11px] text-white/30">{agent.task}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

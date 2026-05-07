import Sidebar from '@/components/dashboard/Sidebar'

const links = [
  { href: '/admin',             icon: '📊', label: "Vue d'ensemble" },
  { href: '/admin/users',       icon: '👥', label: 'Utilisateurs', badge: 0 },
  { href: '/admin/projects',    icon: '📁', label: 'Tous les projets' },
  { href: '/admin/agents',      icon: '🤖', label: 'Agents IA Globaux' },
  { href: '/admin/revenue',     icon: '💰', label: 'Revenus GDL' },
  { href: '/admin/security',    icon: '🛡️', label: 'Sécurité' },
  { href: '/admin/settings',    icon: '⚙️', label: 'Config Plateforme' },
]

const user = { name: 'Super Admin', plan: 'Niveau 5 · Root', initials: '🔐' }

const adminBanner = (
  <div className="mx-3 my-2 p-3 rounded-xl bg-red-500/8 border border-red-500/20 text-center">
    <p className="text-[11px] font-bold text-red-400">🔐 BACK-OFFICE ADMIN</p>
    <p className="text-[10px] text-red-400/60 mt-0.5">Accès restreint</p>
  </div>
)

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#070B16]">
      <Sidebar links={links} user={user} isAdmin extraTop={adminBanner} />
      <main className="ml-64 flex-1 min-h-screen">
        {/* Admin top banner */}
        <div className="bg-red-500/5 border-b border-red-500/15 px-8 py-2.5 flex items-center justify-center gap-2">
          <span className="text-[12px] font-bold text-red-400">🔐 Interface Administrateur — Accès restreint · WELE CREA Back-Office</span>
        </div>
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}

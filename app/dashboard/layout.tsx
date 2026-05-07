import Sidebar from '@/components/dashboard/Sidebar'

const links = [
  { href: '/dashboard',              icon: '🏠', label: 'Tableau de bord' },
  { href: '/dashboard/projects',     icon: '📁', label: 'Mes Projets', badge: 0 },
  { href: '/dashboard/new-project',  icon: '⚡', label: 'Nouveau Projet' },
  { href: '/dashboard/agents',       icon: '🤖', label: 'Mes Agents IA' },
  { href: '/dashboard/billing',      icon: '💳', label: 'Facturation GDL' },
  { href: '/dashboard/settings',     icon: '⚙️', label: 'Paramètres' },
]

const user = { name: 'Utilisateur', plan: 'Plan Free · GDL', initials: 'U' }

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#070B16]">
      <Sidebar links={links} user={user} />
      <main className="ml-64 flex-1 p-8 min-h-screen">{children}</main>
    </div>
  )
}

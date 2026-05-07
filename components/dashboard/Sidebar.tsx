'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarLink {
  href: string
  icon: string
  label: string
  badge?: string | number
}

interface SidebarProps {
  links: SidebarLink[]
  user?: { name: string; plan: string; initials: string }
  isAdmin?: boolean
  extraTop?: React.ReactNode
}

export default function Sidebar({ links, user, isAdmin, extraTop }: SidebarProps) {
  const path = usePathname()
  const goldColor = isAdmin ? '#EF4444' : '#F5A623'

  return (
    <aside className={`fixed top-0 left-0 bottom-0 w-64 flex flex-col z-50 border-r ${isAdmin ? 'bg-[#070B16] border-red-500/15' : 'bg-[#0C1120] border-white/7'}`}>
      {/* Logo */}
      <div className={`flex items-center gap-2.5 px-5 py-5 border-b ${isAdmin ? 'border-red-500/15' : 'border-white/7'}`}>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-[#070B16] text-base" style={{ fontFamily: 'Syne', background: `linear-gradient(135deg, ${goldColor}, ${isAdmin ? '#B91C1C' : '#E8920A'})` }}>
            {isAdmin ? 'A' : 'W'}
          </div>
          <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 16 }}>
            WELE <span style={{ color: goldColor }}>{isAdmin ? 'ADMIN' : 'CREA'}</span>
          </span>
        </Link>
      </div>

      {extraTop}

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {links.map(l => {
          const active = path === l.href || (l.href !== '/dashboard' && l.href !== '/admin' && path.startsWith(l.href))
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all border ${active ? `border-white/10 bg-white/5 font-semibold` : 'border-transparent text-white/50 hover:text-white hover:bg-white/4'}`}
              style={{ color: active ? goldColor : undefined }}
            >
              <span className="text-base w-5 text-center">{l.icon}</span>
              <span className="flex-1">{l.label}</span>
              {l.badge !== undefined && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: goldColor + '22', color: goldColor }}>
                  {l.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* User info */}
      {user && (
        <div className={`p-3 border-t ${isAdmin ? 'border-red-500/15' : 'border-white/7'}`}>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl" style={{ background: goldColor + '0A', border: `1px solid ${goldColor}18` }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[#070B16] text-xs shrink-0" style={{ background: `linear-gradient(135deg, ${goldColor}, ${isAdmin ? '#B91C1C' : '#E8920A'})`, fontFamily: 'Syne' }}>
              {user.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{user.name}</p>
              <p className="text-[11px] truncate" style={{ color: goldColor }}>{user.plan}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Link href="/" className="flex-1 text-center py-1.5 rounded-lg text-xs border border-white/10 text-white/50 hover:text-white transition-colors">← Site</Link>
            <Link href="/login" className="flex-1 text-center py-1.5 rounded-lg text-xs border border-red-500/20 text-red-400/70 hover:text-red-400 transition-colors">Déco.</Link>
          </div>
        </div>
      )}
    </aside>
  )
}

import Link from 'next/link'
import { GDL } from '@/lib/constants'

const LINKS = {
  Produit: [
    { href: '/#agents', label: 'Fonctionnalités' },
    { href: '/#pricing', label: 'Tarifs' },
    { href: '/faq', label: 'FAQ' },
    { href: '#', label: 'Changelog' },
    { href: '#', label: 'Roadmap' },
  ],
  Entreprise: [
    { href: '#', label: 'À propos' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Contact' },
    { href: '/faq#support', label: 'Support' },
  ],
  Légal: [
    { href: '#', label: "Conditions d'utilisation" },
    { href: '#', label: 'Confidentialité' },
    { href: '#', label: 'Cookies' },
    { href: '#', label: 'Mentions légales' },
    { href: '#', label: 'SLA' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/7 bg-[#0C1120] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/7">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F5A623] to-[#E8920A] flex items-center justify-center font-bold text-[#070B16]" style={{ fontFamily: 'Syne', fontSize: 18 }}>W</div>
              <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 18 }}>WELE <span style={{ color: '#F5A623' }}>CREA</span></span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Transformez une idée en produit digital complet grâce à l'intelligence artificielle. 10 Agents IA. Zéro code requis.
            </p>
            <div className="flex gap-2">
              {['𝕏', 'in', '📱', '📘'].map((s, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-sm hover:border-[#F5A623]/40 hover:bg-[#F5A623]/5 transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {Object.entries(LINKS).map(([col, links]) => (
            <div key={col}>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">{col}</h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l.href}><Link href={l.href} className="text-sm text-white/40 hover:text-[#F5A623] transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 WELE CREA — Écosystème DJOLOGBAHA™ · Tous droits réservés</p>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#F5A623]/10 border border-[#F5A623]/25 text-[11px] font-bold text-[#F5A623]">🪙 {GDL.symbol}</span>
            <span className="text-xs text-white/30">10 Agents IA · {GDL.network}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

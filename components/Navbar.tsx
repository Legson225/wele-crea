'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#070B16]/85 backdrop-blur-xl border-b border-white/7' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F5A623] to-[#E8920A] flex items-center justify-center font-bold text-[#070B16] shadow-[0_0_20px_rgba(245,166,35,0.3)]" style={{ fontFamily: 'Syne, sans-serif', fontSize: 18 }}>W</div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 19 }}>
            WELE <span style={{ color: '#F5A623' }}>CREA</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: '/#agents', label: 'Agents IA' },
            { href: '/#how', label: 'Fonctionnement' },
            { href: '/#pricing', label: 'Tarifs' },
            { href: '/faq', label: 'FAQ' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5A0]/10 border border-[#00E5A0]/25 text-[11px] font-bold text-[#00E5A0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse-dot" />
            10 Agents Actifs
          </div>
          <Link href="/login" className="px-4 py-2 rounded-xl text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all">
            Se connecter
          </Link>
          <Link href="/signup" className="px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] transition-all hover:-translate-y-0.5">
            ⚡ Démarrer
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/></svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0C1120] border-t border-white/7 px-6 py-6 flex flex-col gap-4">
          {[
            { href: '/#agents', label: 'Agents IA' },
            { href: '/#how', label: 'Fonctionnement' },
            { href: '/#pricing', label: 'Tarifs' },
            { href: '/faq', label: 'FAQ' },
          ].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-white/60 hover:text-white">{l.label}</Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/login" onClick={() => setMenuOpen(false)} className="flex-1 text-center py-2.5 rounded-xl text-sm border border-white/10 hover:border-white/20">Se connecter</Link>
            <Link href="/signup" onClick={() => setMenuOpen(false)} className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16]">⚡ Démarrer</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

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
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:100,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(124,58,237,0.1)' : 'none',
      transition:'all .3s',padding:'14px 0'
    }}>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
          <div style={{width:38,height:38,borderRadius:12,background:'linear-gradient(135deg,#7C3AED,#EC4899)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:18,color:'#fff',boxShadow:'0 4px 14px rgba(124,58,237,0.4)'}}>W</div>
          <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:19,color:'#1A1035'}}>WELE <span style={{color:'#7C3AED'}}>CREA</span></span>
        </Link>

        <div style={{display:'flex',alignItems:'center',gap:28}} className="hidden md:flex">
          {[
            {href:'/#types',label:"Ce qu'on crée"},
            {href:'/#agents',label:'Agents IA'},
            {href:'/#how',label:'Fonctionnement'},
            {href:'/#pricing',label:'Tarifs'},
            {href:'/faq',label:'FAQ'},
          ].map(l => (
            <Link key={l.href} href={l.href} style={{fontSize:14,fontWeight:500,color:'#4B4566',textDecoration:'none',transition:'color .2s'}}
              onMouseEnter={e=>(e.currentTarget.style.color='#7C3AED')}
              onMouseLeave={e=>(e.currentTarget.style.color='#4B4566')}>
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{display:'flex',alignItems:'center',gap:5,padding:'4px 12px',borderRadius:20,background:'#ECFDF5',border:'1px solid rgba(16,185,129,0.25)',fontSize:11,fontWeight:700,color:'#10B981'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'#10B981',display:'inline-block'}} className="animate-pulse-dot"/>
            10 Agents actifs
          </div>
          <Link href="/login" style={{padding:'9px 18px',borderRadius:12,border:'2px solid rgba(124,58,237,0.2)',background:'#fff',color:'#7C3AED',fontWeight:700,fontSize:13,textDecoration:'none',transition:'all .2s'}}
            onMouseEnter={e=>{e.currentTarget.style.background='#EDE9FE'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#fff'}}>
            Se connecter
          </Link>
          <Link href="/signup" style={{padding:'9px 18px',borderRadius:12,background:'linear-gradient(135deg,#7C3AED,#A855F7)',color:'#fff',fontWeight:700,fontSize:13,textDecoration:'none',boxShadow:'0 4px 14px rgba(124,58,237,0.35)',transition:'all .2s'}}>
            ⚡ Commencer
          </Link>
        </div>
      </div>
    </nav>
  )
}

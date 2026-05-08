'use client'
import Link from 'next/link'
import { GDL } from '@/lib/constants'

const LINKS = {
  Produit: [
    {href:'/#types',label:"Ce qu'on crée"},
    {href:'/#agents',label:'Agents IA'},
    {href:'/#pricing',label:'Tarifs'},
    {href:'/faq',label:'FAQ'},
    {href:'#',label:'Changelog'},
  ],
  Entreprise: [
    {href:'#',label:'À propos'},
    {href:'#',label:'Blog'},
    {href:'#',label:'Contact'},
    {href:'/faq#support',label:'Support'},
  ],
  Légal: [
    {href:'/terms',label:"Conditions d'utilisation"},
    {href:'/privacy',label:'Confidentialité'},
    {href:'#',label:'Cookies'},
    {href:'#',label:'Mentions légales'},
    {href:'#',label:'SLA'},
  ],
}

export default function Footer() {
  return (
    <footer style={{background:'#1A1035',color:'rgba(255,255,255,0.7)',paddingTop:64,paddingBottom:32}}>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 32px'}}>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:40,paddingBottom:48,borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
          <div>
            <Link href="/" style={{display:'inline-flex',alignItems:'center',gap:10,textDecoration:'none',marginBottom:16}}>
              <div style={{width:36,height:36,borderRadius:10,background:'linear-gradient(135deg,#7C3AED,#EC4899)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne',fontWeight:800,fontSize:17,color:'#fff'}}>W</div>
              <span style={{fontFamily:'Syne',fontWeight:800,fontSize:18,color:'#fff'}}>WELE <span style={{color:'#A855F7'}}>CREA</span></span>
            </Link>
            <p style={{fontSize:13,lineHeight:1.7,maxWidth:260,color:'rgba(255,255,255,0.5)'}}>
              Transformez une idée en produit digital complet grâce à l'IA. 10 Agents autonomes. Zéro code requis.
            </p>
            <div style={{display:'flex',gap:10,marginTop:20}}>
              {['𝕏','in','📱','📘'].map((s,i)=>(
                <a key={i} href="#" style={{width:36,height:36,borderRadius:10,border:'1px solid rgba(255,255,255,0.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,color:'rgba(255,255,255,0.5)',textDecoration:'none',transition:'all .2s'}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='#A855F7';e.currentTarget.style.background='rgba(124,58,237,0.2)'}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.12)';e.currentTarget.style.background='transparent'}}>
                  {s}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(LINKS).map(([col,links])=>(
            <div key={col}>
              <h4 style={{fontFamily:'Syne',fontSize:12,fontWeight:700,color:'#fff',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:16}}>{col}</h4>
              <ul style={{listStyle:'none'}}>
                {links.map(l=>(
                  <li key={l.href} style={{marginBottom:10}}>
                    <Link href={l.href} style={{fontSize:13,color:'rgba(255,255,255,0.45)',textDecoration:'none',transition:'color .2s'}}
                      onMouseEnter={e=>(e.currentTarget.style.color='#A855F7')}
                      onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.45)')}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <p style={{fontSize:12,color:'rgba(255,255,255,0.3)'}}>© 2026 WELE CREA — Écosystème DJOLOGBAHA™ · Tous droits réservés</p>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <span style={{padding:'3px 10px',borderRadius:8,background:'rgba(124,58,237,0.2)',color:'#A855F7',border:'1px solid rgba(124,58,237,0.3)',fontSize:11,fontWeight:700}}>🪙 {GDL.symbol}</span>
            <span style={{fontSize:12,color:'rgba(255,255,255,0.3)'}}>10 Agents IA · {GDL.network}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface MetricCardProps {
  label: string
  value: string | number
  change?: string
  changeType?: 'up' | 'down' | 'neutral'
  accent?: 'gold' | 'cyan' | 'pink' | 'emerald'
}

const colors = {
  gold:    '#F97316',
  cyan:    '#06B6D4',
  pink:    '#EC4899',
  emerald: '#10B981',
}
const bgs = {
  gold:    '#FFF7ED',
  cyan:    '#ECFEFF',
  pink:    '#FDF2F8',
  emerald: '#ECFDF5',
}

export default function MetricCard({ label, value, change, changeType = 'neutral', accent = 'gold' }: MetricCardProps) {
  return (
    <div style={{padding:20,borderRadius:18,background:'#fff',border:'1px solid rgba(124,58,237,0.1)',boxShadow:'0 2px 12px rgba(124,58,237,0.06)'}}>
      <p style={{fontSize:11,fontWeight:700,color:'#9CA3AF',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:8}}>{label}</p>
      <p style={{fontFamily:'Syne,sans-serif',fontSize:26,fontWeight:800,color:colors[accent],lineHeight:1,marginBottom:4}}>{value}</p>
      {change && (
        <p style={{fontSize:12,color:changeType==='up'?'#10B981':changeType==='down'?'#EF4444':'#9CA3AF',display:'flex',alignItems:'center',gap:4}}>
          {changeType==='up'&&'↑'}{changeType==='down'&&'↓'} {change}
        </p>
      )}
    </div>
  )
}

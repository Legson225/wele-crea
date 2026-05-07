interface MetricCardProps {
  label: string
  value: string | number
  change?: string
  changeType?: 'up' | 'down' | 'neutral'
  accent?: 'gold' | 'cyan' | 'pink' | 'emerald'
}

const accents = {
  gold: 'linear-gradient(135deg,#F5A623,#FFCD6B)',
  cyan: 'linear-gradient(135deg,#00D4FF,#00E5A0)',
  pink: 'linear-gradient(135deg,#FF6B9D,#FF9EC4)',
  emerald: 'linear-gradient(135deg,#00E5A0,#00D4FF)',
}

export default function MetricCard({ label, value, change, changeType = 'neutral', accent = 'gold' }: MetricCardProps) {
  return (
    <div className="p-5 rounded-2xl bg-white/3 border border-white/7">
      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">{label}</p>
      <p className="text-2xl font-extrabold leading-none mb-1" style={{ fontFamily: 'Syne', background: accents[accent], WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {value}
      </p>
      {change && (
        <p className={`text-xs flex items-center gap-1 ${changeType === 'up' ? 'text-[#00E5A0]' : changeType === 'down' ? 'text-red-400' : 'text-white/30'}`}>
          {changeType === 'up' && '↑'}{changeType === 'down' && '↓'} {change}
        </p>
      )}
    </div>
  )
}

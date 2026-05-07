import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'emerald' | 'cyan' | 'pink' | 'red' | 'gray' | 'building'
  className?: string
}

export default function Badge({ children, variant = 'gold', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-600 border',
      {
        'bg-[#F5A623]/10 border-[#F5A623]/30 text-[#F5A623]': variant === 'gold',
        'bg-[#00E5A0]/10 border-[#00E5A0]/20 text-[#00E5A0]': variant === 'emerald',
        'bg-[#00D4FF]/10 border-[#00D4FF]/20 text-[#00D4FF]': variant === 'cyan',
        'bg-[#FF6B9D]/10 border-[#FF6B9D]/20 text-[#FF6B9D]': variant === 'pink',
        'bg-red-500/10 border-red-500/20 text-red-400': variant === 'red',
        'bg-white/5 border-white/10 text-white/50': variant === 'gray',
        'bg-[#F5A623]/10 border-[#F5A623]/20 text-[#F5A623]': variant === 'building',
      },
      className
    )}>
      {children}
    </span>
  )
}

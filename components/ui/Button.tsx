'use client'
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'gold', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer border focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400',
          {
            'bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] border-transparent hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(245,166,35,0.35)]': variant === 'gold',
            'bg-transparent border-white/10 text-white hover:border-[#F5A623] hover:text-[#F5A623] hover:bg-[#F5A623]/5': variant === 'outline',
            'bg-transparent border-transparent text-white/70 hover:text-white hover:bg-white/5': variant === 'ghost',
            'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20': variant === 'danger',
            'px-3 py-2 text-xs': size === 'sm',
            'px-5 py-3 text-sm': size === 'md',
            'px-8 py-4 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
export default Button

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#070B16',
          2: '#0C1120',
          3: '#111827',
        },
        gold: {
          DEFAULT: '#F5A623',
          light: '#FFCD6B',
          dark: '#E8920A',
        },
        cyan: { DEFAULT: '#00D4FF' },
        emerald: { DEFAULT: '#00E5A0' },
        pink: { DEFAULT: '#FF6B9D' },
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.7s ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(10px, -15px)' },
          '66%': { transform: 'translate(-8px, 10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

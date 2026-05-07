import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyToClipboard(text: string) {
  if (typeof navigator !== 'undefined') {
    navigator.clipboard.writeText(text)
  }
}

export function formatGDL(amount: number): string {
  return new Intl.NumberFormat('fr-FR').format(amount) + ' GDL'
}

export function formatUSD(amount: number): string {
  return '≈ ' + amount + ' USD'
}

export function truncateAddress(address: string): string {
  return address.slice(0, 8) + '...' + address.slice(-6)
}

// ─── WELE CREA — Types TypeScript ────────────────────────────────────────────

export type Plan = 'free' | 'starter' | 'pro' | 'business'
export type ProjectStatus = 'online' | 'building' | 'draft' | 'error'
export type ProjectType = 'website' | 'webapp' | 'ecommerce' | 'mobile' | 'software' | 'api'
export type AgentStatus = 'active' | 'busy' | 'idle' | 'error'
export type UserRole = 'admin' | 'user'
export type ButtonVariant = 'gold' | 'outline' | 'ghost' | 'danger'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  plan: Plan
  gdlWallet?: string
  gdlBalance: number
  createdAt: string
  active: boolean
}

export interface Project {
  id: string
  name: string
  type: ProjectType
  status: ProjectStatus
  url?: string
  agentsActive: number
  agentsTotal: number
  createdAt: string
  updatedAt: string
  ownerId: string
}

export interface Agent {
  id: string
  icon: string
  name: string
  desc: string
  color: string
  status?: AgentStatus
  load?: number
  requestsPerHour?: number
  errors?: number
  version?: string
  task?: string
}

export interface GdlTransaction {
  id: string
  from: string
  plan: Plan
  amountGDL: number
  amountUSD: number
  txHash: string
  status: 'confirmed' | 'pending' | 'failed'
  date: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface FaqCategory {
  category: string
  items: FaqItem[]
}

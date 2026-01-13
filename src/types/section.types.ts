export interface Section {
  id: string
  title: string
  subtitle?: string
  order: number
}

export interface Industry {
  id: string
  name: string
  description: string
  isHighlighted?: boolean
  icon?: string
}

export interface ValuePillar {
  id: string
  title: string
  description: string
  icon?: string
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
}

export interface ClientType {
  id: string
  type: string
  description: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}

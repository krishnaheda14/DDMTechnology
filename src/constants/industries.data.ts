import { Industry } from '@types/section.types'

export const INDUSTRIES: Industry[] = [
  {
    id: 'retail-trade',
    name: 'Retail & Trade',
    description: 'Advanced solutions for retail operations and wholesale trade management',
    isHighlighted: false,
    icon: '🏪',
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Precious Metals',
    description: 'Specialized systems for jewelry manufacturers, retailers, and wholesalers',
    isHighlighted: true,
    icon: '💎',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Production planning, quality control, and supply chain optimization',
    isHighlighted: false,
    icon: '🏭',
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Supply Chain',
    description: 'Farm-to-market solutions with real-time tracking and analytics',
    isHighlighted: false,
    icon: '🌾',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Practice management and client relationship systems',
    isHighlighted: false,
    icon: '💼',
  },
]

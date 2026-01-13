import { Product } from '@types/product.types'

export const PRODUCTS: Product[] = [
  {
    id: 'jewelry-suite',
    title: 'Jewelry Business Suite',
    description: 'End-to-end management for jewelry businesses',
    features: [
      'Inventory Management',
      'Customer Relationship Management',
      'Sales & Point of Sale',
      'Advanced Analytics & Reporting',
      'Supply Chain Tracking',
      'Multi-location Support',
    ],
    isFeatured: true,
  },
  {
    id: 'custom-crm',
    title: 'Custom CRM Solutions',
    description: 'Tailored customer relationship management',
    features: [
      'Custom Workflows',
      'Integration Ready',
      'Scalable Architecture',
      'Advanced Automation',
      'Real-time Analytics',
      'Mobile Accessible',
    ],
    isFeatured: false,
  },
  {
    id: 'enterprise-erp',
    title: 'Enterprise ERP Systems',
    description: 'Unified platforms replacing fragmented tools',
    features: [
      'Financial Management',
      'Operations Integration',
      'Resource Planning',
      'Business Intelligence',
      'Multi-department Coordination',
      'Compliance & Security',
    ],
    isFeatured: false,
  },
  {
    id: 'ai-automation',
    title: 'AI-Powered Automation',
    description: 'Practical AI with measurable business impact',
    features: [
      'Intelligent Process Automation',
      'Predictive Analytics',
      'Natural Language Processing',
      'Machine Learning Models',
      'Data-Driven Insights',
      'Continuous Optimization',
    ],
    isFeatured: false,
  },
]

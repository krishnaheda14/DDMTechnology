import { Product } from '@/types/product.types'

export const PRODUCTS: Product[] = [
  {
    id: 'jewelry-suite',
    title: 'Jewelry Business Suite',
    description: 'Complete shop management for jewelers',
    features: [
      'Inventory Management',
      'Customer Records',
      'Billing & Point of Sale',
      'Sales Reports',
      'Gold Rate Tracking',
      'Multi-location Support',
    ],
    isFeatured: true,
  },
  {
    id: 'custom-crm',
    title: 'Custom CRM',
    description: 'Keep your customers and sales organized',
    features: [
      'Customer Database',
      'Lead Tracking',
      'Follow-up Reminders',
      'Quotations & Orders',
      'Sales Reports',
      'Mobile Access',
    ],
    isFeatured: false,
  },
  {
    id: 'enterprise-erp',
    title: 'Enterprise ERP',
    description: 'Connect accounts, inventory, sales, and purchases',
    features: [
      'Accounting & GST',
      'Inventory Control',
      'Purchase Management',
      'Sales & Distribution',
      'Manufacturing',
      'Business Reports',
    ],
    isFeatured: false,
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Reduce manual work with smart automation',
    features: [
      'Data Entry Automation',
      'Customer Chatbots',
      'Sales Forecasting',
      'Email & SMS Automation',
      'Auto Report Generation',
      'Workflow Automation',
    ],
    isFeatured: false,
  },
]

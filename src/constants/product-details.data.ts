import { ProductFeature } from '@components/ui/ProductModal'

interface ProductDetails {
  title: string
  subtitle: string
  features: ProductFeature[]
  uniqueFeatures: string[]
  ctaTitle: string
  ctaText: string
  imageSrc?: string
  demoMessage: string
}

export const PRODUCT_DETAILS: Record<string, ProductDetails> = {
  'jewelry-suite': {
    title: 'Jewelry Business Suite',
    subtitle: 'Everything you need to run your jewelry shop — billing, inventory, customers, reports',
    features: [
      {
        title: 'Shop Setup',
        description: 'Get started with your business details and GST',
        icon: '/assets/solutions/crm.svg',
        details: ['GST number integration', 'Custom invoice prefix', 'Multi-location support', 'Business branding'],
      },
      {
        title: 'Gold Rate Management',
        description: 'Live gold rates with automatic conversion',
        icon: '/assets/solutions/analytics.svg',
        details: ['Current market rates', '24K/22K/18K conversion', 'Rate lock for estimates', 'Price history'],
      },
      {
        title: 'Fast Billing',
        description: 'Quick billing with WhatsApp delivery',
        icon: '/assets/solutions/order.svg',
        details: ['Fast item search', 'Auto weight/purity calculation', 'Print & share on WhatsApp', 'Cash/card/UPI payments'],
      },
      {
        title: 'Stock Management',
        description: 'Track your inventory with design codes',
        icon: '/assets/solutions/inventory.svg',
        details: ['Design code tracking', 'Category-wise stock', 'Stone weight tracking', 'Making charge setup'],
      },
      {
        title: 'Quotations',
        description: 'Create estimates and convert to bills',
        icon: '/assets/solutions/order.svg',
        details: ['Quick estimate creation', 'One-click bill conversion', 'Customer quotation history', 'Price revisions'],
      },
      {
        title: 'Business Reports',
        description: 'See your sales and stock at a glance',
        icon: '/assets/solutions/analytics.svg',
        details: ['Daily/monthly sales', 'Stock aging reports', 'Low stock alerts', 'Revenue charts'],
      },
    ],
    uniqueFeatures: [
      'WhatsApp bill sharing',
      'Automatic purity conversion',
      'Design code system',
      'Quick estimate to bill',
      'Stock alerts',
      'GST-ready invoices',
    ],
    ctaTitle: 'Want to see it in action?',
    ctaText: 'Book a free demo and we will show you how it works for your jewelry business',
    imageSrc: '/jewellerysystem.png',
    demoMessage: 'Interested in Jewelry Business Suite Demo',
  },
  'custom-crm': {
    title: 'Custom CRM',
    subtitle: 'Keep track of your customers, follow-ups, and sales in one place',
    features: [
      {
        title: 'Customer Database',
        description: 'Organize all your customer information',
        icon: '/assets/solutions/crm.svg',
        details: ['Contact details & history', 'Purchase records', 'Payment tracking', 'Customer groups'],
      },
      {
        title: 'Lead Management',
        description: 'Track inquiries from first call to closing',
        icon: '/assets/solutions/order.svg',
        details: ['Lead capture forms', 'Status tracking', 'Pipeline view', 'Conversion reports'],
      },
      {
        title: 'Follow-up Reminders',
        description: 'Never miss a follow-up with automatic alerts',
        icon: '/assets/solutions/analytics.svg',
        details: ['Smart reminders', 'Call scheduling', 'WhatsApp integration', 'Task assignments'],
      },
      {
        title: 'Quotation & Orders',
        description: 'Create quotes and track orders easily',
        icon: '/assets/solutions/inventory.svg',
        details: ['Quick quotations', 'Order tracking', 'Payment follow-ups', 'Delivery status'],
      },
      {
        title: 'Sales Reports',
        description: 'Understand your sales performance',
        icon: '/assets/solutions/analytics.svg',
        details: ['Monthly targets vs achieved', 'Customer-wise sales', 'Product performance', 'Team performance'],
      },
      {
        title: 'Mobile Access',
        description: 'Work from anywhere on any device',
        icon: '/assets/solutions/order.svg',
        details: ['Mobile-friendly interface', 'Offline data access', 'Quick updates on the go', 'Real-time sync'],
      },
    ],
    uniqueFeatures: [
      'Works on mobile & desktop',
      'WhatsApp reminders',
      'Custom fields for your business',
      'Payment reminders',
      'Team collaboration',
      'Indian GST support',
    ],
    ctaTitle: 'Ready to organize your customer data?',
    ctaText: 'Let us discuss how we can customize this for your business needs',
    demoMessage: 'Interested in Custom CRM Solution',
  },
  'enterprise-erp': {
    title: 'Enterprise ERP',
    subtitle: 'Connect your entire business — accounts, inventory, sales, purchases, and more',
    features: [
      {
        title: 'Accounting & Finance',
        description: 'Complete accounting with GST compliance',
        icon: '/assets/solutions/analytics.svg',
        details: ['Ledger & vouchers', 'GST returns ready', 'Payment tracking', 'Bank reconciliation'],
      },
      {
        title: 'Inventory Control',
        description: 'Manage stock across warehouses',
        icon: '/assets/solutions/inventory.svg',
        details: ['Multi-location stock', 'Stock transfers', 'Minimum stock alerts', 'Batch & expiry tracking'],
      },
      {
        title: 'Purchase Management',
        description: 'Track suppliers and purchase orders',
        icon: '/assets/solutions/order.svg',
        details: ['Vendor management', 'Purchase orders', 'GRN & quality check', 'Payment schedules'],
      },
      {
        title: 'Sales & Distribution',
        description: 'Manage orders from inquiry to delivery',
        icon: '/assets/solutions/crm.svg',
        details: ['Order booking', 'Invoice generation', 'Delivery tracking', 'Sales returns'],
      },
      {
        title: 'Manufacturing',
        description: 'Production planning and tracking',
        icon: '/assets/solutions/inventory.svg',
        details: ['BOM management', 'Work orders', 'Production tracking', 'Material consumption'],
      },
      {
        title: 'Reports & Analytics',
        description: 'Make informed decisions with real data',
        icon: '/assets/solutions/analytics.svg',
        details: ['Financial statements', 'Inventory reports', 'Sales analysis', 'Custom dashboards'],
      },
    ],
    uniqueFeatures: [
      'All departments connected',
      'GST & TDS compliant',
      'Multi-branch support',
      'Role-based access',
      'Automated workflows',
      'Real-time data',
    ],
    ctaTitle: 'Need an integrated business system?',
    ctaText: 'We will understand your process and build an ERP that fits your workflow',
    demoMessage: 'Interested in Enterprise ERP System',
  },
  'ai-automation': {
    title: 'AI & Automation',
    subtitle: 'Use technology to reduce manual work and make faster decisions',
    features: [
      {
        title: 'Data Entry Automation',
        description: 'Extract data from documents automatically',
        icon: '/assets/solutions/order.svg',
        details: ['Invoice scanning', 'Form data extraction', 'Email processing', 'Auto-filing'],
      },
      {
        title: 'Smart Chatbots',
        description: 'Handle customer queries 24/7',
        icon: '/assets/solutions/crm.svg',
        details: ['WhatsApp bots', 'Website chat', 'Order status queries', 'FAQ automation'],
      },
      {
        title: 'Sales Forecasting',
        description: 'Predict sales based on past trends',
        icon: '/assets/solutions/analytics.svg',
        details: ['Demand prediction', 'Seasonal trends', 'Stock planning', 'Target setting'],
      },
      {
        title: 'Email & SMS Automation',
        description: 'Send timely messages automatically',
        icon: '/assets/solutions/order.svg',
        details: ['Payment reminders', 'Order updates', 'Birthday wishes', 'Follow-up sequences'],
      },
      {
        title: 'Report Generation',
        description: 'Auto-generate reports on schedule',
        icon: '/assets/solutions/analytics.svg',
        details: ['Daily/weekly reports', 'Email delivery', 'Excel & PDF format', 'Custom templates'],
      },
      {
        title: 'Process Workflows',
        description: 'Automate approval and notification flows',
        icon: '/assets/solutions/inventory.svg',
        details: ['Approval chains', 'Status notifications', 'Deadline alerts', 'Task assignment'],
      },
    ],
    uniqueFeatures: [
      'Reduce manual data entry',
      'Faster customer responses',
      'Better forecasting',
      'Lower operational costs',
      'Fewer errors',
      'More time for growth',
    ],
    ctaTitle: 'Ready to automate repetitive tasks?',
    ctaText: 'Tell us what takes up your team time and we will find a solution',
    demoMessage: 'Interested in AI & Automation Solutions',
  },
}

export interface ResourceItem {
  id: string
  title: string
  description: string
  format: 'Guide' | 'Checklist' | 'Playbook' | 'Template'
  duration: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface TrustBadgeItem {
  id: string
  title: string
  subtitle: string
}

export const RESOURCES: ResourceItem[] = [
  {
    id: 'resource-1',
    title: 'Jewelry ERP Implementation Blueprint',
    description: 'A step-by-step rollout approach to modernize operations without downtime.',
    format: 'Playbook',
    duration: '12 min read',
  },
  {
    id: 'resource-2',
    title: 'Automation Opportunity Audit Checklist',
    description: 'Use this checklist to identify bottlenecks, rework loops, and hidden cost drains.',
    format: 'Checklist',
    duration: '7 min read',
  },
  {
    id: 'resource-3',
    title: 'Founder KPI Dashboard Starter Template',
    description: 'Track throughput, cash conversion, order velocity, and production health in one place.',
    format: 'Template',
    duration: '5 min setup',
  },
]

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does implementation usually take?',
    answer:
      'Most projects are delivered in 4 to 10 weeks depending on complexity, integrations, and data migration scope.',
  },
  {
    id: 'faq-2',
    question: 'Can we keep our current tools and still automate?',
    answer:
      'Yes. We design API-first workflows so you can preserve critical systems and layer automation where it adds the most value.',
  },
  {
    id: 'faq-3',
    question: 'What ROI can we realistically expect?',
    answer:
      'Teams typically recover 25% to 60% of manual effort in the first phase and improve reporting speed by 2x to 4x.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide post-launch support?',
    answer:
      'Yes. We offer proactive monitoring, enhancements, and founder-priority support with clear SLAs.',
  },
]

export const TRUST_BADGES: TrustBadgeItem[] = [
  {
    id: 'trust-1',
    title: 'Enterprise Security Controls',
    subtitle: 'Encrypted data flows, role-based access, and audit trails.',
  },
  {
    id: 'trust-2',
    title: 'Compliance-Ready Architecture',
    subtitle: 'Design principles aligned for policy, traceability, and review.',
  },
  {
    id: 'trust-3',
    title: 'Uptime & Continuity Focus',
    subtitle: 'Resilient infrastructure planning with operational fail-safes.',
  },
  {
    id: 'trust-4',
    title: 'Founder-Led Delivery',
    subtitle: 'Direct decisions, faster response cycles, and execution clarity.',
  },
]

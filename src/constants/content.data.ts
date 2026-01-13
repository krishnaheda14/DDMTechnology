import { ValuePillar, ProcessStep, ClientType } from '@/types/section.types'

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: 'built-for-founders',
    title: 'Built for Founders',
    description:
      'We understand the founder mindset. Every solution is crafted to give you control, clarity, and the freedom to focus on growth.',
  },
  {
    id: 'luxury-execution',
    title: 'Luxury in Execution',
    description:
      'Premium quality in every detail. From elegant interfaces to robust architecture, we deliver software that reflects the excellence of your business.',
  },
  {
    id: 'founder-led',
    title: 'Founder-Led Accountability',
    description:
      'Direct access to leadership. Your project is guided by experienced founders who understand business strategy, not just code.',
  },
  {
    id: 'scalable-design',
    title: 'Scalable by Design',
    description:
      'Built to grow with you. Our systems are architected for expansion, ensuring your software investment compounds over time.',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'understanding',
    step: 1,
    title: 'Business Understanding',
    description:
      'Deep dive into your operations, pain points, and growth objectives to design the optimal solution.',
  },
  {
    id: 'architecture',
    step: 2,
    title: 'System Architecture',
    description:
      'Strategic planning of your business operating system with scalability and integration in mind.',
  },
  {
    id: 'development',
    step: 3,
    title: 'Development & Integration',
    description:
      'Expert implementation with rigorous testing and seamless integration with your existing tools.',
  },
  {
    id: 'optimization',
    step: 4,
    title: 'Launch & Continuous Optimization',
    description:
      'Smooth deployment with ongoing refinement to maximize efficiency and business impact.',
  },
]

export const CLIENT_TYPES: ClientType[] = [
  {
    id: 'founders',
    type: 'Founders',
    description: 'Building your first business operating system',
  },
  {
    id: 'growth-stage',
    type: 'Growth-Stage Businesses',
    description: 'Scaling operations and removing bottlenecks',
  },
  {
    id: 'enterprises',
    type: 'Enterprises',
    description: 'Modernizing legacy systems for competitive advantage',
  },
  {
    id: 'industry-operators',
    type: 'Industry-Specific Operators',
    description: 'Custom solutions for unique business models',
  },
]

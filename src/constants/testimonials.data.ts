export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  image?: string
  testimonial: string
  metric?: string
  rating: number
}

export interface SuccessMetric {
  id: string
  value: string
  label: string
  icon?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Akshay Patel',
    company: 'VelocityTrading Inc.',
    role: 'Founder & CEO',
    testimonial:
      'Bizmation transformed our jewelry trading operations completely. What used to take 8 hours per day now takes 2. Their team understood our business inside-out.',
    metric: '75% Time Saved',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Priya Sharma',
    company: 'LuxeRetail Co.',
    role: 'Operations Director',
    testimonial:
      'The software is intuitive, powerful, and built specifically for jewelry retail. The ROI was evident within the first month. Highly recommend Bizmation.',
    metric: '60% Cost Reduction',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Rajesh Kumar',
    company: 'Mumbai Jewels',
    role: 'Managing Director',
    testimonial:
      'Working with Bizmation felt like partnering with experts who genuinely cared about our success. The founder-led approach made all the difference.',
    metric: '3x Productivity',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Neha Gupta',
    company: 'Global Trade Systems',
    role: 'Business Manager',
    testimonial:
      'Exceptional attention to detail and scalability. The system grows with your business without losing performance. Outstanding support team.',
    metric: '40% Error Reduction',
    rating: 5,
  },
]

export const SUCCESS_METRICS: SuccessMetric[] = [
  {
    id: 'metric-1',
    value: '50+',
    label: 'Happy Clients',
  },
  {
    id: 'metric-2',
    value: '₹10Cr+',
    label: 'Processing Power',
  },
  {
    id: 'metric-3',
    value: '99.9%',
    label: 'Uptime',
  },
  {
    id: 'metric-4',
    value: '24/7',
    label: 'Support',
  },
  {
    id: 'metric-5',
    value: '15+ Yrs',
    label: 'Combined Expertise',
  },
  {
    id: 'metric-6',
    value: '100%',
    label: 'Satisfaction Rate',
  },
]

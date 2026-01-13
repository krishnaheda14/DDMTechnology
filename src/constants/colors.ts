export const COLORS = {
  primary: '#0A1A2F',
  secondary: '#D4AF37',
  accentGrey: '#AEB7C2',
  charcoal: '#1C1C1C',
  white: '#FFFFFF',
  offWhite: '#F8F9FA',
} as const

export type ColorKey = keyof typeof COLORS

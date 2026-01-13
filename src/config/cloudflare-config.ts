// Cloudflare-specific configurations
export const CLOUDFLARE_CONFIG = {
  // Cache settings for Cloudflare
  cacheControl: {
    staticAssets: 'public, max-age=31536000, immutable',
    htmlFiles: 'public, max-age=0, must-revalidate',
    apiRoutes: 'no-cache',
  },

  // Security headers for Cloudflare
  securityHeaders: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  },

  // Performance settings
  performance: {
    enableBrotli: true,
    enableGzip: true,
    minifyHTML: true,
    minifyCSS: true,
    minifyJS: true,
  },

  // CDN settings
  cdn: {
    enableAutoMinify: true,
    enableRailgun: false,
    enableMirage: true,
    enablePolish: 'lossless',
  },
} as const

export default CLOUDFLARE_CONFIG

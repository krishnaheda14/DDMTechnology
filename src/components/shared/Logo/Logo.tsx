import React, { useEffect, useState } from 'react'
import styles from './Logo.module.css'

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'dark' }) => {
  const [mounted, setMounted] = useState(false)
  const logoSrc = `${import.meta.env.BASE_URL}logo12.png`
  const fallbackLogoSrc = `${import.meta.env.BASE_URL}logo.png`

  useEffect(() => {
    // trigger entrance animation once on mount
    setMounted(true)
  }, [])

  return (
    <div className={`${styles.logo} ${styles[size]} ${styles[variant]} ${mounted ? styles.animate : ''}`}>
      <div className={styles.logoIcon}>
        <img
          src={logoSrc}
          alt="Bizmation"
          className={styles.logoImage}
          onError={(e) => {
            const target = e.currentTarget
            if (!target.src.endsWith('logo.png')) {
              target.src = fallbackLogoSrc
            }
          }}
        />
      </div>
      <div className={styles.logoText}>
        <div className={styles.companyName}>Bizmation Infotech Pvt Ltd.</div>
        <div className={styles.tagline}>Automating Growth</div>
      </div>
    </div>
  )
}

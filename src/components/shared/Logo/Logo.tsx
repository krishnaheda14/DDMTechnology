import React, { useEffect, useState } from 'react'
import styles from './Logo.module.css'

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'dark' }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // trigger entrance animation once on mount
    setMounted(true)
  }, [])

  return (
    <div className={`${styles.logo} ${styles[size]} ${styles[variant]} ${mounted ? styles.animate : ''}`}>
      <div className={styles.logoIcon}>
        <img src="/logo.jpeg" alt="Bizmation" className={styles.logoImage} />
      </div>
      <div className={styles.logoText}>
        <div className={styles.companyName}>Bizmation</div>
        <div className={styles.tagline}>Automating Growth</div>
      </div>
    </div>
  )
}

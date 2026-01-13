import React from 'react'
import styles from './Logo.module.css'
import logoUrl from '../../../../logo.png'

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'dark' }) => {
  return (
    <div className={`${styles.logo} ${styles[size]} ${styles[variant]}`}>
      <div className={styles.logoIcon}>
        <img src={logoUrl} alt="DDM Infotech" className={styles.logoImage} />
      </div>
      <div className={styles.logoText}>
        <div className={styles.companyName}>DDM INFOTECH</div>
        <div className={styles.tagline}>Automating Growth</div>
      </div>
    </div>
  )
}

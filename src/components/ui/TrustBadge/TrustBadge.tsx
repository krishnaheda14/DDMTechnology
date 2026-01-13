import React from 'react'
import styles from './TrustBadge.module.css'

export interface TrustBadgeProps {
  text: string
  icon?: string
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ text, icon }) => {
  return (
    <div className={styles.badge}>
      <span className={styles.bullet}>●</span>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

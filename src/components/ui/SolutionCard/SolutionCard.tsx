import React from 'react'
import styles from './SolutionCard.module.css'

export interface SolutionCardProps {
  title: string
  subtitle: string
  icon: string
  gradient: string
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ title, subtitle, icon, gradient }) => {
  return (
    <div className={styles.card} style={{ background: gradient }}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.overlay}></div>
    </div>
  )
}

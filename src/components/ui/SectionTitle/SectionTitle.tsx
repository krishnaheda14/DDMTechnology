import React from 'react'
import styles from './SectionTitle.module.css'

export interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  accent?: boolean
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  accent = true,
}) => {
  const containerClasses = [styles.container, styles[align]].filter(Boolean).join(' ')

  return (
    <div className={containerClasses}>
      {accent && <div className={styles.accent}></div>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

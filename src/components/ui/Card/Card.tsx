import React from 'react'
import styles from './Card.module.css'

export interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'featured' | 'outlined'
  hoverable?: boolean
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    hoverable ? styles.hoverable : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={cardClasses}>{children}</div>
}

export interface CardHeaderProps {
  children: React.ReactNode
  icon?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, icon }) => {
  return (
    <div className={styles.cardHeader}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </div>
  )
}

export interface CardBodyProps {
  children: React.ReactNode
}

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <div className={styles.cardBody}>{children}</div>
}

export interface CardFooterProps {
  children: React.ReactNode
}

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div className={styles.cardFooter}>{children}</div>
}

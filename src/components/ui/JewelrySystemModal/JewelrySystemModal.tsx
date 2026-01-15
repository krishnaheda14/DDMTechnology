import React, { useEffect } from 'react'
import styles from './JewelrySystemModal.module.css'

export interface JewelrySystemModalProps {
  isOpen: boolean
  onClose: () => void
}

export const JewelrySystemModal: React.FC<JewelrySystemModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const features = [
    {
      title: 'Shop Profile Setup',
      description: 'Complete business configuration with GST integration and invoice customization',
      icon: '🏪',
      details: ['Multi-location support', 'GST compliance', 'Custom invoice prefix', 'Business branding'],
    },
    {
      title: 'Gold Rate Management',
      description: 'Real-time gold rate tracking with automatic purity conversion',
      icon: '💰',
      details: ['Live market rates', '24K/22K/18K conversion', 'Rate lock feature', 'Historical tracking'],
    },
    {
      title: 'Sales & Billing',
      description: 'Lightning-fast billing with WhatsApp integration',
      icon: '📄',
      details: ['Quick item search', 'Auto calculations', 'Print & WhatsApp', 'Multiple payment modes'],
    },
    {
      title: 'Inventory Management',
      description: 'Complete stock control with design code tracking',
      icon: '📦',
      details: ['Design code system', 'Category management', 'Stone weight tracking', 'Making charges'],
    },
    {
      title: 'Estimate Creation',
      description: 'Professional quotations with one-click conversion to bills',
      icon: '📋',
      details: ['Quick estimates', 'Convert to bill', 'Customer tracking', 'Revision history'],
    },
    {
      title: 'Reports Dashboard',
      description: 'Comprehensive analytics with visual insights',
      icon: '📊',
      details: ['Sales overview', 'Stock aging', 'Low/dead stock alerts', 'Revenue charts'],
    },
  ]

  const uniqueFeatures = [
    'WhatsApp bill delivery',
    'Automatic purity conversion',
    'Design code tracking',
    'One-click estimate to bill',
    'Real-time stock alerts',
    'GST-compliant invoicing',
  ]

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>Jewelry ERP System</h2>
            <p className={styles.subtitle}>Complete business automation for jewelry retailers</p>
          </div>
          <div className={styles.headerImage}>
            <img src="/jewellerysystem.png" loading="lazy" alt="Jewelry ERP System" className={styles.systemImage} />
          </div>
        </div>

        <div className={styles.uniqueSection}>
          <h3 className={styles.sectionTitle}>Why Choose Our System?</h3>
          <div className={styles.uniqueGrid}>
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className={styles.uniqueItem}>
                <span className={styles.checkmark}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.featuresSection}>
          <h3 className={styles.sectionTitle}>Core Features</h3>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
                <ul className={styles.featureDetails}>
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Ready to Transform Your Business?</h3>
          <p className={styles.ctaText}>Schedule a free demo and see how our system can automate your jewelry retail operations</p>
          <button className={styles.ctaButton} onClick={onClose}>
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  )
}

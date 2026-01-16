import React, { useEffect } from 'react'
import styles from './JewelrySystemModal.module.css'
import jewelleryImg from '../../../../jewellerysystem.png'

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
      icon: '/assets/solutions/crm.svg',
      details: ['Multi-location support', 'GST compliance', 'Custom invoice prefix', 'Business branding'],
    },
    {
      title: 'Gold Rate Management',
      description: 'Real-time gold rate tracking with automatic purity conversion',
      icon: '/assets/solutions/analytics.svg',
      details: ['Live market rates', '24K/22K/18K conversion', 'Rate lock feature', 'Historical tracking'],
    },
    {
      title: 'Sales & Billing',
      description: 'Lightning-fast billing with WhatsApp integration',
      icon: '/assets/solutions/order.svg',
      details: ['Quick item search', 'Auto calculations', 'Print & WhatsApp', 'Multiple payment modes'],
    },
    {
      title: 'Inventory Management',
      description: 'Complete stock control with design code tracking',
      icon: '/assets/solutions/inventory.svg',
      details: ['Design code system', 'Category management', 'Stone weight tracking', 'Making charges'],
    },
    {
      title: 'Estimate Creation',
      description: 'Professional quotations with one-click conversion to bills',
      icon: '/assets/solutions/order.svg',
      details: ['Quick estimates', 'Convert to bill', 'Customer tracking', 'Revision history'],
    },
    {
      title: 'Reports Dashboard',
      description: 'Comprehensive analytics with visual insights',
      icon: '/assets/solutions/analytics.svg',
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
            <h2 className={styles.title}>Jewelry Business Suite</h2>
            <p className={styles.subtitle}>Simple tools to run your shop — Billing • Inventory • Customers • Reports</p>
          </div>
          <div className={styles.headerImage}>
            <img src={jewelleryImg} loading="lazy" alt="Jewelry ERP System" className={styles.systemImage} />
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
                {typeof feature.icon === 'string' && feature.icon.startsWith('/') ? (
                  <img src={feature.icon} alt={`${feature.title} icon`} className={styles.featureIconImage} />
                ) : (
                  <div className={styles.featureIcon}>{feature.icon}</div>
                )}
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
          <button
            className={styles.ctaButton}
            onClick={() => {
              // Ask user for a few optional details, then redirect to WhatsApp (iOS-safe)
              const name = window.prompt('Please enter your name for the demo request (optional)') || ''
              const phone = window.prompt('Please enter your phone number (optional)') || ''
              const pref = window.prompt('Preferred demo date/time (optional)') || ''

              const lines = [
                'Demo Request - Jewelry ERP System',
                name ? `Name: ${name}` : '',
                phone ? `Phone: ${phone}` : '',
                pref ? `Preferred time: ${pref}` : '',
                '',
                'Please contact me to schedule the demo.'
              ].filter(Boolean).join('\n')

              const phoneNumber = '+919890000867'
              const waUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(lines)}`

              // iOS-safe redirect (same logic used in contact form)
              const isIOS = (() => {
                const ua = navigator.userAgent || ''
                const platform = navigator.platform || ''
                const iOSPlatform = /iPad|iPhone|iPod/.test(platform)
                const iPadOS = ua.includes('Macintosh') && 'ontouchend' in document
                return iOSPlatform || iPadOS
              })()

              if (isIOS) {
                window.location.href = waUrl
              } else {
                const win = window.open(waUrl, '_blank')
                if (!win) window.location.href = waUrl
              }
            }}
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  )
}

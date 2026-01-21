import React, { useEffect, useState } from 'react'
import styles from './ProductModal.module.css'

export interface ProductFeature {
  title: string
  description: string
  icon?: string
  details: string[]
}

export interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  productId: string
  title: string
  subtitle: string
  features: ProductFeature[]
  uniqueFeatures: string[]
  ctaTitle: string
  ctaText: string
  imageSrc?: string
  demoMessage: string
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  features,
  uniqueFeatures,
  ctaTitle,
  ctaText,
  imageSrc,
  demoMessage,
}) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false)

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
      if (e.key === 'Escape') {
        if (isImageZoomed) {
          setIsImageZoomed(false)
        } else {
          onClose()
        }
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, isImageZoomed, onClose])

  if (!isOpen) return null

  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            ✕
          </button>

          <div className={styles.header}>
            <div className={styles.headerContent}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {imageSrc && (
              <div className={styles.headerImage}>
                <img
                  src={imageSrc}
                  alt={title}
                  className={styles.systemImage}
                  onClick={() => setIsImageZoomed(true)}
                  title="Click to zoom"
                />
              </div>
            )}
          </div>

          <div className={styles.uniqueSection}>
            <h3 className={styles.sectionTitle}>Key Benefits</h3>
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
            <h3 className={styles.sectionTitle}>What You Get</h3>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  {feature.icon && (
                    <img src={feature.icon} alt={`${feature.title} icon`} className={styles.featureIconImage} />
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
            <h3 className={styles.ctaTitle}>{ctaTitle}</h3>
            <p className={styles.ctaText}>{ctaText}</p>
            <button
              className={styles.ctaButton}
              onClick={() => {
                const name = window.prompt('Your name (optional)') || ''
                const phone = window.prompt('Your phone number (optional)') || ''
                const pref = window.prompt('When would you like us to call? (optional)') || ''

                const lines = [
                  demoMessage,
                  name ? `Name: ${name}` : '',
                  phone ? `Phone: ${phone}` : '',
                  pref ? `Preferred time: ${pref}` : '',
                  '',
                  'Please get in touch to discuss this.',
                ]
                  .filter(Boolean)
                  .join('\n')

                const phoneNumber = '+919890000867'
                const waUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(lines)}`

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
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {isImageZoomed && imageSrc && (
        <div className={styles.zoomOverlay} onClick={() => setIsImageZoomed(false)}>
          <button className={styles.zoomClose} onClick={() => setIsImageZoomed(false)} aria-label="Close zoom">
            ✕
          </button>
          <img src={imageSrc} alt={title} className={styles.zoomedImage} />
        </div>
      )}
    </>
  )
}

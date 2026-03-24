import React, { useEffect, useState } from 'react'
import styles from './StickyMobileCTA.module.css'
import { scrollToSection } from '@utils/scroll'

export const StickyMobileCTA: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const triggerPoint = window.innerHeight * 0.35
      setVisible(window.scrollY > triggerPoint)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className={styles.wrapper} role="complementary" aria-label="Quick consultation actions">
      <button className={styles.primary} onClick={() => scrollToSection('contact')}>
        Book Consultation
      </button>
      <button className={styles.secondary} onClick={() => scrollToSection('calculator')}>
        Check ROI
      </button>
    </div>
  )
}

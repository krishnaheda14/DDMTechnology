import React, { useEffect, useState } from 'react'
import styles from './Navigation.module.css'
import { SITE_CONFIG } from '@constants/site.config'
import { scrollToSection } from '@utils/scroll'

interface NavigationProps {
  onNavClick?: () => void
}

export const Navigation: React.FC<NavigationProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '')
    onNavClick?.()
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  return (
    <>
      <button
        className={styles.mobileToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          {SITE_CONFIG.navigation.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={styles.navLink}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && <button className={styles.backdrop} onClick={() => setIsOpen(false)} aria-label="Close navigation" />}
    </>
  )
}

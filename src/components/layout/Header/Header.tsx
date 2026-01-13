import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Logo } from '@components/shared/Logo'
import { Navigation } from './Navigation'
import { Button } from '@components/ui/Button'
import { scrollToSection } from '@utils/scroll'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = () => {
    scrollToSection('contact')
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo size="md" variant="light" />
        </div>

        <Navigation />

        <div className={styles.cta}>
          <Button variant="primary" size="sm" onClick={handleContactClick}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

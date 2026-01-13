import React from 'react'
import styles from './Footer.module.css'
import { Logo } from '@components/shared/Logo'
import { SITE_CONFIG } from '@constants/site.config'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo size="md" variant="light" />
            <p className={styles.description}>{SITE_CONFIG.description}</p>
          </div>

          <div className={styles.contact}>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className={styles.link}>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>{SITE_CONFIG.location}</li>
            </ul>
          </div>

          <div className={styles.quick}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.linkList}>
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Building the future of business automation with precision and excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}

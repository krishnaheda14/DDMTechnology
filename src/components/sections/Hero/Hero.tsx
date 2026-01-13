import React from 'react'
import styles from './Hero.module.css'
import { Button } from '@components/ui/Button'
import { TrustBadge } from '@components/ui/TrustBadge'
import { scrollToSection } from '@utils/scroll'

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badges}>
            <TrustBadge text="Founder-Led" />
            <TrustBadge text="Enterprise-Grade" />
            <TrustBadge text="Scalable by Design" />
          </div>

          <div className={styles.brandName}>DDM INFOTECH</div>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Automating Growth</span>
          </h1>

          <p className={styles.subtitle}>
            We build intelligent systems that remove friction, increase control, and enable
            sustainable growth
          </p>

          <div className={styles.cta}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Schedule Your Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('products')}
            >
              View Our Solutions
            </Button>
          </div>

          <div className={styles.tagline}>
            <p>
              High-performance software that automates operations, improves decision-making, and
              scales businesses with precision
            </p>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.grid}>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.mouse}>
          <span className={styles.wheel}></span>
        </span>
      </div>
    </section>
  )
}

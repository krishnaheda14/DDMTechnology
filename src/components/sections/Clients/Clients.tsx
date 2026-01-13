import React from 'react'
import styles from './Clients.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { CLIENT_TYPES } from '@constants/content.data'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

export const Clients: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className={styles.clients} id="clients">
      <div className={styles.container}>
        <SectionTitle
          title="Who We Work With"
          subtitle="Partnering with ambitious businesses ready to scale"
        />

        <div
          ref={ref}
          className={`${styles.grid} ${isVisible ? styles.visible : ''}`}
        >
          {CLIENT_TYPES.map((client, index) => (
            <div
              key={client.id}
              className={`${styles.clientCard} ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={styles.clientType}>{client.type}</h3>
              <p className={styles.clientDescription}>{client.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.trustSection}>
          <div className={styles.trustHeading}>
            <h3 className={styles.trustTitle}>Built on Trust & Excellence</h3>
            <p className={styles.trustSubtitle}>
              Every project is an opportunity to build lasting partnerships
            </p>
          </div>
          <div className={styles.trustPoints}>
            <div className={styles.trustPoint}>
              <div className={styles.trustIcon}>🔒</div>
              <div className={styles.trustLabel}>Enterprise-Grade Security</div>
            </div>
            <div className={styles.trustPoint}>
              <div className={styles.trustIcon}>⚡</div>
              <div className={styles.trustLabel}>High-Performance Systems</div>
            </div>
            <div className={styles.trustPoint}>
              <div className={styles.trustIcon}>🤝</div>
              <div className={styles.trustLabel}>Dedicated Support</div>
            </div>
            <div className={styles.trustPoint}>
              <div className={styles.trustIcon}>📈</div>
              <div className={styles.trustLabel}>Measurable Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

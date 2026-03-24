import React from 'react'
import styles from './TrustCenter.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { TRUST_BADGES } from '@constants/engagement.data'

export const TrustCenter: React.FC = () => {
  return (
    <section className={styles.trustCenter} id="trust">
      <div className={styles.container}>
        <SectionTitle
          title="Trust & Credibility"
          subtitle="Built for mission-critical operations where reliability matters"
        />

        <div className={styles.metricsRow}>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>99.9%</span>
            <span className={styles.metricLabel}>Availability Target</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>24/7</span>
            <span className={styles.metricLabel}>Priority Support</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>50+</span>
            <span className={styles.metricLabel}>Business Deployments</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>100%</span>
            <span className={styles.metricLabel}>Founder Oversight</span>
          </div>
        </div>

        <div className={styles.badgeGrid}>
          {TRUST_BADGES.map((badge) => (
            <article key={badge.id} className={styles.badgeCard}>
              <h3>{badge.title}</h3>
              <p>{badge.subtitle}</p>
            </article>
          ))}
        </div>

        <div className={styles.guaranteeBox}>
          <h3 className={styles.guaranteeTitle}>Delivery Guarantees</h3>
          <ul className={styles.guaranteeList}>
            <li>Transparent milestone-based execution with weekly progress reviews.</li>
            <li>Dedicated deployment and handover support for operational continuity.</li>
            <li>Performance baseline tracking to validate measurable business outcomes.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

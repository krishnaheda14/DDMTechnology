import React from 'react'
import styles from './Industries.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { INDUSTRIES } from '@constants/industries.data'

export const Industries: React.FC = () => {
  return (
    <section className={styles.industries} id="industries">
      <div className={styles.container}>
        <SectionTitle
          title="Industries We Serve"
          subtitle="Specialized solutions for diverse business sectors"
        />

        <div className={styles.grid}>
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className={`${styles.industryCard} ${
                industry.isHighlighted ? styles.highlighted : ''
              }`}
            >
              <h3 className={styles.industryName}>{industry.name}</h3>
              <p className={styles.industryDescription}>{industry.description}</p>
              {industry.isHighlighted && (
                <span className={styles.badge}>Specialty</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

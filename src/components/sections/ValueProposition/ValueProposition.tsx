import React from 'react'
import styles from './ValueProposition.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { VALUE_PILLARS } from '@constants/content.data'

export const ValueProposition: React.FC = () => {
  return (
    <section className={styles.value} id="value">
      <div className={styles.container}>
        <SectionTitle
          title="Why Bizmation"
          subtitle="Building software with precision, accountability, and excellence"
        />

        <div className={styles.grid}>
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className={styles.pillar}
            >
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.founderStatement}>
          <div className={styles.quote}>
            <p className={styles.quoteText}>
              "At Bizmation, we don't just write code , we architect growth systems. Every
              solution we build is designed with the founder's mindset: scalable, measurable, and
              built to compound over time."
            </p>
            <div className={styles.quoteAuthor}>
              <div className={styles.authorName}>- Bizmation Leadership</div>
              <div className={styles.authorTitle}>Founder-Led Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

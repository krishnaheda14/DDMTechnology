import React from 'react'
import styles from './ValueProposition.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { VALUE_PILLARS } from '@constants/content.data'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

export const ValueProposition: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className={`${styles.value} reveal-on-scroll`} id="value">
      <div className={styles.container}>
        <SectionTitle
          title="Why DDM Infotech"
          subtitle="Building software with precision, accountability, and excellence"
        />

        <div
          ref={ref}
          className={`${styles.grid} ${isVisible ? styles.visible : ''} reveal-on-scroll delay-1`}
        >
          {VALUE_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`${styles.pillar} ${isVisible ? 'animate-slide-up' : ''} reveal-on-scroll delay-${Math.min(3, (index % 3) + 1)}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.founderStatement} reveal-on-scroll delay-2`}>
          <div className={styles.quote}>
            <p className={styles.quoteText}>
              "At DDM Infotech, we don't just write code—we architect growth systems. Every
              solution we build is designed with the founder's mindset: scalable, measurable, and
              built to compound over time."
            </p>
            <div className={styles.quoteAuthor}>
              <div className={styles.authorName}>— DDM Infotech Leadership</div>
              <div className={styles.authorTitle}>Founder-Led Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import styles from './Approach.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { PROCESS_STEPS } from '@constants/content.data'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

export const Approach: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className={styles.approach} id="approach">
      <div className={styles.container}>
        <SectionTitle
          title="Our Approach"
          subtitle="A proven process for delivering exceptional business software"
        />

        <div
          ref={ref}
          className={`${styles.timeline} ${isVisible ? styles.visible : ''}`}
        >
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`${styles.step} ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={styles.stepNumber}>{step.step}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < PROCESS_STEPS.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.philosophy}>
          <div className={styles.philosophyContent}>
            <h3 className={styles.philosophyTitle}>Technology Philosophy</h3>
            <p className={styles.philosophyText}>
              Modern, secure, and scalable technologies selected specifically for long-term
              performance and reliability. We leverage industry-leading frameworks and proven
              architectures to ensure your software investment delivers sustained value.
            </p>
            <ul className={styles.techList}>
              <li>Cloud-native architecture for scalability</li>
              <li>Enterprise-grade security protocols</li>
              <li>API-first design for seamless integrations</li>
              <li>Performance optimization at every layer</li>
              <li>Continuous monitoring and updates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

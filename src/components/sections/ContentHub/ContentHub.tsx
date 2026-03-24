import React, { useState } from 'react'
import styles from './ContentHub.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Button } from '@components/ui/Button'
import { scrollToSection } from '@utils/scroll'
import { FAQS, RESOURCES } from '@constants/engagement.data'

export const ContentHub: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0]?.id ?? '')

  return (
    <section className={styles.contentHub} id="insights">
      <div className={styles.container}>
        <SectionTitle
          title="Insights, FAQs & Decision Support"
          subtitle="Practical content for founders evaluating automation"
        />

        <div className={styles.grid}>
          <div className={styles.resourcesPanel}>
            <h3 className={styles.panelTitle}>Featured Resources</h3>
            <div className={styles.resourceList}>
              {RESOURCES.map((resource) => (
                <article key={resource.id} className={styles.resourceCard}>
                  <div className={styles.resourceMeta}>
                    <span className={styles.resourceFormat}>{resource.format}</span>
                    <span className={styles.resourceTime}>{resource.duration}</span>
                  </div>
                  <h4 className={styles.resourceTitle}>{resource.title}</h4>
                  <p className={styles.resourceDescription}>{resource.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.faqPanel}>
            <h3 className={styles.panelTitle}>Frequently Asked Questions</h3>
            <div className={styles.faqList}>
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id
                return (
                  <article key={faq.id} className={styles.faqItem}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && <p className={styles.faqAnswer}>{faq.answer}</p>}
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className={styles.leadMagnet}>
          <div>
            <h3 className={styles.leadTitle}>Get the 90-Day Automation Roadmap</h3>
            <p className={styles.leadText}>
              Receive a personalized rollout blueprint with priority automations, expected ROI, and
              implementation milestones.
            </p>
          </div>
          <Button variant="primary" size="lg" onClick={() => scrollToSection('contact')}>
            Request My Roadmap
          </Button>
        </div>
      </div>
    </section>
  )
}

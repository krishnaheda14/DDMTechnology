import React from 'react'
import styles from './Testimonials.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { TESTIMONIALS, SUCCESS_METRICS } from '@constants/testimonials.data'

export const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`${styles.star} ${i < rating ? styles.filled : ''}`}>
        ★
      </span>
    ))
  }

  return (
    <>
      {/* Success Metrics Section */}
      <section className={styles.metrics}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>
            {SUCCESS_METRICS.map((metric) => (
              <div key={metric.id} className={styles.metricCard}>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Real results from businesses we've transformed"
          />

          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.stars}>{renderStars(testimonial.rating)}</div>
                
                <p className={styles.testimonialText}>"{testimonial.testimonial}"</p>

                <div className={styles.clientInfo}>
                  <div className={styles.clientDetails}>
                    <h4 className={styles.clientName}>{testimonial.name}</h4>
                    <p className={styles.clientRole}>{testimonial.role}</p>
                    <p className={styles.clientCompany}>{testimonial.company}</p>
                  </div>
                </div>

                {testimonial.metric && (
                  <div className={styles.metricBadge}>{testimonial.metric}</div>
                )}
              </div>
            ))}
          </div>

          {/* Trust Section */}
          <div className={styles.trustBox}>
            <div className={styles.trustContent}>
              <h3 className={styles.trustTitle}>Why Businesses Trust Bizmation</h3>
              <div className={styles.trustFeatures}>
                <div className={styles.trustFeature}>
                  <div className={styles.trustCheckmark}>✓</div>
                  <div>
                    <h4>Founder-Led</h4>
                    <p>Direct access to experienced founders who understand business strategy</p>
                  </div>
                </div>
                <div className={styles.trustFeature}>
                  <div className={styles.trustCheckmark}>✓</div>
                  <div>
                    <h4>Proven Track Record</h4>
                    <p>50+ successful implementations across jewelry, retail, and manufacturing</p>
                  </div>
                </div>
                <div className={styles.trustFeature}>
                  <div className={styles.trustCheckmark}>✓</div>
                  <div>
                    <h4>Enterprise Security</h4>
                    <p>Bank-grade encryption and compliance with industry standards</p>
                  </div>
                </div>
                <div className={styles.trustFeature}>
                  <div className={styles.trustCheckmark}>✓</div>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Dedicated support team available round the clock for your peace of mind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

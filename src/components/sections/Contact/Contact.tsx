import React, { useState } from 'react'
import styles from './Contact.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Button } from '@components/ui/Button'
import { SITE_CONFIG } from '@constants/site.config'
import { validateEmail } from '@utils/validation'
import type { ContactFormData } from '@types/section.types'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with actual submission logic
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <SectionTitle
          title="Let's Build Your Future"
          subtitle="Schedule a private consultation to discuss your business needs"
        />

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Get in Touch</h3>
              <p className={styles.infoText}>
                Ready to automate your growth? Contact us for a consultation and discover how we
                can transform your business operations.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>📧</div>
                <div className={styles.detailContent}>
                  <div className={styles.detailLabel}>Email</div>
                  <a href={`mailto:${SITE_CONFIG.email}`} className={styles.detailValue}>
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>📍</div>
                <div className={styles.detailContent}>
                  <div className={styles.detailLabel}>Location</div>
                  <div className={styles.detailValue}>{SITE_CONFIG.location}</div>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>💼</div>
                <div className={styles.detailContent}>
                  <div className={styles.detailLabel}>Consultations</div>
                  <div className={styles.detailValue}>Private & Confidential</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

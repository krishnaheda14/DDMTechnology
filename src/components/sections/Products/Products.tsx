import React, { useState } from 'react'
import styles from './Products.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card, CardHeader, CardBody } from '@components/ui/Card'
import { PRODUCTS } from '@constants/products.data'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { JewelrySystemModal } from '@components/ui/JewelrySystemModal'
import { Button } from '@components/ui/Button'

export const Products: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className={styles.products} id="products">
      <div className={styles.container}>
        <SectionTitle
          title="Business Operating Systems"
          subtitle="Clear, reliable systems for day-to-day operations"
        />

        <div
          ref={ref}
          className={`${styles.grid} ${isVisible ? styles.visible : ''}`}
        >
          {PRODUCTS.map((product, index) => {
            const isJewelry = product.id === 'jewelry-suite'
            return (
              <div
                key={product.id}
                className={`${styles.productCard} ${isVisible ? 'animate-slide-up' : ''} ${isJewelry ? styles.clickable : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={isJewelry ? () => setIsModalOpen(true) : undefined}
                role={isJewelry ? 'button' : undefined}
                tabIndex={isJewelry ? 0 : undefined}
                onKeyDown={isJewelry ? (e) => { if (e.key === 'Enter' || e.key === ' ') setIsModalOpen(true) } : undefined}
              >
                <Card variant={product.isFeatured ? 'featured' : 'default'} hoverable>
                  <CardHeader>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                  </CardHeader>
                  <CardBody>
                    <p className={styles.productDescription}>{product.description}</p>
                    <ul className={styles.featureList}>
                      {product.features.map((feature) => (
                        <li key={feature} className={styles.feature}>
                          <span className={styles.checkmark}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </div>
            )
          })}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Need something different? We build custom solutions tailored to your unique business
            needs.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="primary"
            size="lg"
            className={styles.jewelryButton}
          >
            View Our Jewelry ERP System Features
          </Button>
        </div>
      </div>

      <JewelrySystemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

import React from 'react'
import styles from './Products.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card, CardHeader, CardBody } from '@components/ui/Card'
import { PRODUCTS } from '@constants/products.data'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

export const Products: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className={styles.products} id="products">
      <div className={styles.container}>
        <SectionTitle
          title="Business Operating Systems"
          subtitle="Intelligent solutions that transform how your business operates"
        />

        <div
          ref={ref}
          className={`${styles.grid} ${isVisible ? styles.visible : ''}`}
        >
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={`${styles.productCard} ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
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
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Need something different? We build custom solutions tailored to your unique business
            needs.
          </p>
        </div>
      </div>
    </section>
  )
}

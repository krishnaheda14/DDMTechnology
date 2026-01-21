import React, { useState, useEffect } from 'react'
import styles from './Products.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card, CardHeader, CardBody } from '@components/ui/Card'
import { PRODUCTS } from '@constants/products.data'
import { PRODUCT_DETAILS } from '@constants/product-details.data'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { Button } from '@components/ui/Button'
import { ProductModal } from '@components/ui/ProductModal'

interface ProductsProps {
  isJewelryModalOpen: boolean
  setIsJewelryModalOpen: (isOpen: boolean) => void
  closeModalSignal?: number
}

export const Products: React.FC<ProductsProps> = ({ 
  isJewelryModalOpen, 
  setIsJewelryModalOpen,
  closeModalSignal
}) => {
  const { ref, isVisible } = useScrollAnimation()
  const [activeProductId, setActiveProductId] = useState<string | null>(null)

  useEffect(() => {
    if (isJewelryModalOpen && activeProductId !== 'jewelry-suite') {
      setActiveProductId('jewelry-suite')
    }
  }, [isJewelryModalOpen, activeProductId])

  useEffect(() => {
    if (closeModalSignal) {
      handleCloseModal()
    }
  }, [closeModalSignal])

  const handleProductClick = (productId: string) => {
    setActiveProductId(productId)
    if (productId === 'jewelry-suite') {
      setIsJewelryModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setActiveProductId(null)
    setIsJewelryModalOpen(false)
  }

  const activeProduct = activeProductId ? PRODUCT_DETAILS[activeProductId] : null

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
            return (
              <div
                key={product.id}
                className={`${styles.productCard} ${isVisible ? 'animate-slide-up' : ''} ${styles.clickable}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleProductClick(product.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleProductClick(product.id) }}
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
            Have specific needs? We build custom solutions for your business.
          </p>
          <Button
            onClick={() => handleProductClick('jewelry-suite')}
            variant="primary"
            size="lg"
            className={styles.jewelryButton}
          >
            Explore Jewelry Business Suite
          </Button>
        </div>
      </div>

      {activeProduct && activeProductId && (
        <ProductModal
          isOpen={true}
          onClose={handleCloseModal}
          productId={activeProductId}
          {...activeProduct}
        />
      )}
    </section>
  )
}

import React, { useEffect, useState, Suspense, lazy } from 'react'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'
import { Hero } from '@components/sections/Hero'
import { JewelrySystemModal } from '@components/ui/JewelrySystemModal'
import { addRevealAnimation, observeElements } from '@utils/animations'
import '@styles/globals.css'
import '@styles/animations.css'

// Lazy load sections for better performance
const Products = lazy(() => import('@components/sections/Products').then(m => ({ default: m.Products })))
const Industries = lazy(() => import('@components/sections/Industries').then(m => ({ default: m.Industries })))
const ValueProposition = lazy(() => import('@components/sections/ValueProposition').then(m => ({ default: m.ValueProposition })))
const Approach = lazy(() => import('@components/sections/Approach').then(m => ({ default: m.Approach })))
const Clients = lazy(() => import('@components/sections/Clients').then(m => ({ default: m.Clients })))
const Contact = lazy(() => import('@components/sections/Contact').then(m => ({ default: m.Contact })))

const App: React.FC = () => {
  const [isJewelryModalOpen, setIsJewelryModalOpen] = useState(false)
  const [closeModalSignal, setCloseModalSignal] = useState(0)

  const handleNavClick = () => {
    setIsJewelryModalOpen(false)
    setCloseModalSignal(prev => prev + 1)
  }

  useEffect(() => {
    // Add reveal animation styles
    addRevealAnimation()
    
    // Observe elements for scroll reveal
    observeElements()
    
    // Debounced observer for performance
    let timeoutId: NodeJS.Timeout
    const observer = new MutationObserver(() => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        observeElements()
      }, 300)
    })
    
    // Only observe main content area, not entire document
    const mainElement = document.querySelector('main')
    if (mainElement) {
      observer.observe(mainElement, {
        childList: true,
        subtree: true
      })
    }
    
    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])
  return (
    <div className="app">
      <Header onNavClick={handleNavClick} />
      <main>
        <Hero />
        <Suspense fallback={<div />}>
          <Products 
            isJewelryModalOpen={isJewelryModalOpen}
            setIsJewelryModalOpen={setIsJewelryModalOpen}
            closeModalSignal={closeModalSignal}
          />
        </Suspense>
        <Suspense fallback={<div />}>
          <Industries />
        </Suspense>
        <Suspense fallback={<div />}>
          <ValueProposition />
        </Suspense>
        <Suspense fallback={<div />}>
          <Approach />
        </Suspense>
        <Suspense fallback={<div />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<div />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <JewelrySystemModal 
        isOpen={isJewelryModalOpen} 
        onClose={() => setIsJewelryModalOpen(false)} 
      />
    </div>
  )
}

export default App

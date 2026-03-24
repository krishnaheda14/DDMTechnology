import React, { useEffect, useState } from 'react'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'
import { Hero } from '@components/sections/Hero'
import { Products } from '@components/sections/Products'
import { Testimonials } from '@components/sections/Testimonials'
import { ContentHub } from '@components/sections/ContentHub'
import { GrowthCalculator } from '@components/sections/GrowthCalculator'
import { TrustCenter } from '@components/sections/TrustCenter'
import { Industries } from '@components/sections/Industries'
import { ValueProposition } from '@components/sections/ValueProposition'
import { Approach } from '@components/sections/Approach'
import { Clients } from '@components/sections/Clients'
import { Contact } from '@components/sections/Contact'
import { JewelrySystemModal } from '@components/ui/JewelrySystemModal'
import { StickyMobileCTA } from '@components/ui/StickyMobileCTA'
import { addRevealAnimation, observeElements } from '@utils/animations'
import '@styles/globals.css'
import '@styles/animations.css'

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
        <Products 
          isJewelryModalOpen={isJewelryModalOpen}
          setIsJewelryModalOpen={setIsJewelryModalOpen}
          closeModalSignal={closeModalSignal}
        />
        <Testimonials />
        <ContentHub />
        <GrowthCalculator />
        <TrustCenter />
        <Industries />
        <ValueProposition />
        <Approach />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
      <JewelrySystemModal 
        isOpen={isJewelryModalOpen} 
        onClose={() => setIsJewelryModalOpen(false)} 
      />
    </div>
  )
}

export default App

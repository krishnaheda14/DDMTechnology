import React, { useEffect, useState } from 'react'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'
import { Hero } from '@components/sections/Hero'
import { Products } from '@components/sections/Products'
import { Industries } from '@components/sections/Industries'
import { ValueProposition } from '@components/sections/ValueProposition'
import { Approach } from '@components/sections/Approach'
import { Clients } from '@components/sections/Clients'
import { Contact } from '@components/sections/Contact'
import { JewelrySystemModal } from '@components/ui/JewelrySystemModal'
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
    
    // Re-observe on dynamic content changes
    const observer = new MutationObserver(() => {
      observeElements()
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    
    return () => observer.disconnect()
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
        <Industries />
        <ValueProposition />
        <Approach />
        <Clients />
        <Contact />
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

import { useState, useEffect } from 'react'

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide'

export const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop')
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width < 768) {
        setBreakpoint('mobile')
        setIsMobile(true)
        setIsTablet(false)
        setIsDesktop(false)
      } else if (width < 1024) {
        setBreakpoint('tablet')
        setIsMobile(false)
        setIsTablet(true)
        setIsDesktop(false)
      } else if (width < 1280) {
        setBreakpoint('desktop')
        setIsMobile(false)
        setIsTablet(false)
        setIsDesktop(true)
      } else {
        setBreakpoint('wide')
        setIsMobile(false)
        setIsTablet(false)
        setIsDesktop(true)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
  }
}

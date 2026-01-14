// Animation utility hooks and helpers

export const observeElements = () => {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  })

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el)
  })

  return observer
}

export const useScrollReveal = () => {
  return { observeElements }
}

export const addRevealAnimation = () => {
  if (typeof window === 'undefined') return

  const style = document.createElement('style')
  style.textContent = `
    .reveal-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .reveal-on-scroll.revealed {
      opacity: 1;
      transform: translateY(0);
    }

    .reveal-on-scroll.delay-1 {
      transition-delay: 0.1s;
    }

    .reveal-on-scroll.delay-2 {
      transition-delay: 0.2s;
    }

    .reveal-on-scroll.delay-3 {
      transition-delay: 0.3s;
    }
  `
  document.head.appendChild(style)
}

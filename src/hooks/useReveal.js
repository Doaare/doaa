import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/motion'

// Reveals an element once it scrolls into view. `index` staggers rows of three
// so cards in the same row do not all animate on the same frame.
export function useReveal(index = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }

    el.style.transitionDelay = `${(index % 3) * 90}ms`
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.18 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [index])

  return ref
}

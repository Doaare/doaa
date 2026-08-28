import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/motion'

// Draws the saccade line, then lands each fixation circle in sequence.
export function useScanpath() {
  const pathRef = useRef(null)
  const circleRefs = useRef([])

  useEffect(() => {
    const path = pathRef.current
    if (!path || prefersReducedMotion()) return

    const circles = circleRefs.current.filter(Boolean)
    const len = path.getTotalLength()
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len
    path.style.transition = 'stroke-dashoffset 3.4s cubic-bezier(.4,0,.2,1)'

    circles.forEach((c) => {
      c.style.transformOrigin = `${c.getAttribute('cx')}px ${c.getAttribute('cy')}px`
      c.style.transform = 'scale(0)'
      c.style.opacity = '0'
      c.style.transition = 'transform .55s cubic-bezier(.2,.8,.3,1), opacity .55s ease'
    })

    const timers = []
    const raf = requestAnimationFrame(() => {
      path.style.strokeDashoffset = 0
      circles.forEach((c, i) => {
        timers.push(
          setTimeout(() => {
            c.style.transform = 'scale(1)'
            c.style.opacity = '1'
          }, 260 + i * 380)
        )
      })
    })

    return () => {
      cancelAnimationFrame(raf)
      timers.forEach(clearTimeout)
    }
  }, [])

  return { pathRef, circleRefs }
}

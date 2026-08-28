export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

// Scroll by script instead of relying on hash navigation, which does nothing
// when the page is embedded in a frame that has no scroll container.
export function scrollToId(id, ev) {
  const target = id ? document.getElementById(id) : document.body
  if (!target) return
  if (ev) ev.preventDefault()
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  })
  try {
    history.replaceState(null, '', '#' + id)
  } catch (e) {
    /* replaceState is unavailable in some embedded contexts */
  }
}

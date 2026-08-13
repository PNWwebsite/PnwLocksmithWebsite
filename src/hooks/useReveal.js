import { useEffect } from 'react'

// Adds .is-in to every [data-reveal] element as it scrolls into view.
// Respects prefers-reduced-motion by revealing everything immediately.
export default function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}

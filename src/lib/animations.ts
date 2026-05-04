import type { Variants, ViewportOptions } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const

export const viewport: ViewportOptions = {
  once: true,
  amount: 0.18,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: easeOut } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -96 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.72, ease: easeOut } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 96 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.72, ease: easeOut } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export function motionVariant(variant: Variants, reducedMotion: boolean): Variants {
  if (!reducedMotion) {
    return variant
  }

  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  }
}

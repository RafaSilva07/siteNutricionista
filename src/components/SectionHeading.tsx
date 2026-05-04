import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, motionVariant, viewport } from '../lib/animations'

type SectionHeadingProps = {
  kicker?: string
  title: string
  text?: string
}

export function SectionHeading({ kicker, title, text }: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={motionVariant(fadeUp, Boolean(prefersReducedMotion))}
    >
      {kicker ? <span className="kicker">{kicker}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </motion.div>
  )
}

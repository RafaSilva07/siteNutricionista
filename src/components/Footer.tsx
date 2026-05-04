import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, motionVariant, viewport } from '../lib/animations'
import { Logo } from './Logo'

export function Footer() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.footer
      className="site-footer"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={motionVariant(fadeUp, Boolean(prefersReducedMotion))}
    >
      <div className="container footer-inner">
        <Logo />
        <div className="footer-links">
          <a href="https://www.instagram.com/nutrialanfernandes" target="_blank" rel="noreferrer">
            @nutrialanfernandes
          </a>
          <a href="https://linktr.ee/Alan.Fernandes" target="_blank" rel="noreferrer">
            Linktree
          </a>
        </div>
        <p>Site desenvolvido para apresentação profissional e agendamento de acompanhamentos nutricionais.</p>
      </div>
    </motion.footer>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, AtSign } from 'lucide-react'
import { fadeUp, motionVariant, scaleIn, viewport } from '../lib/animations'

export function CTA() {
  const prefersReducedMotion = useReducedMotion()
  const reduced = Boolean(prefersReducedMotion)

  return (
    <section id="contato" className="final-cta">
      <motion.div
        className="container final-cta-inner"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={motionVariant(fadeUp, reduced)}
      >
        <span className="kicker">Próximo passo</span>
        <h2>Se você quer evoluir, pare de improvisar sua alimentação.</h2>
        <p>Entre em contato e escolha o acompanhamento ideal para o seu objetivo.</p>
        <motion.div className="hero-actions" variants={motionVariant(scaleIn, reduced)}>
          <a className="btn btn-primary" href="https://linktr.ee/Alan.Fernandes" target="_blank" rel="noreferrer">
            Trabalhar com Alan
            <ArrowRight size={18} />
          </a>
          <a className="btn btn-secondary" href="https://www.instagram.com/nutrialanfernandes" target="_blank" rel="noreferrer">
            <AtSign size={18} />
            Chamar no Instagram
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

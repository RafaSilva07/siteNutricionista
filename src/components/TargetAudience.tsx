import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeLeft, fadeRight, motionVariant, staggerContainer, viewport } from '../lib/animations'
import { SectionHeading } from './SectionHeading'

const items = [
  'Treina, mas não vê evolução no físico',
  'Tem dúvida sobre dieta, macros e suplementação',
  'Quer ganhar massa muscular com estratégia',
  'Quer emagrecer preservando massa magra',
  'Vive começando dieta e parando no meio',
  'Busca performance em musculação, powerlifting ou fisiculturismo',
  'Quer acompanhamento direto, sem enrolação',
]

export function TargetAudience() {
  const prefersReducedMotion = useReducedMotion()
  const reduced = Boolean(prefersReducedMotion)

  return (
    <section className="section symptoms-section">
      <div className="container symptoms-grid">
        <div className="symptoms-dial" aria-hidden="true">
          <span>18-40</span>
          <strong>FORÇA</strong>
          <small>COMPOSIÇÃO CORPORAL</small>
        </div>
        <div>
          <SectionHeading kicker="Para quem é" title="Esse acompanhamento é para você que..." />
          <motion.div
            className="check-list symptom-list"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={motionVariant(staggerContainer, reduced)}
          >
            {items.map((item, index) => (
              <motion.div
                className="check-item symptom-item"
                key={item}
                variants={motionVariant(index % 2 === 0 ? fadeRight : fadeLeft, reduced)}
              >
                <Check size={18} />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

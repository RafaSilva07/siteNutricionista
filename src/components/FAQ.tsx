import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faq'
import { fadeUp, motionVariant, staggerContainer, viewport } from '../lib/animations'
import { SectionHeading } from './SectionHeading'

export function FAQ() {
  const prefersReducedMotion = useReducedMotion()
  const reduced = Boolean(prefersReducedMotion)

  return (
    <section id="faq" className="section faq-section audit-section">
      <div className="container faq-console">
        <SectionHeading kicker="FAQ" title="Perguntas diretas. Respostas sem enrolação." />
        <motion.div
          className="faq-list audit-list"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={motionVariant(staggerContainer, reduced)}
        >
          {faqs.map((faq, index) => (
            <motion.details key={faq.question} variants={motionVariant(fadeUp, reduced)}>
              <summary>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {faq.question}
                <ChevronDown size={18} />
              </summary>
              <p>{faq.answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

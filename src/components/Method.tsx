import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, motionVariant, staggerContainer, viewport } from '../lib/animations'
import { SectionHeading } from './SectionHeading'

const steps = [
  ['01', 'Avaliação inicial', 'Entendimento do objetivo, rotina, treino, histórico e dificuldades.'],
  ['02', 'Planejamento alimentar', 'Construção de uma dieta aplicável, estratégica e alinhada ao seu objetivo.'],
  ['03', 'Acompanhamento', 'Contato pelo WhatsApp, questionário semanal e análise da evolução.'],
  ['04', 'Ajustes contínuos', 'A dieta não fica parada. Ela evolui conforme seu corpo responde.'],
]

export function Method() {
  const prefersReducedMotion = useReducedMotion()
  const reduced = Boolean(prefersReducedMotion)

  return (
    <section id="metodo" className="section protocol-section">
      <div className="container">
        <SectionHeading kicker="Método" title="O método é simples: avaliar, ajustar e evoluir." />
        <motion.div
          className="protocol-track"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={motionVariant(staggerContainer, reduced)}
        >
          {steps.map(([number, title, text]) => (
            <motion.article className="method-card protocol-step" key={number} variants={motionVariant(fadeUp, reduced)}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

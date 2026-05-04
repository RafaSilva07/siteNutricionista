import { motion, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Activity, Images, MessageSquare, Trophy } from 'lucide-react'
import { fadeLeft, fadeRight, fadeUp, motionVariant, staggerContainer, viewport } from '../lib/animations'
import { SectionHeading } from './SectionHeading'

const placeholders: Array<{ title: string; Icon: LucideIcon }> = [
  { title: 'Depoimento de paciente', Icon: MessageSquare },
  { title: 'Evolução em composição corporal', Icon: Images },
  { title: 'Resultado em performance', Icon: Activity },
  { title: 'Preparação e acompanhamento', Icon: Trophy },
]

export function Results() {
  const prefersReducedMotion = useReducedMotion()
  const reduced = Boolean(prefersReducedMotion)

  return (
    <section id="resultados" className="section">
      <div className="container">
        <SectionHeading
          kicker="Prova social"
          title="Resultados não vêm de promessa. Vêm de processo."
          text="Estrutura preparada para receber depoimentos, evoluções e prints reais quando o material for enviado."
        />
        <motion.div
          className="stats-strip"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={motionVariant(staggerContainer, reduced)}
        >
          <motion.div variants={motionVariant(fadeUp, reduced)}>
            <strong>+230</strong>
            <span>conteúdos publicados</span>
          </motion.div>
          <motion.div variants={motionVariant(fadeUp, reduced)}>
            <strong>+1.100</strong>
            <span>pessoas acompanhando no Instagram</span>
          </motion.div>
          <motion.div variants={motionVariant(fadeUp, reduced)}>
            <strong>Foco</strong>
            <span>nutrição esportiva aplicada</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="result-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={motionVariant(staggerContainer, reduced)}
        >
          {placeholders.map(({ title, Icon }, index) => {
            const variant = index % 3 === 0 ? fadeLeft : index % 3 === 1 ? fadeUp : fadeRight

            return (
              <motion.article className="result-card" key={title} variants={motionVariant(variant, reduced)}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>Espaço reservado para inserir material real do profissional.</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

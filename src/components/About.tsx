import { motion, useReducedMotion } from 'framer-motion'
import { fadeLeft, fadeRight, fadeUp, motionVariant, viewport } from '../lib/animations'
import { SectionHeading } from './SectionHeading'

export function About() {
  const prefersReducedMotion = useReducedMotion()
  const reduced = Boolean(prefersReducedMotion)

  return (
    <section id="sobre" className="section about-section">
      <div className="container about-grid">
        <motion.div
          className="about-badge"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={motionVariant(fadeLeft, reduced)}
        >
          <span>A</span>
          <strong>Alan Fernandes</strong>
          <small>Nutrição Esportiva</small>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={motionVariant(fadeRight, reduced)}>
          <SectionHeading kicker="Sobre" title="Alan Fernandes" />
          <motion.div className="about-copy" variants={motionVariant(fadeUp, reduced)}>
            <p>
              Alan Fernandes é nutricionista esportivo e trabalha com acompanhamento nutricional para pessoas que buscam
              evolução real em hipertrofia, emagrecimento, composição corporal e performance. Sua comunicação é direta,
              baseada em ciência e voltada para quem entende que resultado exige estratégia, consistência e ajustes bem feitos.
            </p>
            <p>
              Com forte presença no universo da musculação, powerlifting e fitness, Alan une conhecimento técnico, prática
              esportiva e acompanhamento próximo para construir planos aplicáveis à rotina de cada paciente.
            </p>
          </motion.div>
          <motion.a
            className="instagram-link"
            href="https://www.instagram.com/nutrialanfernandes"
            target="_blank"
            rel="noreferrer"
            variants={motionVariant(fadeUp, reduced)}
          >
            @nutrialanfernandes
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

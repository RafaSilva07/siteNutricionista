import { ArrowRight, Dumbbell, Target, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const floatingTags = ['Hipertrofia', 'Emagrecimento', 'Performance', 'Powerlifting', 'Pré-contest']

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-watermark">A</div>
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="hero-kicker">Nutricionista Esportivo</span>
          <h1>Você treina sério. Sua alimentação também precisa acompanhar.</h1>
          <p>
            Planos alimentares estratégicos, acompanhamento próximo e ajustes semanais para evolução em hipertrofia,
            emagrecimento e performance.
          </p>
          <div className="hero-proof">
            <span>Base científica.</span>
            <span>Linguagem direta.</span>
            <span>Resultado real.</span>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://linktr.ee/Alan.Fernandes" target="_blank" rel="noreferrer">
              Agendar acompanhamento
              <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="#servicos">
              Ver planos
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="panel-topline">
            <strong>@nutrialanfernandes</strong>
          </div>
          <blockquote>“Você ainda come mal, por isso não evolui.”</blockquote>
          <div className="metric-grid">
            <div>
              <Target size={22} />
              <strong>Objetivo claro</strong>
              <span>Sem dieta genérica</span>
            </div>
            <div>
              <Zap size={22} />
              <strong>Ajuste semanal</strong>
              <span>Resposta do corpo</span>
            </div>
            <div>
              <Dumbbell size={22} />
              <strong>Treino levado a sério</strong>
              <span>Nutrição aplicada</span>
            </div>
          </div>
          <div className="floating-tags">
            {floatingTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

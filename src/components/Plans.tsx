import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Fragment, useState } from 'react'
import { plans, type Plan } from '../data/plans'
import { fadeUp, motionVariant, scaleIn, staggerContainer, viewport } from '../lib/animations'
import { SectionHeading } from './SectionHeading'

const defaultPlanId: Plan['id'] = 'online-individual'

export function Plans() {
  const [selectedPlanId, setSelectedPlanId] = useState<Plan['id']>(defaultPlanId)
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) ?? plans[1]
  const prefersReducedMotion = useReducedMotion()
  const reduced = Boolean(prefersReducedMotion)

  return (
    <section id="servicos" className="section plans-section protocol-console">
      <div className="container">
        <SectionHeading
          kicker="Serviços"
          title="Qual acompanhamento faz mais sentido para o seu momento?"
          text="Escolha o formato que mais combina com sua rotina, seu objetivo e a forma como você prefere ser acompanhado."
        />

        <motion.div
          className="plan-choice-grid console-tabs"
          role="list"
          aria-label="Escolha de acompanhamento"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={motionVariant(staggerContainer, reduced)}
        >
          {plans.map((plan) => {
            const isSelected = plan.id === selectedPlan.id

            return (
              <Fragment key={plan.id}>
                <motion.button
                  className={`plan-choice console-tab plan-${plan.variant} ${isSelected ? 'is-selected' : 'is-muted'}`}
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  aria-pressed={isSelected}
                  variants={motionVariant(fadeUp, reduced)}
                >
                  <span className="plan-choice-badge">{plan.badge}</span>
                  <strong>{plan.name}</strong>
                  <p>{plan.shortDescription}</p>
                </motion.button>
                {isSelected ? (
                  <div className="mobile-selected-plan">
                    <SelectedPlanDetails plan={selectedPlan} reduced={reduced} />
                  </div>
                ) : null}
              </Fragment>
            )
          })}
        </motion.div>

        <div className={`desktop-selected-plan desktop-selected-${selectedPlan.id}`}>
          <SelectedPlanDetails plan={selectedPlan} reduced={reduced} />
        </div>
      </div>
    </section>
  )
}

function SelectedPlanDetails({ plan, reduced }: { plan: Plan; reduced: boolean }) {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        className={`selected-plan-panel console-panel plan-${plan.variant}`}
        key={plan.id}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: reduced ? 0 : -10 }}
        variants={motionVariant(scaleIn, reduced)}
      >
        <div className="selected-plan-note console-summary">
          <span className="console-code">PROTOCOLO ATIVO</span>
          <strong>Detalhes do acompanhamento</strong>
          <p className="plan-note">{plan.note}</p>
        </div>

        <div className="selected-plan-details console-details">
          <div>
            <h4>Inclusões</h4>
            <ul className="inclusion-list">
              {plan.inclusions.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Valores</h4>
            <div className="price-box">
              {plan.prices.map((price) => (
                <strong key={price}>{price}</strong>
              ))}
            </div>
            <motion.a
              className="btn btn-plan"
              href="https://linktr.ee/Alan.Fernandes"
              target="_blank"
              rel="noreferrer"
              variants={motionVariant(scaleIn, reduced)}
            >
              Quero esse acompanhamento
              <ArrowRight size={17} />
            </motion.a>
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  )
}

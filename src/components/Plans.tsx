import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Fragment, useState } from 'react'
import { plans, type Plan } from '../data/plans'
import { SectionHeading } from './SectionHeading'

const defaultPlanId: Plan['id'] = 'online-individual'

export function Plans() {
  const [selectedPlanId, setSelectedPlanId] = useState<Plan['id']>(defaultPlanId)
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) ?? plans[1]

  return (
    <section id="servicos" className="section plans-section">
      <div className="container">
        <SectionHeading
          kicker="Serviços"
          title="Qual acompanhamento faz mais sentido para o seu momento?"
          text="Escolha o formato que mais combina com sua rotina, seu objetivo e a forma como você prefere ser acompanhado."
        />

        <div className="plan-choice-grid" role="list" aria-label="Escolha de acompanhamento">
          {plans.map((plan) => {
            const isSelected = plan.id === selectedPlan.id

            return (
              <Fragment key={plan.id}>
              <button
                className={`plan-choice plan-${plan.variant} ${isSelected ? 'is-selected' : 'is-muted'}`}
                type="button"
                onClick={() => setSelectedPlanId(plan.id)}
                aria-pressed={isSelected}
              >
                <span className="plan-choice-badge">{plan.badge}</span>
                <strong>{plan.name}</strong>
                <p>{plan.shortDescription}</p>
              </button>
              {isSelected ? (
                <div className="mobile-selected-plan">
                  <SelectedPlanDetails plan={selectedPlan} />
                </div>
              ) : null}
              </Fragment>
            )
          })}
        </div>

        <div className={`desktop-selected-plan desktop-selected-${selectedPlan.id}`}>
          <SelectedPlanDetails plan={selectedPlan} />
        </div>
      </div>
    </section>
  )
}

function SelectedPlanDetails({ plan }: { plan: Plan }) {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        className={`selected-plan-panel plan-${plan.variant}`}
        key={plan.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
      >
        <div className="selected-plan-note">
          <strong>Detalhes do acompanhamento</strong>
          <p className="plan-note">{plan.note}</p>
        </div>

        <div className="selected-plan-details">
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
            <a className="btn btn-plan" href="https://linktr.ee/Alan.Fernandes" target="_blank" rel="noreferrer">
              Quero esse acompanhamento
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  )
}

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { plans } from '../data/plans'
import { SectionHeading } from './SectionHeading'

export function Plans() {
  return (
    <section id="servicos" className="section plans-section">
      <div className="container">
        <SectionHeading
          kicker="Serviços"
          title="Escolha o acompanhamento que faz sentido para sua fase."
          text="Todos os planos partem de avaliação, planejamento e ajuste. O que muda é o formato."
        />
        <div className="plans-grid">
          {plans.map((plan) => (
            <article className={`plan-card plan-${plan.accent}`} key={plan.name}>
              <div className="plan-header">
                <span>{plan.label}</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>
              <ul className="inclusion-list">
                {plan.inclusions.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="price-box">
                {plan.prices.map((price) => (
                  <strong key={price}>{price}</strong>
                ))}
              </div>
              <p className={`plan-note ${plan.note ? '' : 'plan-note-empty'}`}>{plan.note ?? 'Observação do plano'}</p>
              <a className="btn btn-plan" href="https://linktr.ee/Alan.Fernandes" target="_blank" rel="noreferrer">
                Quero esse acompanhamento
                <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

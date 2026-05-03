import { Check } from 'lucide-react'
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
  return (
    <section className="section section-split">
      <div className="container split-grid">
        <SectionHeading kicker="Para quem é" title="Esse acompanhamento é para você que..." />
        <div className="check-list">
          {items.map((item) => (
            <div className="check-item" key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

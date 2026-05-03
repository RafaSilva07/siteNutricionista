import type { LucideIcon } from 'lucide-react'
import { Activity, Images, MessageSquare, Trophy } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const placeholders: Array<{ title: string; Icon: LucideIcon }> = [
  { title: 'Depoimento de paciente', Icon: MessageSquare },
  { title: 'Evolução em composição corporal', Icon: Images },
  { title: 'Resultado em performance', Icon: Activity },
  { title: 'Preparação e acompanhamento', Icon: Trophy },
]

export function Results() {
  return (
    <section id="resultados" className="section">
      <div className="container">
        <SectionHeading
          kicker="Prova social"
          title="Resultados não vêm de promessa. Vêm de processo."
          text="Estrutura preparada para receber depoimentos, evoluções e prints reais quando o material for enviado."
        />
        <div className="stats-strip">
          <div>
            <strong>+230</strong>
            <span>conteúdos publicados</span>
          </div>
          <div>
            <strong>+1.100</strong>
            <span>pessoas acompanhando no Instagram</span>
          </div>
          <div>
            <strong>Foco</strong>
            <span>nutrição esportiva aplicada</span>
          </div>
        </div>
        <div className="result-grid">
          {placeholders.map(({ title, Icon }) => (
            <article className="result-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>Espaço reservado para inserir material real do profissional.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

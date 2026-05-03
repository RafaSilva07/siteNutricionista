import { SectionHeading } from './SectionHeading'

const steps = [
  ['01', 'Avaliação inicial', 'Entendimento do objetivo, rotina, treino, histórico e dificuldades.'],
  ['02', 'Planejamento alimentar', 'Construção de uma dieta aplicável, estratégica e alinhada ao seu objetivo.'],
  ['03', 'Acompanhamento', 'Contato pelo WhatsApp, questionário semanal e análise da evolução.'],
  ['04', 'Ajustes contínuos', 'A dieta não fica parada. Ela evolui conforme seu corpo responde.'],
]

export function Method() {
  return (
    <section id="metodo" className="section">
      <div className="container">
        <SectionHeading kicker="Método" title="O método é simples: avaliar, ajustar e evoluir." />
        <div className="method-grid">
          {steps.map(([number, title, text]) => (
            <article className="method-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

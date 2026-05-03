import type { LucideIcon } from 'lucide-react'
import { Camera, ClipboardCheck, FileText, MessageCircle, Ruler, Target, Utensils } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const items: Array<{ title: string; text: string; Icon: LucideIcon }> = [
  { title: 'Avaliação individual do aluno', text: 'Seu plano parte da sua rotina, treino, histórico e dificuldade real.', Icon: ClipboardCheck },
  { title: 'Dieta ajustada ao objetivo', text: 'Chega de cortar calorias sem critério ou copiar dieta pronta.', Icon: Target },
  { title: 'Acompanhamento pelo WhatsApp', text: 'Suporte próximo para manter direção e corrigir rota com velocidade.', Icon: MessageCircle },
  { title: 'Questionário semanal', text: 'Resultado vem de ajuste, constância e estratégia, não de chute.', Icon: FileText },
  { title: 'Materiais de apoio', text: 'Conteúdo direto para você entender o que está fazendo.', Icon: Utensils },
  { title: 'Avaliação por fotos ou antropométrica', text: 'Leitura visual e técnica para acompanhar composição corporal.', Icon: Camera },
  { title: 'Estratégia esportiva', text: 'Hipertrofia, emagrecimento e performance com aplicação prática.', Icon: Ruler },
]

export function Differentials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          kicker="Autoridade aplicada"
          title="Não é dieta pronta. É estratégia."
          text="Suplemento não corrige dieta mal feita. O que muda físico é plano, execução e ajuste."
        />
        <div className="feature-grid">
          {items.map(({ title, text, Icon }) => (
            <article className="feature-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

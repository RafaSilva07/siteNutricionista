import { AtSign } from 'lucide-react'
import { contentCards } from '../data/contentCards'
import { SectionHeading } from './SectionHeading'

export function ContentSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          kicker="Conteúdo"
          title="Nutrição sem mito e sem terrorismo."
          text="Temas educativos para transformar o Instagram em uma ponte direta para consulta."
        />
        <div className="content-grid">
          {contentCards.map((card) => (
            <article className="content-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href="https://www.instagram.com/nutrialanfernandes" target="_blank" rel="noreferrer">
                <AtSign size={16} />
                Ver no Instagram
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

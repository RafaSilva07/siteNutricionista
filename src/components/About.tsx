import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="sobre" className="section about-section">
      <div className="container about-grid">
        <div className="about-badge">
          <span>A</span>
          <strong>Alan Fernandes</strong>
          <small>Nutrição Esportiva</small>
        </div>
        <div>
          <SectionHeading kicker="Sobre" title="Alan Fernandes" />
          <div className="about-copy">
            <p>
              Alan Fernandes é nutricionista esportivo e trabalha com acompanhamento nutricional para pessoas que buscam
              evolução real em hipertrofia, emagrecimento, composição corporal e performance. Sua comunicação é direta,
              baseada em ciência e voltada para quem entende que resultado exige estratégia, consistência e ajustes bem feitos.
            </p>
            <p>
              Com forte presença no universo da musculação, powerlifting e fitness, Alan une conhecimento técnico, prática
              esportiva e acompanhamento próximo para construir planos aplicáveis à rotina de cada paciente.
            </p>
          </div>
          <a className="instagram-link" href="https://www.instagram.com/nutrialanfernandes" target="_blank" rel="noreferrer">
            @nutrialanfernandes
          </a>
        </div>
      </div>
    </section>
  )
}

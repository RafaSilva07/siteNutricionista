import { ArrowRight, AtSign } from 'lucide-react'

export function CTA() {
  return (
    <section id="contato" className="final-cta">
      <div className="container final-cta-inner">
        <span className="kicker">Próximo passo</span>
        <h2>Se você quer evoluir, pare de improvisar sua alimentação.</h2>
        <p>Entre em contato e escolha o acompanhamento ideal para o seu objetivo.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="https://linktr.ee/Alan.Fernandes" target="_blank" rel="noreferrer">
            Trabalhar com Alan
            <ArrowRight size={18} />
          </a>
          <a className="btn btn-secondary" href="https://www.instagram.com/nutrialanfernandes" target="_blank" rel="noreferrer">
            <AtSign size={18} />
            Chamar no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

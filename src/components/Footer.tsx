import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Logo />
        <div className="footer-links">
          <a href="https://www.instagram.com/nutrialanfernandes" target="_blank" rel="noreferrer">
            @nutrialanfernandes
          </a>
          <a href="https://linktr.ee/Alan.Fernandes" target="_blank" rel="noreferrer">
            Linktree
          </a>
        </div>
        <p>Site desenvolvido para apresentação profissional e agendamento de acompanhamentos nutricionais.</p>
      </div>
    </footer>
  )
}

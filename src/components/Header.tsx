import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from './Logo'

const navItems = [
  ['Início', '#inicio'],
  ['Método', '#metodo'],
  ['Serviços', '#servicos'],
  ['Resultados', '#resultados'],
  ['Sobre', '#sobre'],
  ['FAQ', '#faq'],
  ['Contato', '#contato'],
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary header-cta" href="https://linktr.ee/Alan.Fernandes" target="_blank" rel="noreferrer">
          Trabalhe comigo
        </a>
        <button className="menu-button" type="button" onClick={() => setIsOpen((value) => !value)} aria-label="Abrir menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {isOpen ? (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn-primary" href="https://linktr.ee/Alan.Fernandes" target="_blank" rel="noreferrer">
            Trabalhe comigo
          </a>
        </nav>
      ) : null}
    </header>
  )
}

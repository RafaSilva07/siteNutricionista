type LogoProps = {
  compact?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <a className="logo-mark" href="#inicio" aria-label="Alan Fernandes - início">
      <span className="logo-symbol">A</span>
      {!compact ? (
        <span className="logo-text">
          <strong>Alan Fernandes</strong>
          <small>Nutrição Esportiva</small>
        </span>
      ) : null}
    </a>
  )
}

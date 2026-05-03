type SectionHeadingProps = {
  kicker?: string
  title: string
  text?: string
}

export function SectionHeading({ kicker, title, text }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {kicker ? <span className="kicker">{kicker}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}

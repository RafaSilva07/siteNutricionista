import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faq'
import { SectionHeading } from './SectionHeading'

export function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <SectionHeading kicker="FAQ" title="Perguntas diretas. Respostas sem enrolação." />
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <ChevronDown size={18} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

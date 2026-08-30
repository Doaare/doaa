import { contact } from '../data/site'
import SectionHead from './SectionHead'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <SectionHead>Contact</SectionHead>
        <p className="lede">{contact.lede}</p>
        <div className="cgrid">
          <div className="cblock">
            <h3>Email</h3>
            {contact.emails.map((e) => (
              <a key={e.address} href={`mailto:${e.address}`}>
                {e.label}
              </a>
            ))}
          </div>
          <div className="cblock">
            <h3>Elsewhere</h3>
            {contact.elsewhere.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

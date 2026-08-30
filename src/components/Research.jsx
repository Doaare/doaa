import { pillars, keywords } from '../data/site'
import SectionHead from './SectionHead'
import { useReveal } from '../hooks/useReveal'

function Pillar({ title, body, index }) {
  const ref = useReveal(index)
  return (
    <article className="pillar rise" ref={ref}>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}

export default function Research() {
  return (
    <section id="research" className="tinted">
      <div className="wrap">
        <SectionHead>Research</SectionHead>
        <div className="pillars">
          {pillars.map((p, i) => (
            <Pillar key={p.title} title={p.title} body={p.body} index={i} />
          ))}
        </div>
        <div className="keywords">
          {keywords.map((k) => (
            <span className="kw" key={k}>
              {k}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

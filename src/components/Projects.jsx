import { Fragment } from 'react'
import { projects } from '../data/site'
import SectionHead from './SectionHead'

export default function Projects() {
  return (
    <section id="innovation" className="tinted">
      <div className="wrap">
        <SectionHead num="05">Research projects</SectionHead>
        <p className="lede lede-gap lede-wide">
          Studies and systems developed with the UXDM Lab at WPI and clinical partners at UMass
          Memorial Medical Center.
        </p>

        {projects.map((p) => (
          <article className="proj" key={p.title}>
            <figure className="proj-figure">
              <img src={p.image} alt={p.alt} loading="lazy" />
            </figure>
            <div>
              <p className="proj-role">{p.role}</p>
              <h3>{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <p className="proj-affil">
                {p.affil.map((part, i) =>
                  part.href ? (
                    <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">
                      {part.text}
                    </a>
                  ) : (
                    <Fragment key={i}>{part.text}</Fragment>
                  )
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

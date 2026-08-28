import { bio, education } from '../data/site'
import SectionHead from './SectionHead'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead num="01">About</SectionHead>

        <div className="bio-body">
          {bio.map((para, i) => (
            <p key={i} className={i === 0 ? 'lede' : undefined}>
              {para}
            </p>
          ))}
        </div>

        <div className="subhead edu-subhead">
          <span>Education</span>
        </div>
        <div className="edu-row">
          {education.map((d) => (
            <div className="deg" key={d.year + d.name}>
              <span className="d-year">{d.year}</span>
              <span className="d-name">{d.name}</span>
              <span className="d-meta">
                {d.meta.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </span>
              {d.dissertation && (
                <span className="d-diss">
                  <em>{d.dissertation}</em>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

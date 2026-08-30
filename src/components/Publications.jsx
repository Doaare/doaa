import { Fragment } from 'react'
import { publications, links } from '../data/site'
import SectionHead from './SectionHead'

// Author strings mark the site owner with **double asterisks**.
function Authors({ value }) {
  return (
    <p className="pub-authors">
      {value.split('**').map((chunk, i) =>
        i % 2 ? <b key={i}>{chunk}</b> : <Fragment key={i}>{chunk}</Fragment>
      )}
    </p>
  )
}

export default function Publications() {
  return (
    <section id="publications">
      <div className="wrap">
        <SectionHead>Selected publications</SectionHead>

        <div className="pubs">
          {publications.map((pub) => (
            <article className="pub" key={pub.title}>
              <div className="pub-year">{pub.year}</div>
              <div>
                <h3 className="pub-title">{pub.title}</h3>
                <Authors value={pub.authors} />
                <p className="pub-venue">{pub.venue}</p>
                {pub.tag && <span className="tag">{pub.tag}</span>}
              </div>
            </article>
          ))}
        </div>

        <p className="pubs-note">
          The complete list is on{' '}
          <a href={links.scholar} target="_blank" rel="noopener noreferrer">
            Google Scholar
          </a>{' '}
          and{' '}
          <a href={links.researchGate} target="_blank" rel="noopener noreferrer">
            ResearchGate
          </a>
          .
        </p>
      </div>
    </section>
  )
}

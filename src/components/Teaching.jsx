import { courses } from '../data/site'
import SectionHead from './SectionHead'

export default function Teaching() {
  return (
    <section id="teaching">
      <div className="wrap">
        <SectionHead num="06">Teaching</SectionHead>
        <p className="lede lede-gap-sm">
          Courses built around ethical innovation and human-centered design, at both graduate and
          undergraduate levels.
        </p>
        <div className="teach">
          {courses.map((c) => (
            <article className="course" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

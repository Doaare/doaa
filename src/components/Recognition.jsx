import { awards } from '../data/site'
import SectionHead from './SectionHead'

export default function Recognition() {
  return (
    <section id="recognition" className="tinted">
      <div className="wrap">
        <SectionHead num="07">Recognition</SectionHead>
        <ul className="awards">
          {awards.map((a) => (
            <li className="award" key={a.year + a.name}>
              <div className="a-year">{a.year}</div>
              <div>
                <span className="a-name">{a.name}</span>
                <span className="a-desc">{a.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

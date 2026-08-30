import { tools } from '../data/site'
import SectionHead from './SectionHead'

export default function Tools() {
  return (
    <section id="tools">
      <div className="wrap">
        <SectionHead>Teaching &amp; research tools</SectionHead>
        <div className="tools-grid">
          {tools.map((t) => (
            <div className="tool" key={t.name}>
              <img className="tool-logo" src={t.logo} alt={t.name} />
              <p className="tool-desc">{t.desc}</p>
              <div className="tool-tags">
                {t.tags.map((tag) => (
                  <span className="kw" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {t.affil && (
                <p className="tool-affil">
                  {t.affil.prefix}
                  <a href={t.affil.href} target="_blank" rel="noopener noreferrer">
                    {t.affil.label}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

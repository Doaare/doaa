import { patent } from '../data/site'
import SectionHead from './SectionHead'

export default function Patent() {
  return (
    <section id="patent" className="patent">
      <svg
        className="patent-mark"
        width="420"
        height="420"
        viewBox="0 0 420 420"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="210" cy="210" r="196" stroke="rgba(224,162,39,.16)" strokeWidth="1" />
        <circle cx="210" cy="210" r="146" stroke="rgba(224,162,39,.20)" strokeWidth="1" />
        <circle cx="210" cy="210" r="96" stroke="rgba(224,162,39,.26)" strokeWidth="1" />
        <circle cx="210" cy="210" r="46" stroke="rgba(224,162,39,.34)" strokeWidth="1" />
        <circle cx="210" cy="210" r="7" fill="rgba(224,162,39,.65)" />
        <path d="M64,332 L152,178 L262,254 L330,126" stroke="rgba(210,89,63,.30)" strokeWidth="1.2" />
        <circle cx="152" cy="178" r="13" stroke="rgba(224,162,39,.30)" strokeWidth="1" />
        <circle cx="262" cy="254" r="19" stroke="rgba(224,162,39,.26)" strokeWidth="1" />
      </svg>

      <div className="wrap">
        <SectionHead>Patent</SectionHead>
        <p className="patent-title">{patent.title}</p>
        <p className="patent-lede">{patent.lede}</p>
        <div className="patent-meta">
          {patent.meta.map((m) => (
            <div key={m.label}>
              <span className="pm-label">{m.label}</span>
              <span className={m.mono ? 'pm-value mono' : 'pm-value'}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

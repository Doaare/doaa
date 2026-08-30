import { hero, scanpath } from '../data/site'
import { scrollToId } from '../lib/motion'
import { useScanpath } from '../hooks/useScanpath'

export default function Hero() {
  const { pathRef, circleRefs } = useScanpath()

  return (
    <section className="hero">
      <svg
        id="scanpath"
        viewBox="0 0 1200 620"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          id="saccades"
          fill="none"
          stroke="rgba(224,162,39,.34)"
          strokeWidth="1.2"
          d={scanpath.saccades}
        />
        <g id="fixations" fill="none">
          {scanpath.fixations.map((f, i) => (
            <circle
              key={i}
              ref={(el) => {
                circleRefs.current[i] = el
              }}
              cx={f.cx}
              cy={f.cy}
              r={f.r}
              stroke={f.stroke}
              strokeWidth="1.2"
            />
          ))}
        </g>
      </svg>

      <div className="wrap">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.name}</h1>
        <p className="h1-sub">{hero.tagline}</p>
        <div className="affil">
          {hero.affiliations.map((a) => (
            <div key={a.role}>
              <strong>{a.role}</strong>
              <br />
              {a.org}
            </div>
          ))}
        </div>
        <div className="hero-cta">
          <a
            className="btn btn-solid"
            href="#publications"
            onClick={(e) => scrollToId('publications', e)}
          >
            See publications
          </a>
          <a className="btn btn-ghost" href="#contact" onClick={(e) => scrollToId('contact', e)}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

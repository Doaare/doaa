import { nav, hero } from '../data/site'
import { scrollToId } from '../lib/motion'

export default function NavBar() {
  return (
    <header className="bar">
      <div className="wrap">
        <a className="brand" href="#top" onClick={(e) => scrollToId('top', e)}>
          {hero.name}
          <span>{hero.suffix}</span>
        </a>
        <nav className="navlinks">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToId(item.id, e)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

import { footer } from '../data/site'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>{footer.copyright}</span>
        <span className="mono">{footer.meta}</span>
      </div>
    </footer>
  )
}

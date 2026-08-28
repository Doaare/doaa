export default function SectionHead({ num, children }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{num}</span>
      <h2>{children}</h2>
    </div>
  )
}

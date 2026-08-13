import { company } from '../data/site'
import { Phone } from './Icons'

export default function CtaBand() {
  return (
    <section className="ctaband" aria-label="Emergency service">
      <div className="wrap ctaband__row">
        <div className="ctaband__text">
          <p className="ctaband__kicker">Emergency service</p>
          <h2>
            Standing outside your own door? Say the word and a van is on the way.
          </h2>
        </div>
        <div className="ctaband__act">
          <a className="btn btn--dark btn--lg" href={company.phoneHref}>
            <Phone size={19} />
            <span>{company.phoneDisplay}</span>
          </a>
          <p className="ctaband__hours">Open 24 hours · 7 days</p>
        </div>
      </div>
    </section>
  )
}

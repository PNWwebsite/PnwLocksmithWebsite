import { company } from '../data/site'
import { Phone } from './Icons'

export default function CtaCall() {
  return (
    <section className="ctacall" aria-label="Call us">
      <div className="wrap ctacall__inner" data-reveal>
        <p className="eyebrow eyebrow--onDark">
          <span className="dot" aria-hidden="true" /> No call centre. No hold music.
        </p>
        <h2 className="ctacall__title">One number, any hour</h2>
        <a className="ctacall__number" href={company.phoneHref}>
          {company.phoneDisplay}
        </a>
        <p className="ctacall__sub">
          {company.hours} · {company.license} · {company.addressLine}
        </p>
        <div className="ctacall__actions">
          <a className="btn btn--primary btn--lg" href={company.phoneHref}>
            <Phone size={19} />
            <span>Call now</span>
          </a>
          <a className="btn btn--ghost btn--lg" href="#contact">
            Request a callback
          </a>
        </div>
      </div>
    </section>
  )
}

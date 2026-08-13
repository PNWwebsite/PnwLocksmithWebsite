import { company } from '../data/site'
import van from '../assets/photos/van.png'
import { KeyIcon, Phone } from './Icons'

export default function CtaCall() {
  return (
    <section className="ctacall" aria-label="Call us">
      <div className="wrap">
        <div className="ctacall__panel" data-reveal>
          <img className="ctacall__van" src={van} alt="" aria-hidden="true" loading="lazy" />

          <div className="ctacall__copy">
            <p className="eyebrow eyebrow--onDark">
              <KeyIcon size={16} />
              <span>Need a locksmith fast?</span>
            </p>
            <h2 className="ctacall__title">
              <em>Quick, licensed and professional</em>
              <br />
              whenever you need us
            </h2>
            <p className="ctacall__lede">
              One number, any hour. Emergencies are dispatched ahead of scheduled work, and you get
              a price before anyone touches your door.
            </p>
            <div className="ctacall__actions">
              <a className="btn btn--primary btn--lg btn--pillArrow" href={company.phoneHref}>
                <span>{company.phoneDisplay}</span>
                <span className="btn__arrow" aria-hidden="true">
                  <Phone size={16} />
                </span>
              </a>
              <a className="btn btn--ghost btn--lg" href="#contact">
                Request a callback
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { company } from '../data/site'
import photo from '../assets/photos/van-commercial.jpg'
import { Phone, Clock, Shield, Check } from './Icons'

export default function CtaBand() {
  return (
    <section className="ctaband" aria-label="24/7 emergency locksmith">
      <div className="wrap">
        <div className="ctaband__row">
          <div className="ctaband__text">
            <p className="ctaband__kicker">
              <span className="dot dot--light" aria-hidden="true" />
              24/7 emergency locksmith · answering right now
            </p>

            <h2 className="ctaband__title">Locked out right now?</h2>
            <p className="ctaband__sub">
              Emergency lockouts around the clock — nights, weekends and holidays included. A
              licensed locksmith answers the phone in person, emergency calls go out ahead of
              scheduled work, and you get a price before anyone touches your door.
            </p>

            <a className="btn btn--huge" href={company.phoneHref}>
              <span className="btn__hugeIco" aria-hidden="true">
                <Phone size={26} />
              </span>
              <span className="btn__hugeText">
                <small>Tap to call — 24/7 emergency line</small>
                <strong>{company.phoneDisplay}</strong>
              </span>
            </a>

            <ul className="ctaband__points">
              <li>
                <Clock size={16} />
                <span>Open 24 hours, every day of the year</span>
              </li>
              <li>
                <Check size={16} />
                <span>Emergency calls dispatched first</span>
              </li>
              <li>
                <Shield size={16} />
                <span>Licensed {company.license} · bonded &amp; insured</span>
              </li>
            </ul>
          </div>

          <div className="ctaband__media">
            <img
              src={photo}
              alt="PNW Lock and Key emergency service van on call"
              width="1200"
              height="675"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

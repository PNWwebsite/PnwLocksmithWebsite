import { company } from '../data/site'
import photo from '../assets/photos/van-commercial.jpg'
import { Phone } from './Icons'

export default function CtaBand() {
  return (
    <section className="ctaband" aria-label="Emergency service">
      <div className="wrap ctaband__row">
        <div className="ctaband__text">
          <p className="ctaband__kicker">Emergency service</p>
          <h2>Standing outside your own door? Say the word and a van is on the way.</h2>
          <div className="ctaband__act">
            <a className="btn btn--dark btn--lg" href={company.phoneHref}>
              <Phone size={19} />
              <span>{company.phoneDisplay}</span>
            </a>
            <p className="ctaband__hours">Answering 24/7, holidays included</p>
          </div>
        </div>

        <div className="ctaband__media">
          <img
            src={photo}
            alt="PNW Lock and Key service van parked outside a commercial storefront"
            width="1200"
            height="675"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

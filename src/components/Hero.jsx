import { company } from '../data/site'
import ContactForm from './ContactForm'
import Ridgeline from './Ridgeline'
import { Phone, Clock, Shield, Pin } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--onDark">
            <span className="dot" aria-hidden="true" /> Tigard · Portland metro · 24 hours
          </p>

          <h1 className="hero__title">
            <span>Locked out in the</span>
            <span>
              <em>Pacific Northwest?</em>
            </span>
            <span>We&rsquo;re already moving.</span>
          </h1>

          <p className="hero__lede">
            {company.name} is a licensed, mobile locksmith based in Tigard, Oregon. Professional
            residential, commercial and automotive locksmith services, around the clock.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={company.phoneHref}>
              <Phone size={19} />
              <span>{company.phoneDisplay}</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="#services">
              See what we do
            </a>
          </div>

          <ul className="hero__trust">
            <li>
              <span className="hero__trustIco" aria-hidden="true">
                <Clock size={17} />
              </span>
              <span>
                <strong>24/7</strong>
                Holidays included
              </span>
            </li>
            <li>
              <span className="hero__trustIco" aria-hidden="true">
                <Shield size={17} />
              </span>
              <span>
                <strong>Licensed {company.license}</strong>
                Bonded &amp; insured
              </span>
            </li>
            <li>
              <span className="hero__trustIco" aria-hidden="true">
                <Pin size={17} />
              </span>
              <span>
                <strong>Fully mobile</strong>
                Stocked vans, we come to you
              </span>
            </li>
          </ul>
        </div>

        <div className="hero__form">
          <ContactForm variant="compact" id="hero-form" />
        </div>
      </div>

      <Ridgeline className="ridge--toGreen" />
    </section>
  )
}

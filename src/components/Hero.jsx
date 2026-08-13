import { company } from '../data/site'
import ContactForm from './ContactForm'
import Ridgeline from './Ridgeline'
import { Phone, Clock, Shield, Pin } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />

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
            {company.name} is a licensed, mobile locksmith based on SW Oak St in Tigard. Homes,
            businesses and vehicles, day or night, anywhere within 20 miles of the shop.
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
              <Clock size={18} />
              <span>Answering 24/7, holidays included</span>
            </li>
            <li>
              <Shield size={18} />
              <span>Licensed {company.license} · bonded &amp; insured</span>
            </li>
            <li>
              <Pin size={18} />
              <span>Mobile vans across the metro</span>
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

import { company } from '../data/site'
import van from '../assets/photos/van.png'
import { Phone, Clock, Shield, Pin } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__wash" aria-hidden="true" />

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" /> Tigard · Portland metro · 24 hours
          </p>

          <h1 className="hero__title">
            Reliable Locksmith
            <br />
            <em>Service For Your Door</em>
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
            <a className="btn btn--outline btn--lg" href="#services">
              See our services
            </a>
          </div>

          <ul className="hero__trust">
            <li>
              <span className="hero__trustIco" aria-hidden="true">
                <Clock size={18} />
              </span>
              <span>
                <strong>24/7</strong>
                Holidays included
              </span>
            </li>
            <li>
              <span className="hero__trustIco" aria-hidden="true">
                <Shield size={18} />
              </span>
              <span>
                <strong>Licensed</strong>
                {company.license} · insured
              </span>
            </li>
            <li>
              <span className="hero__trustIco" aria-hidden="true">
                <Pin size={18} />
              </span>
              <span>
                <strong>Fully mobile</strong>
                We come to you
              </span>
            </li>
          </ul>
        </div>

        <div className="hero__van">
          <img src={van} alt="PNW Lock and Key service van" width="1100" height="520" />
        </div>
      </div>
    </section>
  )
}

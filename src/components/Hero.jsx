import { company } from '../data/site'
import heroPhoto from '../assets/photos/hero-tech.jpg'
import { Phone, Arrow, Clock, Shield, Pin, KeyIcon } from './Icons'

function Badge() {
  return (
    <div className="badge" aria-hidden="true">
      <svg viewBox="0 0 130 130" role="presentation">
        <defs>
          <path
            id="badgeArc"
            d="M65,65 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0"
          />
        </defs>
        <circle cx="65" cy="65" r="63" className="badge__disc" />
        <circle cx="65" cy="65" r="55" className="badge__ring" />
        <text className="badge__arc">
          <textPath href="#badgeArc" startOffset="0">
            LICENSED · BONDED · INSURED · ALWAYS OPEN ·
          </textPath>
        </text>
        <text x="65" y="74" textAnchor="middle" className="badge__num">
          24/7
        </text>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__panel">
        <img className="hero__photo" src={heroPhoto} alt="" fetchPriority="high" />
        <div className="hero__scrim" aria-hidden="true" />

        <div className="hero__inner">
          <div className="hero__main">
            <p className="hero__eyebrow">
              <KeyIcon size={17} />
              <span>Welcome to {company.name}</span>
            </p>

            <h1 className="hero__title">
              Locked out? <em>We&rsquo;re</em>
              <br />
              <em>on our way.</em>
            </h1>

            <p className="hero__lede">
              A licensed, mobile locksmith based in Tigard, Oregon. Residential, commercial and
              automotive lock and key service, answered around the clock.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary btn--pillArrow" href={company.phoneHref}>
                <Phone size={18} />
                <span>{company.phoneDisplay}</span>
                <span className="btn__arrow" aria-hidden="true">
                  <Arrow size={16} />
                </span>
              </a>
              <a className="btn btn--onPhoto btn--pillArrow" href="#services">
                <span>See our services</span>
                <span className="btn__arrow" aria-hidden="true">
                  <Arrow size={16} />
                </span>
              </a>
            </div>
          </div>

          <aside className="hero__aside">
            <Badge />
          </aside>
        </div>

        <ul className="hero__chips">
          <li>
            <span className="hero__chipIco" aria-hidden="true">
              <Clock size={18} />
            </span>
            <span>
              <strong>Open 24/7</strong>
              Holidays included
            </span>
          </li>
          <li>
            <span className="hero__chipIco" aria-hidden="true">
              <Shield size={18} />
            </span>
            <span>
              <strong>Licensed {company.license}</strong>
              Bonded &amp; insured
            </span>
          </li>
          <li>
            <span className="hero__chipIco" aria-hidden="true">
              <Pin size={18} />
            </span>
            <span>
              <strong>Fully mobile</strong>
              We come to you
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

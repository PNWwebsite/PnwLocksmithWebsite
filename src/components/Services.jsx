import { services, brands, company } from '../data/site'
import residentialShot from '../assets/photos/tech-keypad-760.webp'
import commercialShot from '../assets/photos/van-commercial-760.webp'
import automotiveShot from '../assets/photos/auto-key-760.webp'
import Ridgeline from './Ridgeline'
import { icons, Check, Phone, KeyIcon } from './Icons'

const shots = {
  residential: residentialShot,
  commercial: commercialShot,
  automotive: automotiveShot,
}

const alts = {
  residential: 'A PNW Lock and Key locksmith fitting a keypad deadbolt on a front door',
  commercial: 'PNW Lock and Key service van parked outside a commercial storefront',
  automotive: 'A PNW Lock and Key locksmith programming a car key fob beside a customer vehicle',
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <header className="sechead sechead--split" data-reveal>
          <div>
            <p className="eyebrow">
              <KeyIcon size={16} />
              <span>Locksmith services</span>
            </p>
            <h2 className="sechead__title">
              Licensed, mobile and <em>ready around the clock</em>
            </h2>
          </div>
          <div className="sechead__aside">
            <p>
              Every job is quoted before it starts. If a lock can be repaired instead of replaced,
              we will tell you that too.
            </p>
            <a className="btn btn--primary btn--pillArrow" href={company.phoneHref}>
              <span>Call now</span>
              <span className="btn__arrow" aria-hidden="true">
                <Phone size={15} />
              </span>
            </a>
          </div>
        </header>

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <article className="svc" key={s.id} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <div className="svc__media">
                  <div className="svc__shot">
                    <img src={shots[s.id]} alt={alts[s.id]} loading="lazy" width="1200" height="675" />
                  </div>

                  <span className="svc__notch svc__notch--icon" aria-hidden="true">
                    <span className="svc__iconBadge">
                      <Icon size={20} />
                    </span>
                  </span>

                  <span className="svc__notch svc__notch--call">
                    <a
                      className="svc__call"
                      href={company.phoneHref}
                      aria-label={`Call ${company.phoneDisplay} about ${s.label.toLowerCase()} locksmith work`}
                    >
                      <Phone size={19} />
                    </a>
                  </span>
                </div>

                <div className="svc__body">
                  <p className="svc__label">{s.label}</p>
                  <h3 className="svc__title">{s.title}</h3>
                  <p className="svc__blurb">{s.blurb}</p>

                  <ul className="svc__list">
                    {s.items.map((item) => (
                      <li key={item.name}>
                        <span className="svc__tick" aria-hidden="true">
                          <Check size={13} />
                        </span>
                        <span>
                          <strong>{item.name}</strong>
                          {item.blurb}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a className="svc__link" href={company.phoneHref}>
                    <Phone size={16} />
                    <span>Call about {s.label.toLowerCase()} work</span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="brands" data-reveal>
          <p className="brands__label">Hardware we stock and service</p>
          <ul className="brands__list">
            {brands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <Ridgeline className="ridge--toMint" />
    </section>
  )
}

import logoLight from '../assets/logo-light.png'
import { company, services } from '../data/site'
import { Phone, Pin, Clock } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <ul className="fcards">
            <li>
              <span className="fcards__ico" aria-hidden="true"><Phone size={20} /></span>
              <div>
                <p>Phone number</p>
                <a href={company.phoneHref}>{company.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <span className="fcards__ico" aria-hidden="true"><Clock size={20} /></span>
              <div>
                <p>Hours</p>
                <span>{company.hours} · every day</span>
              </div>
            </li>
            <li>
              <span className="fcards__ico" aria-hidden="true"><Pin size={20} /></span>
              <div>
                <p>Address</p>
                <a href={company.mapLink} target="_blank" rel="noreferrer">
                  {company.street}, {company.city}, {company.state} {company.zip}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="wrap site-footer__grid">
          <div className="site-footer__brand">
            <img
              className="site-footer__logo"
              src={logoLight}
              alt={`${company.name} logo`}
              width="900"
              height="424"
            />
            <p>
              Licensed mobile locksmiths working out of Tigard, Oregon. Residential, commercial and
              automotive lock and key service across the Portland metro.
            </p>
            <p className="site-footer__lic">License {company.license}</p>
          </div>

          <div className="site-footer__col">
            <h3>Quick links</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">How it works</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#areas">Service areas</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h3>Our services</h3>
            <ul>
              {services.flatMap((s) => s.items).map((item) => (
                <li key={item.name}>
                  <a href="#services">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col site-footer__cta">
            <h3>Locked out right now?</h3>
            <p>
              Someone answers at any hour, holidays included. Emergencies are dispatched ahead of
              scheduled work.
            </p>
            <a className="btn btn--primary btn--block" href={company.phoneHref}>
              <Phone size={17} />
              <span>{company.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div className="wrap site-footer__base">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p>Serving Washington, Clackamas, Multnomah, Yamhill and Clark counties.</p>
        </div>
      </footer>

      <div className="callbar">
        <a href={company.phoneHref}>
          <Phone size={18} />
          <span>Call {company.phoneDisplay} — open now</span>
        </a>
      </div>
    </>
  )
}

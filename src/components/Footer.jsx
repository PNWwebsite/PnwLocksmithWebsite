import logoLight from '../assets/logo-light.png'
import { company, services } from '../data/site'
import { Phone } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className="site-footer">
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
            <p className="site-footer__lic">{company.license}</p>
          </div>

          <div className="site-footer__col">
            <h3>Services</h3>
            <ul>
              {services.flatMap((s) => s.items).map((item) => (
                <li key={item.name}>
                  <a href="#services">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#areas">Service areas</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#emergency">24/7 emergency</a></li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h3>Reach us</h3>
            <ul>
              <li>
                <a href={company.phoneHref}>{company.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>{company.street}</li>
              <li>
                {company.city}, {company.state} {company.zip}
              </li>
              <li className="site-footer__hours">{company.hours}</li>
            </ul>
          </div>
        </div>

        <div className="wrap site-footer__base">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
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

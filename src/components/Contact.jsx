import { company } from '../data/site'
import ContactForm from './ContactForm'
import { Phone, Pin, Clock, Shield } from './Icons'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <header className="sechead" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="sechead__title">
            Find us, or have us <em>come to you</em>
          </h2>
          <p className="sechead__lede">
            The shop is on SW Oak St in Tigard, a minute off Highway 217. Most work happens at your
            door, so calling is usually the fastest route.
          </p>
        </header>

        <div className="contact__grid">
          <div className="contact__panel" data-reveal>
            <ul className="contact__details">
              <li>
                <span className="contact__ico" aria-hidden="true"><Phone size={18} /></span>
                <div>
                  <p className="contact__k">Phone</p>
                  <a className="contact__v contact__v--big" href={company.phoneHref}>
                    {company.phoneDisplay}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__ico" aria-hidden="true"><Pin size={18} /></span>
                <div>
                  <p className="contact__k">Address</p>
                  <a
                    className="contact__v"
                    href={company.mapLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {company.street}
                    <br />
                    {company.city}, {company.state} {company.zip}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__ico" aria-hidden="true"><Clock size={18} /></span>
                <div>
                  <p className="contact__k">Hours</p>
                  <p className="contact__v">{company.hours}</p>
                </div>
              </li>
              <li>
                <span className="contact__ico" aria-hidden="true"><Shield size={18} /></span>
                <div>
                  <p className="contact__k">License</p>
                  <p className="contact__v">{company.license}</p>
                </div>
              </li>
            </ul>

            <div className="contact__map">
              <iframe
                title={`Map to ${company.name}, ${company.addressLine}`}
                src={company.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a className="contact__directions" href={company.mapLink} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>

          <div className="contact__form" data-reveal>
            <ContactForm variant="full" id="contact-form" />
          </div>
        </div>
      </div>
    </section>
  )
}

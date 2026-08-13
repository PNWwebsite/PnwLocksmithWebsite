import { company } from '../data/site'
import ContactForm from './ContactForm'
import bg from '../assets/photos/hero-tech.jpg'
import { KeyIcon, Phone, Pin, Clock, Shield } from './Icons'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__top">
        <img className="contact__bg" src={bg} alt="" aria-hidden="true" loading="lazy" />
        <div className="contact__scrim" aria-hidden="true" />
        <header className="wrap contact__head" data-reveal>
          <p className="eyebrow eyebrow--onDark">
            <KeyIcon size={16} />
            <span>Contact us</span>
          </p>
          <h2 className="contact__title">
            Let&rsquo;s solve your <em>lock &amp; key</em> problem
          </h2>
          <p className="contact__lede">
            Call any hour and speak to a locksmith, or send your details and we will call you back.
          </p>
        </header>
      </div>

      <div className="wrap">
        <div className="contact__card" data-reveal>
          <div className="contact__panel">
            <h3 className="contact__panelTitle">
              We are available 24/7 for emergencies and everything else
            </h3>
            <p className="contact__panelText">
              Licensed, bonded and insured, working out of Tigard and covering the metro.
            </p>

            <ul className="contact__details">
              <li>
                <span className="contact__ico" aria-hidden="true"><Phone size={19} /></span>
                <div>
                  <p className="contact__k">Phone number</p>
                  <a className="contact__v contact__v--big" href={company.phoneHref}>
                    {company.phoneDisplay}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__ico" aria-hidden="true"><Clock size={19} /></span>
                <div>
                  <p className="contact__k">Hours</p>
                  <p className="contact__v">{company.hours}</p>
                </div>
              </li>
              <li>
                <span className="contact__ico" aria-hidden="true"><Pin size={19} /></span>
                <div>
                  <p className="contact__k">Address</p>
                  <a className="contact__v" href={company.mapLink} target="_blank" rel="noreferrer">
                    {company.street}, {company.city}, {company.state} {company.zip}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__ico" aria-hidden="true"><Shield size={19} /></span>
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
          </div>

          <div className="contact__formWrap">
            <ContactForm variant="full" id="contact-form" />
          </div>
        </div>
      </div>
    </section>
  )
}

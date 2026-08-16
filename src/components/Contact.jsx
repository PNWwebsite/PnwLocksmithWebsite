import { useState } from 'react'
import { company } from '../data/site'
import ContactForm from './ContactForm'
import { KeyIcon, Phone, Pin, Clock, Shield } from './Icons'

export default function Contact() {
  // The Google Maps embed pulls in a large third-party payload, so it only
  // loads once the visitor asks for it.
  const [mapOn, setMapOn] = useState(false)

  return (
    <section className="contact" id="contact">
      <div className="contact__top">
        <img
          className="contact__bg"
          src="/hero/hero-tech-1400.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width="1400"
          height="788"
        />
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
            Locked out or need help fast? Call anytime to speak with a locksmith, or send us your
            details and we&rsquo;ll get back to you quickly.
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
              {mapOn ? (
                <iframe
                  title={`Map to ${company.name}, ${company.addressLine}`}
                  src={company.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <button type="button" className="contact__mapBtn" onClick={() => setMapOn(true)}>
                  <span className="contact__mapPin" aria-hidden="true">
                    <Pin size={22} />
                  </span>
                  <span>
                    <strong>Show the map</strong>
                    {company.addressLine}
                  </span>
                </button>
              )}
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

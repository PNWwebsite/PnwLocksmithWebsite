import { company } from '../data/site'
import van from '../assets/photos/van.png'
import { Phone, Shield, Clock, KeyIcon, Arrow } from './Icons'

const pillars = [
  {
    icon: Shield,
    title: 'Our promise',
    body: 'The price you hear on the phone is the price at the end. Non-destructive entry wherever the lock allows.',
  },
  {
    icon: Clock,
    title: 'Our standard',
    body: 'Licensed, bonded and insured work, finished on the first visit because the van carries the parts.',
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about__grid">
        <div className="about__left" data-reveal>
          <p className="eyebrow">
            <KeyIcon size={16} />
            <span>Who we are</span>
          </p>
          <h2 className="about__title">
            Your local partner for <em>reliable locksmith work</em>
          </h2>

          <figure className="about__frame">
            <span className="about__tab" aria-hidden="true">
              <strong>24/7</strong>
              <span>Always open</span>
            </span>
            <img src={van} alt="PNW Lock and Key service van" width="1100" height="520" loading="lazy" />
          </figure>
        </div>

        <div className="about__right" data-reveal>
          <p className="about__text">
            {company.name} started because too many people around here were calling a national
            number, waiting two hours, and then hearing a price they had never agreed to. That is
            not how a trade should work.
          </p>
          <p className="about__text">
            We are a small crew of licensed locksmiths based in Tigard, Oregon, serving Portland and
            the surrounding communities. We cut and program car keys on site, rekey homes the same
            afternoon someone moves in, and keep commercial doors code compliant for property
            managers who cannot afford a stuck exit device.
          </p>

          <div className="pillars">
            {pillars.map(({ icon: Icon, title, body }) => (
              <article className="pillar" key={title}>
                <span className="pillar__ico" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <dl className="about__facts">
            <div>
              <dt>Hours</dt>
              <dd>24 / 7 / 365</dd>
            </div>
            <div>
              <dt>License</dt>
              <dd>{company.license}</dd>
            </div>
            <div>
              <dt>Service</dt>
              <dd>Fully mobile</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Tigard, OR</dd>
            </div>
          </dl>

          <div className="about__cta">
            <a className="btn btn--primary btn--pillArrow" href="#services">
              <span>See what we do</span>
              <span className="btn__arrow" aria-hidden="true">
                <Arrow size={15} />
              </span>
            </a>
            <a className="about__phone" href={company.phoneHref}>
              <span className="about__phoneIco" aria-hidden="true">
                <Phone size={20} />
              </span>
              <span>
                <strong>{company.phoneDisplay}</strong>
                Emergency locksmith support
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

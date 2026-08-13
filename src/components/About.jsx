import { company } from '../data/site'
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
      <div className="wrap">
        <header className="sechead sechead--center" data-reveal>
          <p className="eyebrow">
            <KeyIcon size={16} />
            <span>Who we are</span>
          </p>
          <h2 className="about__title">
            Your local partner for <em>reliable locksmith work</em>
          </h2>
        </header>

        <div className="about__grid">
          <div className="about__copy" data-reveal>
            <p className="about__text">
              {company.name} was built around a simple idea: locksmith service should be fast,
              straightforward, and local. No long waits, no surprise pricing, and no call centers
              sending out whoever happens to be available.
            </p>
            <p className="about__text">
              We&rsquo;re a licensed locksmith team based in Tigard, Oregon, serving Portland and
              the surrounding communities. From car key replacement and programming to residential
              rekeying and commercial lock and door services, we handle the work on-site with clear
              communication and dependable service.
            </p>
            <p className="about__text">
              Whether you&rsquo;re locked out, moving into a new home, need a replacement car key,
              or manage a property that needs reliable locksmith support, our goal is the same:
              show up prepared, do the job right, and make the process easy.
            </p>
          </div>

          <div className="about__side" data-reveal>
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
          </div>
        </div>

        <div className="about__cta" data-reveal>
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
    </section>
  )
}

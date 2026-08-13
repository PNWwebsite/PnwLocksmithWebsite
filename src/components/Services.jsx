import { services, brands, company } from '../data/site'
import { icons, Check, Phone } from './Icons'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <header className="sechead" data-reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="sechead__title">
            Locksmith work for <em>home, business and vehicle</em>
          </h2>
          <p className="sechead__lede">
            Every job is quoted before it starts. If a lock can be repaired instead of replaced, we
            will tell you that too.
          </p>
        </header>

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <article className="svc" key={s.id} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <span className="svc__badge" aria-hidden="true">
                  <Icon size={26} />
                </span>

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
                  <span>Ask about {s.label.toLowerCase()} work</span>
                </a>
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
    </section>
  )
}

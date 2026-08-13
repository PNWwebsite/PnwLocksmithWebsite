import { areas, company } from '../data/site'
import bg from '../assets/photos/van-commercial.jpg'
import { KeyIcon, Phone, Pin } from './Icons'

export default function Areas() {
  const cityCount = areas.reduce((n, g) => n + g.cities.length, 0)

  return (
    <section className="areas" id="areas">
      <div className="wrap">
        <div className="areas__panel" data-reveal>
          <img className="areas__bg" src={bg} alt="" aria-hidden="true" loading="lazy" />
          <div className="areas__scrim" aria-hidden="true" />

          <div className="areas__inner">
            <div className="areas__intro">
              <p className="eyebrow eyebrow--onDark">
                <KeyIcon size={16} />
                <span>Service areas</span>
              </p>
              <h2 className="areas__title">
                Areas we <em>serve</em>
              </h2>
              <p className="areas__lede">
                We are mobile, so the work happens at your door. Our vans cover Tigard, Portland
                and the surrounding communities. If your town is not listed, call anyway and we
                will tell you straight whether we can get to you.
              </p>
              <a className="btn btn--primary btn--pillArrow" href={company.phoneHref}>
                <span>Check your address</span>
                <span className="btn__arrow" aria-hidden="true">
                  <Phone size={15} />
                </span>
              </a>
            </div>

            <div className="areas__cards">
              {areas.map((group, i) => (
                <article className="areacard" key={group.county} style={{ '--d': `${i * 70}ms` }}>
                  <span className="areacard__ico" aria-hidden="true">
                    <Pin size={17} />
                  </span>
                  <h3>{group.county}</h3>
                  <p>{group.cities.join(' · ')}</p>
                </article>
              ))}

              <div className="areas__seal">
                <strong>{cityCount}</strong>
                <span>Towns covered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

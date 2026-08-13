import { areas, company } from '../data/site'
import { Pin } from './Icons'

export default function Areas() {
  return (
    <section className="areas" id="areas">
      <div className="wrap">
        <header className="sechead" data-reveal>
          <p className="eyebrow">Service areas</p>
          <h2 className="sechead__title">
            Twenty miles out from <em>SW Oak St</em>
          </h2>
          <p className="sechead__lede">
            Distances below are measured from the shop in Tigard. If your town is not listed and
            you are near the edge of the circle, call anyway — we will tell you straight whether we
            can get there.
          </p>
        </header>

        <div className="areas__layout">
          <div className="radius" data-reveal aria-hidden="true">
            <div className="radius__ring radius__ring--20">
              <span className="radius__tag">20 mi</span>
              <div className="radius__ring radius__ring--10">
                <span className="radius__tag">10 mi</span>
                <div className="radius__ring radius__ring--5">
                  <span className="radius__tag">5 mi</span>
                  <span className="radius__core">
                    <Pin size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="radius__caption" data-reveal>
            <p className="radius__label">Base of operations</p>
            <p className="radius__addr">{company.addressLine}</p>
            <a className="radius__link" href={company.mapLink} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>

          <div className="areas__columns">
            {areas.map((group, i) => (
              <section className="areagroup" key={group.county} data-reveal style={{ '--d': `${i * 70}ms` }}>
                <header className="areagroup__head">
                  <h3>{group.county}</h3>
                  <p>{group.note}</p>
                </header>
                <ul className="areagroup__list">
                  {group.cities.map(([city, dist]) => (
                    <li key={city}>
                      <span className="areagroup__city">{city}</span>
                      <span className="areagroup__dot" aria-hidden="true" />
                      <span className="areagroup__dist">{dist}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

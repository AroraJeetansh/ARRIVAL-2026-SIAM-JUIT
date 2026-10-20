import { SPONSORS_DATA } from '../data/eventData';
import './SponsorsSection.css';

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="sponsors-section">
      <span className="section-subhead">// ORBITAL PARTNERS</span>
      <h2 className="section-stamp">OUR SPONSORS</h2>

      <div className="sponsors-section__tiers">
        {SPONSORS_DATA.map((tier) => (
          <div key={tier.tier} className="sponsor-tier">
            <div className="sponsor-tier__header">
              <span className="sponsor-tier__badge">◆ {tier.tier}</span>
              <p className="sponsor-tier__subtitle">{tier.subtitle}</p>
            </div>

            <div className="sponsor-tier__grid">
              {tier.items.map((sponsor) => (
                <div key={sponsor.name} className="sponsor-card-item">
                  <div className="sponsor-logo-card">
                    <img
                      src={sponsor.cardImage}
                      alt={`${sponsor.name} — ${sponsor.category}`}
                      className="sponsor-logo-card__img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="sponsor-card-item__info">
                    <h3 className="sponsor-card-item__name">{sponsor.name}</h3>
                    <p className="sponsor-card-item__tagline">{sponsor.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

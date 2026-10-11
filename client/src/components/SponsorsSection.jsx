import HoloCard from './HoloCard';
import { SPONSORS_DATA } from '../data/festivalData';
import './SponsorsSection.css';

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="sponsors-section">
      <span className="section-subhead">// ORBITAL PARTNERS</span>
      <h2 className="section-stamp">O U R &nbsp; S P O N S O R S</h2>

      <div className="sponsors-section__tiers">
        {SPONSORS_DATA.map((tier) => {
          const tierSlug = tier.tier.toLowerCase().includes('alpha')
            ? 'alpha'
            : tier.tier.toLowerCase().includes('nebula')
            ? 'nebula'
            : 'orbit';

          return (
            <div key={tier.tier} className={`sponsor-tier sponsor-tier--${tierSlug}`}>
              <div className="sponsor-tier__header">
                <span className="sponsor-tier__badge">◆ {tier.tier}</span>
                <p className="sponsor-tier__subtitle">{tier.subtitle}</p>
              </div>

              {/* 3rd Card Usage: Sponsor Logos in HoloCard */}
              <div className="sponsor-tier__grid">
                {tier.items.map((sponsor) => (
                  <div key={sponsor.name} className="sponsor-card-item">
                    <HoloCard
                      image={sponsor.cardImage}
                      alt={`${sponsor.name} — ${sponsor.category}`}
                      preset={sponsor.preset}
                      foilColor={sponsor.foilColor}
                      intensity={0.85}
                      width={280}
                      radius={16}
                      hoverScale={1.05}
                    />
                    <div className="sponsor-card-item__info">
                      <h3 className="sponsor-card-item__name">{sponsor.name}</h3>
                      <p className="sponsor-card-item__tagline">{sponsor.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

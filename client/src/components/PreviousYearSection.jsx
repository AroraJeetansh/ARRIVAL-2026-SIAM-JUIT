import { PREVIOUS_YEAR_PHOTOS } from '../data/festivalData';
import './PreviousYearSection.css';

export default function PreviousYearSection() {
  return (
    <section id="previous-year" className="previous-year-section">
      <span className="section-subhead">// MISSION ARCHIVES</span>
      <h2 className="section-stamp">P R E V I O U S &nbsp; Y E A R</h2>

      <div className="previous-year-section__gallery">
        {PREVIOUS_YEAR_PHOTOS.map((item) => (
          <div key={item.title} className="gallery-card">
            <div className="gallery-card__img-wrap">
              <img src={item.src} alt={item.title} className="gallery-card__img" />
              <span className="gallery-card__tag">{item.tag}</span>
            </div>
            <div className="gallery-card__body">
              <h3 className="gallery-card__title">{item.title}</h3>
              <p className="gallery-card__desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { FESTIVAL_STATS } from '../data/eventData';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <span className="section-subhead">// FLIGHT BRIEFING</span>
      <h2 className="section-stamp">ABOUT ARRIVAL</h2>

      <div className="about-section__grid">
        <div className="about-section__prose">
          <p className="about-section__lead">
            Arrival is an engaging and multifaceted cultural and technical fest that brings together creativity, collaboration, and innovation under one roof.
          </p>
          <p>
            Comprising a diverse array of events, ranging from technical competitions and cultural showcases to workshops and exhibitions, Arrival serves as a vibrant platform for students to express their talents, exchange ideas, and explore new dimensions of learning and entertainment.
          </p>
          <p>
            Each segment of the fest is crafted to highlight a unique facet of student excellence: from showcasing artistic brilliance and technical ingenuity to fostering teamwork and leadership.
          </p>
          <p>
            In essence, Arrival is more than just an annual fest—it’s a celebration of passion, diversity, and the ever-evolving spirit of the student community, where innovation meets inspiration and ideas come to life.
          </p>
        </div>

        <div className="about-section__stats">
          {FESTIVAL_STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
              <span className="stat-card__desc">{stat.desc}</span>
            </div>
          ))}
          <a
            className="about-section__brochure"
            href="https://res.cloudinary.com/dgvfmxzg0/image/upload/fl_attachment/v1792518292/ARRIVAL_Brochure___erjvn4.pdf"
            download="ARRIVAL_Brochure.pdf"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

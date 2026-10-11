import HoloCard from './HoloCard';
import { ORGANIZING_TEAM } from '../data/festivalData';
import './OrganizersSection.css';

export default function OrganizersSection() {
  return (
    <section id="team" className="organizers-section">
      <span className="section-subhead">// MISSION COMMAND</span>
      <h2 className="section-stamp">T H E &nbsp; T E A M &nbsp; B E H I N D &nbsp; A R R I V A L</h2>

      <div className="organizers-section__grid">
        {ORGANIZING_TEAM.map((member) => (
          <div key={member.name} className="organizer-item">
            {/* 2nd Card Usage: Organizer portrait in HoloCard */}
            <div className="organizer-item__card-wrap">
              <HoloCard
                image={member.photo}
                alt={`${member.name} — ${member.role}`}
                preset={member.preset}
                foilColor={member.foilColor}
                intensity={0.82}
                width={250}
                radius={16}
                hoverScale={1.05}
              />
            </div>

            {/* Details placed below the card as requested */}
            <div className="organizer-item__details">
              <h3 className="organizer-item__name">{member.name}</h3>
              <p className="organizer-item__role">{member.role}</p>
              <p className="organizer-item__dept">{member.dept}</p>

              <div className="organizer-item__tags">
                {member.tags.map((t) => (
                  <span key={t} className="organizer-item__tag">
                    {t}
                  </span>
                ))}
              </div>

              <span className="organizer-item__handle">{member.handle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

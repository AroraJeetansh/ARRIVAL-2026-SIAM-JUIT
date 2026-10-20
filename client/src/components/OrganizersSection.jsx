import { CORE_TEAM_MEMBERS } from '../data/eventData';
import TeamCard from './TeamCard';
import './OrganizersSection.css';

export default function OrganizersSection({ onNavigateToMember }) {
  const handleCardClick = (member) => {
    if (onNavigateToMember) {
      onNavigateToMember(member.id);
    } else {
      window.location.hash = `#/team/${member.id}`;
    }
  };

  return (
    <section id="team" className="organizers-section" aria-label="Meet the Minds Behind ARRIVAL '26">
      <div className="organizers-section__header">
        <div className="organizers-section__title-block">
          <span className="section-subhead">// MISSION ARCHITECTS</span>
          <h2 className="section-stamp organizers-section__title">Meet the Minds Behind ARRIVAL '26</h2>
          <p className="organizers-section__subtitle">
            Every great event has a team of people turning ambitious ideas into reality. Get to know the minds behind ARRIVAL 2026.
          </p>
        </div>
      </div>

      <div className="organizers-section__grid">
        {CORE_TEAM_MEMBERS.map((member, index) => (
          <TeamCard
            key={member.id}
            member={member}
            featured={index === 0}
            index={index}
            onSelectMember={handleCardClick}
          />
        ))}
      </div>
    </section>
  );
}

import HoloCard from './HoloCard';
import { FESTIVAL_EVENTS } from '../data/eventData';
import { RetroTrophy, RetroChrono, RetroBeacon, RetroArrow } from './RetroIcons';
import './EventsSection.css';

export default function EventsSection({ onOpenRegister }) {
  return (
    <section id="events" className="events-section">
      <span className="section-subhead">// MISSION EXPEDITIONS</span>
      <h2 className="section-stamp">EVENTS AT ARRIVAL ’26</h2>

      <div className="events-section__list">
        {FESTIVAL_EVENTS.map((event, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={event.id}
              className={`event-row${isReversed ? ' event-row--reverse' : ''}`}
            >
              {/* 1st Card Usage: Event Poster in Holographic Shader Card */}
              <div className="event-row__card-col">
                <HoloCard
                  image={event.poster}
                  alt={`${event.title} Poster`}
                  preset={event.preset}
                  foilColor={event.foilColor}
                  intensity={0.88}
                  glare={0.55}
                  width={320}
                  radius={16}
                />
              </div>

              {/* Event Description & Details */}
              <div className="event-row__info-col">
                <span className="event-row__category">{event.category}</span>
                <h3 className="event-row__title">{event.title}</h3>
                <p className="event-row__subtitle">{event.subtitle}</p>

                <div className="event-row__meta">
                  <span className="event-row__meta-item event-row__prize">
                    <RetroTrophy size={14} color="#ffd700" />
                    <span>{event.prizePool}</span>
                  </span>
                  <span className="event-row__meta-item event-row__schedule">
                    <RetroChrono size={14} color="#53c2c6" />
                    <span>{event.schedule}</span>
                  </span>
                  <span className="event-row__meta-item event-row__venue">
                    <RetroBeacon size={14} color="#e1bdff" />
                    <span>{event.venue}</span>
                  </span>
                </div>

                <p className="event-row__summary">{event.summary}</p>
                <p className="event-row__desc">{event.description}</p>

                <div className="event-row__badges">
                  {event.badges.map((b) => (
                    <span key={b} className="event-row__badge">
                      #{b}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="event-row__btn-register"
                  onClick={() => onOpenRegister(event.title)}
                >
                  <span>Register for {event.title}</span>
                  <RetroArrow size={14} className="event-row__btn-arrow" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

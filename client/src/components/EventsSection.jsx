import HoloCard from './HoloCard';
import { FESTIVAL_EVENTS } from '../data/eventData';
import './EventsSection.css';

export default function EventsSection({ onOpenRegister }) {
  return (
    <section id="events" className="events-section">
      <span className="section-subhead">// MISSION EXPEDITIONS</span>
      <h2 className="section-stamp">E V E N T S &nbsp; A T &nbsp; A R R I V A L &nbsp; ’ 2 6</h2>

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
                    🏆 {event.prizePool}
                  </span>
                  <span className="event-row__meta-item">
                    ⏱ {event.schedule}
                  </span>
                  <span className="event-row__meta-item">
                    📍 {event.venue}
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
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

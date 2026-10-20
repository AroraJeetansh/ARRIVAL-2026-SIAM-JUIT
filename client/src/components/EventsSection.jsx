import { FESTIVAL_EVENTS } from '../data/eventData';
import { RetroTrophy, RetroChrono, RetroBeacon, RetroArrow } from './RetroIcons';
import './EventsSection.css';

const NO_REGISTRATION = ['speaker', 'resume'];

export default function EventsSection({ onOpenRegister }) {
  return (
    <section id="events" className="events-section">
      <span className="section-subhead">// MISSION EXPEDITIONS</span>
      <h2 className="section-stamp">EVENTS AT ARRIVAL ’26</h2>

      <div className="events-section__list">
        {FESTIVAL_EVENTS.map((event, index) => {
          const isReversed = index % 2 === 1;
          const needsRegistration = !NO_REGISTRATION.some((k) =>
          event.title.toLowerCase().includes(k)
          );

          return (
            <div
              key={event.id}
              className={`event-row${isReversed ? ' event-row--reverse' : ''}`}
            >
              <div className="event-row__card-col">
                <div className="event-poster">
                  <img
                    src={event.poster}
                    alt={`${event.title} Poster`}
                    className="event-poster__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
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

                              <div className="event-row__badges">
                  {event.badges.map((b) => (
                    <span key={b} className="event-row__badge">
                      #{b}
                    </span>
                  ))}
                </div>
                {/* ⬇ REPLACE the old <button> with this */}
                {needsRegistration && (
                  <button
                    type="button"
                    className="event-row__btn-register"
                    onClick={() => onOpenRegister(event.title)}
                  >
                    <span>Register for {event.title}</span>
                    <RetroArrow size={14} className="event-row__btn-arrow" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

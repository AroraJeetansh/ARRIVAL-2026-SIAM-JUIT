import { useState } from 'react';
import { FESTIVAL_EVENTS, FESTIVAL_METADATA } from '../data/eventData';
import './RegisterModal.css';

export default function RegisterModal({ isOpen, onClose, defaultEvent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(defaultEvent || 'all');
  const [submitted, setSubmitted] = useState(false);

  const [prevDefault, setPrevDefault] = useState(defaultEvent);
  if (defaultEvent !== prevDefault) {
    setPrevDefault(defaultEvent);
    setSelectedEvent(defaultEvent || 'all');
  }

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Also open Google Form in new tab per website.md
      window.open(FESTIVAL_METADATA.registrationUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <span className="modal-badge">
          // ARRIVAL ’26 REGISTRATION PORTAL
        </span>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
            <h3 className="modal-title">COSMIC CLEARANCE GRANTED</h3>
            <p className="modal-desc">
              Redirecting you to the official Google Form registration sheet... Safe travels, Stargazer!
            </p>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Join the Next Chapter</h3>
            <p className="modal-desc">
              Secure your flight coordinates for Arrival ’26 at JUIT Waknaghat on October 23, 2026.
            </p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-field">
                <label className="modal-label">Stargazer Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  className="modal-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="modal-field">
                <label className="modal-label">Institutional / Tech Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.edu"
                  className="modal-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="modal-field">
                <label className="modal-label">Preferred Expedition Track</label>
                <select
                  className="modal-select"
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                >
                  <option value="all">Full Fest Access Pass (All Tracks)</option>
                  {FESTIVAL_EVENTS.map((ev) => (
                    <option key={ev.id} value={ev.title}>
                      {ev.title} ({ev.category})
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="modal-btn-submit">
                <span>Confirm & Open Registration Form</span>
                <span>↗</span>
              </button>

              <a
                href={FESTIVAL_METADATA.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="modal-gform-link"
              >
                Direct Link to Official Google Form →
              </a>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

import './RegisterModal.css';

export default function RegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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

        <h3 className="modal-title">Join the Next Chapter</h3>
        <p className="modal-desc">
          Secure your flight coordinates for Arrival ’26 at JUIT Waknaghat on October 23, 2026.
        </p>

        <div className="modal-form">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSduZ8nlow8zGhVbwt7M-6QBgbYW3vru88Tg-c3mWELXmBp5EQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn-submit"
            style={{ textDecoration: 'none' }}
          >
            <span>Innovate with NVIDIA Hackathon</span>
            <span>↗</span>
          </a>

          <a
            href="http://qrto.org/y8T8As"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn-submit"
            style={{ textDecoration: 'none' }}
          >
            <span>Other Amazing Events</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
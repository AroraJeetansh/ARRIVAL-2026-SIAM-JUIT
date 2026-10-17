import { useState, useEffect } from 'react';
import { FESTIVAL_METADATA, FESTIVAL_NAV_LINKS } from '../data/eventData';
import './FloatingNav.css';

export default function FloatingNav({ onOpenRegister }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Floating Action Controls on Top-Right */}
      <div className="floating-nav">
        {/* 1. Transparent Button Menu */}
        <button
          type="button"
          className="floating-nav__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="floating-nav__burger-icon" aria-hidden="true">
            <span className={`bar ${menuOpen ? 'bar--open-1' : ''}`} />
            <span className={`bar ${menuOpen ? 'bar--open-2' : ''}`} />
            <span className={`bar ${menuOpen ? 'bar--open-3' : ''}`} />
          </span>
          <span className="floating-nav__menu-text">MENU</span>
        </button>

        {/* 2. Glowing Neon Register Button Directly Below */}
        <button
          type="button"
          className="floating-nav__neon-register-btn"
          onClick={onOpenRegister}
          aria-label="Register for Arrival '26"
        >
          <span className="floating-nav__neon-icon">⚡</span>
          <span className="floating-nav__neon-text">REGISTER NOW</span>
          <span className="floating-nav__neon-glow-ring" aria-hidden="true" />
        </button>
      </div>

      {/* Slide-out Backdrop Overlay */}
      <div
        className={`nav-drawer__overlay ${menuOpen ? 'nav-drawer__overlay--visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Navigation Drawer */}
      <aside
        className={`nav-drawer ${menuOpen ? 'nav-drawer--open' : ''}`}
        aria-label="Mission Navigation"
        aria-hidden={!menuOpen}
      >
        <div className="nav-drawer__header">
          <div className="nav-drawer__badge">
            <span className="nav-drawer__badge-dot" />
            <span>MISSION DIRECTORY</span>
          </div>

          <button
            type="button"
            className="nav-drawer__close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        {/* Brand / Mission Stamp */}
        <div className="nav-drawer__identity">
          <h2 className="nav-drawer__title">{FESTIVAL_METADATA.name}</h2>
          <p className="nav-drawer__sub">{FESTIVAL_METADATA.organizer} PRESENTS</p>
          <p className="nav-drawer__tagline">{FESTIVAL_METADATA.tagline}</p>
        </div>

        {/* Navigation Links */}
        <nav className="nav-drawer__nav">
          <ul className="nav-drawer__links">
            {FESTIVAL_NAV_LINKS.map((link, index) => (
              <li key={link.label} className="nav-drawer__item">
                <a
                  href={link.href}
                  className="nav-drawer__link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span className="nav-drawer__link-num">0{index + 1}</span>
                  <span className="nav-drawer__link-label">{link.label}</span>
                  <span className="nav-drawer__link-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Telemetry info in drawer footer */}
        <div className="nav-drawer__footer">
          <div className="nav-drawer__meta-row">
            <span className="nav-drawer__meta-label">DATE:</span>
            <span className="nav-drawer__meta-value">{FESTIVAL_METADATA.formattedDate}</span>
          </div>
          <div className="nav-drawer__meta-row">
            <span className="nav-drawer__meta-label">COORD:</span>
            <span className="nav-drawer__meta-value">{FESTIVAL_METADATA.coordinates.formatted}</span>
          </div>
          <div className="nav-drawer__meta-row">
            <span className="nav-drawer__meta-label">VENUE:</span>
            <span className="nav-drawer__meta-value">{FESTIVAL_METADATA.venue}</span>
          </div>

          <button
            type="button"
            className="nav-drawer__cta"
            onClick={() => {
              setMenuOpen(false);
              onOpenRegister();
            }}
          >
            <span>SECURE YOUR SPOT</span>
            <span>↗</span>
          </button>
        </div>
      </aside>
    </>
  );
}

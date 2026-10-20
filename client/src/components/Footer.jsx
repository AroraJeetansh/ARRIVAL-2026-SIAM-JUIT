import { FESTIVAL_METADATA, FESTIVAL_NAV_LINKS } from '../data/eventData';
import { RetroHeart } from './RetroIcons';
import './Footer.css';

export default function Footer({ onOpenRegister, onNavigateToHome }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetHref = (href === '/team' || href === '#/team' || href === '#team') ? '#team' : href;
    if (onNavigateToHome) {
      onNavigateToHome(targetHref);
    } else {
      const target = document.querySelector(targetHref);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Brand & mission */}
          <div className="footer__brand">
            <h3 className="footer__title">{FESTIVAL_METADATA.name}</h3>
            <p className="footer__desc">
              The flagship cultural and technical fest bringing creativity, collaboration, and cutting-edge innovation under one cosmic roof.
            </p>
            <div className="footer__org-badge">
              <span>ORGANIZED BY {FESTIVAL_METADATA.organizer}</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__nav-group">
            <h4 className="footer__heading">EXPEDITION</h4>
            {FESTIVAL_NAV_LINKS.slice(0, 4).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer__link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Communication & register */}
          <div className="footer__nav-group">
            <h4 className="footer__heading">ENGAGEMENT</h4>
            <a
              href="#sponsors"
              className="footer__link"
              onClick={(e) => handleLinkClick(e, '#sponsors')}
            >
              Sponsors & Partners
            </a>
            <a
              href="#team"
              className="footer__link"
              onClick={(e) => handleLinkClick(e, '#team')}
            >
              Organizing Team
            </a>
            <button
              type="button"
              className="footer__link"
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              onClick={onOpenRegister}
            >
              Register Now ↗
            </button>
            <a href={`mailto:${FESTIVAL_METADATA.contactEmail}`} className="footer__link">
              Contact: {FESTIVAL_METADATA.contactEmail}
            </a>
          </div>
        </div>

        {/* dope.security signature coordinate strip */}
        <div className="footer__coordinates-strip">
          <div className="footer__coords-left">
            <span>+</span>
            <span>FLIGHT DIRECT: ARRIVAL ’26</span>
            <span>•</span>
            <span>{FESTIVAL_METADATA.venue}</span>
          </div>

          <div className="footer__coords-right">
            <span>{FESTIVAL_METADATA.coordinates.formatted}</span>
            <RetroHeart size={13} color="#af50ff" />
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <span>© 2026 ARRIVAL. All rights reserved.</span>
          <span>SOCIETY FOR INDUSTRIAL AND APPLIED MATHEMATICS // JUIT</span>
        </div>
      </div>
    </footer>
  );
}

import { useRef, useEffect } from 'react';
import './TeamCard.css';

function photoSrc(member) {
  const src = member.image || member.photo;
  if (!src) return '';
  if (src.includes('res.cloudinary.com') && src.includes('/upload/')) {
    return src.replace('/upload/', '/upload/f_auto,q_auto,w_720,c_fill,g_auto/');
  }
  return src;
}

export default function TeamCard({ member, featured = false, index = 0, onSelectMember }) {
  const cardRef = useRef(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visibleRef.current = true;
          el.classList.add('team-card--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 6;

    el.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
    el.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
    el.classList.add('team-card--hovered');
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
    el.classList.remove('team-card--hovered');
  };

  const handleClick = () => {
    onSelectMember?.(member);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectMember?.(member);
    }
  };

  const src = photoSrc(member);

  return (
    <article
      ref={cardRef}
      className={`team-card ${featured ? 'team-card--featured' : ''}`}
      style={{
        '--card-accent': member.accent,
        '--card-secondary': member.secondary || '#ffffff',
        '--transition-delay': `${index * 80}ms`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open portfolio dossier for ${member.name}, ${member.role}`}
    >
      <div className="team-card__glow" aria-hidden="true" />
      <div className="team-card__border" aria-hidden="true" />
      <span className="team-card__corner team-card__corner--tl" aria-hidden="true" />
      <span className="team-card__corner team-card__corner--tr" aria-hidden="true" />
      <span className="team-card__corner team-card__corner--bl" aria-hidden="true" />
      <span className="team-card__corner team-card__corner--br" aria-hidden="true" />

      <div className="team-card__header-bar">
        <span className="team-card__index-pill">
          <span className="team-card__index-dot" />
          <span>MISSION #{member.num}</span>
        </span>
        <span className="team-card__code-tag">{member.code}</span>
      </div>

      <div className="team-card__avatar-shell">
        {src ? (
          <div className="team-photo">
            <img
              src={src}
              alt={`${member.name} — ${member.role}`}
              className="team-photo__img"
              loading="lazy"
              decoding="async"
            />
            <div className="team-photo__overlay" aria-hidden="true" />
          </div>
        ) : null}
      </div>

      <div className="team-card__content">
        <div className="team-card__role-wrap">
          <span className="team-card__role">{member.role}</span>
        </div>

        <h3 className="team-card__name">{member.name}</h3>

        <div className="team-card__divider" aria-hidden="true">
          <span className="team-card__divider-point" />
        </div>

        <div className="team-card__tagline-container">
          <p className="team-card__tagline">{member.tagline}</p>
        </div>

        <div className="team-card__action-affordance">
          <span className="team-card__action-text">OPEN DOSSIER</span>
          <span className="team-card__action-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  );
}

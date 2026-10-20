import { useEffect } from 'react';
import { CORE_TEAM_MEMBERS } from '../data/eventData';
import Footer from './Footer';
import { RetroBolt } from './RetroIcons';
import './MemberProfilePage.css';

export default function MemberProfilePage({
  memberId,
  onNavigateToHome,
  onNavigateToMember,
  onOpenRegister
}) {
  const memberIndex = CORE_TEAM_MEMBERS.findIndex((m) => m.id === memberId);
  // Graceful fallback if unknown profile URL is accessed
  const member = memberIndex !== -1 ? CORE_TEAM_MEMBERS[memberIndex] : CORE_TEAM_MEMBERS[0];

  // Previous & Next navigation for browsing the 7 profiles
  const validIndex = memberIndex !== -1 ? memberIndex : 0;
  const prevMember = CORE_TEAM_MEMBERS[(validIndex - 1 + CORE_TEAM_MEMBERS.length) % CORE_TEAM_MEMBERS.length];
  const nextMember = CORE_TEAM_MEMBERS[(validIndex + 1) % CORE_TEAM_MEMBERS.length];

  // Scroll to top and set document title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${member.name} — ${member.role} | ARRIVAL ’26`;
    return () => {
      document.title = "ARRIVAL ’26 — The Next Chapter Begins | SIAM JUIT";
    };
  }, [member]);

  return (
    <div
      className="member-page"
      style={{
        '--profile-accent': member.accent,
        '--profile-secondary': member.secondary || '#ffffff'
      }}
    >
      {/* Top Sticky Navigation Bar */}
      <header className="member-page__topbar">
        <div className="member-page__topbar-inner">
          <div className="member-page__nav-left">
            <button
              type="button"
              className="member-page__back-btn"
              onClick={() => onNavigateToHome('#team')}
              aria-label="Back to Team section on homepage"
            >
              <span className="member-page__btn-arrow" aria-hidden="true">←</span>
              <span>BACK TO TEAM</span>
            </button>
          </div>

          <div className="member-page__telemetry-badge">
            <span className="member-page__telemetry-dot" aria-hidden="true" />
            <span>COUNCIL PROFILE // {member.code || `ARR26-${member.num}`}</span>
          </div>

          <button
            type="button"
            className="member-page__register-btn"
            onClick={onOpenRegister}
            aria-label="Register for Arrival '26"
          >
            <RetroBolt size={13} color="#af50ff" />
            <span>REGISTER NOW</span>
          </button>
        </div>
      </header>

      {/* Profile Hero */}
      <section className="member-page__hero">
        {/* Futuristic decorative background rings */}
        <div className="member-page__hero-canvas" aria-hidden="true">
          <div className="member-page__hero-grid" />
          <div className="member-page__hero-orbit member-page__hero-orbit--1" />
          <div className="member-page__hero-orbit member-page__hero-orbit--2" />
        </div>

        <div className="member-page__hero-container">
          <div className="member-page__eyebrow-row">
            <span className="section-subhead">// COUNCIL MEMBER #{member.num}</span>
            <span className="member-page__status-tag">CORE COUNCIL</span>
          </div>

          <div className="member-page__title-deck">
            <div className="member-page__role-callout">
              <span className="member-page__role-tag">{member.role}</span>
              <span className="member-page__station-tag">{member.station}</span>
            </div>

            <h1 className="member-page__name">{member.name}</h1>

            <div className="member-page__tagline-bar">
              <span className="member-page__quote-glyph" aria-hidden="true">“</span>
              <p className="member-page__tagline-text">{member.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="hairline-divider" />

      {/* Main Mini-Portfolio Deck */}
      <section className="member-page__dossier-section">
        <div className="member-page__dossier-grid">
          {/* Left Column: Portrait & Identity HUD */}
          <aside className="member-page__visual-col">
            <div className="member-page__avatar-card">
              <div className="member-page__avatar-shell">
                {(member.image || member.photo) ? (
                  <div className="team-photo">
                    <img
                      src={
                        (member.image || member.photo).includes('/upload/')
                          ? (member.image || member.photo).replace(
                              '/upload/',
                              '/upload/f_auto,q_auto,w_900,c_fill,g_auto/'
                            )
                          : member.image || member.photo
                      }
                      alt={`${member.name} — ${member.role}`}
                      className="team-photo__img"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="team-photo__overlay" aria-hidden="true" />
                  </div>
                ) : null}
              </div>

              {/* Identity Telemetry Readout */}
              <div className="member-page__hud-deck">
                <div className="member-page__hud-row">
                  <span className="member-page__hud-label">COUNCIL ROLE:</span>
                  <span className="member-page__hud-val">{member.role}</span>
                </div>
                <div className="member-page__hud-row">
                  <span className="member-page__hud-label">STATION:</span>
                  <span className="member-page__hud-val">{member.station}</span>
                </div>
                <div className="member-page__hud-row">
                  <span className="member-page__hud-label">EVENT:</span>
                  <span className="member-page__hud-val">ARRIVAL ’26 // JUIT Waknaghat</span>
                </div>
                <div className="member-page__hud-row">
                  <span className="member-page__hud-label">ORGANIZATION:</span>
                  <span className="member-page__hud-val">SIAM JUIT Student Chapter</span>
                </div>
                <div className="member-page__hud-row">
                  <span className="member-page__hud-label">STATUS:</span>
                  <span className="member-page__hud-val member-page__hud-val--accent">ACTIVE ARCHITECT</span>
                </div>
                {member.email && (
                  <div className="member-page__hud-row">
                    <span className="member-page__hud-label">TRANSMISSION:</span>
                    <a href={`mailto:${member.email}`} className="member-page__hud-val member-page__hud-link">
                      {member.email}
                    </a>
                  </div>
                )}
              </div>

              <div className="member-page__visual-actions">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="member-page__action-btn member-page__action-btn--secondary"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <span>CONNECT ON LINKEDIN ↗</span>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="member-page__action-btn member-page__action-btn--ghost"
                    aria-label={`Send email to ${member.name}`}
                  >
                    <span>SEND DIRECT EMAIL ✉</span>
                  </a>
                )}
                <button
                  type="button"
                  className="member-page__action-btn member-page__action-btn--primary"
                  onClick={onOpenRegister}
                >
                  <RetroBolt size={14} color="#090909" />
                  <span>JOIN ARRIVAL '26</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Right Column: Mini-Portfolio Sections */}
          <main className="member-page__content-col">
            {/* Section B: Beyond the Role */}
            <article className="member-page__card">
              <div className="member-page__card-header">
                <span className="member-page__card-dot" />
                <h2 className="member-page__card-title">Beyond the Role</h2>
              </div>
              <p className="member-page__card-text">
                {member.biography}
              </p>
            </article>

            {/* Section C: What They Bring */}
            <article className="member-page__card">
              <div className="member-page__card-header">
                <span className="member-page__card-dot" />
                <h2 className="member-page__card-title">What They Bring</h2>
              </div>
              <p className="member-page__card-text">
                {member.whatTheyBring}
              </p>

              {/* Core Deliverables / Responsibilities */}
              {member.keyDeliverables && member.keyDeliverables.length > 0 && (
                <div className="member-page__deliverables-wrap">
                  <h4 className="member-page__sub-heading">// KEY DELIVERABLES & FOCUS AREAS</h4>
                  <ul className="member-page__deliverables-list">
                    {member.keyDeliverables.map((item, idx) => (
                      <li key={idx} className="member-page__deliverable-item">
                        <span className="member-page__deliverable-bullet">0{idx + 1}</span>
                        <span className="member-page__deliverable-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>

            {/* Credo & Leadership Quote */}
            {member.quote && (
              <article className="member-page__card member-page__card--quote">
                <h3 className="member-page__quote-subhead">// LEADERSHIP CREDO</h3>
                <blockquote className="member-page__quote-body">
                  "{member.quote}"
                </blockquote>
                <span className="member-page__quote-author">— {member.name}, {member.role}</span>
              </article>
            )}
          </main>
        </div>
      </section>

      {/* Section E: Navigation (Previous Member, Back to Team, Next Member) */}
      <section className="member-page__cycler-section">
        <div className="member-page__cycler-container">
          <div className="member-page__cycler-nav">
            <button
              type="button"
              className="member-page__cycle-btn member-page__cycle-btn--prev"
              onClick={() => onNavigateToMember(prevMember.id)}
              aria-label={`Previous profile: ${prevMember.name}, ${prevMember.role}`}
            >
              <span className="member-page__cycle-arrow" aria-hidden="true">←</span>
              <div className="member-page__cycle-info">
                <span className="member-page__cycle-sub">PREVIOUS MEMBER</span>
                <span className="member-page__cycle-name">{prevMember.name}</span>
                <span className="member-page__cycle-role">{prevMember.role}</span>
              </div>
            </button>

            <button
              type="button"
              className="member-page__cycle-all-btn"
              onClick={() => onNavigateToHome('#team')}
            >
              <span>BACK TO TEAM</span>
            </button>

            <button
              type="button"
              className="member-page__cycle-btn member-page__cycle-btn--next"
              onClick={() => onNavigateToMember(nextMember.id)}
              aria-label={`Next profile: ${nextMember.name}, ${nextMember.role}`}
            >
              <div className="member-page__cycle-info" style={{ textAlign: 'right' }}>
                <span className="member-page__cycle-sub">NEXT MEMBER</span>
                <span className="member-page__cycle-name">{nextMember.name}</span>
                <span className="member-page__cycle-role">{nextMember.role}</span>
              </div>
              <span className="member-page__cycle-arrow" aria-hidden="true">→</span>
            </button>
          </div>

          {/* Quick Roster Selector Strip */}
          <div className="member-page__roster-jump">
            <span className="member-page__jump-label">// EXPLORE OTHER COUNCIL MEMBERS:</span>
            <div className="member-page__jump-chips">
              {CORE_TEAM_MEMBERS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={`member-page__jump-chip ${m.id === member.id ? 'member-page__jump-chip--active' : ''}`}
                  onClick={() => onNavigateToMember(m.id)}
                  style={{ '--chip-accent': m.accent }}
                  aria-label={`View ${m.name}'s portfolio`}
                >
                  <span className="member-page__jump-num">{m.num}</span>
                  <span className="member-page__jump-name">{m.name}</span>
                  <span className="member-page__jump-role">({m.role})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="hairline-divider" />

      {/* Reusable existing Footer */}
      <Footer onOpenRegister={onOpenRegister} onNavigateToTeam={() => onNavigateToHome('#team')} />
    </div>
  );
}

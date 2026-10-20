import { useState, useEffect, useRef, useCallback } from 'react';
import GlowCursor from './components/GlowCursor';
import FloatingNav from './components/FloatingNav';
import Galaxy from './components/Galaxy';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PreviousYearSection from './components/PreviousYearSection';
import EventsSection from './components/EventsSection';
import OrganizersSection from './components/OrganizersSection';
import SponsorsSection from './components/SponsorsSection';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import MemberProfilePage from './components/MemberProfilePage';

// Parse route from URL hash or pathname
const parseRouteFromLocation = () => {
  const hash = window.location.hash || '';
  const pathname = window.location.pathname || '';

  // Check for individual member profile: #/team/:memberId or /team/:memberId
  const memberHashMatch = hash.match(/^#\/?team\/([a-zA-Z0-9-_]+)$/);
  if (memberHashMatch && memberHashMatch[1]) {
    return { route: 'member', memberId: memberHashMatch[1] };
  }
  const memberPathMatch = pathname.match(/^\/team\/([a-zA-Z0-9-_]+)$/);
  if (memberPathMatch && memberPathMatch[1]) {
    return { route: 'member', memberId: memberPathMatch[1] };
  }

  // /team or #/team is an anchor to the organizers section on the homepage, not a separate page
  return { route: 'home', memberId: '' };
};

export default function App() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [pastHero, setPastHero] = useState(false);
  const [isBlackout, setIsBlackout] = useState(false);
  const [routeState, setRouteState] = useState(parseRouteFromLocation);
  const isTransitioningRef = useRef(false);

  // Sync route with browser history / hash changes
  useEffect(() => {
    const handleLocationSync = () => {
      const hash = window.location.hash || '';
      const pathname = window.location.pathname || '';

      // If user navigated to /team or #/team, scroll to #team on the homepage
      if (hash === '#/team' || hash === '#team' || pathname === '/team') {
        setRouteState({ route: 'home', memberId: '' });
        setPastHero(true);
        setTimeout(() => {
          const el = document.querySelector('#team');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
        return;
      }

      const next = parseRouteFromLocation();
      setRouteState(next);
      if (next.route !== 'home') {
        setPastHero(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleLocationSync);
    window.addEventListener('popstate', handleLocationSync);

    // Initial check if opened directly with #team or /team
    const hash = window.location.hash || '';
    const pathname = window.location.pathname || '';
    if (hash === '#/team' || hash === '#team' || pathname === '/team') {
      setPastHero(true);
      setTimeout(() => {
        const el = document.querySelector('#team');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    return () => {
      window.removeEventListener('hashchange', handleLocationSync);
      window.removeEventListener('popstate', handleLocationSync);
    };
  }, []);

  const handleNavigateToMember = useCallback((memberId) => {
    window.location.hash = `#/team/${memberId}`;
    setRouteState({ route: 'member', memberId });
    setPastHero(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleNavigateToHome = useCallback((targetId = '') => {
    setRouteState({ route: 'home', memberId: '' });
    if (targetId && targetId !== '#hero' && targetId !== '#') {
      window.location.hash = targetId;
      setPastHero(true);
      setTimeout(() => {
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'instant' });
      setPastHero(false);
    }
  }, []);

  // Smooth cinematic blackout gate between Home (Hyperspeed) and content (Galaxy)
  const performBlackoutTransition = useCallback((targetId, toPastHero) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsBlackout(true);

    // 1. Screen fades to pure black in 250ms
    setTimeout(() => {
      // 2. Move viewport to target while screen is pure black
      if (targetId === '#hero') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      }
      setPastHero(toPastHero);

      // 3. Reveal screen gracefully from blackout
      setTimeout(() => {
        setIsBlackout(false);
        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 350);
      }, 140);
    }, 240);
  }, []);

  // Monitor scroll gestures on the home screen to trigger the cinematic blackout
  useEffect(() => {
    if (routeState.route !== 'home') return;

    let touchStartY = 0;

    const handleWheel = (e) => {
      if (isTransitioningRef.current) {
        e.preventDefault();
        return;
      }

      // Scrolling down from the Home screen
      if (window.scrollY < 60 && e.deltaY > 15) {
        e.preventDefault();
        performBlackoutTransition('#about', true);
        return;
      }

      // Scrolling up from the top boundary of the About section
      const aboutEl = document.querySelector('#about');
      if (aboutEl) {
        const aboutRect = aboutEl.getBoundingClientRect();
        if (aboutRect.top >= -20 && aboutRect.top <= 80 && e.deltaY < -25) {
          e.preventDefault();
          performBlackoutTransition('#hero', false);
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isTransitioningRef.current) return;
      const touchY = e.touches[0].clientY;
      const delta = touchStartY - touchY;

      // Swiping up (scrolling down) from the Home screen
      if (window.scrollY < 60 && delta > 40) {
        e.preventDefault();
        performBlackoutTransition('#about', true);
        return;
      }

      // Swiping down (scrolling up) from the top of About
      const aboutEl = document.querySelector('#about');
      if (aboutEl) {
        const aboutRect = aboutEl.getBoundingClientRect();
        if (aboutRect.top >= -20 && aboutRect.top <= 80 && delta < -40) {
          e.preventDefault();
          performBlackoutTransition('#hero', false);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (isTransitioningRef.current) return;
      if (window.scrollY < 60 && ['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        performBlackoutTransition('#about', true);
      }
    };

    let scrollTicking = false;
    const handleScroll = () => {
      if (scrollTicking || isTransitioningRef.current) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        scrollTicking = false;
        if (isTransitioningRef.current) return;
        const heroThreshold = (window.innerHeight || 800) * 0.4;
        const next = window.scrollY > heroThreshold;
        setPastHero((prev) => (prev === next ? prev : next));
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [routeState.route, performBlackoutTransition]);

  const handleOpenRegister = (eventTitle = '') => {
    setSelectedEvent(eventTitle || '');
    setRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setRegisterOpen(false);
  };

  return (
    <GlowCursor
      color="#af50ff"
      secondaryColor="#e1bdff"
      intensity={1.2}
      glow={1.1}
      trailWidth={2.8}
      theme="dark"
      clickBurst
      quality="low"
      maxDevicePixelRatio={1}
    >
      <div className="app-container">
        {/* Cinematic Blackout Transition Overlay */}
        <div
          className={`screen-blackout-curtain ${isBlackout ? 'screen-blackout-curtain--active' : ''}`}
          aria-hidden="true"
        />

        {/* Floating Top-Right Controls: Transparent Menu & Glowing Neon Register Button */}
        <FloatingNav
          onOpenRegister={() => handleOpenRegister()}
          onNavigateToHome={handleNavigateToHome}
          currentRoute={routeState.route}
        />

        {routeState.route === 'member' ? (
          /* Dedicated Individual Member Profile Page */
          <div className="post-hero-container">
            <div className="post-hero-galaxy-bg post-hero-galaxy-bg--active" aria-hidden="true">
              <Galaxy
                mouseRepulsion={false}
                mouseInteraction={false}
                density={0.9}
                glowIntensity={0.42}
                saturation={0.3}
                hueShift={240}
                twinkleIntensity={0.4}
                speed={0.55}
                starSpeed={0.4}
                rotationSpeed={0.04}
                transparent={true}
              />
            </div>

            <div className="post-hero-content">
              <MemberProfilePage
                memberId={routeState.memberId}
                onNavigateToHome={handleNavigateToHome}
                onNavigateToMember={handleNavigateToMember}
                onOpenRegister={() => handleOpenRegister()}
              />
            </div>
          </div>
        ) : (
          /* Main Festival Landing Page */
          <>
            {/* 1. Hero Section with Hyperspeed face component, Arrival '26 title, and Space Counter */}
            <HeroSection
              active={!pastHero}
              onExplore={() => performBlackoutTransition('#about', true)}
            />

            {/* Post-Hero Container with WebGL Galaxy Ambient Background */}
            <div className="post-hero-container">
              <div
                className={`post-hero-galaxy-bg ${pastHero ? 'post-hero-galaxy-bg--active' : ''}`}
                aria-hidden="true"
              >
                {pastHero ? (
                  <Galaxy
                    mouseRepulsion={false}
                    mouseInteraction={false}
                    density={0.9}
                    glowIntensity={0.42}
                    saturation={0.3}
                    hueShift={240}
                    twinkleIntensity={0.4}
                    speed={0.55}
                    starSpeed={0.4}
                    rotationSpeed={0.04}
                    transparent={true}
                  />
                ) : null}
              </div>

              <div className="post-hero-content">
                <div className="hairline-divider" />

                {/* 2. About Arrival */}
                <AboutSection />

                <div className="hairline-divider" />

                {/* 3. Previous Year Highlights */}
                <PreviousYearSection />

                <div className="hairline-divider" />

                {/* 4. Events at Arrival '26 */}
                <EventsSection onOpenRegister={handleOpenRegister} />

                <div className="hairline-divider" />

                {/* 5. Meet the Minds Behind ARRIVAL '26 — Interactive Profile Cards */}
                <OrganizersSection
                  onNavigateToMember={handleNavigateToMember}
                />

                <div className="hairline-divider" />

                {/* 6. Sponsors */}
                <SponsorsSection />

                {/* 7. Coordinate Footer */}
                <Footer
                  onOpenRegister={() => handleOpenRegister()}
                  onNavigateToHome={handleNavigateToHome}
                />
              </div>
            </div>
          </>
        )}

        {/* Registration Modal */}
        <RegisterModal
          isOpen={registerOpen}
          onClose={handleCloseRegister}
          defaultEvent={selectedEvent}
        />
      </div>
    </GlowCursor>
  );
}

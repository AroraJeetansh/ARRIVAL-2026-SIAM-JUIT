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

export default function App() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [pastHero, setPastHero] = useState(false);
  const [isBlackout, setIsBlackout] = useState(false);
  const isTransitioningRef = useRef(false);

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

    const handleScroll = () => {
      if (isTransitioningRef.current) return;
      const heroThreshold = (window.innerHeight || 800) * 0.4;
      setPastHero(window.scrollY > heroThreshold);
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
  }, [performBlackoutTransition]);

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
    >
      <div className="app-container">
        {/* Cinematic Blackout Transition Overlay */}
        <div
          className={`screen-blackout-curtain ${isBlackout ? 'screen-blackout-curtain--active' : ''}`}
          aria-hidden="true"
        />

        {/* Floating Top-Right Controls: Transparent Menu & Glowing Neon Register Button */}
        <FloatingNav onOpenRegister={() => handleOpenRegister()} />

        {/* 1. Hero Section with Hyperspeed face component, Arrival '26 title, and Space Counter */}
        <HeroSection onExplore={() => performBlackoutTransition('#about', true)} />

        {/* Post-Hero Container with WebGL Galaxy Ambient Background */}
        <div className="post-hero-container">
          <div
            className={`post-hero-galaxy-bg ${pastHero ? 'post-hero-galaxy-bg--active' : ''}`}
            aria-hidden="true"
          >
            <Galaxy
              mouseRepulsion={true}
              mouseInteraction={true}
              density={1.3}
              glowIntensity={0.5}
              saturation={0.3}
              hueShift={240}
              twinkleIntensity={0.6}
              speed={0.8}
              starSpeed={0.5}
              rotationSpeed={0.06}
              transparent={true}
              disableAnimation={!pastHero}
            />
          </div>

          <div className="post-hero-content">
            <div className="hairline-divider" />

            {/* 2. About Arrival */}
            <AboutSection />

            <div className="hairline-divider" />

            {/* 3. Previous Year Highlights */}
            <PreviousYearSection />

            <div className="hairline-divider" />

            {/* 4. Events at Arrival '26 — 1st Card Usage: Alternating poster HoloCard & event description */}
            <EventsSection onOpenRegister={handleOpenRegister} />

            <div className="hairline-divider" />

            {/* 5. Organizing Team — 2nd Card Usage: Organizers portrait HoloCard with details below */}
            <OrganizersSection />

            <div className="hairline-divider" />

            {/* 6. Sponsors — 3rd Card Usage: Tiered sponsor holographic badges */}
            <SponsorsSection />

            {/* 7. Coordinate Footer */}
            <Footer onOpenRegister={() => handleOpenRegister()} />
          </div>
        </div>

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

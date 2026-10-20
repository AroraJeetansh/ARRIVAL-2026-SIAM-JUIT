import { useState, useMemo } from 'react';
import Hyperspeed from './Hyperspeed';
import SpaceCounter from './SpaceCounter';
import { FESTIVAL_METADATA } from '../data/eventData';
import './HeroSection.css';

export default function HeroSection({ onExplore, active = true }) {
  const [isBoosting, setIsBoosting] = useState(false);

  // Dynamic hardware & device profiling to guarantee smooth 60fps+ on all processors
  const perfProfile = useMemo(() => {
    if (typeof window === 'undefined') {
      return { density: 60, poles: 40, dust: 90, glow: 0.5, reflections: 0.4 };
    }
    const isMobile = window.innerWidth <= 768 || window.matchMedia?.('(pointer: coarse)').matches;
    const isLowCore = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

    if (isMobile || isLowCore) {
      return {
        density: 28,
        poles: 16,
        dust: 24,
        glow: 0.28,
        reflections: 0.12
      };
    }
    return {
      density: 48,
      poles: 32,
      dust: 70,
      glow: 0.42,
      reflections: 0.3
    };
  }, []);

  const handleWarpBoost = () => {
    setIsBoosting(true);
    setTimeout(() => {
      setIsBoosting(false);
    }, 2500);
  };

  const handleScrollToEvents = (e) => {
    e.preventDefault();
    if (onExplore) {
      onExplore();
    } else {
      const target = document.querySelector('#about') || document.querySelector('#events');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background Three.js Hyperspeed Component from face.md */}
      <div className="hero-section__hyperspeed">
        {active ? (
          <Hyperspeed
            curve="racing"
            curvature={1}
            speed={1.1}
            boost={3.5}
            fov={90}
            boostFov={130}
            lanes={2}
            roadWidth={10}
            medianWidth={5}
            density={perfProfile.density}
            trailLength={1}
            lightSize={1}
            poles={perfProfile.poles}
            dust={perfProfile.dust}
            glow={perfProfile.glow}
            reflections={perfProfile.reflections}
            roadOpacity={0.15}
            steer={0.35}
            tailColors={['#af50ff', '#e74d60', '#ff102a']}
            headColors={['#53c2c6', '#80d1d4', '#e1bdff']}
            poleColors={['#af50ff', '#53c2c6']}
            theme="dark"
            interactive
            boosting={isBoosting}
          />
        ) : null}
      </div>

      {/* Atmospheric light vignette - gentle around borders, clear in middle */}
      <div className="hero-section__vignette" />

      {/* Foreground Cockpit HUD Layer */}
      <div className="hero-section__hud">
        {/* Top Zone: Title & Mission Identification */}
        <div className="hero-section__top">
          <div className="hero-section__badge">
            <span className="hero-section__badge-pulse" />
            <span>{FESTIVAL_METADATA.organizer} PRESENTS</span>
          </div>

          <h1 className="hero-section__title">
            <span>ARRIVAL ’26</span>
          </h1>

          <p className="hero-section__tagline">
            {FESTIVAL_METADATA.tagline}
          </p>
        </div>

        {/* Center Zone: KEPT INTENTIONALLY UNOBSTRUCTED to showcase the Hyperspeed animation */}
        <div className="hero-section__center-viewport" aria-hidden="true" />

        {/* Bottom Zone: Cockpit Telemetry Counter & Scroll Indicator */}
        <div className="hero-section__bottom">
          <SpaceCounter onWarpBoost={handleWarpBoost} />

          <div className="hero-section__footer-controls">
            <span className="hero-section__hint">
              [ CLICK & HOLD ANYWHERE TO ENGAGE WARP ]
            </span>

            <a
              href="#events"
              className="hero-section__scroll-link"
              onClick={handleScrollToEvents}
              aria-label="Scroll to events"
            >
              <span>EXPLORE MISSION</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { FESTIVAL_METADATA } from '../data/eventData';
import { RetroBeacon, RetroBolt } from './RetroIcons';
import './SpaceCounter.css';

export default function SpaceCounter({ onWarpBoost }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const targetDate = new Date(FESTIVAL_METADATA.eventDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft((prev) => (prev.isExpired ? prev : { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft((prev) => {
        if (
          prev.days === days &&
          prev.hours === hours &&
          prev.minutes === minutes &&
          prev.seconds === seconds &&
          !prev.isExpired
        ) {
          return prev;
        }
        return { days, hours, minutes, seconds, isExpired: false };
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    const onVisibility = () => {
      if (!document.hidden) calculateTime();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const formatPad = (num) => String(num).padStart(2, '0');

  const timeUnits = [
    { label: 'DAYS', value: formatPad(timeLeft.days) },
    { label: 'HOURS', value: formatPad(timeLeft.hours) },
    { label: 'MINUTES', value: formatPad(timeLeft.minutes) },
    { label: 'SECONDS', value: formatPad(timeLeft.seconds) },
  ];

  return (
    <div className="space-counter" role="timer" aria-label="Countdown to Arrival 2026">
      {/* Top ambient glow indicator */}
      <div className="space-counter__glow-line" />

      {/* Header: Status badge & Event Date */}
      <div className="space-counter__header">
        <div className="space-counter__status">
          <span className="space-counter__dot" />
          <span className="space-counter__status-text">COUNTDOWN TO ARRIVAL</span>
        </div>
        <div className="space-counter__date">
          <span>{FESTIVAL_METADATA.formattedDate || 'OCTOBER 23, 2026'}</span>
        </div>
      </div>

      {/* Main Countdown Numbers */}
      {timeLeft.isExpired ? (
        <div className="space-counter__live-banner">
          <span className="space-counter__live-pulse" />
          <span>ARRIVAL ’26 IS NOW LIVE!</span>
        </div>
      ) : (
        <div className="space-counter__grid">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="space-counter__unit-wrapper">
              <div className="space-counter__card">
                <span className="space-counter__value">{unit.value}</span>
                <span className="space-counter__label">{unit.label}</span>
              </div>
              {index < timeUnits.length - 1 && (
                <span className="space-counter__divider" aria-hidden="true">:</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Footer: Venue info & interactive Warp Boost */}
      <div className="space-counter__footer">
        <div className="space-counter__venue">
          <RetroBeacon size={12} color="#af50ff" />
          <span>{FESTIVAL_METADATA.venue}</span>
        </div>

        {onWarpBoost && (
          <button
            type="button"
            className="space-counter__boost-btn"
            onClick={onWarpBoost}
            title="Accelerate warp trajectory"
          >
            <RetroBolt size={12} color="#f7f9fa" />
            <span>WARP BOOST</span>
          </button>
        )}
      </div>
    </div>
  );
}

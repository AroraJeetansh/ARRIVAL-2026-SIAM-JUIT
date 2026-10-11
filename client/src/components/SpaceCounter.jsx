import { useEffect, useState } from 'react';
import { FESTIVAL_METADATA } from '../data/festivalData';
import './SpaceCounter.css';

export default function SpaceCounter({ onWarpBoost }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0
  });

  const [missionTime, setMissionTime] = useState('');

  useEffect(() => {
    const targetDate = new Date(FESTIVAL_METADATA.eventDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // Live UTC Mission Clock
      const currentUTC = new Date().toISOString().substring(11, 19);
      setMissionTime(currentUTC);

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, total: difference });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatPad = (num) => String(num).padStart(2, '0');

  // Compact circular ring parameters
  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  const getOffset = (value, max) => {
    const progress = Math.min(1, Math.max(0, value / max));
    return circumference * (1 - progress);
  };

  return (
    <div className="space-counter">
      {/* Corner telemetry brackets */}
      <span className="space-counter__bracket space-counter__bracket--tl" />
      <span className="space-counter__bracket space-counter__bracket--tr" />
      <span className="space-counter__bracket space-counter__bracket--bl" />
      <span className="space-counter__bracket space-counter__bracket--br" />

      {/* Header Telemetry Strip: Date, Coordinates, Status (Deduplicated, shown once) */}
      <div className="space-counter__header">
        <div className="space-counter__badge">
          <span className="space-counter__blinker" />
          <span>T-MINUS LAUNCH SEQUENCE</span>
        </div>

        <div className="space-counter__coords">
          <span>{FESTIVAL_METADATA.formattedDate}</span>
          <span className="space-counter__sep">•</span>
          <span>{FESTIVAL_METADATA.coordinates.formatted}</span>
          <span className="space-counter__sep">•</span>
          <span>{FESTIVAL_METADATA.venue}</span>
        </div>
      </div>

      {/* Compact Telemetry Countdown Dials */}
      <div className="space-counter__grid">
        {/* Days */}
        <div className="counter-dial">
          <div className="counter-dial__svg-wrap">
            <svg className="counter-dial__svg" viewBox="0 0 68 68">
              <circle className="counter-dial__bg-circle" cx="34" cy="34" r={radius} />
              <circle
                className="counter-dial__progress-circle"
                cx="34"
                cy="34"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={getOffset(timeLeft.days, 365)}
              />
            </svg>
            <span className="counter-dial__value">{formatPad(timeLeft.days)}</span>
          </div>
          <span className="counter-dial__label">DAYS</span>
        </div>

        {/* Hours */}
        <div className="counter-dial">
          <div className="counter-dial__svg-wrap">
            <svg className="counter-dial__svg" viewBox="0 0 68 68">
              <circle className="counter-dial__bg-circle" cx="34" cy="34" r={radius} />
              <circle
                className="counter-dial__progress-circle"
                cx="34"
                cy="34"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={getOffset(timeLeft.hours, 24)}
                style={{ stroke: '#c084fc' }}
              />
            </svg>
            <span className="counter-dial__value">{formatPad(timeLeft.hours)}</span>
          </div>
          <span className="counter-dial__label">HOURS</span>
        </div>

        {/* Minutes */}
        <div className="counter-dial">
          <div className="counter-dial__svg-wrap">
            <svg className="counter-dial__svg" viewBox="0 0 68 68">
              <circle className="counter-dial__bg-circle" cx="34" cy="34" r={radius} />
              <circle
                className="counter-dial__progress-circle"
                cx="34"
                cy="34"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={getOffset(timeLeft.minutes, 60)}
                style={{ stroke: '#53c2c6' }}
              />
            </svg>
            <span className="counter-dial__value">{formatPad(timeLeft.minutes)}</span>
          </div>
          <span className="counter-dial__label">MINS</span>
        </div>

        {/* Seconds */}
        <div className="counter-dial">
          <div className="counter-dial__svg-wrap">
            <svg className="counter-dial__svg" viewBox="0 0 68 68">
              <circle className="counter-dial__bg-circle" cx="34" cy="34" r={radius} />
              <circle
                className="counter-dial__progress-circle"
                cx="34"
                cy="34"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={getOffset(timeLeft.seconds, 60)}
                style={{ stroke: '#e1bdff' }}
              />
            </svg>
            <span className="counter-dial__value">{formatPad(timeLeft.seconds)}</span>
          </div>
          <span className="counter-dial__label">SECS</span>
        </div>
      </div>

      {/* Footer telemetry */}
      <div className="space-counter__footer">
        <div className="space-counter__telemetry-line">
          <span>UTC: {missionTime || '00:00:00'}</span>
          <span>•</span>
          <span>ORBITAL SYS: NOMINAL</span>
          <span>•</span>
          <span>ALT: {FESTIVAL_METADATA.coordinates.elevation}</span>
        </div>

        {onWarpBoost && (
          <button
            type="button"
            className="space-counter__warp-btn"
            onClick={onWarpBoost}
            title="Accelerate warp trajectory"
          >
            <span>⚡</span>
            <span>ENGAGE WARP BOOST</span>
          </button>
        )}
      </div>
    </div>
  );
}

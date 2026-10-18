const isMobileOrConstrained = () => {
  if (typeof window === 'undefined') return false;
  const isTouch = window.matchMedia?.('(pointer: coarse)').matches || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
  const isNarrow = window.innerWidth <= 768;
  const isLowCore = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  return isTouch || isNarrow || isLowCore;
};

// Mobile / budget devices limit to 1 active shader card to prevent WebGL context loss.
// Desktop devices allow up to 3 concurrent active shader cards.
const getMaxLive = () => (isMobileOrConstrained() ? 1 : 3);

const live = [];

export function claimHoloGl(id, release) {
  const existing = live.find((item) => item.id === id);
  if (existing) {
    existing.release = release;
    live.splice(live.indexOf(existing), 1);
    live.push(existing);
  } else {
    live.push({ id, release });
  }

  const maxLive = getMaxLive();
  while (live.length > maxLive) {
    const oldest = live.shift();
    if (oldest.id === id) {
      live.push(oldest);
      break;
    }
    oldest.release();
  }
}

export function releaseHoloGl(id) {
  const index = live.findIndex((item) => item.id === id);
  if (index >= 0) live.splice(index, 1);
}

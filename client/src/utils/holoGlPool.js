const MAX_LIVE = 4;
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

  while (live.length > MAX_LIVE) {
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

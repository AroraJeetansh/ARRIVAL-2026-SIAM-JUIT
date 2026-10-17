export function getPerfProfile() {
  if (typeof window === 'undefined') {
    return {
      tier: 'medium',
      reducedMotion: false,
      coarsePointer: false,
      dpr: 1
    };
  }

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const coarsePointer = window.matchMedia?.('(pointer: coarse)').matches ?? false;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 8;
  const saveData = Boolean(navigator.connection?.saveData);
  const dpr = window.devicePixelRatio || 1;

  let tier = 'high';
  if (reducedMotion || saveData || coarsePointer || memory <= 4 || cores <= 4 || dpr >= 2.5) {
    tier = 'low';
  } else if (memory <= 8 || cores <= 6) {
    tier = 'medium';
  }

  return { tier, reducedMotion, coarsePointer, dpr };
}

export function capDpr(max = 1.25) {
  return Math.min(window.devicePixelRatio || 1, max);
}

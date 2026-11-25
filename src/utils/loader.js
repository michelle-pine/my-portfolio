const LOADER_ID = 'loader';

export function hideLoader() {
  document.getElementById(LOADER_ID)?.classList.add('hidden');
}

// Shows the full-screen loader, then fades it out after `duration` ms.
// Returns a cleanup function that cancels the pending fade.
export function showLoader({ solid = false, duration = 2000 } = {}) {
  const el = document.getElementById(LOADER_ID);
  if (!el) return () => {};
  el.classList.toggle('solid', solid);
  el.classList.remove('hidden');
  const timer = setTimeout(hideLoader, duration);
  return () => clearTimeout(timer);
}

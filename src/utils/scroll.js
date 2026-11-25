function headerHeight() {
  const header = document.querySelector('.header');
  return header ? header.offsetHeight : 0;
}

// Scrolls the page so the content (not the big header illustration) is in view.
function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

export function scrollPastHeader() {
  const height = headerHeight();
  if (window.scrollY < height - 100) {
    window.scrollTo({ top: height, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  } else {
    window.scrollTo(0, height - 50);
  }
}

export function isPastHeader() {
  return window.scrollY >= headerHeight() - 50;
}

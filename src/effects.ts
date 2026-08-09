/**
 * Cresenix Solutions — Scroll & Page Effects
 * Intersection Observer for animations, counter animation, and scroll-triggered effects.
 */

let observer: IntersectionObserver | null = null;

/** Initialize scroll-triggered animations using IntersectionObserver */
export function initScrollAnimations(): void {
  // Disconnect previous observer if it exists
  if (observer) {
    observer.disconnect();
  }

  const animatedElements = document.querySelectorAll(
    '.animate-fade-in-up, .animate-fade-in, .animate-scale-in'
  );

  if (animatedElements.length === 0) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  animatedElements.forEach((el) => {
    observer!.observe(el);
  });
}

/** Animate stat counters (e.g., "50+", "15+", "99%") */
export function initCounterAnimations(): void {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.getAttribute('data-count') || '0', 10);
          const suffix = el.getAttribute('data-suffix') || '+';
          animateCounter(el, target, suffix);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => {
    counterObserver.observe(el);
  });
}

function animateCounter(el: HTMLElement, target: number, suffix: string): void {
  const duration = 1800;
  const startTime = performance.now();

  function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  function update(currentTime: number): void {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const currentValue = Math.round(easedProgress * target);

    el.textContent = `${currentValue}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/** Initialize all effects — call after each page render */
export function initAllEffects(): void {
  // Slight delay to ensure DOM is painted
  requestAnimationFrame(() => {
    initScrollAnimations();
    initCounterAnimations();
  });
}

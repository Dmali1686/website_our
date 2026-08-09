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
export function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  if (!form) return;

  if (form.getAttribute('data-initialized') === 'true') return;
  form.setAttribute('data-initialized', 'true');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (!btn) return;
    
    btn.innerHTML = `<span class="material-symbols-outlined" style="font-size:20px; animation: spin 1s linear infinite;">sync</span> Sending...`;
    btn.disabled = true;

    setTimeout(() => {
      const formContainer = form.parentElement;
      if (formContainer) {
        formContainer.innerHTML = `
          <div style="text-align: center; padding: 48px 24px; animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
            <div style="width: 64px; height: 64px; background: rgba(34, 197, 94, 0.1); color: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
              <span class="material-symbols-outlined" style="font-size: 32px;">check_circle</span>
            </div>
            <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--on-surface); margin-bottom: 12px;">Message Sent Successfully!</h3>
            <p style="color: var(--on-surface-variant); line-height: 1.6; margin-bottom: 24px;">Thank you for reaching out to Cresenix Solutions. Our team will review your project details and get back to you shortly.</p>
            <button onclick="window.location.hash='#/'" class="btn-primary" style="padding: 12px 24px;">Return Home</button>
          </div>
        `;
      }
    }, 1500);
  });
}

export function initAllEffects(): void {
  // Slight delay to ensure DOM is painted
  requestAnimationFrame(() => {
    initScrollAnimations();
    initCounterAnimations();
    initContactForm();
  });
}

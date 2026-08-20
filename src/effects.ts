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
            <button onclick="window.location.href='/'" class="btn-primary" style="padding: 12px 24px;">Return Home</button>
          </div>
        `;
      }
    }, 1500);
  });
}

/** Neural Network Canvas Animation for AI Hero */
export function initNeuralCanvas(): void {
  const canvas = document.getElementById('neural-canvas') as HTMLCanvasElement;
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let animationId: number;
  let particles: Array<{
    x: number; y: number;
    vx: number; vy: number;
    radius: number;
    opacity: number;
    pulseSpeed: number;
    pulsePhase: number;
  }> = [];

  function resize() {
    const rect = canvas.parentElement!.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function createParticles() {
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
  }

  function draw() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    const time = Date.now() * 0.001;

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const alpha = (1 - dist / 150) * 0.15;
          ctx!.beginPath();
          ctx!.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx!.lineWidth = 0.5;
          ctx!.moveTo(particles[i].x, particles[i].y);
          ctx!.lineTo(particles[j].x, particles[j].y);
          ctx!.stroke();
        }
      }
    }

    // Draw particles
    for (const p of particles) {
      const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulsePhase) * 0.3 + 0.7;
      const currentOpacity = p.opacity * pulse;

      // Glow
      const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
      gradient.addColorStop(0, `rgba(0, 212, 255, ${currentOpacity * 0.6})`);
      gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
      ctx!.beginPath();
      ctx!.fillStyle = gradient;
      ctx!.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
      ctx!.fill();

      // Core dot
      ctx!.beginPath();
      ctx!.fillStyle = `rgba(0, 212, 255, ${currentOpacity})`;
      ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx!.fill();

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    }

    animationId = requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  // Handle resize
  const resizeHandler = () => {
    resize();
    createParticles();
  };
  window.addEventListener('resize', resizeHandler);
  
  // Cleanup on navigation (using MutationObserver to detect canvas removal)
  const cleanupObserver = new MutationObserver(() => {
    if (!document.getElementById('neural-canvas')) {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeHandler);
      cleanupObserver.disconnect();
    }
  });
  cleanupObserver.observe(document.body, { childList: true, subtree: true });
}

export function initAllEffects(): void {
  // Slight delay to ensure DOM is painted
  requestAnimationFrame(() => {
    initScrollAnimations();
    initCounterAnimations();
    initContactForm();
    initNeuralCanvas();
  });
}

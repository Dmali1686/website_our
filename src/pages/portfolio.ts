/**
 * Cresenix Solutions — Portfolio / Case Studies Page
 * Card-based alternating layout matching the reference design exactly.
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

interface CaseStudy {
  category: string;
  type: string;
  title: string;
  description: string;
  results: string[];
  techStack: string[];
  imageUrl: string;
  imageAlt: string;
  mockupType: 'desktop' | 'mobile' | 'browser';
}

const CASE_STUDIES: CaseStudy[] = [
  {
    category: 'EDUCATION',
    type: 'LMS Platform',
    title: 'GeekByChoice LMS',
    description: 'A comprehensive Learning Management System designed to streamline technical education. Features include interactive coding environments, automated assessment tracking, and scalable video delivery infrastructure.',
    results: [
      '40% increase in student engagement',
      'Automated grading reduced admin time by 60%',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnOf7fA2v0l-mXi5IOban-gjoNTHAjDej0ec024sivEsFMyV_SzXskF7NfDcpAVOksZBrhxREPaipF8pnijHugnRwKBWJRIebTiSZuPLlF5i2rQ3S1CDPtpzwkdPQjS5U26oF8rekkRwQEx3QnvLJxdr5_bF-dlGBpNSqhIjIWKwOXou5NfrPz6ED8oxhgQTgBmJSbUtfIgSRd7RrNhdpPHB5ZjXoEQvT90TXSlxgiFMkiJ0NwOBdwmA',
    imageAlt: 'GeekByChoice LMS dashboard showing learning portfolio overview with charts and course progress',
    mockupType: 'desktop',
  },
  {
    category: 'SOCIAL / NGO',
    type: 'Mobile Platform',
    title: 'MH12 Animal NGO Platform',
    description: 'A robust mobile application connecting volunteers, donors, and veterinarians. Built to coordinate rescue efforts, track medical records, and manage adoption workflows in real-time.',
    results: [
      '2,500+ successful rescues coordinated',
      'Real-time geolocation tracking for emergency response',
    ],
    techStack: ['Flutter', 'Firebase', 'Google Maps API'],
    imageUrl: '/images/mh14.png',
    imageAlt: 'MH12 Animal NGO mobile app showing map interface for rescue coordination',
    mockupType: 'mobile',
  },
  {
    category: 'NGO',
    type: 'Enterprise Resource Planning',
    title: 'Earth Charity Foundation ERP',
    description: 'A custom-built, highly scalable ERP system designed specifically for large-scale non-profit operations. Modules include donor management, fund allocation tracking, and global logistics coordination.',
    results: [
      'Consolidated 5 legacy systems into one unified platform',
      '100% cloud-based infrastructure reducing IT costs by 30%',
    ],
    techStack: ['AWS', 'Python / Django', 'React'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhEKw_H7IT1YShKHP8Wg973Xtl_htbjqd4Hk88h3AcvRdsfPkTjkglrN9TVhdgf8FPGwY7HK-dA7GmoNPcGR8pES2N5roD6wyq5BXrpvs9k6O4TBtkTJ8zTrlaAamS-aQiLcp6Gq_Qxa-IiWibs8PPQmToEgsbMTz7kJSH5T50t5t9eI4UQkbr-zyVrMwQaY52vnYPZNt8FsjJxeI-rgYEJiXyeeJALZA6fk1-y6RqYBRoZX6ojuRLkA',
    imageAlt: 'Earth Charity Foundation ERP global operations dashboard with portfolio overview',
    mockupType: 'desktop',
  },
  {
    category: 'MANUFACTURING',
    type: 'Core ERP',
    title: 'Jayshree Electro Coating ERP',
    description: 'An industrial-grade resource planning solution engineered for high-volume manufacturing environments. Features deep inventory control, automated quality assurance workflows, and supply chain optimization.',
    results: [
      'Inventory accuracy improved to 99.8%',
      'Production cycle times reduced by 15%',
    ],
    techStack: ['.NET Core', 'Microsoft SQL Server', 'Angular'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlCfZ2St1qDpYz3GdL5qnKePfbGskYd1Oxo6493RhIo5vgdgP4DONZmk_6cDJeih0ZbvSCyZwnvfmmIZQsr5OWIbdYvkmu8iJOSz5027kf7fcRliv12iP7aD_irVFILBevGVk5rLmKkj5iJSreKdwymCHn180Iso22CwT7FJAp9R6qjdIZ9nFRMBbJXCsbsaK6Fld-BLUPY-5dZod82njkNJdFntIChsQ1WfQ0tbB_U-IwFJZeckcE7Q',
    imageAlt: 'Jayshree Electro Coating ERP industrial operations dashboard with inventory and production metrics',
    mockupType: 'browser',
  },
];

function renderCaseStudy(cs: CaseStudy, index: number): string {
  const isReversed = index % 2 !== 0;
  const flexDirection = isReversed ? 'flex-row-reverse' : '';
  const imageBorder = isReversed ? 'cs-card-image-border-right' : 'cs-card-image-border-left';

  const resultsHTML = cs.results.map(r =>
    `<li class="cs-result-item"><span class="material-symbols-outlined">check_circle</span>${r}</li>`
  ).join('');

  const techHTML = cs.techStack.map(t =>
    `<span class="cs-tech-chip">${t}</span>`
  ).join('');

  // Build the device-specific mockup wrapper
  let mockupInner = '';
  if (cs.mockupType === 'desktop') {
    mockupInner = `
      <div class="cs-mockup-desktop">
        <img src="${cs.imageUrl}" alt="${cs.imageAlt}" loading="eager" />
      </div>`;
  } else if (cs.mockupType === 'mobile') {
    mockupInner = `
      <div class="cs-mockup-mobile-wrapper">
        <div class="cs-mockup-mobile">
          <img src="${cs.imageUrl}" alt="${cs.imageAlt}" loading="eager" />
        </div>
      </div>`;
  } else if (cs.mockupType === 'browser') {
    mockupInner = `
      <div class="cs-mockup-browser">
        <div class="cs-browser-bar">
          <span class="cs-browser-dot"></span>
          <span class="cs-browser-dot"></span>
          <span class="cs-browser-dot"></span>
        </div>
        <div class="cs-browser-content">
          <img src="${cs.imageUrl}" alt="${cs.imageAlt}" loading="eager" />
        </div>
      </div>`;
  }

  return `
    <div class="cs-card animate-fade-in-up">
      <div class="cs-card-inner ${flexDirection}">
        <!-- Content half -->
        <div class="cs-card-content">
          <div class="cs-card-meta">
            <span class="cs-category">${cs.category}</span>
            <span class="cs-meta-dot"></span>
            <span class="cs-type">${cs.type}</span>
          </div>
          <h2 class="cs-title">${cs.title}</h2>
          <p class="cs-description">${cs.description}</p>
          <div class="cs-results-block">
            <h4 class="cs-section-label">Key Results</h4>
            <ul class="cs-results-list">${resultsHTML}</ul>
          </div>
          <div class="cs-tech-block">
            <h4 class="cs-section-label">Tech Stack</h4>
            <div class="cs-tech-chips">${techHTML}</div>
          </div>
          <a class="cs-cta" href="#">
            View Case Study
            <span class="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <!-- Image half -->
        <div class="cs-card-image ${imageBorder}">
          ${mockupInner}
        </div>
      </div>
    </div>
  `;
}

export function renderPortfolioPage(): string {
  const casesHTML = CASE_STUDIES.map((cs, i) => renderCaseStudy(cs, i)).join('');

  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      <!-- Portfolio Hero -->
      <header class="hero" style="overflow:hidden; position: relative; height: 150vh; display: flex; flex-direction: column; padding: 80px 0 0 0; background-image: url('/images/portfolio-bg.png'); background-size: cover; background-position: center;">
        
        <!-- Dark Gradient Overlay -->
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(13, 20, 36, 0.85) 0%, rgba(20, 10, 30, 0.95) 100%); z-index: 1;"></div>

        <!-- Full-height Dissolved Image on the Right -->
        <div class="animate-scale-in delay-300" style="position: absolute; top: 0; right: 0; bottom: 0; width: 55%; z-index: 2; pointer-events: none;">
          <img
            src="/images/portfolio-team.png"
            alt="Design and development team"
            style="display: block; width: 100%; height: 100%; object-fit: cover; object-position: center left; opacity: 0.85; -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%); mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%);"
          />
        </div>

        <div class="container" style="position: sticky; top: 0; display: flex; align-items: center; height: 100vh; z-index: 5;">
          <div class="hero-grid" style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; width: 100%;">
            <div class="hero-content" style="padding-right: 40px;">
              <span class="hero-badge animate-fade-in-up" style="padding: 10px 16px; border-radius: 100px; display: inline-flex; align-items: center; gap: 6px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 24px; background: rgba(255,255,255,0.1); color: #c084fc; border: 1px solid rgba(255,255,255,0.2); font-family: 'Inter', sans-serif;">
                <span class="material-symbols-outlined" style="font-size:16px;">library_books</span>
                CASE STUDIES
              </span>
              <h1 class="hero-title animate-fade-in-up delay-100" style="font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 4vw, 4rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; color: #ffffff; margin-bottom: 24px;">
                Our Work — <br/>
                <span style="background: linear-gradient(90deg, #c084fc, #2dd4bf); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Software & AI</span>
              </h1>
              <p class="hero-subtitle animate-fade-in-up delay-200" style="font-family: 'Inter', sans-serif; font-size: 1.15rem; color: rgba(255, 255, 255, 0.8); line-height: 1.6; max-width: 550px; margin-bottom: 32px;">
                Explore our portfolio of high-performance software, robust ERP systems, and intuitive learning platforms designed to drive business transformation across industries.
              </p>
              <div class="hero-actions animate-fade-in-up delay-300" style="display: flex; gap: 16px; flex-wrap: wrap;">
                <span style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50px; font-size: 0.9rem; font-weight: 600; color: #ffffff; font-family: 'Inter', sans-serif; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
                  <span class="material-symbols-outlined" style="font-size: 20px; color: #c084fc;">check_circle</span> PROVEN RESULTS
                </span>
                <span style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50px; font-size: 0.9rem; font-weight: 600; color: #ffffff; font-family: 'Inter', sans-serif; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
                  <span class="material-symbols-outlined" style="font-size: 20px; color: #2dd4bf;">public</span> GLOBAL REACH
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 3D Panels Section (Absolute, scrolls naturally) -->
        <div style="position: absolute; top: calc(100vh - 130px); left: 0; width: 100%; z-index: 10;">
          <div class="panels3d-demo" id="panels-demo">
            <div class="panels3d-space">
              <div class="panels3d-scene">
                <div class="panels3d-wrap" id="panels-wrap">
                  <div class="panels3d-panel" style="padding: 0;">
                    <img src="/images/mobile_screen_1.png" alt="Mobile App 1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 28px; pointer-events: none;" />
                  </div>
                  <div class="panels3d-panel" style="padding: 0;">
                    <img src="/images/mobile_screen_1.png" alt="Mobile App 2" style="width: 100%; height: 100%; object-fit: cover; border-radius: 28px; pointer-events: none;" />
                  </div>
                  <div class="panels3d-panel" style="padding: 0;">
                    <img src="/images/mobile_screen_1.png" alt="Mobile App 3" style="width: 100%; height: 100%; object-fit: cover; border-radius: 28px; pointer-events: none;" />
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        
        <!-- Bottom Fade to seamlessly blend into next section -->
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 300px; background: linear-gradient(to bottom, transparent, #fafafa); z-index: 2;"></div>
      </header>

      <!-- Case Studies -->
      <section class="cs-section" style="margin-top: 20px;">
        <div class="container">
          <div class="cs-grid">
            ${casesHTML}
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

export function initPortfolio(): void {
  const space = document.querySelector('.panels3d-space') as HTMLElement;
  const wrap = document.getElementById('panels-wrap');

  if (space && wrap) {
    window.addEventListener('scroll', () => {
      // Get the position of the scene relative to the viewport
      const scene = document.querySelector('.panels3d-scene') as HTMLElement;
      if (!scene) return;
      const rect = scene.getBoundingClientRect();
      
      // Total distance the element travels from entering bottom to leaving top
      const totalDistance = window.innerHeight + rect.height;
      
      // How far it has traveled (0 when just entering bottom)
      const scrolled = window.innerHeight - rect.top;
      
      // Calculate progress from 0 to 1
      let progress = scrolled / totalDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      // Rotate between 0 and -60 degrees on Y axis, and maybe a bit on X
      const rotateY = progress * -60; 
      const rotateX = progress * 10;
      const translateZ = progress * 100;
      
      wrap.style.transform = `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }
}

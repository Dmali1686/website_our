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
      <section class="portfolio-hero">
        <div class="container">
          <h1 class="animate-fade-in-up">Engineering Digital<br/>Excellence</h1>
          <p class="animate-fade-in-up delay-100">
            Explore our portfolio of high-performance software, robust ERP systems, and intuitive learning platforms designed to drive business transformation across industries.
          </p>
          <div class="hero-chips animate-fade-in-up delay-200">
            <span class="chip"><span class="material-symbols-outlined">check_circle</span> PROVEN RESULTS</span>
            <span class="chip"><span class="material-symbols-outlined">check_circle</span> GLOBAL REACH</span>
          </div>
        </div>
      </section>

      <!-- Case Studies -->
      <section class="cs-section">
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

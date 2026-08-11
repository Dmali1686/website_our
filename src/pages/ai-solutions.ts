/**
 * Cresenix Solutions — AI Solutions Page
 * Hero + 8 capability cards in a 4-column grid.
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

const CAPABILITIES = [
  { icon: 'forum', title: 'AI Chatbots', desc: 'Context-aware conversational agents for customer support and internal knowledge retrieval.' },
  { icon: 'record_voice_over', title: 'AI Voice Assistants', desc: 'Natural sounding, latency-optimized voice interfaces for seamless user interaction.' },
  { icon: 'support_agent', title: 'AI Calling Agents', desc: 'Automated outbound and inbound call handling with intelligent routing.' },
  { icon: 'filter_alt', title: 'Lead Qualification', desc: 'Algorithmic scoring and qualification systems to prioritize high-value prospects.' },
  { icon: 'document_scanner', title: 'OCR & Intelligence', desc: 'Extract and structure unstructured data from complex documents automatically.' },
  { icon: 'trending_up', title: 'Predictive Analytics', desc: 'Forecast trends, optimize inventory, and anticipate market shifts with ML models.' },
  { icon: 'account_tree', title: 'Workflow Automation', desc: 'Connect disparate systems and automate complex multi-step processes.' },
  { icon: 'hub', title: 'LLM Integrations', desc: 'Secure, private deployments of Large Language Models tailored to your domain.' },
];

export function renderAISolutionsPage(): string {
  const capabilitiesHTML = CAPABILITIES.map((cap, i) => {
    const delayClass = `delay-${((i % 4) + 1) * 100}`;
    return `
      <div class="capability-card gradient-glow animate-fade-in-up ${delayClass}">
        <div class="card-icon-wrapper">
          <span class="material-symbols-outlined">${cap.icon}</span>
        </div>
        <h3 class="card-title">${cap.title}</h3>
        <p class="card-description">${cap.desc}</p>
      </div>
    `;
  }).join('');

  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      <!-- Hero Section -->
      <header class="hero bg-radial-hero" style="overflow:hidden;">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content">
              <span class="ai-chip hero-badge animate-fade-in-up" style="border:none;">
                <span class="material-symbols-outlined" style="font-size:16px;">bolt</span>
                NEXT-GEN AI
              </span>
              <h1 class="hero-title animate-fade-in-up delay-100" style="font-size: clamp(2.5rem, 4.5vw, 4rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.03em; color: var(--on-background); margin-bottom: 24px;">
                AI-Powered Solutions for the <span class="text-gradient-primary">Modern Enterprise.</span>
              </h1>
              <p class="hero-subtitle animate-fade-in-up delay-200">
                Transform your operations with state-of-the-art artificial intelligence. From predictive analytics to intelligent workflow automation, we build systems that scale.
              </p>
              <div class="hero-actions animate-fade-in-up delay-300">
                <button class="btn-primary">
                  Explore Capabilities <span class="material-symbols-outlined" style="font-size:20px;">arrow_forward</span>
                </button>
                <a class="btn-ghost" data-route="/contact" href="#/contact">
                  Book a Consultation
                </a>
              </div>
            </div>
            <div class="hero-visual animate-scale-in delay-300">
              <div class="hero-image-wrapper glass-panel gradient-glow">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcS7fFTuxvCp3uVYpVhppKIBwVvoWUEeV7-1H0KYkMKhzFMOpaY-ce2Pl30N_uLoc1lx1iK-cy0VWnqTc1nHS7LtDOw6GNUi_rjlsGN1MGFSPqTtMvp3JWxTz9S49bohBaDt6RA5sWWocVqDi2zIaz4ZFrWg17Ob685ENXNzV8YIAliJ3ZiZ1YMui4LrQPyk_Yj1TDUsDULjqdK3jDeIfuG-pBlp95_ehx3NsVhvEo9e3BBrSlaXvXCw"
                  alt="Futuristic AI analytics dashboard with neural network visualizations and predictive data charts"
                  style="opacity:0.85;"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Capabilities Grid -->
      <section class="bg-surface-lowest section-gap">
        <div class="container">
          <div class="section-header animate-fade-in-up">
            <h2 class="section-title">Enterprise AI Capabilities</h2>
            <p class="section-subtitle">Comprehensive artificial intelligence solutions designed to automate processes, enhance decision-making, and drive growth.</p>
          </div>
          <div class="cards-grid cols-4">
            ${capabilitiesHTML}
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

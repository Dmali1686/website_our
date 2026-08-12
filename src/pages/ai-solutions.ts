/**
 * Cresenix Solutions — AI Solutions Page
 * Hero + 8 capability cards in a 4-column grid.
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

const CAPABILITIES = [
  { icon: 'forum', title: 'AI Chatbots', color: '#f59e0b', desc: 'Context-aware conversational agents for customer support and internal knowledge retrieval.' },
  { icon: 'record_voice_over', title: 'AI Voice Assistants', color: '#3b82f6', desc: 'Natural sounding, latency-optimized voice interfaces for seamless user interaction.' },
  { icon: 'support_agent', title: 'AI Calling Agents', color: '#ef4444', desc: 'Automated outbound and inbound call handling with intelligent routing.' },
  { icon: 'filter_alt', title: 'Lead Qualification', color: '#10b981', desc: 'Algorithmic scoring and qualification systems to prioritize high-value prospects.' },
  { icon: 'document_scanner', title: 'OCR & Intelligence', color: '#8b5cf6', desc: 'Extract and structure unstructured data from complex documents automatically.' },
  { icon: 'trending_up', title: 'Predictive Analytics', color: '#f97316', desc: 'Forecast trends, optimize inventory, and anticipate market shifts with ML models.' },
  { icon: 'account_tree', title: 'Workflow Automation', color: '#06b6d4', desc: 'Connect disparate systems and automate complex multi-step processes.' },
  { icon: 'hub', title: 'LLM Integrations', color: '#ec4899', desc: 'Secure, private deployments of Large Language Models tailored to your domain.' },
  { icon: 'security', title: 'AI Cybersecurity', color: '#6366f1', desc: 'Proactive threat detection and automated incident response powered by machine learning algorithms.' }
];

export function renderAISolutionsPage(): string {
  const capabilitiesHTML = CAPABILITIES.map((cap, i) => {
    const delayClass = `delay-${((i % 3) + 1) * 100}`;
    return `
      <div class="ai-matrix-item animate-fade-in-up ${delayClass}">
        <div class="ai-matrix-icon-wrapper" style="color: ${cap.color};">
          <span class="material-symbols-outlined" style="font-size: 36px;">${cap.icon}</span>
        </div>
        <h3 style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 800; color: #111827; margin-bottom: 12px; letter-spacing: -0.01em;">${cap.title}</h3>
        <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #6b7280; line-height: 1.6;">${cap.desc}</p>
        <div class="hover-bg-gradient" style="background: linear-gradient(135deg, ${cap.color}11, transparent); position: absolute; inset: 0; opacity: 0; transition: opacity 0.4s ease; z-index: -1;"></div>
      </div>
    `;
  }).join('');

  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      <style>
        .ai-matrix-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          background: #ffffff;
        }
        @media (min-width: 768px) {
          .ai-matrix-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .ai-matrix-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .ai-matrix-item {
          padding: 60px 40px;
          border-right: 1px solid rgba(0,0,0,0.06);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          background: #ffffff;
          position: relative;
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        @media (min-width: 1024px) {
          .ai-matrix-item:nth-child(3n) { border-right: none; }
          .ai-matrix-item:nth-last-child(-n+3) { border-bottom: none; }
        }
        .ai-matrix-icon-wrapper {
          margin-bottom: 24px;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .ai-matrix-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1);
          border-color: transparent;
          border-radius: 16px;
          z-index: 10;
        }
        .ai-matrix-item:hover .hover-bg-gradient {
          opacity: 1;
        }
        .ai-matrix-item:hover .ai-matrix-icon-wrapper {
          transform: scale(1.15) translateY(-4px);
        }
      </style>

      <!-- Hero Section -->
      <header class="hero" style="overflow:hidden; position: relative; min-height: 100vh; display: flex; align-items: center; padding: 80px 0; background-image: url('/images/ai-hero-bg.png'); background-size: cover; background-position: center;">
        
        <!-- Dark Gradient Overlay for Readability -->
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(7, 71, 111, 0.85) 0%, rgba(17, 24, 39, 0.95) 100%); z-index: 1;"></div>

        <!-- Full-height Image on the Right -->
        <div class="animate-scale-in delay-300" style="position: absolute; top: 0; right: 0; bottom: 0; width: 55%; z-index: 2; pointer-events: none;">
          <img
            src="/images/happy-team.png"
            alt="Happy tech team collaborating on AI solutions"
            style="display: block; width: 100%; height: 100%; object-fit: cover; object-position: center left; opacity: 0.8; -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%); mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%);"
          />
        </div>

        <div class="container" style="position: relative; z-index: 5;">
          <div class="hero-grid" style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; min-height: 500px;">
            <div class="hero-content" style="padding-right: 40px;">
              <span class="hero-badge animate-fade-in-up" style="padding: 10px 16px; border-radius: 100px; display: inline-flex; align-items: center; gap: 6px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 24px; background: rgba(255,255,255,0.1); color: #60a5fa; border: 1px solid rgba(255,255,255,0.2); font-family: 'Inter', sans-serif;">
                <span class="material-symbols-outlined" style="font-size:16px;">bolt</span>
                NEXT-GEN AI
              </span>
              <h1 class="hero-title animate-fade-in-up delay-100" style="font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; color: #ffffff; margin-bottom: 24px;">
                AI Solutions — Chatbots, Voice Agents & <br/>
                <span style="background: linear-gradient(90deg, #60a5fa, #34d399); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Intelligent Automation</span>
              </h1>
              <p class="hero-subtitle animate-fade-in-up delay-200" style="font-family: 'Inter', sans-serif; font-size: 1.15rem; color: rgba(255, 255, 255, 0.8); line-height: 1.6; max-width: 550px; margin-bottom: 32px;">
                Transform your operations with state-of-the-art artificial intelligence. From predictive analytics to intelligent workflow automation, we build systems that scale.
              </p>
              <div class="hero-actions animate-fade-in-up delay-300" style="display: flex; gap: 16px; flex-wrap: wrap;">
                <button style="background: #3b82f6; color: white; border: none; padding: 14px 28px; border-radius: 100px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1rem; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4); transition: transform 0.2s;">
                  Explore Capabilities <span class="material-symbols-outlined" style="font-size:20px;">arrow_forward</span>
                </button>
                <a data-route="/contact" href="#/contact" style="background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); padding: 14px 28px; border-radius: 100px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1rem; text-decoration: none; cursor: pointer; transition: background 0.2s;">
                  Book a Consultation
                </a>
              </div>
            </div>
            
            <div class="hero-visual">
              <!-- Image is now absolutely positioned behind the text -->
            </div>
          </div>
        </div>
      </header>

      <!-- Capabilities Grid -->
      <section style="background: #ffffff; padding: 100px 0;">
        <div class="container" style="max-width: 1280px; margin: 0 auto; padding: 0 24px;">
          <div class="section-header animate-fade-in-up" style="text-align: center; margin-bottom: 60px;">
            <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(2rem, 3vw, 2.5rem); font-weight: 900; color: #07476f; letter-spacing: -0.02em; margin-bottom: 20px;">Enterprise AI Capabilities</h2>
            <p style="font-family: 'Inter', sans-serif; font-size: 1.125rem; color: #4b5563; max-width: 700px; margin: 0 auto; line-height: 1.6;">
              Comprehensive artificial intelligence solutions designed to automate processes, enhance decision-making, and drive growth.
            </p>
          </div>
          <div class="ai-matrix-grid" style="border: 1px solid rgba(0,0,0,0.06); border-radius: 24px;">
            ${capabilitiesHTML}
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

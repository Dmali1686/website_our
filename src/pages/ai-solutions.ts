/**
 * Cresenix Solutions — AI Solutions Page
 * Full Orbital layout for all 9 capabilities with scroll-scrubbing animation.
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

const CAPABILITIES = [
  { icon: 'forum', title: 'AI Chatbots', color: '#f59e0b', desc: 'Context-aware conversational agents.' },
  { icon: 'record_voice_over', title: 'AI Voice Assistants', color: '#3b82f6', desc: 'Natural sounding, latency-optimized voice interfaces.' },
  { icon: 'support_agent', title: 'AI Calling Agents', color: '#ef4444', desc: 'Automated outbound and inbound call handling.' },
  { icon: 'filter_alt', title: 'Lead Qualification', color: '#10b981', desc: 'Algorithmic scoring and qualification systems.' },
  { icon: 'document_scanner', title: 'OCR & Intelligence', color: '#8b5cf6', desc: 'Extract unstructured data from documents.' },
  { icon: 'trending_up', title: 'Predictive Analytics', color: '#f97316', desc: 'Forecast trends and anticipate market shifts.' },
  { icon: 'account_tree', title: 'Workflow Automation', color: '#06b6d4', desc: 'Automate complex multi-step processes.' },
  { icon: 'hub', title: 'LLM Integrations', color: '#ec4899', desc: 'Secure, private tailored LLMs.' },
  { icon: 'security', title: 'AI Cybersecurity', color: '#6366f1', desc: 'Proactive machine learning threat detection.' }
];

export function renderAISolutionsPage(): string {
  // Distribute 9 nodes evenly around 360 degrees.
  const angleStep = 360 / CAPABILITIES.length;
  const orbitNodesHTML = CAPABILITIES.map((cap, i) => {
    const angle = angleStep * i;
    return `
      <div class="ai-orbit-node-wrapper ai-orbit-node-anim" data-target-angle="${angle}" style="--target-angle: -90deg;">
        <div class="ai-orbit-node">
          <div class="ai-orbit-icon" style="color: ${cap.color};"><span class="material-symbols-outlined">${cap.icon}</span></div>
          <div class="ai-orbit-text text-dynamic">
            <h4>${cap.title}</h4>
            <p>${cap.desc}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      <style>
        /* Hero Section */
        .hero {
          overflow:hidden; position: relative; min-height: 100vh; display: flex; align-items: center; padding: 80px 0; background-image: url('/images/ai-hero-bg.png'); background-size: cover; background-position: center;
        }
        
        /* New Full Orbit Section Styles */
        .ai-impact-scroll-track {
          height: 350vh;
          position: relative;
        }
        .ai-impact-sticky {
          position: sticky; top: 0;
          height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: var(--background);
          background-image: radial-gradient(rgba(59, 130, 246, 0.1) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          padding-top: 80px; /* Account for navbar */
        }
        .ai-impact-section {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .ai-impact-container {
          position: relative;
          width: 100%; max-width: 1400px; height: 100%;
          display: flex; align-items: center; justify-content: center;
        }
        .ai-orbit-ring {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          width: 600px; height: 600px; border-radius: 50%;
          border: 2px dashed rgba(59, 130, 246, 0.2); pointer-events: none;
          z-index: 1;
        }
        .ai-orbit-center {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          width: 320px; height: 320px; border-radius: 50%;
          background: #ffffff; box-shadow: 0 0 60px rgba(99, 102, 241, 0.08);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; z-index: 2; padding: 0 30px; border: 1px solid rgba(59, 130, 246, 0.1);
        }
        .ai-orbit-center h3 { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 800; color: #0f172a; margin-bottom: 12px; line-height: 1.1; letter-spacing: -0.02em; }
        .ai-orbit-center p { font-family: 'Inter', sans-serif; font-size: 1rem; color: #64748b; margin: 0; line-height: 1.5; }
        
        .ai-orbit-system {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          width: 600px; height: 600px; z-index: 3;
        }

        .ai-orbit-node-wrapper {
          position: absolute; left: 50%; top: 50%; width: 300px; /* Radius is 300px */
          transform-origin: left center;
          transform: translateY(-50%) rotate(var(--target-angle, 0deg));
          opacity: 0; /* Hidden initially until scrolled */
        }
        
        .ai-orbit-node {
          position: absolute; right: 0; top: 50%;
          transform: translate(50%, -50%) rotate(calc(-1 * var(--target-angle)));
          width: 64px; height: 64px;
        }
        
        .ai-orbit-icon {
          width: 64px; height: 64px; border-radius: 50%;
          background: white; box-shadow: 0 12px 30px rgba(15,23,42,0.08);
          display: flex; align-items: center; justify-content: center;
          border: 3px solid #ffffff;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative; z-index: 2;
        }
        .ai-orbit-icon:hover { transform: scale(1.1); box-shadow: 0 16px 40px rgba(99,102,241,0.2); }
        .ai-orbit-icon .material-symbols-outlined { font-size: 28px; font-variation-settings: 'wght' 300; }
        
        .ai-orbit-text {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: max-content; max-width: 200px; z-index: 1;
          padding: 8px 12px;
        }
        /* JS toggles these to prevent text from crossing the icon incorrectly */
        .ai-orbit-text.text-right {
          left: calc(100% + 16px); text-align: left;
        }
        .ai-orbit-text.text-left {
          right: calc(100% + 16px); text-align: right;
        }
        
        .ai-orbit-text h4 { font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
        .ai-orbit-text p { font-family: 'Inter', sans-serif; font-size: 0.8rem; color: #64748b; margin: 0; line-height: 1.4; white-space: normal; }

        @media (max-width: 1300px) {
          .ai-orbit-ring { width: 600px; height: 600px; }
          .ai-orbit-system { width: 600px; height: 600px; }
          .ai-orbit-node-wrapper { width: 300px; }
        }
        
        @media (max-width: 1000px) {
          .ai-impact-scroll-track { height: auto !important; padding: 40px 20px; }
          .ai-impact-sticky { position: relative !important; height: auto !important; padding: 0; background: transparent; }
          .ai-impact-container { flex-direction: column; width: 100%; box-sizing: border-box; }
          
          .ai-orbit-ring { display: none; }
          .ai-orbit-center { position: relative; left: 0; top: 0; transform: none; width: 100%; height: auto; border-radius: 24px; padding: 32px 20px; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid rgba(59, 130, 246, 0.1); box-sizing: border-box; }
          
          .ai-orbit-system { position: relative; left: 0; top: 0; transform: none; width: 100%; height: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; box-sizing: border-box; }
          
          .ai-orbit-node-wrapper { position: relative; left: 0; top: 0; transform: none !important; width: 100%; opacity: 1 !important; box-sizing: border-box; }
          .ai-orbit-node-wrapper:last-child { display: none !important; }
          
          .ai-orbit-node { position: relative; right: 0; top: 0; transform: none !important; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: flex-start; gap: 8px; background: white; padding: 12px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.03); box-sizing: border-box; overflow: hidden; }
          
          .ai-orbit-icon { width: 40px; height: 40px; flex-shrink: 0; border: none; box-shadow: none; background: #f8fafc; }
          .ai-orbit-icon .material-symbols-outlined { font-size: 20px; }
          
          .ai-orbit-text { position: relative; top: 0; transform: none; display: block !important; left: 0 !important; right: 0 !important; max-width: 100% !important; width: auto !important; white-space: normal !important; padding: 0; text-align: left !important; box-sizing: border-box; }
          .ai-orbit-text h4 { font-size: 0.95rem; margin-bottom: 4px; line-height: 1.2; word-wrap: break-word; }
          .ai-orbit-text p { font-size: 0.8rem; line-height: 1.4; word-wrap: break-word; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-content { padding-right: 0 !important; text-align: center; display: flex; flex-direction: column; align-items: center; }
          .hero-actions { justify-content: center; width: 100%; }
          .hero-actions button, .hero-actions a { width: 100%; text-align: center; justify-content: center; }
          .ai-hero-image-wrapper { width: 100% !important; opacity: 0.4 !important; -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%) !important; mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%) !important; }
          .hero-title { font-size: 2.2rem !important; }
          .hero { padding: 120px 0 60px !important; }
          
          /* AI Process Section overrides for Mobile 2-Column */
          .ai-process-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
          .ai-process-card { padding: 20px 16px !important; border-radius: 16px !important; }
          .ai-process-card .step-number { font-size: 2.5rem !important; right: 12px !important; top: 12px !important; }
          .ai-process-card .step-icon { width: 40px !important; height: 40px !important; margin-bottom: 16px !important; border-radius: 12px !important; }
          .ai-process-card .step-icon .material-symbols-outlined { font-size: 20px !important; }
          .ai-process-card h3 { font-size: 1.05rem !important; margin-bottom: 8px !important; line-height: 1.2 !important; }
          .ai-process-card p { 
            font-size: 0.85rem !important; 
            line-height: 1.4 !important; 
            display: -webkit-box !important;
            -webkit-line-clamp: 3 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
          .ai-process-section { padding: 60px 0 !important; }
          .ai-process-header { margin-bottom: 40px !important; }
          .ai-process-section-title { font-size: 2rem !important; margin-bottom: 16px !important; line-height: 1.2 !important; }
          .ai-process-section-subtitle { font-size: 0.95rem !important; }
        }
      </style>

      <!-- Hero Section -->
      <header class="hero">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(7, 71, 111, 0.85) 0%, rgba(17, 24, 39, 0.95) 100%); z-index: 1;"></div>
        <div class="ai-hero-image-wrapper animate-scale-in delay-300" style="position: absolute; top: 0; right: 0; bottom: 0; width: 55%; z-index: 2; pointer-events: none; transition: all 0.3s;">
          <img src="/images/happy-team.png" alt="Happy tech team" style="display: block; width: 100%; height: 100%; object-fit: cover; object-position: center left; opacity: 0.8; -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%); mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%);" />
        </div>
        <div class="container" style="position: relative; z-index: 5;">
          <div class="hero-grid" style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; min-height: 500px;">
            <div class="hero-content" style="padding-right: 40px;">
              <span class="hero-badge animate-fade-in-up" style="padding: 10px 16px; border-radius: 100px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 24px; background: rgba(255,255,255,0.1); color: #60a5fa; border: 1px solid rgba(255,255,255,0.2); font-family: 'Inter', sans-serif;">
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
          </div>
        </div>
      </header>

      <!-- New Enterprise AI Capabilities Full Orbit Section -->
      <div class="ai-impact-scroll-track" id="ai-impact-track">
        <div class="ai-impact-sticky">
          <section class="ai-impact-section">
            <div class="ai-impact-container">
              <div class="ai-orbit-ring"></div>
              <div class="ai-orbit-center">
                <h3>Enterprise AI Capabilities</h3>
                <p>Comprehensive artificial intelligence solutions designed to automate processes, enhance decision-making, and drive growth.</p>
              </div>
              <div class="ai-orbit-system">
                ${orbitNodesHTML}
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- AI Integration Process Section -->
      <section class="ai-process-section" style="padding: 120px 0; background: #0f172a; position: relative; overflow: hidden;">
        <!-- Background decoration -->
        <div style="position: absolute; top: -20%; right: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
        <div style="position: absolute; bottom: -20%; left: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
        
        <div class="container" style="position: relative; z-index: 5;">
          <div class="ai-process-header" style="text-align: center; margin-bottom: 80px;">
            <div class="animate-fade-in-up" style="display: inline-block; padding: 6px 16px; background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em; border-radius: 50px; margin-bottom: 16px; border: 1px solid rgba(59, 130, 246, 0.2);">
              METHODOLOGY
            </div>
            <h2 class="ai-process-section-title animate-fade-in-up delay-100" style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 800; color: #ffffff; letter-spacing: -0.02em; margin-bottom: 24px;">The AI Integration Process</h2>
            <p class="ai-process-section-subtitle animate-fade-in-up delay-200" style="font-family: 'Inter', sans-serif; font-size: 1.15rem; color: #94a3b8; max-width: 600px; margin: 0 auto; line-height: 1.6;">A structured, risk-mitigated approach to embedding intelligent systems into your core business operations.</p>
          </div>

          <div class="ai-process-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; position: relative; box-sizing: border-box; width: 100%;">
            
            <!-- Step 1 -->
            <div class="ai-process-card animate-fade-in-up delay-100" style="background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 40px 32px; position: relative; transition: transform 0.3s, border-color 0.3s; box-sizing: border-box;" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='rgba(59, 130, 246, 0.3)';" onmouseout="this.style.transform='none'; this.style.borderColor='rgba(255,255,255,0.08)';">
              <div class="step-number" style="font-family: 'Playfair Display', serif; font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.5); position: absolute; top: 16px; right: 24px; line-height: 1;">01</div>
              <div class="step-icon" style="width: 56px; height: 56px; border-radius: 16px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1)); border: 1px solid rgba(59, 130, 246, 0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                <span class="material-symbols-outlined" style="color: #60a5fa; font-size: 28px;">search_insights</span>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px;">Audit & Strategy</h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #94a3b8; line-height: 1.6;">We analyze your existing architecture and identify high-ROI use cases where AI can drive immediate business value.</p>
            </div>

            <!-- Step 2 -->
            <div class="ai-process-card animate-fade-in-up delay-200" style="background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 40px 32px; position: relative; transition: transform 0.3s, border-color 0.3s; box-sizing: border-box;" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='rgba(168, 85, 247, 0.3)';" onmouseout="this.style.transform='none'; this.style.borderColor='rgba(255,255,255,0.08)';">
              <div class="step-number" style="font-family: 'Playfair Display', serif; font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.5); position: absolute; top: 16px; right: 24px; line-height: 1;">02</div>
              <div class="step-icon" style="width: 56px; height: 56px; border-radius: 16px; background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(147, 51, 234, 0.1)); border: 1px solid rgba(168, 85, 247, 0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                <span class="material-symbols-outlined" style="color: #c084fc; font-size: 28px;">verified_user</span>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px;">Data & Security</h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #94a3b8; line-height: 1.6;">Preparing and isolating your enterprise data to ensure complete privacy, compliance, and hallucination-free AI responses.</p>
            </div>

            <!-- Step 3 -->
            <div class="ai-process-card animate-fade-in-up delay-300" style="background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 40px 32px; position: relative; transition: transform 0.3s, border-color 0.3s; box-sizing: border-box;" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='rgba(16, 185, 129, 0.3)';" onmouseout="this.style.transform='none'; this.style.borderColor='rgba(255,255,255,0.08)';">
              <div class="step-number" style="font-family: 'Playfair Display', serif; font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.5); position: absolute; top: 16px; right: 24px; line-height: 1;">03</div>
              <div class="step-icon" style="width: 56px; height: 56px; border-radius: 16px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1)); border: 1px solid rgba(16, 185, 129, 0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                <span class="material-symbols-outlined" style="color: #34d399; font-size: 28px;">model_training</span>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px;">Custom Training</h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #94a3b8; line-height: 1.6;">Fine-tuning large language models and predictive algorithms to understand your specific business logic and industry context.</p>
            </div>

            <!-- Step 4 -->
            <div class="ai-process-card animate-fade-in-up delay-400" style="background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 40px 32px; position: relative; transition: transform 0.3s, border-color 0.3s; box-sizing: border-box;" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='rgba(236, 72, 153, 0.3)';" onmouseout="this.style.transform='none'; this.style.borderColor='rgba(255,255,255,0.08)';">
              <div class="step-number" style="font-family: 'Playfair Display', serif; font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.5); position: absolute; top: 16px; right: 24px; line-height: 1;">04</div>
              <div class="step-icon" style="width: 56px; height: 56px; border-radius: 16px; background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.1)); border: 1px solid rgba(236, 72, 153, 0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                <span class="material-symbols-outlined" style="color: #f472b6; font-size: 28px;">rocket_launch</span>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px;">Deployment</h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #94a3b8; line-height: 1.6;">Seamless integration into your existing tech stack, followed by continuous monitoring to ensure maximum performance.</p>
            </div>
            
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

export function initAISolutions(): void {
  const impactTrack = document.getElementById('ai-impact-track');
  const orbitNodes = document.querySelectorAll('.ai-orbit-node-anim');
  
  if (impactTrack && orbitNodes.length > 0) {
    
    // Use lerped animation loop for smoothness, similar to home page
    let currentScrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    let animationFrameId: number;
    let trackTop = 0;
    let trackHeight = 0;

    const updateOffsets = () => {
      const rect = impactTrack.getBoundingClientRect();
      trackTop = rect.top + window.scrollY;
      trackHeight = rect.height;
    };

    window.addEventListener('scroll', () => {
      targetScrollY = window.scrollY;
    }, { passive: true });

    let resizeTimeout: number;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(updateOffsets, 200);
    }, { passive: true });
    
    setTimeout(updateOffsets, 100);

    const render = () => {
      // Don't animate on mobile as we've switched to a static list
      if (window.innerWidth <= 1000) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      if (Math.abs(targetScrollY - currentScrollY) < 0.1) {
        currentScrollY = targetScrollY;
      }

      const scrollableDistance = trackHeight - window.innerHeight;
      let progress = (currentScrollY - trackTop) / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      const startAngle = 180; 
      
      orbitNodes.forEach((node, index) => {
        const targetOffset = index * 40;
        
        let nodeProgress = progress * 1.5 - (index * 0.1);
        nodeProgress = Math.max(0, Math.min(1, nodeProgress));
        
        const ease = 1 - Math.pow(1 - nodeProgress, 3);
        const currentAngle = startAngle + (ease * targetOffset);
        
        let opacity = nodeProgress * 2.5; 
        opacity = Math.max(0, Math.min(1, opacity));
        
        (node as HTMLElement).style.setProperty('--target-angle', `${currentAngle}deg`);
        (node as HTMLElement).style.opacity = opacity.toString();
        
        const textEl = node.querySelector('.ai-orbit-text');
        if (textEl) {
          let normalized = currentAngle % 360;
          if (normalized < 0) normalized += 360;
          
          if (normalized > 90 && normalized < 270) {
            textEl.classList.add('text-left');
            textEl.classList.remove('text-right');
          } else {
            textEl.classList.add('text-right');
            textEl.classList.remove('text-left');
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const cleanupObserver = new MutationObserver(() => {
      if (!document.getElementById('ai-impact-track')) {
        cancelAnimationFrame(animationFrameId);
        cleanupObserver.disconnect();
      }
    });
    cleanupObserver.observe(document.body, { childList: true, subtree: true });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('motion-in-view');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.animate-fade-in-up').forEach(el => observer.observe(el));
}

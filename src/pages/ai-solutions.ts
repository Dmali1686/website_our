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
          .ai-impact-scroll-track { height: auto !important; }
          .ai-impact-sticky { position: relative !important; top: auto !important; height: auto !important; padding: 60px 0; overflow: visible; }
          .ai-orbit-ring { width: 400px; height: 400px; }
          .ai-orbit-center { width: 220px; height: 220px; padding: 0 16px; }
          .ai-orbit-center h3 { font-size: 1.2rem; }
          .ai-orbit-center p { font-size: 0.85rem; }
          .ai-orbit-system { width: 400px; height: 400px; }
          .ai-orbit-node-wrapper { width: 200px; transform: translateY(-50%) rotate(var(--target-angle)); }
          .ai-orbit-node { transform: translate(50%, -50%) rotate(calc(-1 * var(--target-angle))); }
          .ai-orbit-text { display: none; } /* Hide text on mobile orbit to prevent overlap */
        }
      </style>

      <!-- Hero Section -->
      <header class="hero">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(7, 71, 111, 0.85) 0%, rgba(17, 24, 39, 0.95) 100%); z-index: 1;"></div>
        <div class="animate-scale-in delay-300" style="position: absolute; top: 0; right: 0; bottom: 0; width: 55%; z-index: 2; pointer-events: none;">
          <img src="/images/happy-team.png" alt="Happy tech team" style="display: block; width: 100%; height: 100%; object-fit: cover; object-position: center left; opacity: 0.8; -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%); mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%);" />
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

      ${renderFooter()}
    </div>
  `;
}

export function initAISolutions(): void {
  const impactTrack = document.getElementById('ai-impact-track');
  const orbitNodes = document.querySelectorAll('.ai-orbit-node-anim');
  
  if (impactTrack && orbitNodes.length > 0) {
    const handleScroll = () => {
      const rect = impactTrack.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      
      let progress = -rect.top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      // Start all nodes from 180 degrees (left side)
      const startAngle = 180; 
      
      orbitNodes.forEach((node, index) => {
        // Offset for this specific node (0, 40, 80, 120...)
        const targetOffset = index * 40;
        
        let nodeProgress = progress * 1.5 - (index * 0.1);
        nodeProgress = Math.max(0, Math.min(1, nodeProgress));
        
        // Easing so they fan out smoothly
        const ease = 1 - Math.pow(1 - nodeProgress, 3);
        const currentAngle = startAngle + (ease * targetOffset);
        
        // Fade in as they emerge from the start angle
        let opacity = nodeProgress * 2.5; 
        opacity = Math.max(0, Math.min(1, opacity));
        
        (node as HTMLElement).style.setProperty('--target-angle', `${currentAngle}deg`);
        (node as HTMLElement).style.opacity = opacity.toString();
        
        // Dynamically adjust text position to stay on the outer edge of the circle
        const textEl = node.querySelector('.ai-orbit-text');
        if (textEl) {
          // Normalize angle to 0-360
          let normalized = currentAngle % 360;
          if (normalized < 0) normalized += 360;
          
          // If the node is on the left side of the circle (90 to 270 degrees), text should be on the left
          if (normalized > 90 && normalized < 270) {
            textEl.classList.add('text-left');
            textEl.classList.remove('text-right');
          } else {
            // Right side of circle (0-90 or 270-360), text should be on the right
            textEl.classList.add('text-right');
            textEl.classList.remove('text-left');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    setTimeout(handleScroll, 50);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-in-view');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-fade-in-up').forEach(el => observer.observe(el));
  }
}

/**
 * Cresenix Solutions — Home Page
 * Hero section with stats + Services grid.
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderHomePage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      <!-- Hero Section -->
      <main class="hero bg-mesh" style="padding-top: 140px; padding-bottom: 80px;">
        <div class="container">
          <div class="hero-grid" style="grid-template-columns: 1fr 1fr; align-items: center; gap: 4rem;">
            
            <!-- Hero Content -->
            <div class="hero-content" style="max-width: 600px;">
              <div class="hero-badge animate-fade-in-up" style="background: rgba(var(--primary-rgb), 0.1); color: var(--primary); padding: 8px 16px; border-radius: 100px; display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 24px;">
                <span class="badge-dot" style="width: 8px; height: 8px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 8px var(--primary);"></span>
                <span>WE BUILD DIGITAL SOLUTIONS THAT DRIVE GROWTH</span>
              </div>
              <h1 class="hero-title animate-fade-in-up delay-100" style="font-family: var(--font-display); font-size: 4rem; font-weight: 800; line-height: 1.1; margin-bottom: 24px; color: var(--on-background);">
                We Build. You Grow.<br/>
                <span style="color: var(--primary);">Simple. Scalable. Smart.</span>
              </h1>
              <p class="hero-subtitle animate-fade-in-up delay-200" style="font-size: 1.125rem; color: var(--on-surface-variant); line-height: 1.6; margin-bottom: 32px;">
                Web Development, Mobile Apps, AI Solutions & Digital Marketing to help your business grow faster and smarter.
              </p>
              <div class="hero-actions animate-fade-in-up delay-300" style="display: flex; gap: 16px; margin-bottom: 48px;">
                <a class="btn-primary" data-route="/contact" href="#/contact" style="padding: 14px 28px; font-weight: 600;">
                  Start Project <span class="material-symbols-outlined ml-2" style="font-size:20px;">arrow_forward</span>
                </a>
                <a class="btn-outline" data-route="/portfolio" href="#/portfolio" style="padding: 14px 28px; font-weight: 600; color: var(--primary); border: 1px solid rgba(var(--primary-rgb), 0.2); background: transparent;">
                  View Portfolio <span class="material-symbols-outlined ml-2" style="font-size:20px;">arrow_forward</span>
                </a>
              </div>
              
              <!-- Service Pills -->
              <div class="hero-service-pills animate-fade-in-up delay-400" style="display: flex; gap: 12px; flex-wrap: nowrap;">
                <div class="service-pill" style="display: flex; align-items: center; gap: 8px; background: white; padding: 10px 16px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); font-size: 0.8rem; font-weight: 600; color: var(--on-surface); white-space: nowrap;">
                  <div style="background: rgba(var(--primary-rgb), 0.1); color: var(--primary); width: 28px; height: 28px; min-width: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center;"><span class="material-symbols-outlined" style="font-size: 16px;">code</span></div>
                  Web<br/>Development
                </div>
                <div class="service-pill" style="display: flex; align-items: center; gap: 8px; background: white; padding: 10px 16px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); font-size: 0.8rem; font-weight: 600; color: var(--on-surface); white-space: nowrap;">
                  <div style="background: rgba(var(--primary-rgb), 0.1); color: var(--primary); width: 28px; height: 28px; min-width: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center;"><span class="material-symbols-outlined" style="font-size: 16px;">smartphone</span></div>
                  Mobile<br/>Apps
                </div>
                <div class="service-pill" style="display: flex; align-items: center; gap: 8px; background: white; padding: 10px 16px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); font-size: 0.8rem; font-weight: 600; color: var(--on-surface); white-space: nowrap;">
                  <div style="background: rgba(var(--primary-rgb), 0.1); color: var(--primary); width: 28px; height: 28px; min-width: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center;"><span class="material-symbols-outlined" style="font-size: 16px;">auto_awesome</span></div>
                  AI<br/>Solutions
                </div>
                <div class="service-pill" style="display: flex; align-items: center; gap: 8px; background: white; padding: 10px 16px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); font-size: 0.8rem; font-weight: 600; color: var(--on-surface); white-space: nowrap;">
                  <div style="background: rgba(var(--primary-rgb), 0.1); color: var(--primary); width: 28px; height: 28px; min-width: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center;"><span class="material-symbols-outlined" style="font-size: 16px;">campaign</span></div>
                  Performance<br/>Marketing
                </div>
              </div>
            </div>

            <!-- Hero Visual (Dashboard Mockup) -->
            <div class="hero-visual animate-scale-in delay-300" style="position: relative; width: 100%; height: 600px; display: flex; align-items: center; justify-content: center;">
              <!-- Background Shape -->
              <div style="position: absolute; top: 0%; right: -10%; width: 120%; height: 100%; background: var(--surface-container-low); border-radius: 40px; z-index: 0;"></div>
              
              <!-- Desktop Mockup -->
              <img src="/images/hero-desktop.png" alt="Desktop Dashboard Mockup" style="position: absolute; top: 5%; right: 0; width: 95%; max-width: 600px; border-radius: 16px; box-shadow: 0 24px 60px rgba(0,0,0,0.12); z-index: 1; object-fit: contain;" />
              
              <!-- Mobile Mockup -->
              <img src="/images/hero-mobile.png" alt="Mobile App Mockup" style="position: absolute; bottom: -5%; right: -5%; width: 240px; border-radius: 32px; box-shadow: 0 30px 80px rgba(0,0,0,0.2); z-index: 2; object-fit: contain;" />
            </div>
            
          </div>
        </div>
      </main>      <!-- Trusted By Section (Marquee) -->
      <section class="trusted-by-section" style="padding: 48px 0; background: white; border-top: 1px solid rgba(0,0,0,0.05); overflow: hidden;">
        <div class="container" style="text-align: center;">
          <h3 style="font-family: var(--font-body); font-weight: 600; font-size: 0.8rem; letter-spacing: 0.15em; color: var(--on-surface-variant); text-transform: uppercase; margin-bottom: 40px;">
            TRUSTED BY BUSINESSES ACROSS MULTIPLE INDUSTRIES
          </h3>
        </div>
        <div class="marquee-container">
          <div class="marquee-track">
            <!-- First set -->
            <div class="trusted-logo-item">
              <div style="width: 36px; height: 36px; background: var(--primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 0.85rem; font-family: var(--font-display);">Gc</div>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">GeekByChoice</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">LMS</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">pets</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">MH12</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Animal NGO</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: #22c55e;">public</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">EARTH</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Charity Foundation</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: #f97316;">bolt</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">JAYSREE</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Electro Coating</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">settings</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">FutureSoft</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Technologies</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: #8b5cf6;">school</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">BrightPath</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Education</div></div>
            </div>
            <div class="marquee-divider"></div>

            <!-- Duplicate set for seamless loop -->
            <div class="trusted-logo-item">
              <div style="width: 36px; height: 36px; background: var(--primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 0.85rem; font-family: var(--font-display);">Gc</div>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">GeekByChoice</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">LMS</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">pets</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">MH12</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Animal NGO</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: #22c55e;">public</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">EARTH</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Charity Foundation</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: #f97316;">bolt</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">JAYSREE</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Electro Coating</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">settings</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">FutureSoft</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Technologies</div></div>
            </div>
            <div class="marquee-divider"></div>
            <div class="trusted-logo-item">
              <span class="material-symbols-outlined" style="font-size: 28px; color: #8b5cf6;">school</span>
              <div style="text-align: left;"><div style="font-weight: 700; font-size: 1rem; color: var(--on-surface);">BrightPath</div><div style="font-size: 0.7rem; color: var(--on-surface-variant); font-weight: 500;">Education</div></div>
            </div>
            <div class="marquee-divider"></div>
          </div>
        </div>
      </section>

      <!-- Comprehensive Services Section -->
      <section class="section-gap" style="background: var(--background); position: relative; z-index: 10;">
        <div class="container">
          <div class="section-header animate-fade-in-up" style="text-align: center; margin-bottom: 64px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 8px 18px; border-radius: 100px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
              <span class="material-symbols-outlined" style="font-size: 16px;">category</span> OUR SERVICES
            </div>
            <h2 style="font-family: var(--font-display); font-size: 2.75rem; font-weight: 800; color: var(--on-background); margin-bottom: 16px;">Comprehensive Digital Solutions</h2>
            <p class="section-subtitle" style="font-family: var(--font-display); font-size: 1.1rem; color: var(--on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6;">End-to-end software development and AI integration services designed to scale your enterprise operations.</p>
          </div>
          <div class="cards-grid cols-3">
            <div class="service-card animate-fade-in-up delay-100">
              <div class="card-icon-wrapper" style="background: rgba(var(--primary-rgb), 0.08);"><span class="material-symbols-outlined" style="color: var(--primary);">code</span></div>
              <h3 class="card-title">Custom Software</h3>
              <p class="card-description">Tailored scalable applications built to address your unique business challenges and streamline complex workflows.</p>
              <a class="card-link" data-route="/portfolio" href="#/portfolio">Explore Service <span class="material-symbols-outlined">chevron_right</span></a>
            </div>
            <div class="service-card animate-fade-in-up delay-200">
              <div class="card-icon-wrapper" style="background: rgba(var(--primary-rgb), 0.08);"><span class="material-symbols-outlined" style="color: var(--primary);">web</span></div>
              <h3 class="card-title">Web Applications</h3>
              <p class="card-description">High-performance, secure, and responsive web portals designed for optimal user engagement and robust data handling.</p>
              <a class="card-link" data-route="/portfolio" href="#/portfolio">Explore Service <span class="material-symbols-outlined">chevron_right</span></a>
            </div>
            <div class="service-card animate-fade-in-up delay-300">
              <div class="card-icon-wrapper" style="background: rgba(var(--primary-rgb), 0.08);"><span class="material-symbols-outlined" style="color: var(--primary);">smartphone</span></div>
              <h3 class="card-title">Mobile Apps</h3>
              <p class="card-description">Native and cross-platform mobile experiences that deliver seamless functionality and premium UI/UX across all devices.</p>
              <a class="card-link" data-route="/portfolio" href="#/portfolio">Explore Service <span class="material-symbols-outlined">chevron_right</span></a>
            </div>
            <div class="service-card animate-fade-in-up delay-100">
              <div class="card-icon-wrapper" style="background: rgba(var(--primary-rgb), 0.08);"><span class="material-symbols-outlined" style="color: var(--primary);">psychology</span></div>
              <h3 class="card-title">AI Automation</h3>
              <p class="card-description">Intelligent automation powered by cutting-edge AI — chatbots, voice agents, predictive analytics and workflow optimization.</p>
              <a class="card-link" data-route="/ai-solutions" href="#/ai-solutions">Explore Service <span class="material-symbols-outlined">chevron_right</span></a>
            </div>
            <div class="service-card animate-fade-in-up delay-200">
              <div class="card-icon-wrapper" style="background: rgba(var(--primary-rgb), 0.08);"><span class="material-symbols-outlined" style="color: var(--primary);">grid_view</span></div>
              <h3 class="card-title">ERP Systems</h3>
              <p class="card-description">Enterprise resource planning that unifies procurement, accounting, HR, and inventory into a single powerful platform.</p>
              <a class="card-link" data-route="/erp-lms" href="#/erp-lms">Explore Service <span class="material-symbols-outlined">chevron_right</span></a>
            </div>
            <div class="service-card animate-fade-in-up delay-300">
              <div class="card-icon-wrapper" style="background: rgba(var(--primary-rgb), 0.08);"><span class="material-symbols-outlined" style="color: var(--primary);">school</span></div>
              <h3 class="card-title">LMS Platforms</h3>
              <p class="card-description">Comprehensive learning management with course builders, progress tracking, gamification, and advanced analytics.</p>
              <a class="card-link" data-route="/erp-lms" href="#/erp-lms">Explore Service <span class="material-symbols-outlined">chevron_right</span></a>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Cresenix Section -->
      <section style="padding: 100px 0; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -50%; right: -20%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%); border-radius: 50%;"></div>
        <div style="position: absolute; bottom: -30%; left: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%); border-radius: 50%;"></div>
        <div class="container" style="position: relative; z-index: 1;">
          <div style="text-align: center; margin-bottom: 64px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); padding: 8px 18px; border-radius: 100px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
              <span class="material-symbols-outlined" style="font-size: 16px;">verified</span> WHY CHOOSE US
            </div>
            <h2 style="font-family: var(--font-display); font-size: 2.75rem; font-weight: 800; margin-bottom: 16px;">Why <span style="color: var(--primary);">Cresenix</span>?</h2>
            <p class="section-subtitle" style="font-family: var(--font-display); font-size: 1.1rem; color: rgba(255,255,255,0.6); max-width: 600px; margin: 0 auto; line-height: 1.6;">We don't just build software — we engineer competitive advantages.</p>
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
            <div class="animate-fade-in-up delay-100" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 32px 24px; text-align: center; transition: all 0.3s ease;">
              <div style="width: 56px; height: 56px; margin: 0 auto 20px; background: rgba(var(--primary-rgb), 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">speed</span>
              </div>
              <h3 style="font-weight: 700; font-size: 1.1rem; margin-bottom: 8px;">Agile Delivery</h3>
              <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.5;">Rapid sprints with transparent milestones. Your product goes live in weeks, not months.</p>
            </div>
            <div class="animate-fade-in-up delay-200" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 32px 24px; text-align: center; transition: all 0.3s ease;">
              <div style="width: 56px; height: 56px; margin: 0 auto 20px; background: rgba(var(--primary-rgb), 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">security</span>
              </div>
              <h3 style="font-weight: 700; font-size: 1.1rem; margin-bottom: 8px;">Enterprise Security</h3>
              <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.5;">Bank-grade encryption, secure APIs, and compliance-ready architecture from day one.</p>
            </div>
            <div class="animate-fade-in-up delay-300" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 32px 24px; text-align: center; transition: all 0.3s ease;">
              <div style="width: 56px; height: 56px; margin: 0 auto 20px; background: rgba(var(--primary-rgb), 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">support_agent</span>
              </div>
              <h3 style="font-weight: 700; font-size: 1.1rem; margin-bottom: 8px;">Dedicated Support</h3>
              <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.5;">24/7 monitoring and a dedicated account manager for every project we deliver.</p>
            </div>
            <div class="animate-fade-in-up delay-400" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 32px 24px; text-align: center; transition: all 0.3s ease;">
              <div style="width: 56px; height: 56px; margin: 0 auto 20px; background: rgba(var(--primary-rgb), 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">trending_up</span>
              </div>
              <h3 style="font-weight: 700; font-size: 1.1rem; margin-bottom: 8px;">Scalable Growth</h3>
              <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.5;">Architectures built for scale — from 100 users today to 1M users tomorrow.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Banner Section -->
      <section style="padding: 100px 0; background: var(--background); text-align: center;">
        <div class="container">
          <div class="animate-fade-in-up" style="background: linear-gradient(135deg, var(--primary) 0%, #2563eb 100%); border-radius: 24px; padding: 64px 48px; max-width: 900px; margin: 0 auto; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -40%; right: -20%; width: 300px; height: 300px; background: rgba(255,255,255,0.08); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -30%; left: -10%; width: 200px; height: 200px; background: rgba(255,255,255,0.06); border-radius: 50%;"></div>
            <div style="position: relative; z-index: 1;">
              <h2 style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 800; color: white; margin-bottom: 16px;">Ready to Build Something Amazing?</h2>
              <p class="section-subtitle" style="font-family: var(--font-display); font-size: 1.1rem; color: rgba(255,255,255,0.8); max-width: 500px; margin: 0 auto 32px; line-height: 1.6;">Let's discuss your project and create a solution that drives real results for your business.</p>
              <div style="display: flex; justify-content: center; gap: 16px;">
                <a class="btn-outline" data-route="/contact" href="#/contact" style="background: white; color: var(--primary); border: none; padding: 14px 32px; font-weight: 700; border-radius: 10px;">
                  Start a Project <span class="material-symbols-outlined" style="font-size: 20px;">arrow_forward</span>
                </a>
                <a class="btn-outline" data-route="/portfolio" href="#/portfolio" style="border-color: rgba(255,255,255,0.3); color: white; padding: 14px 32px; font-weight: 600; border-radius: 10px;">
                  View Our Work <span class="material-symbols-outlined" style="font-size: 20px;">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

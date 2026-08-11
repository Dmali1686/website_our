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
      <main class="hero bg-mesh" style="padding-top: 140px; padding-bottom: 120px;">
        <div class="container">
          <div class="hero-grid" style="align-items: center;">
            
            <!-- Hero Content -->
            <div class="hero-content" style="max-width: 600px;">
              <div class="hero-badge animate-fade-in-up" style="background: rgba(var(--primary-rgb), 0.1); color: var(--primary); padding: 8px 16px; border-radius: 100px; display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 24px;">
                <span class="badge-dot" style="width: 8px; height: 8px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 8px var(--primary);"></span>
                <span>WE BUILD DIGITAL SOLUTIONS THAT DRIVE GROWTH</span>
              </div>
              <h1 class="hero-title animate-fade-in-up delay-100" style="font-weight: 800; line-height: 1.1; margin-bottom: 24px; color: var(--on-background);">
                We Build. You Grow.<br/>
                <span style="color: var(--primary);">Simple. Scalable. Smart.</span>
              </h1>

              <!-- Trust Strip -->
              <div class="hero-trust-strip animate-fade-in-up delay-150" style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; align-items: center;">
                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600; color: var(--on-surface);">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: var(--primary);">verified</span>
                  <span>15+ Projects Delivered</span>
                </div>
                <div style="width: 1px; height: 16px; background: rgba(0,0,0,0.15);"></div>
                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600; color: var(--on-surface);">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: #f59e0b;">star</span>
                  <span>4.9★ Client Rating</span>
                </div>
                <div style="width: 1px; height: 16px; background: rgba(0,0,0,0.15);"></div>
                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600; color: var(--on-surface);">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">speed</span>
                  <span>Agile Delivery</span>
                </div>
                <div style="width: 1px; height: 16px; background: rgba(0,0,0,0.15);"></div>
                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600; color: var(--on-surface);">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: #8b5cf6;">support_agent</span>
                  <span>24/7 Support</span>
                </div>
              </div>

              <p class="hero-subtitle animate-fade-in-up delay-200" style="font-size: 1.125rem; color: var(--on-surface-variant); line-height: 1.6; margin-bottom: 32px;">
                Web Development, Mobile Apps, AI Solutions & Digital Marketing to help your business grow faster and smarter.
              </p>
              <div class="hero-actions animate-fade-in-up delay-300" style="display: flex; gap: 16px; margin-bottom: 48px;">
                <a class="btn-primary" data-route="/contact" href="#/contact" style="padding: 14px 28px; font-weight: 600;">
                  Book a Free Consultation <span class="material-symbols-outlined ml-2" style="font-size:20px;">arrow_forward</span>
                </a>
                <a class="btn-outline" data-route="/contact" href="#/contact" style="padding: 14px 28px; font-weight: 600; color: var(--primary); border: 1px solid rgba(var(--primary-rgb), 0.2); background: transparent;">
                  Get a Free Website Audit <span class="material-symbols-outlined ml-2" style="font-size:20px;">arrow_forward</span>
                </a>
              </div>
              
              <!-- Service Pills -->
              <div class="hero-service-pills animate-fade-in-up delay-400" style="display: flex; gap: 12px; flex-wrap: wrap;">
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
            <div class="hero-visual animate-scale-in delay-300" style="position: relative; width: 100%; aspect-ratio: 4 / 3; display: flex; align-items: center; justify-content: center;">
              <!-- Background Shape -->
              <div style="position: absolute; top: 0%; right: -10%; width: 110%; height: 95%; background: var(--surface-container-low); border-radius: 40px; z-index: 0;"></div>
              
              <!-- Desktop Mockup -->
              <img src="/images/hero-desktop.png" alt="Desktop Dashboard Mockup" style="position: absolute; top: 5%; right: 5%; width: 85%; max-width: 600px; border-radius: 16px; box-shadow: 0 24px 60px rgba(0,0,0,0.12); z-index: 1; object-fit: contain;" />
              
              <!-- Mobile Mockup -->
              <img src="/images/hero-mobile.png" alt="Mobile App Mockup" style="position: absolute; bottom: 0; right: 0; width: 35%; max-width: 240px; border-radius: 32px; box-shadow: 0 30px 80px rgba(0,0,0,0.2); z-index: 2; object-fit: contain;" />
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

      <!-- Social Proof / Testimonials Section -->
      <section class="section-gap" style="background: var(--surface-container-lowest); position: relative; overflow: hidden;">
        <div style="position: absolute; top: -30%; left: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(var(--primary-rgb), 0.06) 0%, transparent 70%); border-radius: 50%;"></div>
        <div class="container" style="position: relative; z-index: 1;">
          <div class="section-header animate-fade-in-up" style="text-align: center; margin-bottom: 64px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 8px 18px; border-radius: 100px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
              <span class="material-symbols-outlined" style="font-size: 16px;">format_quote</span> CLIENT TESTIMONIALS
            </div>
            <h2 style="font-family: var(--font-display); font-size: 2.75rem; font-weight: 800; color: var(--on-background); margin-bottom: 16px;">What Our Clients Say</h2>
            <p class="section-subtitle" style="font-family: var(--font-display); font-size: 1.1rem; color: var(--on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6;">Real feedback from businesses we've helped transform through technology.</p>
          </div>

          <!-- Testimonial Cards Grid -->
          <div class="testimonial-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 64px;">
            
            <!-- Testimonial 1 -->
            <div class="testimonial-card animate-fade-in-up delay-100" style="background: white; border-radius: 20px; padding: 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative;">
              <div style="display: flex; gap: 4px; margin-bottom: 20px;">
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
              </div>
              <p style="font-size: 0.95rem; color: var(--on-surface); line-height: 1.7; margin-bottom: 24px; font-style: italic;">"Cresenix delivered our LMS platform ahead of schedule. Student engagement jumped 40% within the first quarter. Their attention to detail and understanding of education tech is unmatched."</p>
              <div style="display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06);">
                <div style="width: 44px; height: 44px; background: var(--primary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 0.8rem; font-family: var(--font-display);">Gc</div>
                <div>
                  <div style="font-weight: 700; font-size: 0.9rem; color: var(--on-surface);">GeekByChoice</div>
                  <div style="font-size: 0.75rem; color: var(--on-surface-variant);">LMS Platform · Education</div>
                </div>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="testimonial-card animate-fade-in-up delay-200" style="background: white; border-radius: 20px; padding: 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative;">
              <div style="display: flex; gap: 4px; margin-bottom: 20px;">
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
              </div>
              <p style="font-size: 0.95rem; color: var(--on-surface); line-height: 1.7; margin-bottom: 24px; font-style: italic;">"The mobile app Cresenix built for us has coordinated over 2,500 animal rescues. Real-time GPS tracking and seamless volunteer management — they truly understood our mission."</p>
              <div style="display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06);">
                <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #3b82f6, #60a5fa); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                  <span class="material-symbols-outlined" style="font-size: 22px; color: white;">pets</span>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.9rem; color: var(--on-surface);">MH12 Animal NGO</div>
                  <div style="font-size: 0.75rem; color: var(--on-surface-variant);">Mobile App · Social / NGO</div>
                </div>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="testimonial-card animate-fade-in-up delay-300" style="background: white; border-radius: 20px; padding: 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative;">
              <div style="display: flex; gap: 4px; margin-bottom: 20px;">
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
              </div>
              <p style="font-size: 0.95rem; color: var(--on-surface); line-height: 1.7; margin-bottom: 24px; font-style: italic;">"Cresenix consolidated our 5 legacy systems into one unified ERP. IT costs dropped 30% and our global operations finally have a single source of truth. Remarkable execution."</p>
              <div style="display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06);">
                <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #22c55e, #4ade80); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                  <span class="material-symbols-outlined" style="font-size: 22px; color: white;">public</span>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.9rem; color: var(--on-surface);">Earth Charity Foundation</div>
                  <div style="font-size: 0.75rem; color: var(--on-surface-variant);">ERP System · NGO</div>
                </div>
              </div>
            </div>

            <!-- Testimonial 4 -->
            <div class="testimonial-card animate-fade-in-up delay-100" style="background: white; border-radius: 20px; padding: 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative;">
              <div style="display: flex; gap: 4px; margin-bottom: 20px;">
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
              </div>
              <p style="font-size: 0.95rem; color: var(--on-surface); line-height: 1.7; margin-bottom: 24px; font-style: italic;">"Our inventory accuracy hit 99.8% and production cycles shortened by 15% after Cresenix implemented our manufacturing ERP. They understand industrial-grade requirements."</p>
              <div style="display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06);">
                <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #f97316, #fb923c); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                  <span class="material-symbols-outlined" style="font-size: 22px; color: white;">bolt</span>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.9rem; color: var(--on-surface);">Jayshree Electro Coating</div>
                  <div style="font-size: 0.75rem; color: var(--on-surface-variant);">ERP System · Manufacturing</div>
                </div>
              </div>
            </div>

            <!-- Testimonial 5 -->
            <div class="testimonial-card animate-fade-in-up delay-200" style="background: white; border-radius: 20px; padding: 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative;">
              <div style="display: flex; gap: 4px; margin-bottom: 20px;">
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
                <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b;">star</span>
              </div>
              <p style="font-size: 0.95rem; color: var(--on-surface); line-height: 1.7; margin-bottom: 24px; font-style: italic;">"Working with Cresenix felt like having an in-house team. They scaled our platform from concept to 10,000+ users with zero downtime. Truly enterprise-level engineering."</p>
              <div style="display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06);">
                <div style="width: 44px; height: 44px; background: linear-gradient(135deg, var(--primary), #60a5fa); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                  <span class="material-symbols-outlined" style="font-size: 22px; color: white;">settings</span>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.9rem; color: var(--on-surface);">FutureSoft Technologies</div>
                  <div style="font-size: 0.75rem; color: var(--on-surface-variant);">Web Platform · Technology</div>
                </div>
              </div>
            </div>

          </div>

          <!-- Trust Badges -->
          <div class="trust-badges-row animate-fade-in-up" style="display: flex; justify-content: center; flex-wrap: wrap; gap: 32px;">
            <div style="display: flex; align-items: center; gap: 12px; background: white; padding: 16px 24px; border-radius: 14px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05);">
              <div style="width: 48px; height: 48px; background: rgba(34, 197, 94, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 26px; color: #22c55e;">verified_user</span>
              </div>
              <div>
                <div style="font-weight: 700; font-size: 0.9rem; color: var(--on-surface);">100% Satisfaction</div>
                <div style="font-size: 0.75rem; color: var(--on-surface-variant);">Guarantee</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; background: white; padding: 16px 24px; border-radius: 14px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05);">
              <div style="width: 48px; height: 48px; background: rgba(var(--primary-rgb), 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 26px; color: var(--primary);">shield</span>
              </div>
              <div>
                <div style="font-weight: 700; font-size: 0.9rem; color: var(--on-surface);">NDA Protected</div>
                <div style="font-size: 0.75rem; color: var(--on-surface-variant);">Your IP is Safe</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; background: white; padding: 16px 24px; border-radius: 14px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05);">
              <div style="width: 48px; height: 48px; background: rgba(139, 92, 246, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 26px; color: #8b5cf6;">lock</span>
              </div>
              <div>
                <div style="font-weight: 700; font-size: 0.9rem; color: var(--on-surface);">Secure Infrastructure</div>
                <div style="font-size: 0.75rem; color: var(--on-surface-variant);">Enterprise-Grade</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; background: white; padding: 16px 24px; border-radius: 14px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05);">
              <div style="width: 48px; height: 48px; background: rgba(249, 115, 22, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 26px; color: #f97316;">support_agent</span>
              </div>
              <div>
                <div style="font-weight: 700; font-size: 0.9rem; color: var(--on-surface);">Free Post-Launch</div>
                <div style="font-size: 0.75rem; color: var(--on-surface-variant);">30-Day Support</div>
              </div>
            </div>
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

      <!-- Portfolio Showcase Section -->
      <section class="section-gap" style="background: var(--surface-container-lowest);">
        <div class="container">
          <div class="section-header animate-fade-in-up" style="text-align: center; margin-bottom: 64px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 8px 18px; border-radius: 100px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
              <span class="material-symbols-outlined" style="font-size: 16px;">work</span> OUR WORK
            </div>
            <h2 style="font-family: var(--font-display); font-size: 2.75rem; font-weight: 800; color: var(--on-background); margin-bottom: 16px;">Results That Speak</h2>
            <p class="section-subtitle" style="font-family: var(--font-display); font-size: 1.1rem; color: var(--on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6;">Real outcomes from real projects — not just pretty screenshots.</p>
          </div>

          <div class="portfolio-showcase-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 48px;">
            
            <!-- Case 1 -->
            <div class="portfolio-showcase-card animate-fade-in-up delay-100" style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease;">
              <div style="height: 200px; background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(var(--primary-rgb), 0.15)); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
                <div style="width: 80%; max-width: 320px; background: white; border-radius: 12px 12px 0 0; box-shadow: 0 -8px 30px rgba(0,0,0,0.1); padding: 12px 16px 0; position: relative; top: 20px;">
                  <div style="display: flex; gap: 4px; margin-bottom: 8px;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #ef4444;"></span><span style="width: 8px; height: 8px; border-radius: 50%; background: #f59e0b;"></span><span style="width: 8px; height: 8px; border-radius: 50%; background: #22c55e;"></span></div>
                  <div style="height: 8px; background: rgba(var(--primary-rgb), 0.15); border-radius: 4px; width: 60%; margin-bottom: 6px;"></div>
                  <div style="height: 6px; background: rgba(0,0,0,0.06); border-radius: 4px; width: 80%; margin-bottom: 6px;"></div>
                  <div style="height: 6px; background: rgba(0,0,0,0.04); border-radius: 4px; width: 40%;"></div>
                </div>
              </div>
              <div style="padding: 28px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                  <span style="background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 4px 10px; border-radius: 6px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase;">Education</span>
                  <span style="font-size: 0.75rem; color: var(--on-surface-variant);">LMS Platform</span>
                </div>
                <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: var(--on-surface); margin-bottom: 8px;">GeekByChoice LMS</h3>
                <p style="font-size: 0.85rem; color: var(--on-surface-variant); line-height: 1.5; margin-bottom: 16px;">Interactive learning platform with automated grading and video delivery.</p>
                <div style="display: flex; align-items: center; gap: 8px; background: rgba(34, 197, 94, 0.08); padding: 10px 14px; border-radius: 10px;">
                  <span class="material-symbols-outlined" style="font-size: 20px; color: #22c55e;">trending_up</span>
                  <span style="font-size: 0.85rem; font-weight: 700; color: #16a34a;">40% increase in student engagement</span>
                </div>
              </div>
            </div>

            <!-- Case 2 -->
            <div class="portfolio-showcase-card animate-fade-in-up delay-200" style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease;">
              <div style="height: 200px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(96, 165, 250, 0.15)); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
                <div style="width: 100px; height: 180px; background: white; border-radius: 20px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); padding: 8px; position: relative; top: 10px;">
                  <div style="width: 100%; height: 100%; background: rgba(var(--primary-rgb), 0.05); border-radius: 14px; display: flex; flex-direction: column; align-items: center; padding-top: 16px; gap: 6px;">
                    <div style="width: 24px; height: 24px; background: rgba(var(--primary-rgb), 0.15); border-radius: 50%;"></div>
                    <div style="height: 4px; background: rgba(0,0,0,0.08); border-radius: 2px; width: 50%;"></div>
                    <div style="height: 4px; background: rgba(0,0,0,0.05); border-radius: 2px; width: 70%;"></div>
                  </div>
                </div>
              </div>
              <div style="padding: 28px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                  <span style="background: rgba(59, 130, 246, 0.08); color: #3b82f6; padding: 4px 10px; border-radius: 6px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase;">Social / NGO</span>
                  <span style="font-size: 0.75rem; color: var(--on-surface-variant);">Mobile App</span>
                </div>
                <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: var(--on-surface); margin-bottom: 8px;">MH12 Animal NGO</h3>
                <p style="font-size: 0.85rem; color: var(--on-surface-variant); line-height: 1.5; margin-bottom: 16px;">Rescue coordination app with real-time GPS and volunteer management.</p>
                <div style="display: flex; align-items: center; gap: 8px; background: rgba(34, 197, 94, 0.08); padding: 10px 14px; border-radius: 10px;">
                  <span class="material-symbols-outlined" style="font-size: 20px; color: #22c55e;">trending_up</span>
                  <span style="font-size: 0.85rem; font-weight: 700; color: #16a34a;">2,500+ successful rescues coordinated</span>
                </div>
              </div>
            </div>

            <!-- Case 3 -->
            <div class="portfolio-showcase-card animate-fade-in-up delay-100" style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease;">
              <div style="height: 200px; background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(74, 222, 128, 0.15)); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
                <div style="width: 80%; max-width: 320px; background: white; border-radius: 12px 12px 0 0; box-shadow: 0 -8px 30px rgba(0,0,0,0.1); padding: 12px 16px 0; position: relative; top: 20px;">
                  <div style="display: flex; gap: 4px; margin-bottom: 8px;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #ef4444;"></span><span style="width: 8px; height: 8px; border-radius: 50%; background: #f59e0b;"></span><span style="width: 8px; height: 8px; border-radius: 50%; background: #22c55e;"></span></div>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
                    <div style="height: 20px; background: rgba(34,197,94,0.1); border-radius: 4px;"></div>
                    <div style="height: 20px; background: rgba(var(--primary-rgb), 0.1); border-radius: 4px;"></div>
                  </div>
                </div>
              </div>
              <div style="padding: 28px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                  <span style="background: rgba(34, 197, 94, 0.08); color: #22c55e; padding: 4px 10px; border-radius: 6px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase;">NGO</span>
                  <span style="font-size: 0.75rem; color: var(--on-surface-variant);">Enterprise ERP</span>
                </div>
                <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: var(--on-surface); margin-bottom: 8px;">Earth Charity Foundation ERP</h3>
                <p style="font-size: 0.85rem; color: var(--on-surface-variant); line-height: 1.5; margin-bottom: 16px;">Unified donor management, fund allocation, and global logistics platform.</p>
                <div style="display: flex; align-items: center; gap: 8px; background: rgba(34, 197, 94, 0.08); padding: 10px 14px; border-radius: 10px;">
                  <span class="material-symbols-outlined" style="font-size: 20px; color: #22c55e;">trending_up</span>
                  <span style="font-size: 0.85rem; font-weight: 700; color: #16a34a;">5 legacy systems → 1 unified platform</span>
                </div>
              </div>
            </div>

            <!-- Case 4 -->
            <div class="portfolio-showcase-card animate-fade-in-up delay-200" style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease;">
              <div style="height: 200px; background: linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(251, 146, 60, 0.15)); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
                <div style="width: 80%; max-width: 320px; background: white; border-radius: 12px 12px 0 0; box-shadow: 0 -8px 30px rgba(0,0,0,0.1); padding: 12px 16px 0; position: relative; top: 20px;">
                  <div style="display: flex; gap: 4px; margin-bottom: 8px;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #ef4444;"></span><span style="width: 8px; height: 8px; border-radius: 50%; background: #f59e0b;"></span><span style="width: 8px; height: 8px; border-radius: 50%; background: #22c55e;"></span></div>
                  <div style="height: 30px; background: rgba(249,115,22,0.08); border-radius: 4px; display: flex; align-items: center; padding: 0 8px; gap: 6px;">
                    <div style="width: 16px; height: 16px; background: rgba(249,115,22,0.2); border-radius: 3px;"></div>
                    <div style="height: 4px; background: rgba(0,0,0,0.08); border-radius: 2px; flex: 1;"></div>
                  </div>
                </div>
              </div>
              <div style="padding: 28px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                  <span style="background: rgba(249, 115, 22, 0.08); color: #f97316; padding: 4px 10px; border-radius: 6px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase;">Manufacturing</span>
                  <span style="font-size: 0.75rem; color: var(--on-surface-variant);">Core ERP</span>
                </div>
                <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: var(--on-surface); margin-bottom: 8px;">Jayshree Electro Coating ERP</h3>
                <p style="font-size: 0.85rem; color: var(--on-surface-variant); line-height: 1.5; margin-bottom: 16px;">Industrial-grade inventory control and quality assurance automation.</p>
                <div style="display: flex; align-items: center; gap: 8px; background: rgba(34, 197, 94, 0.08); padding: 10px 14px; border-radius: 10px;">
                  <span class="material-symbols-outlined" style="font-size: 20px; color: #22c55e;">trending_up</span>
                  <span style="font-size: 0.85rem; font-weight: 700; color: #16a34a;">99.8% inventory accuracy achieved</span>
                </div>
              </div>
            </div>

          </div>

          <div style="text-align: center;">
            <a class="btn-outline animate-fade-in-up" data-route="/portfolio" href="#/portfolio" style="padding: 14px 32px; font-weight: 600; color: var(--primary); border: 1px solid rgba(var(--primary-rgb), 0.2); border-radius: 10px; display: inline-flex; align-items: center; gap: 8px;">
              View All Projects <span class="material-symbols-outlined" style="font-size: 20px;">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Process Timeline Section -->
      <section class="section-gap" style="background: var(--background);">
        <div class="container">
          <div class="section-header animate-fade-in-up" style="text-align: center; margin-bottom: 80px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 8px 18px; border-radius: 100px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
              <span class="material-symbols-outlined" style="font-size: 16px;">route</span> OUR PROCESS
            </div>
            <h2 style="font-family: var(--font-display); font-size: 2.75rem; font-weight: 800; color: var(--on-background); margin-bottom: 16px;">How We Work</h2>
            <p class="section-subtitle" style="font-family: var(--font-display); font-size: 1.1rem; color: var(--on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6;">A clear, transparent process so you always know what's happening and when.</p>
          </div>

          <div class="process-timeline" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; position: relative;">
            
            <!-- Connecting line -->
            <div class="process-line" style="position: absolute; top: 44px; left: 10%; right: 10%; height: 3px; background: linear-gradient(90deg, var(--primary), #60a5fa, #8b5cf6, #22c55e, var(--primary)); border-radius: 2px; z-index: 0;"></div>

            <!-- Step 1 -->
            <div class="process-step animate-fade-in-up delay-100" style="text-align: center; position: relative; z-index: 1;">
              <div style="width: 88px; height: 88px; margin: 0 auto 20px; background: white; border-radius: 50%; box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.15); display: flex; align-items: center; justify-content: center; border: 3px solid var(--primary);">
                <span class="material-symbols-outlined" style="font-size: 32px; color: var(--primary);">search</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--on-surface); margin-bottom: 6px;">Discovery</h3>
              <p style="font-size: 0.8rem; color: var(--on-surface-variant); line-height: 1.4;">Understanding your goals & requirements</p>
              <div style="margin-top: 12px; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 4px 12px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; display: inline-block;">Week 1</div>
            </div>

            <!-- Step 2 -->
            <div class="process-step animate-fade-in-up delay-200" style="text-align: center; position: relative; z-index: 1;">
              <div style="width: 88px; height: 88px; margin: 0 auto 20px; background: white; border-radius: 50%; box-shadow: 0 4px 20px rgba(96, 165, 250, 0.15); display: flex; align-items: center; justify-content: center; border: 3px solid #60a5fa;">
                <span class="material-symbols-outlined" style="font-size: 32px; color: #60a5fa;">palette</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--on-surface); margin-bottom: 6px;">Design</h3>
              <p style="font-size: 0.8rem; color: var(--on-surface-variant); line-height: 1.4;">Wireframes, prototypes & visual design</p>
              <div style="margin-top: 12px; background: rgba(96, 165, 250, 0.08); color: #60a5fa; padding: 4px 12px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; display: inline-block;">Week 2–3</div>
            </div>

            <!-- Step 3 -->
            <div class="process-step animate-fade-in-up delay-300" style="text-align: center; position: relative; z-index: 1;">
              <div style="width: 88px; height: 88px; margin: 0 auto 20px; background: white; border-radius: 50%; box-shadow: 0 4px 20px rgba(139, 92, 246, 0.15); display: flex; align-items: center; justify-content: center; border: 3px solid #8b5cf6;">
                <span class="material-symbols-outlined" style="font-size: 32px; color: #8b5cf6;">code</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--on-surface); margin-bottom: 6px;">Development</h3>
              <p style="font-size: 0.8rem; color: var(--on-surface-variant); line-height: 1.4;">Agile sprints with weekly updates</p>
              <div style="margin-top: 12px; background: rgba(139, 92, 246, 0.08); color: #8b5cf6; padding: 4px 12px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; display: inline-block;">Week 4–6</div>
            </div>

            <!-- Step 4 -->
            <div class="process-step animate-fade-in-up delay-400" style="text-align: center; position: relative; z-index: 1;">
              <div style="width: 88px; height: 88px; margin: 0 auto 20px; background: white; border-radius: 50%; box-shadow: 0 4px 20px rgba(34, 197, 94, 0.15); display: flex; align-items: center; justify-content: center; border: 3px solid #22c55e;">
                <span class="material-symbols-outlined" style="font-size: 32px; color: #22c55e;">rocket_launch</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--on-surface); margin-bottom: 6px;">Launch</h3>
              <p style="font-size: 0.8rem; color: var(--on-surface-variant); line-height: 1.4;">Testing, QA & deployment</p>
              <div style="margin-top: 12px; background: rgba(34, 197, 94, 0.08); color: #22c55e; padding: 4px 12px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; display: inline-block;">Week 7</div>
            </div>

            <!-- Step 5 -->
            <div class="process-step animate-fade-in-up delay-500" style="text-align: center; position: relative; z-index: 1;">
              <div style="width: 88px; height: 88px; margin: 0 auto 20px; background: white; border-radius: 50%; box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.15); display: flex; align-items: center; justify-content: center; border: 3px solid var(--primary);">
                <span class="material-symbols-outlined" style="font-size: 32px; color: var(--primary);">support_agent</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--on-surface); margin-bottom: 6px;">Support</h3>
              <p style="font-size: 0.8rem; color: var(--on-surface-variant); line-height: 1.4;">Maintenance, updates & growth</p>
              <div style="margin-top: 12px; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 4px 12px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; display: inline-block;">Ongoing</div>
            </div>

          </div>
        </div>
      </section>

      <!-- Pricing / Packages Section -->
      <section class="section-gap" style="background: var(--surface-container-lowest);">
        <div class="container">
          <div class="section-header animate-fade-in-up" style="text-align: center; margin-bottom: 64px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 8px 18px; border-radius: 100px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
              <span class="material-symbols-outlined" style="font-size: 16px;">payments</span> TRANSPARENT PRICING
            </div>
            <h2 style="font-family: var(--font-display); font-size: 2.75rem; font-weight: 800; color: var(--on-background); margin-bottom: 16px;">Simple, Honest Pricing</h2>
            <p class="section-subtitle" style="font-family: var(--font-display); font-size: 1.1rem; color: var(--on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6;">Pre-qualified ranges so you know what to expect before the first call.</p>
          </div>

          <div class="pricing-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1000px; margin: 0 auto;">

            <!-- Starter -->
            <div class="pricing-card animate-fade-in-up delay-100" style="background: white; border-radius: 20px; padding: 40px 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.06); text-align: center; transition: all 0.3s ease; position: relative;">
              <div style="width: 56px; height: 56px; margin: 0 auto 20px; background: rgba(var(--primary-rgb), 0.08); border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">rocket</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--on-surface); margin-bottom: 8px;">Starter</h3>
              <p style="font-size: 0.85rem; color: var(--on-surface-variant); margin-bottom: 24px; line-height: 1.5;">Perfect for small businesses & MVPs</p>
              <div style="margin-bottom: 24px;">
                <span style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 800; color: var(--on-surface);">₹25K</span>
                <span style="font-size: 0.9rem; color: var(--on-surface-variant); font-weight: 500;">+ onwards</span>
              </div>
              <ul style="text-align: left; margin-bottom: 32px; display: flex; flex-direction: column; gap: 12px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Up to 5 pages</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Responsive design</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Contact form</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Basic SEO setup</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>7-day support</li>
              </ul>
              <a class="btn-outline" data-route="/contact" href="#/contact" style="display: block; padding: 14px; font-weight: 600; color: var(--primary); border: 1.5px solid rgba(var(--primary-rgb), 0.2); border-radius: 10px; text-align: center;">Get Started</a>
            </div>

            <!-- Business (Most Popular) -->
            <div class="pricing-card pricing-featured animate-fade-in-up delay-200" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 20px; padding: 40px 32px; box-shadow: 0 12px 40px rgba(15, 23, 42, 0.2); border: 1px solid rgba(255,255,255,0.1); text-align: center; transition: all 0.3s ease; position: relative; transform: scale(1.04);">
              <div style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, var(--primary), #60a5fa); color: white; padding: 6px 20px; border-radius: 100px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Most Popular</div>
              <div style="width: 56px; height: 56px; margin: 0 auto 20px; background: rgba(var(--primary-rgb), 0.2); border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 28px; color: var(--primary);">diamond</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: white; margin-bottom: 8px;">Business</h3>
              <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 24px; line-height: 1.5;">For growing companies needing full-stack solutions</p>
              <div style="margin-bottom: 24px;">
                <span style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 800; color: white;">₹75K</span>
                <span style="font-size: 0.9rem; color: rgba(255,255,255,0.6); font-weight: 500;">+ onwards</span>
              </div>
              <ul style="text-align: left; margin-bottom: 32px; display: flex; flex-direction: column; gap: 12px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.9);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Unlimited pages</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.9);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Custom web/mobile app</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.9);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Admin dashboard</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.9);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>API integrations</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.9);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Advanced SEO + analytics</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.9);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>30-day post-launch support</li>
              </ul>
              <a class="btn-primary" data-route="/contact" href="#/contact" style="display: block; padding: 14px; font-weight: 700; border-radius: 10px; text-align: center;">Book a Free Call</a>
            </div>

            <!-- Custom / Enterprise -->
            <div class="pricing-card animate-fade-in-up delay-300" style="background: white; border-radius: 20px; padding: 40px 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.06); text-align: center; transition: all 0.3s ease; position: relative;">
              <div style="width: 56px; height: 56px; margin: 0 auto 20px; background: rgba(139, 92, 246, 0.08); border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 28px; color: #8b5cf6;">auto_awesome</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--on-surface); margin-bottom: 8px;">Custom</h3>
              <p style="font-size: 0.85rem; color: var(--on-surface-variant); margin-bottom: 24px; line-height: 1.5;">Enterprise-grade ERP, AI, or complex systems</p>
              <div style="margin-bottom: 24px;">
                <span style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--on-surface);">Let's Talk</span>
              </div>
              <ul style="text-align: left; margin-bottom: 32px; display: flex; flex-direction: column; gap: 12px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Full ERP / LMS / AI systems</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Dedicated project manager</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Custom AI/ML integration</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>Priority SLA support</li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--on-surface);"><span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">check_circle</span>NDA & compliance ready</li>
              </ul>
              <a class="btn-outline" data-route="/contact" href="#/contact" style="display: block; padding: 14px; font-weight: 600; color: #8b5cf6; border: 1.5px solid rgba(139, 92, 246, 0.2); border-radius: 10px; text-align: center;">Contact Us</a>
            </div>

          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="section-gap" style="background: var(--background);">
        <div class="container" style="max-width: 800px;">
          <div class="section-header animate-fade-in-up" style="text-align: center; margin-bottom: 64px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 8px 18px; border-radius: 100px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
              <span class="material-symbols-outlined" style="font-size: 16px;">help</span> FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 style="font-family: var(--font-display); font-size: 2.75rem; font-weight: 800; color: var(--on-background); margin-bottom: 16px;">Got Questions?</h2>
            <p class="section-subtitle" style="font-family: var(--font-display); font-size: 1.1rem; color: var(--on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6;">Answers to the questions our clients ask most.</p>
          </div>

          <div class="faq-list" style="display: flex; flex-direction: column; gap: 12px;">

            <div class="faq-item animate-fade-in-up delay-100" style="background: white; border-radius: 14px; border: 1px solid rgba(0,0,0,0.06); overflow: hidden; transition: all 0.3s ease;">
              <button class="faq-trigger" onclick="this.parentElement.classList.toggle('faq-open')" style="width: 100%; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--on-surface); cursor: pointer; background: none; border: none; text-align: left;">
                <span>How long does a project take?</span>
                <span class="material-symbols-outlined faq-icon" style="font-size: 22px; color: var(--on-surface-variant); transition: transform 0.3s ease;">expand_more</span>
              </button>
              <div class="faq-content" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease;">
                <p style="padding: 0 24px 20px; font-size: 0.9rem; color: var(--on-surface-variant); line-height: 1.7;">Most websites take 4–7 weeks from kickoff to launch. Custom web/mobile apps typically take 8–12 weeks depending on complexity. We'll give you a detailed timeline during our free consultation.</p>
              </div>
            </div>

            <div class="faq-item animate-fade-in-up delay-100" style="background: white; border-radius: 14px; border: 1px solid rgba(0,0,0,0.06); overflow: hidden; transition: all 0.3s ease;">
              <button class="faq-trigger" onclick="this.parentElement.classList.toggle('faq-open')" style="width: 100%; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--on-surface); cursor: pointer; background: none; border: none; text-align: left;">
                <span>Do you offer post-launch support?</span>
                <span class="material-symbols-outlined faq-icon" style="font-size: 22px; color: var(--on-surface-variant); transition: transform 0.3s ease;">expand_more</span>
              </button>
              <div class="faq-content" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease;">
                <p style="padding: 0 24px 20px; font-size: 0.9rem; color: var(--on-surface-variant); line-height: 1.7;">Yes! Every project includes 7–30 days of free post-launch support depending on your package. We also offer ongoing maintenance plans for bug fixes, updates, and new feature development.</p>
              </div>
            </div>

            <div class="faq-item animate-fade-in-up delay-200" style="background: white; border-radius: 14px; border: 1px solid rgba(0,0,0,0.06); overflow: hidden; transition: all 0.3s ease;">
              <button class="faq-trigger" onclick="this.parentElement.classList.toggle('faq-open')" style="width: 100%; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--on-surface); cursor: pointer; background: none; border: none; text-align: left;">
                <span>What if I don't like the design?</span>
                <span class="material-symbols-outlined faq-icon" style="font-size: 22px; color: var(--on-surface-variant); transition: transform 0.3s ease;">expand_more</span>
              </button>
              <div class="faq-content" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease;">
                <p style="padding: 0 24px 20px; font-size: 0.9rem; color: var(--on-surface-variant); line-height: 1.7;">We include unlimited design revisions in the design phase. You'll see wireframes and prototypes before a single line of code is written. We don't move to development until you're 100% happy with the design.</p>
              </div>
            </div>

            <div class="faq-item animate-fade-in-up delay-200" style="background: white; border-radius: 14px; border: 1px solid rgba(0,0,0,0.06); overflow: hidden; transition: all 0.3s ease;">
              <button class="faq-trigger" onclick="this.parentElement.classList.toggle('faq-open')" style="width: 100%; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--on-surface); cursor: pointer; background: none; border: none; text-align: left;">
                <span>How much does a website cost?</span>
                <span class="material-symbols-outlined faq-icon" style="font-size: 22px; color: var(--on-surface-variant); transition: transform 0.3s ease;">expand_more</span>
              </button>
              <div class="faq-content" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease;">
                <p style="padding: 0 24px 20px; font-size: 0.9rem; color: var(--on-surface-variant); line-height: 1.7;">Starter websites begin at ₹25,000+. Business-grade applications start at ₹75,000+. Enterprise/custom solutions are scoped individually. We provide a detailed quote within 48 hours of your consultation — no surprises.</p>
              </div>
            </div>

            <div class="faq-item animate-fade-in-up delay-300" style="background: white; border-radius: 14px; border: 1px solid rgba(0,0,0,0.06); overflow: hidden; transition: all 0.3s ease;">
              <button class="faq-trigger" onclick="this.parentElement.classList.toggle('faq-open')" style="width: 100%; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--on-surface); cursor: pointer; background: none; border: none; text-align: left;">
                <span>Do you work with startups?</span>
                <span class="material-symbols-outlined faq-icon" style="font-size: 22px; color: var(--on-surface-variant); transition: transform 0.3s ease;">expand_more</span>
              </button>
              <div class="faq-content" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease;">
                <p style="padding: 0 24px 20px; font-size: 0.9rem; color: var(--on-surface-variant); line-height: 1.7;">Absolutely! We love working with startups and early-stage companies. Our Starter package is designed specifically for MVPs and lean launches. We can also discuss flexible payment options.</p>
              </div>
            </div>

            <div class="faq-item animate-fade-in-up delay-300" style="background: white; border-radius: 14px; border: 1px solid rgba(0,0,0,0.06); overflow: hidden; transition: all 0.3s ease;">
              <button class="faq-trigger" onclick="this.parentElement.classList.toggle('faq-open')" style="width: 100%; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--on-surface); cursor: pointer; background: none; border: none; text-align: left;">
                <span>What technologies do you use?</span>
                <span class="material-symbols-outlined faq-icon" style="font-size: 22px; color: var(--on-surface-variant); transition: transform 0.3s ease;">expand_more</span>
              </button>
              <div class="faq-content" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease;">
                <p style="padding: 0 24px 20px; font-size: 0.9rem; color: var(--on-surface-variant); line-height: 1.7;">We use modern, battle-tested technologies: React, Next.js, Node.js, Flutter, Python/Django, PostgreSQL, AWS, and Firebase — chosen based on what's best for your project, not what's trendy.</p>
              </div>
            </div>

            <div class="faq-item animate-fade-in-up delay-400" style="background: white; border-radius: 14px; border: 1px solid rgba(0,0,0,0.06); overflow: hidden; transition: all 0.3s ease;">
              <button class="faq-trigger" onclick="this.parentElement.classList.toggle('faq-open')" style="width: 100%; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--on-surface); cursor: pointer; background: none; border: none; text-align: left;">
                <span>Can you redesign my existing website?</span>
                <span class="material-symbols-outlined faq-icon" style="font-size: 22px; color: var(--on-surface-variant); transition: transform 0.3s ease;">expand_more</span>
              </button>
              <div class="faq-content" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease;">
                <p style="padding: 0 24px 20px; font-size: 0.9rem; color: var(--on-surface-variant); line-height: 1.7;">Yes! Redesigns and migrations are a core part of what we do. We can modernize your existing site, improve performance, and rebuild it on a scalable tech stack — all without losing your SEO rankings.</p>
              </div>
            </div>

            <div class="faq-item animate-fade-in-up delay-400" style="background: white; border-radius: 14px; border: 1px solid rgba(0,0,0,0.06); overflow: hidden; transition: all 0.3s ease;">
              <button class="faq-trigger" onclick="this.parentElement.classList.toggle('faq-open')" style="width: 100%; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--on-surface); cursor: pointer; background: none; border: none; text-align: left;">
                <span>Do you sign NDAs?</span>
                <span class="material-symbols-outlined faq-icon" style="font-size: 22px; color: var(--on-surface-variant); transition: transform 0.3s ease;">expand_more</span>
              </button>
              <div class="faq-content" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease;">
                <p style="padding: 0 24px 20px; font-size: 0.9rem; color: var(--on-surface-variant); line-height: 1.7;">Yes, we sign NDAs for every project. Your intellectual property and business ideas are fully protected. We can sign your NDA or provide ours — whichever you prefer.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Final CTA Section -->
      <section style="padding: 100px 0; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); position: relative; overflow: hidden;">
        <div style="position: absolute; top: -40%; right: -15%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(var(--primary-rgb), 0.12) 0%, transparent 70%); border-radius: 50%;"></div>
        <div style="position: absolute; bottom: -30%; left: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%); border-radius: 50%;"></div>
        <div class="container" style="position: relative; z-index: 1;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;" class="final-cta-grid">
            
            <!-- Left: Copy + Calendly -->
            <div class="animate-fade-in-up">
              <h2 style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 800; color: white; margin-bottom: 16px; line-height: 1.15;">Ready to Turn Visitors<br/>Into <span style="color: var(--primary);">Paying Clients</span>?</h2>
              <p style="font-size: 1.05rem; color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 32px;">Book a free 30-minute strategy call. We'll review your current site, identify quick wins, and show you exactly how we'd improve conversions.</p>
              
              <a href="https://calendly.com" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 10px; background: var(--primary); color: white; padding: 16px 32px; border-radius: 12px; font-weight: 700; font-size: 1rem; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.3);">
                <span class="material-symbols-outlined" style="font-size: 22px;">calendar_month</span>
                Book a Free 30-Min Call
              </a>

              <!-- Trust badges inline -->
              <div style="display: flex; gap: 24px; margin-top: 32px; flex-wrap: wrap;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: #22c55e;">verified_user</span>
                  <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); font-weight: 500;">100% Satisfaction Guarantee</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: var(--primary);">shield</span>
                  <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); font-weight: 500;">NDA Protected</span>
                </div>
              </div>
            </div>

            <!-- Right: Mini Contact Form -->
            <div class="animate-fade-in-up delay-200" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 36px;">
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 6px;">Or send us a quick message</h3>
              <p style="font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-bottom: 24px;">We'll get back within 24 hours.</p>
              <form id="final-cta-form" style="display: flex; flex-direction: column; gap: 14px;">
                <input type="text" placeholder="Your Name" required style="width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: white; font-size: 0.9rem; font-family: inherit; outline: none; transition: border-color 0.3s ease;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'"/>
                <input type="email" placeholder="Your Email" required style="width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: white; font-size: 0.9rem; font-family: inherit; outline: none; transition: border-color 0.3s ease;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'"/>
                <select required style="width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: rgba(255,255,255,0.7); font-size: 0.9rem; font-family: inherit; outline: none; cursor: pointer; -webkit-appearance: none; appearance: none;">
                  <option value="" disabled selected style="color: rgba(255,255,255,0.5);">Budget Range</option>
                  <option value="25k-50k" style="color: #0b1c30;">₹25K – ₹50K</option>
                  <option value="50k-1L" style="color: #0b1c30;">₹50K – ₹1 Lakh</option>
                  <option value="1L-3L" style="color: #0b1c30;">₹1L – ₹3 Lakh</option>
                  <option value="3L+" style="color: #0b1c30;">₹3 Lakh+</option>
                </select>
                <select required style="width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: rgba(255,255,255,0.7); font-size: 0.9rem; font-family: inherit; outline: none; cursor: pointer; -webkit-appearance: none; appearance: none;">
                  <option value="" disabled selected style="color: rgba(255,255,255,0.5);">Project Type</option>
                  <option value="website" style="color: #0b1c30;">Website</option>
                  <option value="web-app" style="color: #0b1c30;">Web Application</option>
                  <option value="mobile-app" style="color: #0b1c30;">Mobile App</option>
                  <option value="erp" style="color: #0b1c30;">ERP / LMS</option>
                  <option value="ai" style="color: #0b1c30;">AI Solution</option>
                  <option value="other" style="color: #0b1c30;">Other</option>
                </select>
                <button type="submit" style="width: 100%; padding: 14px; background: var(--primary); color: white; border: none; border-radius: 10px; font-size: 0.95rem; font-weight: 700; cursor: pointer; font-family: inherit; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease;">
                  Send Message <span class="material-symbols-outlined" style="font-size: 20px;">arrow_forward</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

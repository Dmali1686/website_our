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
      <!-- Hero Section (AI Dark Theme) -->
      <main class="ai-hero-full" style="background-size: cover; background-position: center;">
        <!-- Neural Network Animated Background -->
        <div class="neural-bg"><canvas id="neural-canvas"></canvas></div>
        <!-- Right Side Person Overlay -->
        <div class="robot-box"></div>
        
        <div class="container responsive-hero-padding" style="position: relative; z-index: 5;">
            
            <!-- Hero Content (Left Side) -->
            <div class="hero-content" style="max-width: 650px;">
              <div class="hero-badge animate-fade-in-up" style="padding: 10px 16px; border-radius: 100px; display: inline-flex; align-items: center; gap: 2px; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 24px;">
                <span class="badge-dot" style="width: 8px; height: 8px; border-radius: 50%;"></span>
                <span>WE BUILD DIGITAL SOLUTIONS THAT DRIVE GROWTH</span>
              </div>
              <h1 class="animate-fade-in-up delay-100" style="margin-bottom: 24px; font-weight: 700; font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 4.5vw, 4rem);">
                Custom Software, AI & <br/>
                <span class="text-gradient-hero">App Development Company</span>
              </h1>

              <!-- Trust Strip -->
              <div class="hero-trust-strip animate-fade-in-up delay-150" style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; align-items: center;">
                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600;">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: #3b82f6;">verified</span>
                  <span>15+ Projects Delivered</span>
                </div>
                <div style="width: 1px; height: 16px; background: rgba(255,255,255,0.15);"></div>
                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600;">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: #f59e0b;">star</span>
                  <span>4.9★ Client Rating</span>
                </div>
                <div style="width: 1px; height: 16px; background: rgba(255,255,255,0.15);"></div>
                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600;">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: #00d4ff;">speed</span>
                  <span>Agile Delivery</span>
                </div>
                <div style="width: 1px; height: 16px; background: rgba(255,255,255,0.15);"></div>
                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600;">
                  <span class="material-symbols-outlined" style="font-size: 18px; color: #8b5cf6;">support_agent</span>
                  <span>24/7 Support</span>
                </div>
              </div>

              <p class="hero-subtitle animate-fade-in-up delay-200" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 36px; font-weight: 400;">
                Web Development, Mobile Apps, AI Solutions & Digital Marketing to help your business grow faster and smarter.
              </p>
              <div class="hero-actions animate-fade-in-up delay-300 responsive-flex-col" style="margin-bottom: 48px;">
                <a class="btn-primary" data-route="/contact" href="#/contact" style="padding: 14px 28px; font-weight: 600;">
                  Book a Free Consultation <span class="material-symbols-outlined ml-2" style="font-size:20px;">arrow_forward</span>
                </a>
                <a class="btn-outline" data-route="/contact" href="#/contact" style="padding: 14px 28px; font-weight: 600;">
                  Get a Free Website Audit <span class="material-symbols-outlined ml-2" style="font-size:20px;">arrow_forward</span>
                </a>
              </div>
              
              <!-- Service Pills -->
              
     
            </div>
            
        </div>
      </main>      <!-- Trusted By Section -->
      <section class="trusted-by-section" style="padding: 60px 0; background: #fafafa; border-top: 1px solid rgba(0,0,0,0.05); overflow: hidden;">
        <div class="container">
          
          <!-- Stats Cards -->
          <div class="responsive-stats-grid">
            <div class="stat-card">
              <span class="material-symbols-outlined stat-icon">ads_click</span>
              <div class="stat-number">1000+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-card">
              <span class="material-symbols-outlined stat-icon">military_tech</span>
              <div class="stat-number">25+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-card">
              <span class="material-symbols-outlined stat-icon">groups</span>
              <div class="stat-number">97%</div>
              <div class="stat-label">Client Retention</div>
            </div>
            <div class="stat-card">
              <span class="material-symbols-outlined stat-icon">bolt</span>
              <div class="stat-number">100%</div>
              <div class="stat-label">Global Reach</div>
            </div>
          </div>

          <!-- Trusted By Header -->
          <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 40px; gap: 16px;">
            <div style="height: 2px; background: #e5e7eb; flex: 1; max-width: 250px; position: relative;">
              <div style="position: absolute; right: 0; top: 0; height: 100%; width: 50px; background: linear-gradient(90deg, transparent, var(--primary));"></div>
            </div>
            <div style="font-size: 1rem; font-weight: 800; color: #374151; text-transform: uppercase; letter-spacing: 0.15em; white-space: nowrap;">Trusted by World's Best</div>
            <div style="height: 2px; background: #e5e7eb; flex: 1; max-width: 250px; position: relative;">
               <div style="position: absolute; left: 0; top: 0; height: 100%; width: 50px; background: linear-gradient(90deg, var(--primary), transparent);"></div>
            </div>
          </div>
        </div>

        <!-- Marquee Logos Row -->
        <div class="marquee-container" style="margin-bottom: 40px;">
          <div class="marquee-track">
            
            <!-- First Set -->
            <div class="marquee-set">
              <div style="font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.5rem; color: #dc2626; letter-spacing: -0.05em; display: flex; align-items: center; gap: 4px;">
                HONDA
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 1.5rem; color: #2563eb; letter-spacing: -0.05em; display: flex; align-items: center; gap: 4px;">
                <span class="material-symbols-outlined" style="font-size: 24px; color: #2563eb;">all_inclusive</span> PHILIPS
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.5rem; color: #111827; letter-spacing: -0.05em; display: flex; align-items: center;">
                <span style="color: #c026d3;">I</span>DRIM<span style="font-size: 1rem; position: relative; top: -5px; color: #0891b2;">CO</span>
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 1.5rem; color: #111827; letter-spacing: -0.05em; display: flex; flex-direction: column; line-height: 1; justify-content: center;">
                <span>HITACHI</span>
                <span style="font-size: 0.6rem; font-weight: 400; letter-spacing: 0;">Inspire the Next</span>
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 700; font-size: 1.5rem; color: #111827; letter-spacing: -0.05em; display: flex; flex-direction: column; line-height: 1; justify-content: center;">
                <span>Boston</span>
                <span>Scientific</span>
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.5rem; color: #1e3a8a; letter-spacing: -0.05em; font-style: italic; display: flex; align-items: center; gap: 8px;">
                TVS <span class="material-symbols-outlined" style="color: #dc2626; font-size: 28px;">agriculture</span>
              </div>
            </div>

            <!-- Duplicate Set for Seamless Loop -->
            <div class="marquee-set">
              <div style="font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.5rem; color: #dc2626; letter-spacing: -0.05em; display: flex; align-items: center; gap: 4px;">
                HONDA
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 1.5rem; color: #2563eb; letter-spacing: -0.05em; display: flex; align-items: center; gap: 4px;">
                <span class="material-symbols-outlined" style="font-size: 24px; color: #2563eb;">all_inclusive</span> PHILIPS
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.5rem; color: #111827; letter-spacing: -0.05em; display: flex; align-items: center;">
                <span style="color: #c026d3;">I</span>DRIM<span style="font-size: 1rem; position: relative; top: -5px; color: #0891b2;">CO</span>
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 1.5rem; color: #111827; letter-spacing: -0.05em; display: flex; flex-direction: column; line-height: 1; justify-content: center;">
                <span>HITACHI</span>
                <span style="font-size: 0.6rem; font-weight: 400; letter-spacing: 0;">Inspire the Next</span>
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 700; font-size: 1.5rem; color: #111827; letter-spacing: -0.05em; display: flex; flex-direction: column; line-height: 1; justify-content: center;">
                <span>Boston</span>
                <span>Scientific</span>
              </div>
              
              <div style="font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.5rem; color: #1e3a8a; letter-spacing: -0.05em; font-style: italic; display: flex; align-items: center; gap: 8px;">
                TVS <span class="material-symbols-outlined" style="color: #dc2626; font-size: 28px;">agriculture</span>
              </div>
            </div>

          </div>
        </div>

        <div class="container">
          <!-- Trusted By Footer -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
            <div style="height: 2px; background: #e5e7eb; flex: 1; max-width: 250px; position: relative;">
              <div style="position: absolute; right: 0; top: 0; height: 100%; width: 50px; background: linear-gradient(90deg, transparent, var(--primary));"></div>
            </div>
            <div style="font-size: 1rem; font-weight: 800; color: #374151; text-transform: uppercase; letter-spacing: 0.15em; white-space: nowrap;">MORE THAN 150 BRANDS</div>
            <div style="height: 2px; background: #e5e7eb; flex: 1; max-width: 250px; position: relative;">
               <div style="position: absolute; left: 0; top: 0; height: 100%; width: 50px; background: linear-gradient(90deg, var(--primary), transparent);"></div>
            </div>
          </div>

        </div>
      </section>

      <!-- Social Proof / Testimonials Section -->
      <section class="section-gap" style="background: #f1f3f5; position: relative;">
        <div class="container" style="max-width: 1200px;">
          
          <div class="section-header responsive-header-mb" style="text-align: center;">
            <h2 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 700; color: #1e3a8a; margin-bottom: 16px;">What Our Clients Say About Their Transformative Journeys</h2>
            <p style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #4b5563; max-width: 800px; margin: 0 auto;">We've served more than 300 clients globally in the last 8 years and retained 95% of them.</p>
          </div>

          <!-- Testimonial Slider Container -->
          <div style="position: relative; display: flex; align-items: center; justify-content: center;">
            
            <!-- Left Arrow -->
            <button id="prevTestimonialBtn" style="position: absolute; left: -60px; z-index: 10; width: 40px; height: 40px; border-radius: 50%; border: 1px solid #111827; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background-color 0.2s;">
              <span class="material-symbols-outlined" style="color: #111827; font-size: 20px;">arrow_back</span>
            </button>

            <!-- Carousel Viewport -->
            <div class="testimonial-carousel-viewport">
              <!-- Cards Track -->
              <div class="testimonial-carousel-track" id="testimonialTrack">
                
                <!-- Card 1 -->
                <div class="testimonial-slide" style="background: white; border-radius: 8px; padding: 40px 32px; position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.03); display: flex; flex-direction: column;">
                  <!-- Quote Badge -->
                  <div style="position: absolute; top: 0; left: 32px; transform: translateY(-50%); width: 48px; height: 48px; background: #f59e0b; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span class="material-symbols-outlined" style="color: white; font-size: 28px; font-variation-settings: 'FILL' 1;">format_quote</span>
                  </div>
                  
                  <!-- Stars -->
                  <div style="display: flex; gap: 2px; margin-bottom: 24px;">
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                  </div>
                  
                  <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #374151; line-height: 1.8; margin-bottom: 40px; flex: 1;">
                    Binmile has been a valuable and trusted partner in providing Software Quality Engineering services. Provided consultants are very well technically trained and available to deliver on aggressive timelines. Overall very happy with the services provided.
                  </p>
                  
                  <!-- Footer -->
                  <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="padding-right: 16px;">
                      <div style="font-weight: 700; font-size: 0.9rem; color: #111827; margin-bottom: 4px;">Anish Ohri</div>
                      <div style="font-size: 0.75rem; color: #6b7280; line-height: 1.4;">Director of Quality Engineering at<br>Trepp, LLC</div>
                    </div>
                    <div style="border-left: 1px solid #e5e7eb; padding-left: 20px; display: flex; align-items: center;">
                      <div style="font-weight: 700; font-size: 1.4rem; color: #1d4ed8; font-family: 'Inter', sans-serif; letter-spacing: -0.05em;">
                        Trepp<span style="font-size: 0.5rem; position: relative; top: -10px; color: #60a5fa;">o</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Card 2 -->
                <div class="testimonial-slide" style="background: white; border-radius: 8px; padding: 40px 32px; position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.03); display: flex; flex-direction: column;">
                  <!-- Quote Badge -->
                  <div style="position: absolute; top: 0; left: 32px; transform: translateY(-50%); width: 48px; height: 48px; background: #f59e0b; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span class="material-symbols-outlined" style="color: white; font-size: 28px; font-variation-settings: 'FILL' 1;">format_quote</span>
                  </div>
                  
                  <!-- Stars -->
                  <div style="display: flex; gap: 2px; margin-bottom: 24px;">
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                  </div>
                  
                  <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #374151; line-height: 1.8; margin-bottom: 40px; flex: 1;">
                    They were very prompt in their responses and always available. Thanks to Binmile's engineers, we were able to complete all projects on time and without any issues. The team was very prompt in terms of responding to queries and requests.
                  </p>
                  
                  <!-- Footer -->
                  <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="padding-right: 16px;">
                      <div style="font-weight: 700; font-size: 0.9rem; color: #111827; margin-bottom: 4px;">Abhishek Singh</div>
                      <div style="font-size: 0.75rem; color: #6b7280; line-height: 1.4;">CEO, AiDash</div>
                    </div>
                    <div style="border-left: 1px solid #e5e7eb; padding-left: 20px; display: flex; align-items: center;">
                      <div style="font-weight: 900; font-style: italic; font-size: 1.2rem; color: #1e3a8a; font-family: 'Inter', sans-serif; letter-spacing: -0.05em;">
                        AIDASH
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Card 3 -->
                <div class="testimonial-slide" style="background: white; border-radius: 8px; padding: 40px 32px; position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.03); display: flex; flex-direction: column;">
                  <!-- Quote Badge -->
                  <div style="position: absolute; top: 0; left: 32px; transform: translateY(-50%); width: 48px; height: 48px; background: #f59e0b; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span class="material-symbols-outlined" style="color: white; font-size: 28px; font-variation-settings: 'FILL' 1;">format_quote</span>
                  </div>
                  
                  <!-- Stars -->
                  <div style="display: flex; gap: 2px; margin-bottom: 24px;">
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                  </div>
                  
                  <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #374151; line-height: 1.8; margin-bottom: 40px; flex: 1;">
                    Binmile has successfully delivered the app. They took the time to thoroughly understand my business objectives and target audience, ensuring that the mobile app aligned perfectly with our goals. Their ability to translate my ideas into a functional and visually appealing app was truly impressive.
                  </p>
                  
                  <!-- Footer -->
                  <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="padding-right: 16px;">
                      <div style="font-weight: 700; font-size: 0.9rem; color: #111827; margin-bottom: 4px;">Daniel Prince</div>
                      <div style="font-size: 0.75rem; color: #6b7280; line-height: 1.4;">Product Manager, E-Learning<br>Platform</div>
                    </div>
                    <div style="border-left: 1px solid #e5e7eb; padding-left: 20px; display: flex; align-items: center;">
                      <div style="font-weight: 500; font-size: 1.3rem; color: #111827; font-family: 'Inter', sans-serif; letter-spacing: -0.05em;">
                        <span style="color: #10b981;">V</span>eranda
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Card 4 -->
                <div class="testimonial-slide" style="background: white; border-radius: 8px; padding: 40px 32px; position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.03); display: flex; flex-direction: column;">
                  <div style="position: absolute; top: 0; left: 32px; transform: translateY(-50%); width: 48px; height: 48px; background: #f59e0b; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span class="material-symbols-outlined" style="color: white; font-size: 28px; font-variation-settings: 'FILL' 1;">format_quote</span>
                  </div>
                  <div style="display: flex; gap: 2px; margin-bottom: 24px;">
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                  </div>
                  <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #374151; line-height: 1.8; margin-bottom: 40px; flex: 1;">
                    Cresenix consolidated our 5 legacy systems into one unified ERP. IT costs dropped 30% and our global operations finally have a single source of truth. Remarkable execution and engineering.
                  </p>
                  <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="padding-right: 16px;">
                      <div style="font-weight: 700; font-size: 0.9rem; color: #111827; margin-bottom: 4px;">Sarah Jenkins</div>
                      <div style="font-size: 0.75rem; color: #6b7280; line-height: 1.4;">COO, Earth Charity<br>Foundation</div>
                    </div>
                    <div style="border-left: 1px solid #e5e7eb; padding-left: 20px; display: flex; align-items: center;">
                      <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #22c55e, #4ade80); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <span class="material-symbols-outlined" style="font-size: 18px; color: white;">public</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Card 5 -->
                <div class="testimonial-slide" style="background: white; border-radius: 8px; padding: 40px 32px; position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.03); display: flex; flex-direction: column;">
                  <div style="position: absolute; top: 0; left: 32px; transform: translateY(-50%); width: 48px; height: 48px; background: #f59e0b; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span class="material-symbols-outlined" style="color: white; font-size: 28px; font-variation-settings: 'FILL' 1;">format_quote</span>
                  </div>
                  <div style="display: flex; gap: 2px; margin-bottom: 24px;">
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size: 20px; color: #f59e0b; font-variation-settings: 'FILL' 1;">star</span>
                  </div>
                  <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #374151; line-height: 1.8; margin-bottom: 40px; flex: 1;">
                    Our inventory accuracy hit 99.8% and production cycles shortened by 15% after Cresenix implemented our manufacturing ERP. They truly understand industrial-grade requirements.
                  </p>
                  <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="padding-right: 16px;">
                      <div style="font-weight: 700; font-size: 0.9rem; color: #111827; margin-bottom: 4px;">Rahul Mehta</div>
                      <div style="font-size: 0.75rem; color: #6b7280; line-height: 1.4;">VP Operations, Jayshree<br>Electro Coating</div>
                    </div>
                    <div style="border-left: 1px solid #e5e7eb; padding-left: 20px; display: flex; align-items: center;">
                      <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #f97316, #fb923c); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <span class="material-symbols-outlined" style="font-size: 18px; color: white;">bolt</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Right Arrow -->
            <button id="nextTestimonialBtn" style="position: absolute; right: -60px; z-index: 10; width: 40px; height: 40px; border-radius: 50%; border: 1px solid #111827; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background-color 0.2s;">
              <span class="material-symbols-outlined" style="color: #111827; font-size: 20px;">arrow_forward</span>
            </button>
            
          </div>
        </div>
      </section>


      <!-- Comprehensive Services Section -->
      <section class="section-gap" style="background: white; position: relative; z-index: 10;">
        <div class="container" style="max-width: 1200px;">
          <div class="section-header animate-fade-in-up responsive-header-mb" style="text-align: center;">
            <h2 style="font-family: var(--font-display); font-size: clamp(1.5rem, 5vw, 2.2rem); font-weight: 700; color: #1e3a8a; margin-bottom: 24px; max-width: 900px; margin-left: auto; margin-right: auto; line-height: 1.3;">
              Powering Innovation with AI-Driven Solutions Built for Speed and Precision
            </h2>

          </div>
          
          <div class="responsive-services-grid" style="margin-top: 40px;">
            
            <!-- Service 1 -->
            <div class="service-card animate-fade-in-up delay-100">
              <span class="material-symbols-outlined service-card-icon" style="color: #f59e0b;">web</span>
              <h3 class="service-card-title">Custom Software<br>Development</h3>
              <p class="service-card-desc">We are a reputed software development company that provides creative solutions for businesses.</p>
            </div>

            <!-- Service 2 -->
            <div class="service-card animate-fade-in-up delay-200">
              <span class="material-symbols-outlined service-card-icon" style="color: #3b82f6;">devices</span>
              <h3 class="service-card-title">Application<br>Development</h3>
              <p class="service-card-desc">Powered by clients' unique needs, we customize and deliver unique application solutions.</p>
            </div>

            <!-- Service 3 -->
            <div class="service-card animate-fade-in-up delay-300">
              <span class="material-symbols-outlined service-card-icon" style="color: #f97316;">smart_toy</span>
              <h3 class="service-card-title">AI as a<br>Service</h3>
              <p class="service-card-desc">Unlock doors to success with AI. We provide cutting-edge AI solutions to clients that transform businesses.</p>
            </div>

            <!-- Service 4 -->
            <div class="service-card animate-fade-in-up delay-100">
              <span class="material-symbols-outlined service-card-icon" style="color: #10b981;">smartphone</span>
              <h3 class="service-card-title">Mobile App<br>Development</h3>
              <p class="service-card-desc">Native and cross-platform mobile experiences that deliver seamless functionality and premium UI/UX across all devices.</p>
            </div>

            <!-- Service 5 -->
            <div class="service-card animate-fade-in-up delay-200">
              <span class="material-symbols-outlined service-card-icon" style="color: #8b5cf6;">domain</span>
              <h3 class="service-card-title">ERP<br>Systems</h3>
              <p class="service-card-desc">Enterprise resource planning that unifies procurement, accounting, HR, and inventory into a single powerful platform.</p>
            </div>

            <!-- Service 6 -->
            <div class="service-card animate-fade-in-up delay-300">
              <span class="material-symbols-outlined service-card-icon" style="color: #ef4444;">school</span>
              <h3 class="service-card-title">LMS<br>Platforms</h3>
              <p class="service-card-desc">Comprehensive learning management with course builders, progress tracking, gamification, and advanced analytics.</p>
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
          <div class="responsive-grid-4">
            <div class="why-cresenix-card animate-fade-in-up delay-100">
              <div class="why-icon-wrapper">
                <span class="material-symbols-outlined why-icon">speed</span>
              </div>
              <h3 class="why-title">Agile Delivery</h3>
              <p class="why-desc">Rapid sprints with transparent milestones. Your product goes live in weeks, not months.</p>
            </div>
            <div class="why-cresenix-card animate-fade-in-up delay-200">
              <div class="why-icon-wrapper">
                <span class="material-symbols-outlined why-icon">security</span>
              </div>
              <h3 class="why-title">Enterprise Security</h3>
              <p class="why-desc">Bank-grade encryption, secure APIs, and compliance-ready architecture from day one.</p>
            </div>
            <div class="why-cresenix-card animate-fade-in-up delay-300">
              <div class="why-icon-wrapper">
                <span class="material-symbols-outlined why-icon">support_agent</span>
              </div>
              <h3 class="why-title">Dedicated Support</h3>
              <p class="why-desc">24/7 monitoring and a dedicated account manager for every project we deliver.</p>
            </div>
            <div class="why-cresenix-card animate-fade-in-up delay-400">
              <div class="why-icon-wrapper">
                <span class="material-symbols-outlined why-icon">trending_up</span>
              </div>
              <h3 class="why-title">Scalable Growth</h3>
              <p class="why-desc">Architectures built for scale — from 100 users today to 1M users tomorrow.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      ${(() => {
      const techStackCategories = [
        {
          id: "frontend", title: "Frontend Engineering", icon: "draw",
          desc: "Build seamless and engaging user experiences with responsive, intuitive, and visually stunning frontend design.",
          techs: [
            { name: "React", color: "#61DAFB" }, { name: "NEXT.js", color: "#000000" }, { name: "Angular", color: "#DD0031" },
            { name: "Vue.js", color: "#4FC08D" }, { name: "TypeScript", color: "#3178C6" }, { name: "HTML5", color: "#E34F26" },
            { name: "CSS3", color: "#1572B6" }, { name: "JS", color: "#F7DF1E" }, { name: "Bootstrap", color: "#7952B3" }
          ]
        },
        {
          id: "backend", title: "Backend Engineering", icon: "terminal",
          desc: "Develop robust, scalable, and secure server-side architectures that power your applications with high performance.",
          techs: [
            { name: "Node.js", color: "#339933" }, { name: "Python", color: "#3776AB" }, { name: "Java", color: "#007396" },
            { name: ".NET", color: "#512BD4" }, { name: "Go", color: "#00ADD8" }, { name: "PHP", color: "#777BB4" }
          ]
        },
        {
          id: "gen-ai", title: "Generative AI", icon: "psychology",
          desc: "Empower your business with cutting-edge artificial intelligence, custom LLMs, and automated intelligent workflows.",
          techs: [
            { name: "OpenAI", color: "#10a37f" }, { name: "LangChain", color: "#000000" }, { name: "Hugging Face", color: "#FFD21E" },
            { name: "Llama", color: "#3B82F6" }, { name: "TensorFlow", color: "#FF6F00" }, { name: "PyTorch", color: "#EE4C2C" }
          ]
        },
        {
          id: "databases", title: "Databases", icon: "database",
          desc: "Design resilient data architectures with relational and NoSQL databases optimized for speed and reliability.",
          techs: [
            { name: "PostgreSQL", color: "#336791" }, { name: "MongoDB", color: "#47A248" }, { name: "MySQL", color: "#4479A1" },
            { name: "Redis", color: "#DC382D" }, { name: "Cassandra", color: "#1287B1" }, { name: "Firebase", color: "#FFCA28" }
          ]
        },
        {
          id: "quality", title: "Quality Engineering", icon: "bug_report",
          desc: "Ensure flawless execution with comprehensive automated testing, continuous integration, and rigorous QA.",
          techs: [
            { name: "Selenium", color: "#43B02A" }, { name: "Cypress", color: "#17202C" }, { name: "Jest", color: "#C21325" },
            { name: "Appium", color: "#66228B" }, { name: "JUnit", color: "#25A162" }, { name: "Postman", color: "#FF6C37" }
          ]
        },
        {
          id: "digital", title: "Digital Experience", icon: "shopping_cart",
          desc: "Create immersive digital touchpoints tailored for e-commerce, content management, and user engagement.",
          techs: [
            { name: "Shopify", color: "#95BF47" }, { name: "WordPress", color: "#21759B" }, { name: "Magento", color: "#F26322" },
            { name: "Figma", color: "#F24E1E" }, { name: "Webflow", color: "#4353FF" }, { name: "Strapi", color: "#2E7EEA" }
          ]
        },
        {
          id: "mobile", title: "Mobile", icon: "smartphone",
          desc: "Reach your users on any device with high-performance native and cross-platform mobile applications.",
          techs: [
            { name: "React Native", color: "#61DAFB" }, { name: "Flutter", color: "#02569B" }, { name: "Swift", color: "#F05138" },
            { name: "Kotlin", color: "#7F52FF" }, { name: "Android", color: "#3DDC84" }, { name: "iOS", color: "#000000" }
          ]
        },
        {
          id: "cloud", title: "Cloud & DevOps", icon: "cloud",
          desc: "Scale infinitely with secure, automated cloud infrastructures and continuous delivery pipelines.",
          techs: [
            { name: "AWS", color: "#232F3E" }, { name: "Azure", color: "#0089D6" }, { name: "GCP", color: "#4285F4" },
            { name: "Docker", color: "#2496ED" }, { name: "Kubernetes", color: "#326CE5" }, { name: "Jenkins", color: "#D24939" }
          ]
        },
        {
          id: "data", title: "Data Engineering", icon: "dns",
          desc: "Transform raw data into actionable insights with robust data pipelines and analytics solutions.",
          techs: [
            { name: "Snowflake", color: "#29B5E8" }, { name: "Apache Spark", color: "#E25A1C" }, { name: "Kafka", color: "#231F20" },
            { name: "Hadoop", color: "#66CC00" }, { name: "Airflow", color: "#017CEE" }, { name: "Tableau", color: "#E97627" }
          ]
        },
        {
          id: "platform", title: "Platform", icon: "settings_applications",
          desc: "Leverage powerful enterprise platforms to accelerate digital transformation and workflow automation.",
          techs: [
            { name: "Salesforce", color: "#00A1E0" }, { name: "SAP", color: "#008FD3" }, { name: "Oracle", color: "#C74634" },
            { name: "ServiceNow", color: "#81B5A1" }, { name: "MuleSoft", color: "#00A1E0" }, { name: "Odoo", color: "#714B67" }
          ]
        }
      ];

      return `
          <section style="background: #f8f9fa; padding:15px;">
            <div class="responsive-tech-layout">
              
              <!-- Left Sidebar (Tabs) -->
              <div class="responsive-tech-tabs" style="background: #07476f; color: white;" id="techStackTabs">
                ${techStackCategories.map((cat, index) => `
                  <button class="tech-tab-btn" data-target="${cat.id}" style="
                    display: flex; align-items: center; gap: 16px; padding: 20px 24px; 
                    background: ${index === 0 ? '#115b90' : 'transparent'}; 
                    color: white; border: none; border-bottom: 1px solid rgba(255,255,255,0.1); 
                    font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 500; text-align: left; 
                    cursor: pointer; transition: background 0.3s; position: relative;
                  ">
                    <span class="material-symbols-outlined" style="font-size: 24px;">${cat.icon}</span>
                    ${cat.title}
                    <!-- Arrow pointing right when active -->
                    <div class="active-arrow" style="
                      display: ${index === 0 ? 'block' : 'none'}; 
                      position: absolute; right: -12px; top: 50%; transform: translateY(-50%);
                      width: 0; height: 0; 
                      border-top: 12px solid transparent; 
                      border-bottom: 12px solid transparent; 
                      border-left: 12px solid #f59e0b; 
                      z-index: 10;
                    "></div>
                  </button>
                `).join('')}
              </div>

              <!-- Right Content Area -->
              <div class="tech-content-area" id="techStackContent">
                ${techStackCategories.map((cat, index) => `
                  <div class="tech-content-panel" id="tech-panel-${cat.id}" style="
                    display: ${index === 0 ? 'block' : 'none'};
                    width: 100%; max-width: 900px; animation: fadeIn 0.4s ease;
                  ">
                     <h2 style="font-family: var(--font-display); font-size: clamp(1.5rem, 5vw, 2.2rem); font-weight: 700; color: #07476f; text-align: center; margin-bottom: 16px;">
                       ${cat.title}
                     </h2>
                     <div style="width: 80px; height: 4px; background: #f59e0b; margin: 0 auto 16px;"></div>
                     
                     <p class="tech-desc">
                       ${cat.desc}
                     </p>
                     
                     <div class="tech-stack-grid">
                        ${cat.techs.map((tech, tIndex) => `
                          <div class="tech-item">
                             <span class="tech-item-name" style="color: ${tech.color};">
                               ${tech.name}
                             </span>
                          </div>
                        `).join('')}
                     </div>
                     
                     <div style="text-align: center;">
                       <a href="#/contact" style="
                         display: inline-block; background: #f59e0b; color: #111827; 
                         padding: 14px 40px; border-radius: 100px; font-weight: 700; 
                         font-family: 'Inter', sans-serif; font-size: 1rem; text-decoration: none; 
                         box-shadow: 0 4px 14px rgba(245, 158, 11, 0.3); transition: transform 0.2s;
                       ">
                         Know More
                       </a>
                     </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
    })()}

      <!-- Process Timeline Section -->
      <section class="section-gap" style="background: var(--surface-container-lowest); position: relative; overflow: hidden;">
        <style>
          .process-step-circle {
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            z-index: 2;
          }
          
          /* Pulsing background effect on hover */
          .process-step-circle::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: 50%;
            background: var(--step-color);
            opacity: 0;
            z-index: -1;
            transition: all 0.4s ease;
          }

          .process-step-circle::after {
            content: '';
            position: absolute;
            top: -4px; left: -4px; right: -4px; bottom: -4px;
            border-radius: 50%;
            border: 2px solid var(--step-color);
            opacity: 0;
            z-index: -1;
          }
          
          .process-step:hover .process-step-circle {
            transform: translateY(-8px) scale(1.08);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
          }
          
          .process-step:hover .process-step-circle::before {
            transform: scale(1.15);
            opacity: 0.15;
          }

          .process-step:hover .process-step-circle::after {
            animation: pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          }

          .process-step-icon {
            transition: transform 0.4s ease, color 0.4s ease;
          }
          
          .process-step:hover .process-step-icon {
            transform: scale(1.15);
          }

          @keyframes pulse-ring {
            0% { transform: scale(0.9); opacity: 0.8; }
            100% { transform: scale(1.4); opacity: 0; }
          }
          
          /* Gradient Line Animation */
          .process-line-animated {
            background: linear-gradient(90deg, #115b90, #60a5fa, #8b5cf6, #22c55e, #115b90);
            background-size: 300% 100%;
            animation: gradient-flow 6s ease infinite;
          }
          
          @keyframes gradient-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        </style>
        
        <div class="container">
          <div class="section-header animate-fade-in-up responsive-header-mb" style="text-align: center;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(17, 91, 144, 0.08); color: #115b90; padding: 8px 20px; border-radius: 100px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; font-family: 'Inter', sans-serif;">
              <span class="material-symbols-outlined" style="font-size: 18px;">route</span> OUR PROCESS
            </div>
            <h2 style="font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; color: #111827; margin-bottom: 16px; letter-spacing: -0.02em;">How We <span style="color: var(--primary);">Work</span></h2>
            <p class="section-subtitle" style="font-family: 'Inter', sans-serif; font-size: 1.15rem; color: #4b5563; max-width: 650px; margin: 0 auto; line-height: 1.6;">A clear, transparent process so you always know what's happening and when.</p>
          </div>

          <div class="responsive-timeline-wrapper">
            <div class="process-timeline responsive-timeline-grid" style="position: relative; max-width: 1200px; margin: 0 auto;">
              
              <!-- Connecting line -->
              <div class="process-line-animated hide-on-mobile" style="position: absolute; top: 44px; left: 10%; right: 10%; height: 4px; border-radius: 2px; z-index: 0; opacity: 0.7;"></div>

              <!-- Step 1 -->
              <div class="process-step animate-fade-in-up delay-100" style="text-align: center; position: relative; z-index: 1; cursor: pointer; --step-color: #115b90;">
              <div class="process-step-circle" style="width: 88px; height: 88px; margin: 0 auto 24px; background: white; border-radius: 50%; box-shadow: 0 4px 15px rgba(17, 91, 144, 0.1); display: flex; align-items: center; justify-content: center; border: 3px solid #115b90;">
                <span class="material-symbols-outlined process-step-icon" style="font-size: 32px; color: #115b90;">search</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 800; color: #111827; margin-bottom: 8px;">Discovery</h3>
              <p style="font-size: 0.85rem; color: #4b5563; line-height: 1.5; font-family: 'Inter', sans-serif; padding: 0 10px;">Understanding your goals & requirements</p>
              <div style="margin-top: 16px; background: rgba(17, 91, 144, 0.08); color: #115b90; padding: 6px 16px; border-radius: 100px; font-size: 0.75rem; font-weight: 700; display: inline-block; font-family: 'Inter', sans-serif;">Week 1</div>
            </div>

            <!-- Step 2 -->
            <div class="process-step animate-fade-in-up delay-200" style="text-align: center; position: relative; z-index: 1; cursor: pointer; --step-color: #3b82f6;">
              <div class="process-step-circle" style="width: 88px; height: 88px; margin: 0 auto 24px; background: white; border-radius: 50%; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.1); display: flex; align-items: center; justify-content: center; border: 3px solid #3b82f6;">
                <span class="material-symbols-outlined process-step-icon" style="font-size: 32px; color: #3b82f6;">palette</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 800; color: #111827; margin-bottom: 8px;">Design</h3>
              <p style="font-size: 0.85rem; color: #4b5563; line-height: 1.5; font-family: 'Inter', sans-serif; padding: 0 10px;">Wireframes, prototypes & visual design</p>
              <div style="margin-top: 16px; background: rgba(59, 130, 246, 0.08); color: #3b82f6; padding: 6px 16px; border-radius: 100px; font-size: 0.75rem; font-weight: 700; display: inline-block; font-family: 'Inter', sans-serif;">Week 2–3</div>
            </div>

            <!-- Step 3 -->
            <div class="process-step animate-fade-in-up delay-300" style="text-align: center; position: relative; z-index: 1; cursor: pointer; --step-color: #8b5cf6;">
              <div class="process-step-circle" style="width: 88px; height: 88px; margin: 0 auto 24px; background: white; border-radius: 50%; box-shadow: 0 4px 15px rgba(139, 92, 246, 0.1); display: flex; align-items: center; justify-content: center; border: 3px solid #8b5cf6;">
                <span class="material-symbols-outlined process-step-icon" style="font-size: 32px; color: #8b5cf6;">code</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 800; color: #111827; margin-bottom: 8px;">Development</h3>
              <p style="font-size: 0.85rem; color: #4b5563; line-height: 1.5; font-family: 'Inter', sans-serif; padding: 0 10px;">Agile sprints with weekly updates</p>
              <div style="margin-top: 16px; background: rgba(139, 92, 246, 0.08); color: #8b5cf6; padding: 6px 16px; border-radius: 100px; font-size: 0.75rem; font-weight: 700; display: inline-block; font-family: 'Inter', sans-serif;">Week 4–6</div>
            </div>

            <!-- Step 4 -->
            <div class="process-step animate-fade-in-up delay-400" style="text-align: center; position: relative; z-index: 1; cursor: pointer; --step-color: #22c55e;">
              <div class="process-step-circle" style="width: 88px; height: 88px; margin: 0 auto 24px; background: white; border-radius: 50%; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.1); display: flex; align-items: center; justify-content: center; border: 3px solid #22c55e;">
                <span class="material-symbols-outlined process-step-icon" style="font-size: 32px; color: #22c55e;">rocket_launch</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 800; color: #111827; margin-bottom: 8px;">Launch</h3>
              <p style="font-size: 0.85rem; color: #4b5563; line-height: 1.5; font-family: 'Inter', sans-serif; padding: 0 10px;">Testing, QA & deployment</p>
              <div style="margin-top: 16px; background: rgba(34, 197, 94, 0.08); color: #22c55e; padding: 6px 16px; border-radius: 100px; font-size: 0.75rem; font-weight: 700; display: inline-block; font-family: 'Inter', sans-serif;">Week 7</div>
            </div>

            <!-- Step 5 -->
            <div class="process-step animate-fade-in-up delay-500" style="text-align: center; position: relative; z-index: 1; cursor: pointer; --step-color: #115b90;">
              <div class="process-step-circle" style="width: 88px; height: 88px; margin: 0 auto 24px; background: white; border-radius: 50%; box-shadow: 0 4px 15px rgba(17, 91, 144, 0.1); display: flex; align-items: center; justify-content: center; border: 3px solid #115b90;">
                <span class="material-symbols-outlined process-step-icon" style="font-size: 32px; color: #115b90;">support_agent</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 800; color: #111827; margin-bottom: 8px;">Support</h3>
              <p style="font-size: 0.85rem; color: #4b5563; line-height: 1.5; font-family: 'Inter', sans-serif; padding: 0 10px;">Maintenance, updates & growth</p>
              <div style="margin-top: 16px; background: rgba(17, 91, 144, 0.08); color: #115b90; padding: 6px 16px; border-radius: 100px; font-size: 0.75rem; font-weight: 700; display: inline-block; font-family: 'Inter', sans-serif;">Ongoing</div>
            </div>

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
              <h2 class="font-display-lg animate-fade-in-up" style="color: white; margin-bottom: 16px;">
                Ready to Turn Visitors<br/>Into <span class="text-gradient-primary">Paying Clients</span>?
              </h2>
              <p style="font-size: 1.05rem; color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 32px;">Book a free 30-minute strategy call. We'll review your current site, identify quick wins, and show you exactly how we'd improve conversions.</p>
              
              <a href="#" onclick="event.preventDefault(); window.Calendly && window.Calendly.initPopupWidget({url: 'https://calendly.com/cresenix'}); return false;" style="display: inline-flex; align-items: center; gap: 10px; background: var(--primary); color: white; padding: 16px 32px; border-radius: 12px; font-weight: 700; font-size: 1rem; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.3);">
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

export function initHomeForm(): void {
  const form = document.getElementById('final-cta-form') as HTMLFormElement;
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalBtnHTML = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <span class="material-symbols-outlined" style="font-size:20px; animation: spin 1s linear infinite;">sync</span>';

    try {
      const inputs = form.querySelectorAll('input');
      const select = form.querySelector('select');

      const payload = {
        fullName: inputs[0].value,
        company: null,
        email: inputs[1].value,
        phone: null,
        service: 'General Inquiry',
        message: 'Budget Range: ' + (select?.value || 'Not specified')
      };

      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      submitBtn.innerHTML = 'Message Sent! <span class="material-symbols-outlined" style="font-size:20px;">check</span>';
      submitBtn.style.backgroundColor = '#10b981';
      form.reset();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.style.backgroundColor = '';
      }, 3000);

    } catch (err) {
      console.error(err);
      submitBtn.innerHTML = 'Error. Try Again.';
      submitBtn.style.backgroundColor = '#ef4444';
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.style.backgroundColor = '';
      }, 3000);
    }
  });
}

export function initTestimonialCarousel(): void {
  const track = document.getElementById('testimonialTrack') as HTMLDivElement;
  const prevBtn = document.getElementById('prevTestimonialBtn') as HTMLButtonElement;
  const nextBtn = document.getElementById('nextTestimonialBtn') as HTMLButtonElement;

  if (!track || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  // Get total slides. We assume track.children are the slides.
  const totalSlides = track.children.length;
  if (totalSlides === 0) return;

  let autoScrollInterval: ReturnType<typeof setInterval>;
  const autoScrollDelay = 4000; // 4 seconds between auto-scrolls
  let isHovered = false;

  function updateCarousel() {
    const slide = track.children[0] as HTMLDivElement;
    if (!slide) return;

    // Get the slide width including the gap.
    // The gap is 32px as defined in CSS.
    const slideWidth = slide.getBoundingClientRect().width;
    const gap = 32;
    const moveAmount = slideWidth + gap;

    track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
  }

  function nextSlide() {
    // Determine visible slides based on window width
    let visibleSlides = 3;
    if (window.innerWidth <= 768) {
      visibleSlides = 1;
    } else if (window.innerWidth <= 1024) {
      visibleSlides = 2;
    }

    const maxIndex = Math.max(0, totalSlides - visibleSlides);

    if (currentIndex >= maxIndex) {
      currentIndex = 0; // loop back to start
    } else {
      currentIndex++;
    }
    updateCarousel();
  }

  function prevSlide() {
    let visibleSlides = 3;
    if (window.innerWidth <= 768) {
      visibleSlides = 1;
    } else if (window.innerWidth <= 1024) {
      visibleSlides = 2;
    }

    const maxIndex = Math.max(0, totalSlides - visibleSlides);

    if (currentIndex <= 0) {
      currentIndex = maxIndex; // loop back to end
    } else {
      currentIndex--;
    }
    updateCarousel();
  }

  // Event Listeners for manual navigation
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoScroll();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoScroll();
  });

  // Handle window resize to adjust boundaries
  window.addEventListener('resize', () => {
    let visibleSlides = 3;
    if (window.innerWidth <= 768) visibleSlides = 1;
    else if (window.innerWidth <= 1024) visibleSlides = 2;

    const maxIndex = Math.max(0, totalSlides - visibleSlides);
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    updateCarousel();
  });

  // Auto-scroll logic
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, autoScrollDelay);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  function resetAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
  }

  // Pause auto-scroll on hover
  track.parentElement?.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  track.parentElement?.addEventListener('mouseleave', () => {
    isHovered = false;
  });

  // Initialize
  updateCarousel();
  startAutoScroll();
}

export function initTechStackTabs(): void {
  const tabs = document.querySelectorAll('.tech-tab-btn');
  const panels = document.querySelectorAll('.tech-content-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active state from all tabs
      tabs.forEach(t => {
        (t as HTMLElement).style.background = 'transparent';
        const arrow = t.querySelector('.active-arrow') as HTMLElement;
        if (arrow) arrow.style.display = 'none';
      });

      // Add active state to clicked tab
      (tab as HTMLElement).style.background = '#115b90';
      const arrow = tab.querySelector('.active-arrow') as HTMLElement;
      if (arrow) arrow.style.display = 'block';

      // Hide all panels
      panels.forEach(p => {
        (p as HTMLElement).style.display = 'none';
      });

      // Show target panel
      const targetId = tab.getAttribute('data-target');
      const targetPanel = document.getElementById(`tech-panel-${targetId}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
      }
    });
  });
}

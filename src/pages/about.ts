/**
 * Cresenix Solutions — About Us Page
 * Our Vision, Leadership, Core Values, and Culture.
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderAboutPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      
      <!-- About Hero -->
      <section class="abt-hero section-gap">
        <div class="container text-center max-w-3xl mx-auto pt-24">
          <div class="abt-tag animate-fade-in-up">OUR VISION</div>
          <h1 class="font-display-lg mt-4 animate-fade-in-up delay-100">
            Empowering growth through <span class="text-gradient-primary">technology.</span>
          </h1>
          <p class="font-body-lg mt-6 text-on-surface-variant animate-fade-in-up delay-200">
            We empower enterprises to navigate the complexities of the modern digital landscape through scalable, high-performance software architecture and state-of-the-art artificial intelligence integration. Precision is our baseline.
          </p>
          <div class="mt-10 animate-fade-in-up delay-300">
            <a href="#/portfolio" class="btn-primary">
              Discover Our Solutions
              <span class="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <!-- The Journey -->
      <section class="abt-journey section-gap bg-surface-container-lowest">
        <div class="container">
          <div class="abt-journey-grid">
            <div class="abt-journey-title animate-fade-in-up">
              <h2 style="font-size: 2.8rem; letter-spacing: -0.04em;">The Cresenix Journey</h2>
              <p style="font-size: 1.1rem; color: var(--on-surface-variant); margin-top: 8px; margin-bottom: 24px;">From Code to Intelligence. From Ideas to Impact.</p>
              <div style="width: 48px; height: 4px; background: var(--primary); margin-bottom: 48px;"></div>
              
              <!-- Timeline -->
              <div style="position: relative; padding-left: 56px; border-left: 2px solid var(--primary-container); margin-left: 28px;">
                <!-- Stop 1 -->
                <div style="position: relative; margin-bottom: 40px;">
                  <div style="position: absolute; left: -85px; top: -4px; width: 56px; height: 56px; background: white; border: 2px solid var(--primary-container); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); box-shadow: 0 8px 16px rgba(0,0,0,0.05);">
                    <span class="material-symbols-outlined" style="font-size: 24px;">rocket_launch</span>
                  </div>
                  <div style="color: var(--primary); font-weight: 700; font-size: 0.95rem; margin-bottom: 4px;">2022</div>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--on-background); margin-bottom: 8px;">Our Beginning</h3>
                  <p style="font-size: 0.95rem; color: var(--on-surface-variant); line-height: 1.6;">Started as a specialized development company focused on complex enterprise integrations.</p>
                </div>
                
                <!-- Stop 2 -->
                <div style="position: relative; margin-bottom: 40px;">
                  <div style="position: absolute; left: -85px; top: -4px; width: 56px; height: 56px; background: white; border: 2px solid var(--primary-container); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); box-shadow: 0 8px 16px rgba(0,0,0,0.05);">
                    <span class="material-symbols-outlined" style="font-size: 24px;">code</span>
                  </div>
                  <div style="color: var(--primary); font-weight: 700; font-size: 0.95rem; margin-bottom: 4px;">2023</div>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--on-background); margin-bottom: 8px;">Expanding Solutions</h3>
                  <p style="font-size: 0.95rem; color: var(--on-surface-variant); line-height: 1.6;">Delivered robust web, mobile and enterprise solutions that helped businesses scale.</p>
                </div>
                
                <!-- Stop 3 -->
                <div style="position: relative; margin-bottom: 40px;">
                  <div style="position: absolute; left: -85px; top: -4px; width: 56px; height: 56px; background: white; border: 2px solid var(--primary-container); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); box-shadow: 0 8px 16px rgba(0,0,0,0.05);">
                    <span class="material-symbols-outlined" style="font-size: 24px;">psychology</span>
                  </div>
                  <div style="color: var(--primary); font-weight: 700; font-size: 0.95rem; margin-bottom: 4px;">2024</div>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--on-background); margin-bottom: 8px;">AI & Automation Era</h3>
                  <p style="font-size: 0.95rem; color: var(--on-surface-variant); line-height: 1.6;">Integrated AI, machine learning and automation to build intelligent and data-driven systems.</p>
                </div>
                
                <!-- Stop 4 -->
                <div style="position: relative;">
                  <div style="position: absolute; left: -85px; top: -4px; width: 56px; height: 56px; background: white; border: 2px solid var(--primary-container); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); box-shadow: 0 8px 16px rgba(0,0,0,0.05);">
                    <span class="material-symbols-outlined" style="font-size: 24px;">trending_up</span>
                  </div>
                  <div style="color: var(--primary); font-weight: 700; font-size: 0.95rem; margin-bottom: 4px;">2025+</div>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--on-background); margin-bottom: 8px;">AI & Software Consultancy</h3>
                  <p style="font-size: 0.95rem; color: var(--on-surface-variant); line-height: 1.6;">Evolved into a leading AI and software consultancy delivering measurable business impact.</p>
                </div>
              </div>
            </div>
            
            <div class="abt-journey-content animate-fade-in-up delay-100">
              <div style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface);">
                <p style="margin-bottom: 2.5rem;">
                  What began as a specialized development company has evolved into a leading AI and software consultancy. We recognized early that strong system architecture combined with artificial intelligence is shaping the future of business.
                </p>
                
                <!-- Accent Box matching Mockup -->
                <div style="border-left: 4px solid var(--primary); padding: 32px; margin-bottom: 2.5rem; background: var(--primary-container); border-radius: 0 16px 16px 0; display: flex; gap: 24px; align-items: flex-start; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.08);">
                  <div style="flex-shrink: 0; width: 48px; height: 48px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.3);">
                     <span class="material-symbols-outlined" style="font-size: 24px;">lightbulb</span>
                  </div>
                  <div>
                    <div style="color: var(--primary); font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;">What We Do</div>
                    <h3 style="font-size: 1.75rem; font-weight: 800; color: var(--on-background); line-height: 1.2; margin-bottom: 16px; letter-spacing: -0.02em;">We turn ideas into scalable digital solutions.</h3>
                    <p style="color: var(--on-surface); line-height: 1.7; font-size: 0.95rem;">
                      We design custom software, enterprise applications, AI-powered products, and intelligent automation systems to solve your most complex challenges.
                    </p>
                  </div>
                </div>
                
                <p style="color: var(--on-surface-variant);">
                  From robust ERP platforms to secure LLMs, our work is driven by technical excellence and measurable outcomes. We don't just build software—we create solutions that help organizations operate smarter and faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Leadership -->
      <section class="abt-leadership section-gap">
        <div class="container text-center mb-16">
          <div class="abt-tag animate-fade-in-up">LEADERSHIP</div>
          <h2 class="font-display-md mt-4 animate-fade-in-up delay-100">Architecting Vision</h2>
        </div>
        
        <div class="container max-w-5xl">
          <div class="abt-leader-block animate-fade-in-up delay-200">
            <div class="abt-leader-image animate-float">
              <img src="/images/founder.png" alt="Raj Bhandari - Founder & CEO" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div class="abt-leader-info">
              <h3 class="font-headline-lg">Raj Bhandari</h3>
              <div class="abt-leader-role">Founder & CEO</div>
              
              <div class="abt-quote">
                "The true power of AI isn't in replacing human ingenuity; it's in augmenting it. Our goal is to build digital infrastructure so intuitive and powerful that it becomes invisible, allowing enterprises to focus entirely on their core mission."
              </div>
              
              <p class="abt-leader-bio">
                With a deep background in enterprise architecture and distributed systems, Raj founded Cresenix Solutions to bridge the gap between theoretical AI capabilities and practical, scalable business applications. His vision drives our commitment to uncompromising quality and strategic innovation.
              </p>
              
              <div class="abt-leader-social">
                <a href="tel:+917387792415" class="abt-social-btn" aria-label="Phone" title="+91 73877 92415">
                  <span class="material-symbols-outlined" style="font-size:20px;">call</span>
                </a>
                <a href="https://wa.me/917387792415" class="abt-social-btn" aria-label="WhatsApp">
                  <span class="material-symbols-outlined" style="font-size:20px;">chat</span>
                </a>
                <a href="#" class="abt-social-btn" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:raj@cresenix.com" class="abt-social-btn" aria-label="Email">
                  <span class="material-symbols-outlined" style="font-size:20px;">mail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Values / DNA -->
      <section class="abt-values section-gap bg-surface-container-lowest">
        <div class="container">
          <div class="mb-12">
            <div class="abt-tag animate-fade-in-up">OUR DNA</div>
            <h2 class="font-display-md mt-4 animate-fade-in-up delay-100">The Principles That Guide Us</h2>
          </div>
          
          <div class="abt-values-grid">
            <!-- Value 1 -->
            <div class="abt-value-card animate-fade-in-up delay-200">
              <div class="abt-value-icon">
                <span class="material-symbols-outlined">lightbulb</span>
              </div>
              <h3>Innovation</h3>
              <p>We anticipate trends and explore frontier technologies to deliver solutions that provide a competitive advantage.</p>
            </div>
            
            <!-- Value 2 -->
            <div class="abt-value-card animate-fade-in-up delay-300">
              <div class="abt-value-icon">
                <span class="material-symbols-outlined">verified_user</span>
              </div>
              <h3>Integrity</h3>
              <p>Transparency is our bedrock. We engineer secure, compliant, and ethically sound AI and software systems.</p>
            </div>
            
            <!-- Value 3 -->
            <div class="abt-value-card animate-fade-in-up delay-400">
              <div class="abt-value-icon">
                <span class="material-symbols-outlined">workspace_premium</span>
              </div>
              <h3>Excellence</h3>
              <p>We adhere to rigorous standards of code quality and architectural design to ensure flawless delivery.</p>
            </div>
            
            <!-- Value 4 -->
            <div class="abt-value-card animate-fade-in-up delay-500">
              <div class="abt-value-icon">
                <span class="material-symbols-outlined">groups</span>
              </div>
              <h3>Scalability</h3>
              <p>Every solution is architected with a forward-looking perspective to handle exponential growth gracefully.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-gap">
        <div class="container max-w-5xl">
          <div class="abt-cta-block animate-fade-in-up">
            <div class="abt-cta-content">
              <h2>A Culture of Agile Engineering</h2>
              <p>
                Our team is a carefully curated collective of senior engineers, data scientists, and strategists. We operate with an agile mindset, fostering an environment where deep technical expertise meets creative problem-solving. We are dedicated, relentless, and driven by impact.
              </p>
            </div>
            <div class="abt-cta-actions">
              <a href="#/contact" class="btn-primary" style="background:var(--secondary);border-color:var(--secondary);">
                Join Our Journey <span class="material-symbols-outlined ml-2 text-sm">rocket_launch</span>
              </a>
              <a href="#/contact" class="btn-outline" style="border-color:rgba(255,255,255,0.2);color:white;">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

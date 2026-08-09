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
            Engineering the Future of<br/>Digital Intelligence
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
              <h2>The Cresenix Journey</h2>
              <div class="abt-line"></div>
            </div>
            <div class="abt-journey-content animate-fade-in-up delay-100">
              <div class="abt-journey-card">
                <p>
                  What began as a specialized boutique development shop focused on complex enterprise integrations has rapidly evolved into a premier AI and software consultancy. We recognized early that the convergence of robust system architecture and machine learning would dictate the next era of business agility.
                </p>
                <p class="mt-6">
                  Today, Cresenix Solutions stands at the vanguard of this convergence. We don't just write code; we engineer scalable intelligence paradigms. From conceptualizing bespoke ERP systems to deploying localized LLMs for data-sensitive environments, our trajectory is defined by an unrelenting pursuit of technical excellence and measurable client impact.
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
            <div class="abt-leader-image">
              <!-- Placeholder for team image. User can replace this src with their own team image -->
              <div class="abt-image-placeholder">
                <span class="material-symbols-outlined">image</span>
                <span>Team Image</span>
              </div>
            </div>
            <div class="abt-leader-info">
              <h3 class="font-headline-lg">Arjun Mehta</h3>
              <div class="abt-leader-role">Founder & CEO</div>
              
              <div class="abt-quote">
                "The true power of AI isn't in replacing human ingenuity; it's in augmenting it. Our goal is to build digital infrastructure so intuitive and powerful that it becomes invisible, allowing enterprises to focus entirely on their core mission."
              </div>
              
              <p class="abt-leader-bio">
                With over 15 years of experience in enterprise architecture and distributed systems, Arjun founded Cresenix Solutions to bridge the gap between theoretical AI capabilities and practical, scalable business applications. His vision drives our commitment to uncompromising quality and strategic innovation.
              </p>
              
              <div class="abt-leader-social">
                <a href="#" class="abt-social-btn" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:arjun@cresenix.com" class="abt-social-btn" aria-label="Email">
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
              <p>We don't follow trends; we anticipate them. We continuously explore frontier technologies to deliver solutions that provide a lasting competitive advantage.</p>
            </div>
            
            <!-- Value 2 -->
            <div class="abt-value-card animate-fade-in-up delay-300">
              <div class="abt-value-icon">
                <span class="material-symbols-outlined">verified_user</span>
              </div>
              <h3>Integrity</h3>
              <p>Transparency and honesty form the bedrock of our client relationships. We engineer secure, compliant, and ethically sound AI and software systems.</p>
            </div>
            
            <!-- Value 3 -->
            <div class="abt-value-card animate-fade-in-up delay-400">
              <div class="abt-value-icon">
                <span class="material-symbols-outlined">workspace_premium</span>
              </div>
              <h3>Excellence</h3>
              <p>Mediocrity is unacceptable. We adhere to rigorous standards of code quality, architectural design, and project execution to ensure flawless delivery.</p>
            </div>
            
            <!-- Value 4 -->
            <div class="abt-value-card animate-fade-in-up delay-500">
              <div class="abt-value-icon">
                <span class="material-symbols-outlined">groups</span>
              </div>
              <h3>Scalability</h3>
              <p>We build for tomorrow. Every solution is architected with a forward-looking perspective, ensuring it can handle exponential growth gracefully.</p>
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

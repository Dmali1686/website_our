/**
 * Cresenix Solutions — About Us Page
 * Our Vision, Leadership, Core Values, and Culture.
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderAboutPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper" style="background-color: #fafbfc; color: #334155; font-family: 'Inter', sans-serif;">
      
      <!-- Premium Hero (Home-Page Style Dissolve Layout) -->
      <section class="abt-hero" style="position: relative; min-height: 100vh; display: flex; align-items: center; padding: 120px 0 80px; background-image: url('/images/about-bg-medium.png'); background-size: cover; background-position: center; border-bottom: 1px solid rgba(255,255,255,0.05); overflow: hidden;">
        <!-- Dark/Medium Overlay to ensure text readability -->
        <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(7, 71, 111, 0.85) 0%, rgba(14, 165, 233, 0.5) 100%); z-index: 1;"></div>
        
        <!-- Right Side Team Overlay (Dissolve Effect) -->
        <div style="position: absolute; top: 0; right: 0; width: 55%; height: 100%; background-image: url('/images/portfolio-team.png'); background-size: cover; background-position: center; background-repeat: no-repeat; z-index: 2; mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 1) 50%); -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 1) 50%); opacity: 1;"></div>
        
        <div class="container" style="position: relative; z-index: 5;">
          
          <!-- Left Content -->
          <div class="hero-content" style="max-width: 650px; padding-right: 20px; margin-right:450px">
            <div class="animate-fade-in-up" style="display: inline-block; padding: 8px 20px; background: rgba(255, 255, 255, 0.1); color: #ffffff; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 50px; margin-bottom: 24px; border: 1px solid rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px);">
              OUR VISION
            </div>
            <h1 class="animate-fade-in-up delay-100" style="margin-bottom: 24px; font-weight: 700; font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 4.5vw, 4rem); color: #ffffff; line-height: 1.1;">
              Empowering growth <br/>
              <span class="text-gradient-hero">through technology.</span>
            </h1>
            <p class="hero-subtitle animate-fade-in-up delay-200" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 36px; font-weight: 400; color: rgba(255, 255, 255, 0.9); max-width: 600px;">
              We empower enterprises to navigate the complexities of the modern digital landscape through scalable, high-performance software architecture and state-of-the-art artificial intelligence integration.
            </p>
            <div class="animate-fade-in-up delay-300">
              <a href="#/portfolio" class="btn-primary" style="background: #ffffff; color: #07476f; font-weight: 600; padding: 14px 28px; border-radius: 8px; display: inline-flex; align-items: center; transition: all 0.3s ease;">
                Discover Our Solutions
                <span class="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
          
        </div>
      </section>

      <!-- The Journey & What We Do -->
      <section style="padding: 100px 0; background: #ffffff;">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
            
            <!-- Timeline side -->
            <div class="animate-fade-in-up">
              <h2 style="font-size: 2.5rem; font-weight: 800; color: #07476f; margin-bottom: 12px; letter-spacing: -0.02em;">The Cresenix Journey</h2>
              <p style="font-size: 1.1rem; color: #64748b; margin-bottom: 40px;">From Code to Intelligence. From Ideas to Impact.</p>
              
              <div style="position: relative; padding-left: 48px; border-left: 2px solid #e2e8f0; margin-left: 24px;">
                <!-- Stop 1 -->
                <div style="position: relative; margin-bottom: 40px;">
                  <div style="position: absolute; left: -74px; top: 0; width: 48px; height: 48px; background: #ffffff; border: 2px solid #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #0ea5e9; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                    <span class="material-symbols-outlined" style="font-size: 20px;">rocket_launch</span>
                  </div>
                  <div style="color: #0ea5e9; font-weight: 700; font-size: 0.9rem; margin-bottom: 4px;">2022</div>
                  <h3 style="font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Our Beginning</h3>
                  <p style="font-size: 0.95rem; color: #64748b; line-height: 1.6;">Started as a specialized development company focused on complex enterprise integrations.</p>
                </div>
                
                <!-- Stop 2 -->
                <div style="position: relative; margin-bottom: 40px;">
                  <div style="position: absolute; left: -74px; top: 0; width: 48px; height: 48px; background: #ffffff; border: 2px solid #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #0ea5e9; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                    <span class="material-symbols-outlined" style="font-size: 20px;">code</span>
                  </div>
                  <div style="color: #0ea5e9; font-weight: 700; font-size: 0.9rem; margin-bottom: 4px;">2023</div>
                  <h3 style="font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Expanding Solutions</h3>
                  <p style="font-size: 0.95rem; color: #64748b; line-height: 1.6;">Delivered robust web, mobile and enterprise solutions that helped businesses scale.</p>
                </div>
                
                <!-- Stop 3 -->
                <div style="position: relative;">
                  <div style="position: absolute; left: -74px; top: 0; width: 48px; height: 48px; background: #07476f; border: 2px solid #07476f; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ffffff; box-shadow: 0 8px 16px rgba(7, 71, 111, 0.2);">
                    <span class="material-symbols-outlined" style="font-size: 20px;">psychology</span>
                  </div>
                  <div style="color: #07476f; font-weight: 800; font-size: 0.9rem; margin-bottom: 4px;">TODAY</div>
                  <h3 style="font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">AI & Software Consultancy</h3>
                  <p style="font-size: 0.95rem; color: #64748b; line-height: 1.6;">Evolved into a leading AI consultancy delivering measurable business impact through intelligent systems.</p>
                </div>
              </div>
            </div>

            <!-- Content side with Image -->
            <div class="animate-fade-in-up delay-200">
              <div style="border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.08); margin-bottom: 32px; position: relative;">
                <img src="/images/about-team.png" alt="Cresenix Team Collaborating" style="width: 100%; height: auto; display: block;" />
              </div>
              <h3 style="font-size: 1.8rem; font-weight: 800; color: #07476f; line-height: 1.2; margin-bottom: 16px; letter-spacing: -0.02em;">We turn ideas into scalable digital solutions.</h3>
              <p style="color: #475569; line-height: 1.7; font-size: 1.05rem;">
                What began as a specialized development company has evolved into a leading AI and software consultancy. We recognized early that strong system architecture combined with artificial intelligence is shaping the future of business. From robust ERP platforms to secure LLMs, our work is driven by technical excellence and measurable outcomes.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Leadership -->
      <section style="padding: 60px 0; background: #f8fafc; border-top: 1px solid #f1f5f9;">
        <div class="container text-center mb-10">
          <div class="animate-fade-in-up" style="display: inline-block; padding: 6px 16px; background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em; border-radius: 50px; margin-bottom: 12px;">
            LEADERSHIP
          </div>
          <h2 class="animate-fade-in-up delay-100" style="font-size: 2.2rem; font-weight: 800; color: #07476f; letter-spacing: -0.02em;">Architecting Vision</h2>
        </div>
        
        <div class="container max-w-6xl">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 32px;">
            
            <!-- Founder & CEO Card -->
            <div class="animate-fade-in-up delay-200" style="background: #ffffff; border-radius: 20px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.04); display: flex; flex-direction: column; gap: 24px; border: 1px solid #f1f5f9; height: 100%;">
              <div style="width: 100%; height: 260px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08);">
                <img src="/images/founder.png" alt="Raj Bhandari — Founder and CEO" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div style="display: flex; flex-direction: column; flex-grow: 1;">
                <h3 style="font-size: 1.75rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">Raj Bhandari</h3>
                <div style="color: #0ea5e9; font-weight: 600; font-size: 1rem; margin-bottom: 20px;">Founder & CEO</div>
                
                <div style="font-size: 1.05rem; line-height: 1.5; color: #334155; font-style: italic; font-weight: 500; margin-bottom: 20px; border-left: 4px solid #0ea5e9; padding-left: 16px;">
                  "The true power of AI isn't in replacing human ingenuity; it's in augmenting it. Our goal is to build digital infrastructure so intuitive and powerful that it becomes invisible."
                </div>
                
                <p style="color: #64748b; line-height: 1.6; font-size: 0.95rem; margin-bottom: 24px; flex-grow: 1;">
                  With a deep background in enterprise architecture, Raj founded Cresenix Solutions to bridge the gap between theoretical AI capabilities and practical, scalable business applications.
                </p>
                
                <div style="display: flex; gap: 12px; margin-top: auto;">
                  <a href="tel:+917387792415" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: #f1f5f9; color: #07476f; transition: all 0.2s;" onmouseover="this.style.background='#07476f'; this.style.color='white';" onmouseout="this.style.background='#f1f5f9'; this.style.color='#07476f';">
                    <span class="material-symbols-outlined" style="font-size:18px;">call</span>
                  </a>
                  <a href="mailto:raj@cresenix.com" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: #f1f5f9; color: #07476f; transition: all 0.2s;" onmouseover="this.style.background='#07476f'; this.style.color='white';" onmouseout="this.style.background='#f1f5f9'; this.style.color='#07476f';">
                    <span class="material-symbols-outlined" style="font-size:18px;">mail</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Chief Technology Officer Card -->
            <div class="animate-fade-in-up delay-300" style="background: #ffffff; border-radius: 20px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.04); display: flex; flex-direction: column; gap: 24px; border: 1px solid #f1f5f9; height: 100%;">
              <div style="width: 100%; height: 260px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08);">
                <img src="/images/cto.png" alt="Sarah Jenkins — Chief Technology Officer" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div style="display: flex; flex-direction: column; flex-grow: 1;">
                <h3 style="font-size: 1.75rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">Sarah Jenkins</h3>
                <div style="color: #0ea5e9; font-weight: 600; font-size: 1rem; margin-bottom: 20px;">Chief Technology Officer</div>
                
                <div style="font-size: 1.05rem; line-height: 1.5; color: #334155; font-style: italic; font-weight: 500; margin-bottom: 20px; border-left: 4px solid #0ea5e9; padding-left: 16px;">
                  "Innovation isn't just about adopting the latest framework; it's about engineering resilient systems that can adapt to tomorrow's unknown challenges."
                </div>
                
                <p style="color: #64748b; line-height: 1.6; font-size: 0.95rem; margin-bottom: 24px; flex-grow: 1;">
                  Sarah leads the engineering division with over 15 years of experience in cloud infrastructure. She ensures that every solution we deliver is built on a foundation of security and performance.
                </p>
                
                <div style="display: flex; gap: 12px; margin-top: auto;">
                  <a href="mailto:sarah@cresenix.com" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: #f1f5f9; color: #07476f; transition: all 0.2s;" onmouseover="this.style.background='#07476f'; this.style.color='white';" onmouseout="this.style.background='#f1f5f9'; this.style.color='#07476f';">
                    <span class="material-symbols-outlined" style="font-size:18px;">mail</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Core Values -->
      <section style="padding: 100px 0; background: #ffffff;">
        <div class="container">
          <div class="text-center mb-16">
            <div class="animate-fade-in-up" style="display: inline-block; padding: 6px 16px; background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em; border-radius: 50px; margin-bottom: 16px;">
              OUR DNA
            </div>
            <h2 class="animate-fade-in-up delay-100" style="font-size: 2.5rem; font-weight: 800; color: #07476f; letter-spacing: -0.02em;">The Principles That Guide Us</h2>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px;">
            <!-- Value 1 -->
            <div class="animate-fade-in-up delay-200" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; box-shadow: 0 10px 20px rgba(0,0,0,0.02); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
              <div style="width: 56px; height: 56px; border-radius: 12px; background: #f0f9ff; color: #0ea5e9; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                <span class="material-symbols-outlined" style="font-size: 28px;">lightbulb</span>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Innovation</h3>
              <p style="color: #64748b; line-height: 1.6; font-size: 0.95rem;">We anticipate trends and explore frontier technologies to deliver solutions that provide a competitive advantage.</p>
            </div>
            
            <!-- Value 2 -->
            <div class="animate-fade-in-up delay-300" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; box-shadow: 0 10px 20px rgba(0,0,0,0.02); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
              <div style="width: 56px; height: 56px; border-radius: 12px; background: #f0f9ff; color: #0ea5e9; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                <span class="material-symbols-outlined" style="font-size: 28px;">verified_user</span>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Integrity</h3>
              <p style="color: #64748b; line-height: 1.6; font-size: 0.95rem;">Transparency is our bedrock. We engineer secure, compliant, and ethically sound AI and software systems.</p>
            </div>
            
            <!-- Value 3 -->
            <div class="animate-fade-in-up delay-400" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; box-shadow: 0 10px 20px rgba(0,0,0,0.02); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
              <div style="width: 56px; height: 56px; border-radius: 12px; background: #f0f9ff; color: #0ea5e9; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                <span class="material-symbols-outlined" style="font-size: 28px;">workspace_premium</span>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Excellence</h3>
              <p style="color: #64748b; line-height: 1.6; font-size: 0.95rem;">We adhere to rigorous standards of code quality and architectural design to ensure flawless delivery.</p>
            </div>
            
            <!-- Value 4 -->
            <div class="animate-fade-in-up delay-500" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; box-shadow: 0 10px 20px rgba(0,0,0,0.02); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
              <div style="width: 56px; height: 56px; border-radius: 12px; background: #f0f9ff; color: #0ea5e9; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                <span class="material-symbols-outlined" style="font-size: 28px;">groups</span>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Scalability</h3>
              <p style="color: #64748b; line-height: 1.6; font-size: 0.95rem;">Every solution is architected with a forward-looking perspective to handle exponential growth gracefully.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section style="padding: 80px 0; background: #07476f; color: white;">
        <div class="container max-w-4xl text-center">
          <h2 class="animate-fade-in-up" style="font-size: 2.5rem; font-weight: 800; margin-bottom: 24px; letter-spacing: -0.02em;">A Culture of Agile Engineering</h2>
          <p class="animate-fade-in-up delay-100" style="font-size: 1.15rem; color: rgba(255,255,255,0.8); line-height: 1.7; margin-bottom: 40px;">
            Our team is a carefully curated collective of senior engineers, data scientists, and strategists. We operate with an agile mindset, fostering an environment where deep technical expertise meets creative problem-solving. We are dedicated, relentless, and driven by impact.
          </p>
          <div class="animate-fade-in-up delay-200" style="display: flex; gap: 16px; justify-content: center;">
            <a href="#/contact" style="display: inline-flex; align-items: center; padding: 14px 32px; background: #0ea5e9; color: white; font-weight: 600; border-radius: 50px; text-decoration: none; transition: background 0.2s;" onmouseover="this.style.background='#0284c7';" onmouseout="this.style.background='#0ea5e9';">
              Join Our Journey <span class="material-symbols-outlined ml-2 text-sm">rocket_launch</span>
            </a>
            <a href="#/contact" style="display: inline-flex; align-items: center; padding: 14px 32px; background: transparent; color: white; font-weight: 600; border: 2px solid rgba(255,255,255,0.3); border-radius: 50px; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)';" onmouseout="this.style.background='transparent';">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

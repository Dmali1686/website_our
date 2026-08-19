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
            <div class="animate-fade-in-up" style="display: inline-block; padding: 8px 20px; background: rgba(255, 255, 255, 0.1); color: #ffffff; font-weight: 600; font-family: 'Inter', sans-serif; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 50px; margin-bottom: 24px; border: 1px solid rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px);">
              OUR VISION
            </div>
            <h1 class="animate-fade-in-up delay-100" style="margin-bottom: 24px; font-weight: 700; font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 4.5vw, 4rem); color: #ffffff; line-height: 1.1;">
              Empowering growth <br/>
              <span class="text-gradient-hero">through technology.</span>
            </h1>
            <p class="hero-subtitle animate-fade-in-up delay-200" style="font-family: 'Inter', sans-serif; font-size: 1.15rem; line-height: 1.7; margin-bottom: 36px; font-weight: 400; color: rgba(255, 255, 255, 0.9); max-width: 600px;">
              We empower enterprises to navigate the complexities of the modern digital landscape through scalable, high-performance software architecture and state-of-the-art artificial intelligence integration.
            </p>
            <div class="animate-fade-in-up delay-300">
              <a href="#/portfolio" class="btn-primary" style="background: #ffffff; color: #07476f; font-family: 'Inter', sans-serif; font-weight: 600; padding: 14px 28px; border-radius: 8px; display: inline-flex; align-items: center; transition: all 0.3s ease;">
                Discover Our Solutions
                <span class="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
          
        </div>
      </section>

      <!-- The Journey & What We Do -->
      <section style="padding: 100px 0; background: #ffffff; position: relative;">
        <style>
          .about-journey-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
          @media (max-width: 900px) {
            .about-journey-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .about-journey-grid h2 {
              font-size: 1.8rem !important;
            }
            .about-journey-grid h3 {
              font-size: 1.1rem !important;
            }
            .about-journey-grid .journey-heading-main {
              font-size: 1.4rem !important;
            }
          }
        </style>
        <div class="container">
          <div class="about-journey-grid">
            
            <!-- Timeline side -->
            <div class="animate-fade-in-up" id="journey-section">
              <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; color: #07476f; margin-bottom: 12px; letter-spacing: -0.02em;">The Cresenix Journey</h2>
              <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; color: #64748b; margin-bottom: 40px;">From Code to Intelligence. From Ideas to Impact.</p>
              
              <div id="journey-timeline" style="position: relative; padding-left: 48px; margin-left: 24px;">
                <!-- Base line -->
                <div style="position: absolute; left: 0; top: 24px; bottom: 24px; width: 2px; background: #e2e8f0; z-index: 1;"></div>
                
                <!-- Animated fill line -->
                <div id="journey-line-fill" style="position: absolute; left: 0; top: 24px; width: 2px; background: #07476f; height: 0%; z-index: 2; will-change: height;"></div>
                
                <!-- Stop 1 -->
                <div class="journey-stop" style="position: relative; margin-bottom: 40px; z-index: 3;">
                  <div class="journey-dot" style="position: absolute; left: -74px; top: 0; width: 48px; height: 48px; background: #ffffff; border: 2px solid #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.05); transition: all 0.4s ease;">
                    <span class="material-symbols-outlined" style="font-size: 20px;">rocket_launch</span>
                  </div>
                  <div class="journey-text" style="opacity: 0.5; transition: opacity 0.4s ease;">
                    <div style="font-family: 'Inter', sans-serif; color: #0ea5e9; font-weight: 700; font-size: 0.9rem; margin-bottom: 4px;">2022</div>
                    <h3 style="font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Our Beginning</h3>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #64748b; line-height: 1.6;">Started as a specialized development company focused on complex enterprise integrations.</p>
                  </div>
                </div>
                
                <!-- Stop 2 -->
                <div class="journey-stop" style="position: relative; margin-bottom: 40px; z-index: 3;">
                  <div class="journey-dot" style="position: absolute; left: -74px; top: 0; width: 48px; height: 48px; background: #ffffff; border: 2px solid #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.05); transition: all 0.4s ease;">
                    <span class="material-symbols-outlined" style="font-size: 20px;">code</span>
                  </div>
                  <div class="journey-text" style="opacity: 0.5; transition: opacity 0.4s ease;">
                    <div style="font-family: 'Inter', sans-serif; color: #0ea5e9; font-weight: 700; font-size: 0.9rem; margin-bottom: 4px;">2023</div>
                    <h3 style="font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Expanding Solutions</h3>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #64748b; line-height: 1.6;">Delivered robust web, mobile and enterprise solutions that helped businesses scale.</p>
                  </div>
                </div>
                
                <!-- Stop 3 -->
                <div class="journey-stop" style="position: relative; z-index: 3;">
                  <div class="journey-dot" style="position: absolute; left: -74px; top: 0; width: 48px; height: 48px; background: #ffffff; border: 2px solid #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #cbd5e1; box-shadow: 0 8px 16px rgba(0,0,0,0.05); transition: all 0.4s ease;">
                    <span class="material-symbols-outlined" style="font-size: 20px;">psychology</span>
                  </div>
                  <div class="journey-text" style="opacity: 0.5; transition: opacity 0.4s ease;">
                    <div style="font-family: 'Inter', sans-serif; color: #07476f; font-weight: 800; font-size: 0.9rem; margin-bottom: 4px;">TODAY</div>
                    <h3 style="font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">AI & Software Consultancy</h3>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #64748b; line-height: 1.6;">Evolved into a leading AI consultancy delivering measurable business impact through intelligent systems.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content side with Image -->
            <div class="animate-fade-in-up delay-200">
              <div style="border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.08); margin-bottom: 32px; position: relative;">
                <img src="/images/about-team.png" alt="Cresenix Team Collaborating" style="width: 100%; height: auto; display: block;" />
              </div>
              <h3 class="journey-heading-main" style="font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 800; color: #07476f; line-height: 1.2; margin-bottom: 16px; letter-spacing: -0.02em;">We turn ideas into scalable digital solutions.</h3>
              
              <style>
                .about-reveal-word {
                  font-family: 'Inter', sans-serif;
                  color: rgba(71, 85, 105, 0.2);
                  transition: color 0.1s ease-out;
                  display: inline-block;
                  margin-right: 0.25em;
                }
                .about-reveal-word.revealed {
                  color: rgba(71, 85, 105, 1);
                }
              </style>
              
              <p id="about-text-reveal" style="font-family: 'Inter', sans-serif; line-height: 1.7; font-size: 1.05rem;">
                ${"What began as a specialized development company has evolved into a leading AI and software consultancy. We recognized early that strong system architecture combined with artificial intelligence is shaping the future of business. From robust ERP platforms to secure LLMs, our work is driven by technical excellence and measurable outcomes."
                  .split(' ')
                  .map(word => `<span class="about-reveal-word">${word}</span>`)
                  .join('')}
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Leadership -->
      <section style="padding: 60px 0; background: #f8fafc; border-top: 1px solid #f1f5f9;">
        <style>
          .about-leadership-grid {
            display: flex;
            justify-content: center;
            gap: 32px;
          }
          .about-leadership-grid > div {
            width: 100%;
            max-width: 450px;
          }
          .about-leadership-title {
            font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 800; color: #07476f; letter-spacing: -0.02em;
          }
          @media (max-width: 600px) {
            .about-leadership-title { font-size: 1.8rem; }
            .about-leadership-grid { gap: 24px; flex-direction: column; align-items: center; }
          }
        </style>
        <div class="container text-center mb-10" style="margin-bottom: 56px;">
          <div class="animate-fade-in-up" style="display: inline-block; padding: 6px 16px; background: #e0f2fe; color: #0369a1; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em; border-radius: 50px; margin-bottom: 12px;">
            LEADERSHIP
          </div>
          <h2 class="about-leadership-title animate-fade-in-up delay-100">Architecting Vision</h2>
        </div>
        
        <div class="container max-w-6xl">
          <div class="about-leadership-grid">
            
            <!-- Founder & CEO Card -->
            <div class="animate-fade-in-up delay-200" style="background: #ffffff; border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.06); border: 1px solid #f1f5f9; width: 100%; max-width: 1000px !important; min-height: 450px; overflow: hidden; margin: 0 auto; display: flex; flex-wrap: wrap;">
              
              <!-- Left Side: Image -->
              <div style="flex: 1 1 400px; position: relative; min-height: 400px;">
                <img src="/images/raj.jpeg" alt="Raj Bhandari — Founder and CEO" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;" />
              </div>

              <!-- Right Side: Content Wrapper -->
              <div style="flex: 1 1 450px; padding: 48px 56px; display: flex; flex-direction: column; justify-content: center;">
                
                <h3 style="font-family: 'Playfair Display', serif; font-size: 2.4rem; font-weight: 800; color: #0f172a; margin-bottom: 6px; letter-spacing: -0.02em;">Raj Bhandari</h3>
                <div style="font-family: 'Inter', sans-serif; color: #0ea5e9; font-weight: 700; font-size: 0.95rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 24px;">Founder & CEO</div>
                
                <div style="font-family: 'Inter', sans-serif; font-size: 1.15rem; line-height: 1.6; color: #334155; font-style: italic; font-weight: 500; margin-bottom: 24px; border-left: 3px solid #0ea5e9; padding-left: 20px;">
                  "The true power of AI isn't in replacing human ingenuity; it's in augmenting it. Our goal is to build digital infrastructure so intuitive and powerful that it becomes invisible."
                </div>
                
                <p style="font-family: 'Inter', sans-serif; color: #64748b; line-height: 1.6; font-size: 1rem; margin-bottom: 32px; font-weight: 400;">
                  With a deep background in enterprise architecture, Raj founded Cresenix Solutions to bridge the gap between theoretical AI capabilities and practical, scalable business applications.
                </p>
                
                <div style="display: flex; flex-wrap: wrap; gap: 16px;">
                  <a href="tel:+917387792415" style="display: flex; align-items: center; gap: 10px; padding: 12px 24px; border-radius: 50px; background: #ffffff; color: #334155; border: 1px solid #e2e8f0; font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 600; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);" onmouseover="this.style.background='#0ea5e9'; this.style.color='white'; this.style.borderColor='#0ea5e9'; this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 20px -8px rgba(14,165,233,0.5)';" onmouseout="this.style.background='#ffffff'; this.style.color='#334155'; this.style.borderColor='#e2e8f0'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.02)';">
                    <span class="material-symbols-outlined" style="font-size: 20px;">call</span>
                    +91 73877 92415
                  </a>
                  <a href="mailto:info@cresenixsolutions.com" style="display: flex; align-items: center; gap: 10px; padding: 12px 24px; border-radius: 50px; background: #ffffff; color: #334155; border: 1px solid #e2e8f0; font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 600; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);" onmouseover="this.style.background='#0ea5e9'; this.style.color='white'; this.style.borderColor='#0ea5e9'; this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 20px -8px rgba(14,165,233,0.5)';" onmouseout="this.style.background='#ffffff'; this.style.color='#334155'; this.style.borderColor='#e2e8f0'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.02)';">
                    <span class="material-symbols-outlined" style="font-size: 20px;">mail</span>
                    info@cresenixsolutions.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Core Values — Dark Carousel -->
      <section id="values-carousel-section" style="padding: 100px 0; background: #0f172a; overflow: hidden; position: relative;">
        <!-- Subtle gradient orbs for depth -->
        <div style="position: absolute; top: -120px; left: -120px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%); pointer-events: none;"></div>
        <div style="position: absolute; bottom: -120px; right: -120px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(7,71,111,0.15) 0%, transparent 70%); pointer-events: none;"></div>
        
        <style>
          .val-carousel-wrap {
            max-width: 1200px; margin: 0 auto; padding: 0 24px;
            position: relative;
          }
          .val-carousel-track {
            display: flex;
            gap: 28px;
            transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform;
          }
          .val-card {
            flex: 0 0 calc(33.333% - 19px);
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 20px;
            padding: 40px 32px;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
          }
          .val-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 20px;
            padding: 1px;
            background: linear-gradient(135deg, rgba(14,165,233,0) 0%, rgba(14,165,233,0) 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            transition: background 0.4s ease;
            pointer-events: none;
          }
          .val-card:hover {
            transform: translateY(-10px) scale(1.03);
            border-color: rgba(14,165,233,0.3);
            box-shadow: 0 20px 60px rgba(14,165,233,0.15), 0 0 40px rgba(14,165,233,0.08);
          }
          .val-card:hover::before {
            background: linear-gradient(135deg, rgba(14,165,233,0.5) 0%, rgba(7,71,111,0.5) 100%);
          }
          .val-card:hover .val-card-icon {
            transform: scale(1.15) rotate(-5deg);
            box-shadow: 0 8px 24px rgba(14,165,233,0.3);
          }
          .val-card:hover .val-card-number {
            opacity: 1;
            color: #0ea5e9;
          }
          .val-card-icon {
            width: 64px; height: 64px;
            border-radius: 16px;
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 28px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .val-card-number {
            position: absolute;
            top: 24px; right: 28px;
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            font-weight: 800;
            opacity: 0.08;
            color: #ffffff;
            transition: all 0.4s ease;
            line-height: 1;
          }
          .val-card h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.35rem;
            font-weight: 700;
            color: #f1f5f9;
            margin-bottom: 14px;
          }
          .val-card p {
            font-family: 'Inter', sans-serif;
            color: rgba(148, 163, 184, 0.9);
            line-height: 1.7;
            font-size: 0.95rem;
          }
          .val-carousel-nav {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: 48px;
          }
          .val-dot {
            width: 10px; height: 10px;
            border-radius: 50%;
            background: rgba(255,255,255,0.2);
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
          }
          .val-dot.active {
            background: #0ea5e9;
            width: 32px;
            border-radius: 5px;
            box-shadow: 0 0 12px rgba(14,165,233,0.4);
          }
          .val-carousel-btn {
            width: 44px; height: 44px;
            border-radius: 50%;
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.7);
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .val-carousel-btn:hover {
            background: rgba(14,165,233,0.2);
            border-color: rgba(14,165,233,0.4);
            color: #0ea5e9;
          }
          @media (max-width: 900px) {
            .val-card { flex: 0 0 calc(50% - 14px); }
          }
          @media (max-width: 600px) {
            .val-card { flex: 0 0 100%; }
          }
        </style>
        
        <div class="val-carousel-wrap">
          <div style="text-align: center; margin-bottom: 56px;">
            <div class="animate-fade-in-up" style="display: inline-block; padding: 6px 16px; background: rgba(14,165,233,0.15); color: #38bdf8; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em; border-radius: 50px; margin-bottom: 16px; border: 1px solid rgba(14,165,233,0.2);">
              OUR DNA
            </div>
            <h2 class="animate-fade-in-up delay-100" style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; color: #f1f5f9; letter-spacing: -0.02em;">The Principles That Guide Us</h2>
          </div>
          
          <div style="overflow: hidden; border-radius: 20px; padding: 30px 20px; margin: -30px -20px;">
            <div class="val-carousel-track" id="val-carousel-track">
              <!-- Card 1 -->
              <div class="val-card">
                <div class="val-card-number">01</div>
                <div class="val-card-icon" style="background: linear-gradient(135deg, rgba(14,165,233,0.2), rgba(56,189,248,0.1));">
                  <span class="material-symbols-outlined" style="font-size: 30px; color: #38bdf8;">lightbulb</span>
                </div>
                <h3>Innovation</h3>
                <p>We anticipate trends and explore frontier technologies to deliver solutions that provide a competitive advantage.</p>
              </div>
              
              <!-- Card 2 -->
              <div class="val-card">
                <div class="val-card-number">02</div>
                <div class="val-card-icon" style="background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(167,139,250,0.1));">
                  <span class="material-symbols-outlined" style="font-size: 30px; color: #a78bfa;">verified_user</span>
                </div>
                <h3>Integrity</h3>
                <p>Transparency is our bedrock. We engineer secure, compliant, and ethically sound AI and software systems.</p>
              </div>
              
              <!-- Card 3 -->
              <div class="val-card">
                <div class="val-card-number">03</div>
                <div class="val-card-icon" style="background: linear-gradient(135deg, rgba(234,179,8,0.2), rgba(250,204,21,0.1));">
                  <span class="material-symbols-outlined" style="font-size: 30px; color: #facc15;">workspace_premium</span>
                </div>
                <h3>Excellence</h3>
                <p>We adhere to rigorous standards of code quality and architectural design to ensure flawless delivery.</p>
              </div>
              
              <!-- Card 4 -->
              <div class="val-card">
                <div class="val-card-number">04</div>
                <div class="val-card-icon" style="background: linear-gradient(135deg, rgba(16,185,129,0.2), rgba(52,211,153,0.1));">
                  <span class="material-symbols-outlined" style="font-size: 30px; color: #34d399;">groups</span>
                </div>
                <h3>Scalability</h3>
                <p>Every solution is architected with a forward-looking perspective to handle exponential growth gracefully.</p>
              </div>
              
              <!-- Card 5 -->
              <div class="val-card">
                <div class="val-card-number">05</div>
                <div class="val-card-icon" style="background: linear-gradient(135deg, rgba(244,63,94,0.2), rgba(251,113,133,0.1));">
                  <span class="material-symbols-outlined" style="font-size: 30px; color: #fb7185;">speed</span>
                </div>
                <h3>Agility</h3>
                <p>We move fast without breaking things. Our agile methodology ensures rapid iteration and continuous delivery of value.</p>
              </div>
              
              <!-- Card 6 -->
              <div class="val-card">
                <div class="val-card-number">06</div>
                <div class="val-card-icon" style="background: linear-gradient(135deg, rgba(14,165,233,0.2), rgba(56,189,248,0.1));">
                  <span class="material-symbols-outlined" style="font-size: 30px; color: #38bdf8;">security</span>
                </div>
                <h3>Security</h3>
                <p>We build security into every layer of our architecture. Your data and systems are protected by enterprise-grade standards.</p>
              </div>
            </div>
          </div>
          
          <!-- Navigation -->
          <div class="val-carousel-nav">
            <button class="val-carousel-btn" id="val-prev" aria-label="Previous">
              <span class="material-symbols-outlined" style="font-size: 20px;">chevron_left</span>
            </button>
            <div id="val-dots" style="display: flex; gap: 8px;"></div>
            <button class="val-carousel-btn" id="val-next" aria-label="Next">
              <span class="material-symbols-outlined" style="font-size: 20px;">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section style="padding: 80px 0; background: #07476f; color: white;">
        <style>
          .about-cta-container { max-width: 900px; margin: 0 auto; padding: 0 24px; text-align: center; }
          .about-cta-title { font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; margin-bottom: 24px; letter-spacing: -0.02em; }
          .about-cta-text { font-family: 'Inter', sans-serif; font-size: 1.15rem; color: rgba(255,255,255,0.8); line-height: 1.7; margin-bottom: 40px; }
          .about-cta-buttons { display: flex; gap: 16px; justify-content: center; }
          .about-cta-btn { display: inline-flex; justify-content: center; align-items: center; padding: 14px 32px; font-family: 'Inter', sans-serif; font-weight: 600; border-radius: 50px; text-decoration: none; transition: all 0.2s; }
          
          @media (max-width: 600px) {
            .about-cta-title { font-size: 1.8rem; }
            .about-cta-text { font-size: 1rem; }
            .about-cta-buttons { flex-direction: column; width: 100%; }
            .about-cta-btn { width: 100%; }
          }
        </style>
        <div class="about-cta-container">
          <h2 class="about-cta-title animate-fade-in-up">A Culture of Agile Engineering</h2>
          <p class="about-cta-text animate-fade-in-up delay-100">
            Our team is a carefully curated collective of senior engineers, data scientists, and strategists. We operate with an agile mindset, fostering an environment where deep technical expertise meets creative problem-solving. We are dedicated, relentless, and driven by impact.
          </p>
          <div class="about-cta-buttons animate-fade-in-up delay-200">
            <a href="#/contact" class="about-cta-btn" style="background: #0ea5e9; color: white;" onmouseover="this.style.background='#0284c7';" onmouseout="this.style.background='#0ea5e9';">
              Join Our Journey <span class="material-symbols-outlined ml-2 text-sm" style="margin-left: 8px;">rocket_launch</span>
            </a>
            <a href="#/contact" class="about-cta-btn" style="background: transparent; color: white; border: 2px solid rgba(255,255,255,0.3);" onmouseover="this.style.background='rgba(255,255,255,0.1)';" onmouseout="this.style.background='transparent';">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

export function initAbout(): void {
  const section = document.getElementById('journey-section');
  const fillLine = document.getElementById('journey-line-fill');
  const stops = document.querySelectorAll('.journey-stop');
  const textRevealContainer = document.getElementById('about-text-reveal');
  
  if (!section || !fillLine || stops.length === 0) return;

  const revealWords = textRevealContainer ? textRevealContainer.querySelectorAll('.about-reveal-word') : [];
  const totalWords = revealWords.length;

  const handleScroll = () => {
    const rect = section.getBoundingClientRect();
    const viewportH = window.innerHeight;
    
    // We want the animation to start when the top of the section reaches the middle of the viewport
    // and end when the bottom of the section (minus some padding) reaches the middle.
    const startY = viewportH / 2;
    
    // Total scrollable distance for the line to fill up completely
    const totalDistance = rect.height;
    
    // How far we have scrolled into the section (relative to the middle of the screen)
    const scrolled = startY - rect.top;
    
    let progress = scrolled / totalDistance;
    progress = Math.max(0, Math.min(1, progress));
    
    // Set fill line height
    fillLine.style.height = `${progress * 100}%`;
    
    // Activate stops based on progress
    stops.forEach((stop, index) => {
      const stopProgressThreshold = index / (stops.length - 1);
      const dot = stop.querySelector('.journey-dot') as HTMLElement;
      const text = stop.querySelector('.journey-text') as HTMLElement;
      
      // If the fill line has reached this stop
      if (progress >= stopProgressThreshold - 0.05) { // slight offset so it lights up just before line hits it
        if (dot) {
          dot.style.borderColor = '#07476f';
          dot.style.backgroundColor = '#07476f';
          dot.style.color = '#ffffff';
          dot.style.boxShadow = '0 8px 16px rgba(7, 71, 111, 0.2)';
        }
        if (text) {
          text.style.opacity = '1';
        }
      } else {
        if (dot) {
          dot.style.borderColor = '#e2e8f0';
          dot.style.backgroundColor = '#ffffff';
          dot.style.color = '#cbd5e1';
          dot.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
        }
        if (text) {
          text.style.opacity = '0.5';
        }
      }
    });

    // Reveal text based on progress
    if (totalWords > 0) {
      const revealIndex = Math.floor(progress * totalWords);
      revealWords.forEach((word, index) => {
        if (index < revealIndex) {
          word.classList.add('revealed');
        } else {
          word.classList.remove('revealed');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Initial call
  handleScroll();

  // ── Values Carousel ──
  const track = document.getElementById('val-carousel-track') as HTMLElement;
  const dotsContainer = document.getElementById('val-dots') as HTMLElement;
  const prevBtn = document.getElementById('val-prev') as HTMLElement;
  const nextBtn = document.getElementById('val-next') as HTMLElement;

  if (track && dotsContainer && prevBtn && nextBtn) {
    const cards = track.querySelectorAll('.val-card');
    const totalCards = cards.length;
    
    // Determine visible count based on viewport
    const getVisibleCount = () => {
      if (window.innerWidth <= 600) return 1;
      if (window.innerWidth <= 900) return 2;
      return 3;
    };
    
    let currentIndex = 0;
    let autoplayTimer: ReturnType<typeof setInterval>;
    let visibleCount = getVisibleCount();
    const maxIndex = () => Math.max(0, totalCards - getVisibleCount());

    // Build dots
    const buildDots = () => {
      dotsContainer.innerHTML = '';
      const dotCount = maxIndex() + 1;
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'val-dot' + (i === currentIndex ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }
    };

    const updateDots = () => {
      const dots = dotsContainer.querySelectorAll('.val-dot');
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
      });
    };

    const slide = () => {
      const gap = 28;
      const firstCard = track.querySelector('.val-card') as HTMLElement;
      const cardWidth = firstCard ? firstCard.offsetWidth : 0;
      const offset = currentIndex * (cardWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
      updateDots();
    };

    const goTo = (idx: number) => {
      currentIndex = Math.max(0, Math.min(idx, maxIndex()));
      slide();
    };

    const next = () => {
      currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
      slide();
    };

    const prev = () => {
      currentIndex = currentIndex <= 0 ? maxIndex() : currentIndex - 1;
      slide();
    };

    // Auto-play
    const startAutoplay = () => {
      autoplayTimer = setInterval(next, 3000);
    };
    const stopAutoplay = () => {
      clearInterval(autoplayTimer);
    };

    // Events
    prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); startAutoplay(); });
    nextBtn.addEventListener('click', () => { stopAutoplay(); next(); startAutoplay(); });

    // Pause on hover
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    // Responsive resize
    window.addEventListener('resize', () => {
      const newVisible = getVisibleCount();
      if (newVisible !== visibleCount) {
        visibleCount = newVisible;
        currentIndex = Math.min(currentIndex, maxIndex());
        buildDots();
        slide();
      }
    });

    buildDots();
    slide();
    startAutoplay();
  }
}

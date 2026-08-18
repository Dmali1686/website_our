import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderCareersPage(): string {
  return `
    ${renderNavbar()}
    <div id="careers-wrapper" class="page-wrapper" style="background-color: #f0f9ff; color: #0f172a; font-family: 'Inter', sans-serif; transition: background-color 0.5s ease-out;">
      
      <!-- Hero Section -->
      <section class="career-color-section" data-color="#f0f9ff" style="position: relative; min-height: 50vh; display: flex; align-items: center; justify-content: center; padding: 160px 24px 80px; overflow: hidden;">
        <!-- Background decoration -->
        <div style="position: absolute; top: -20%; left: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
        <div style="position: absolute; bottom: -20%; right: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
        
        <div class="container text-center" style="position: relative; z-index: 5; max-width: 800px;">
          <div class="animate-fade-in-up" style="display: inline-block; padding: 6px 16px; background: rgba(14, 165, 233, 0.15); color: #0284c7; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em; border-radius: 50px; margin-bottom: 24px; border: 1px solid rgba(14, 165, 233, 0.3);">
            CAREERS AT CRESENIX
          </div>
          <h1 class="animate-fade-in-up delay-100" style="font-family: 'Playfair Display', serif; font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 24px; line-height: 1.1;">
            Build The Future <br/><span style="background: linear-gradient(90deg, #0284c7, #4f46e5); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">With Us</span>
          </h1>
          <p class="animate-fade-in-up delay-200" style="font-family: 'Inter', sans-serif; font-size: 1.15rem; color: #475569; line-height: 1.7; max-width: 650px; margin: 0 auto;">
            We are a team of passionate engineers, designers, and strategists building scalable digital solutions and intelligent AI systems. Join us in shaping tomorrow.
          </p>
        </div>
      </section>

      <!-- Why Join Us Section -->
      <section class="career-color-section" data-color="#bae6fd" style="padding: 80px 24px; border-top: 1px solid rgba(0,0,0,0.05); border-bottom: 1px solid rgba(0,0,0,0.05);">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
            
            <div class="animate-fade-in-up delay-100" style="text-align: center; padding: 32px;">
              <div style="width: 64px; height: 64px; margin: 0 auto 24px; background: rgba(56, 189, 248, 0.2); border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(56, 189, 248, 0.4);">
                <span class="material-symbols-outlined" style="color: #0284c7; font-size: 32px;">public</span>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 12px; color: #0f172a;">Remote First</h3>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Work from anywhere. We value deep work and async communication over rigid office hours.</p>
            </div>
            
            <div class="animate-fade-in-up delay-200" style="text-align: center; padding: 32px;">
              <div style="width: 64px; height: 64px; margin: 0 auto 24px; background: rgba(167, 139, 250, 0.2); border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(167, 139, 250, 0.4);">
                <span class="material-symbols-outlined" style="color: #6d28d9; font-size: 32px;">school</span>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 12px; color: #0f172a;">Continuous Learning</h3>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Stipends for courses, conferences, and books. We invest heavily in our team's growth.</p>
            </div>
            
            <div class="animate-fade-in-up delay-300" style="text-align: center; padding: 32px;">
              <div style="width: 64px; height: 64px; margin: 0 auto 24px; background: rgba(52, 211, 153, 0.2); border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(52, 211, 153, 0.4);">
                <span class="material-symbols-outlined" style="color: #059669; font-size: 32px;">health_and_safety</span>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 12px; color: #0f172a;">Health & Wellness</h3>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Comprehensive health coverage, flexible time off, and mental health resources.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- Open Positions -->
      <section class="career-color-section" data-color="#0284c7" style="padding: 100px 24px;">
        <div class="container max-w-3xl">
          <div class="text-center mb-12">
            <h2 class="animate-fade-in-up" style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; color: #ffffff; margin-bottom: 16px; text-shadow: 0 2px 10px rgba(0,0,0,0.1);">Open Roles</h2>
            <p class="animate-fade-in-up delay-100" style="color: #e0f2fe; font-size: 1.1rem;">Find your next big opportunity below.</p>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            
            <!-- Job Card 1 -->
            <div class="animate-fade-in-up delay-200" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; padding: 32px; backdrop-filter: blur(16px); transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.borderColor='rgba(255, 255, 255, 0.5)'; this.style.boxShadow='0 12px 30px rgba(0,0,0,0.15)';" onmouseout="this.style.transform='none'; this.style.borderColor='rgba(255,255,255,0.2)'; this.style.boxShadow='none';">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
                <div>
                  <h3 style="font-family: 'Inter', sans-serif; font-size: 1.4rem; font-weight: 700; color: #ffffff; margin-bottom: 8px;">Senior Frontend Developer</h3>
                  <div style="display: flex; gap: 16px; color: #e0f2fe; font-size: 0.9rem;">
                    <span style="display: flex; align-items: center; gap: 6px;"><span class="material-symbols-outlined" style="font-size: 18px;">location_on</span> Remote</span>
                    <span style="display: flex; align-items: center; gap: 6px;"><span class="material-symbols-outlined" style="font-size: 18px;">schedule</span> Full-time</span>
                  </div>
                </div>
                <a href="#/contact" style="background: #ffffff; color: #0284c7; font-weight: 600; padding: 10px 24px; border-radius: 50px; text-decoration: none; transition: background 0.2s;" onmouseover="this.style.background='#f0f9ff';" onmouseout="this.style.background='#ffffff';">Apply Now</a>
              </div>
              <p style="color: #f0f9ff; line-height: 1.6; font-size: 0.95rem;">
                We are looking for an experienced Frontend Developer with deep knowledge of modern JavaScript frameworks (React, Vue) and CSS architectures to build highly interactive, scalable user interfaces.
              </p>
            </div>

            <!-- Job Card 2 -->
            <div class="animate-fade-in-up delay-300" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; padding: 32px; backdrop-filter: blur(16px); transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.borderColor='rgba(255, 255, 255, 0.5)'; this.style.boxShadow='0 12px 30px rgba(0,0,0,0.15)';" onmouseout="this.style.transform='none'; this.style.borderColor='rgba(255,255,255,0.2)'; this.style.boxShadow='none';">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
                <div>
                  <h3 style="font-family: 'Inter', sans-serif; font-size: 1.4rem; font-weight: 700; color: #ffffff; margin-bottom: 8px;">Backend Software Engineer</h3>
                  <div style="display: flex; gap: 16px; color: #e0f2fe; font-size: 0.9rem;">
                    <span style="display: flex; align-items: center; gap: 6px;"><span class="material-symbols-outlined" style="font-size: 18px;">location_on</span> Remote</span>
                    <span style="display: flex; align-items: center; gap: 6px;"><span class="material-symbols-outlined" style="font-size: 18px;">schedule</span> Full-time</span>
                  </div>
                </div>
                <a href="#/contact" style="background: #ffffff; color: #0284c7; font-weight: 600; padding: 10px 24px; border-radius: 50px; text-decoration: none; transition: background 0.2s;" onmouseover="this.style.background='#f0f9ff';" onmouseout="this.style.background='#ffffff';">Apply Now</a>
              </div>
              <p style="color: #f0f9ff; line-height: 1.6; font-size: 0.95rem;">
                Join our backend team to build and maintain robust APIs using Python and FastAPI. Experience with PostgreSQL and scalable cloud infrastructure is required.
              </p>
            </div>

          </div>
          
          <div class="animate-fade-in-up delay-400 text-center" style="margin-top: 48px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.2);">
            <p style="color: #e0f2fe; font-size: 1rem;">
              Don't see a role that fits? <a href="#/contact" style="color: #ffffff; text-decoration: underline; font-weight: 600;">Send us your resume</a> anyway! We're always looking for talent.
            </p>
          </div>
          
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

// Store reference to cleanup when navigating away
let careerScrollHandler: (() => void) | null = null;

export function initCareers(): void {
  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('motion-in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-fade-in-up').forEach(el => {
    observer.observe(el);
  });

  // Scroll listener for background color transition
  const wrapper = document.getElementById('careers-wrapper');
  const colorSections = document.querySelectorAll('.career-color-section');
  
  if (wrapper && colorSections.length > 0) {
    careerScrollHandler = () => {
      let activeColor = '#f0f9ff'; // Default to light blue
      colorSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Change color when section reaches the middle of the viewport
        if (rect.top <= window.innerHeight / 2) {
          activeColor = section.getAttribute('data-color') || activeColor;
        }
      });
      wrapper.style.backgroundColor = activeColor;
    };

    window.addEventListener('scroll', careerScrollHandler, { passive: true });
    // Trigger once on load
    careerScrollHandler();
  }
}

// Export a cleanup function if needed by router, but hashchange usually destroys DOM. 
// Just in case, it's good practice.
export function cleanupCareers(): void {
  if (careerScrollHandler) {
    window.removeEventListener('scroll', careerScrollHandler);
    careerScrollHandler = null;
  }
}

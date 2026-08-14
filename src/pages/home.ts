import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderHomePage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      <main class="ai-hero-full" style="height: 150vh; position: relative; z-index: 10;">
        
        <!-- Background Wrapper (to contain the -50px inset) -->
        <div style="position: absolute; inset: 0; overflow: hidden; z-index: 0;">
          <!-- Hero Background Layer -->
          <div id="hero-bg" style="position: absolute; inset: -50px; background-image: url('/images/hero-person.webp'); background-size: cover; background-position: center; will-change: filter, transform; filter: blur(0px); transform: scale(1);"></div>

          <!-- Gradient Overlay -->
          <div style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(180, 70, 0, 0.8) 0%, rgba(180, 70, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 100%);"></div>
        </div>
        
        <!-- Sticky text wrapper -->
        <div style="position: sticky; top: 0; left: 0; width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 5;">
            <div class="container" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; transform: translateY(-8vh);">
                <!-- Main Heading -->
                <h1 id="hero-main-text" style="color: white; font-family: 'Inter', sans-serif; font-size: clamp(3rem, 7vw, 6rem); font-weight: 700; line-height: 1.05; margin-bottom: 24px; max-width: 900px; letter-spacing: -0.03em; text-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5); will-change: transform;">
                    Build habits that<br/>actually stick
                </h1>

                <!-- Subheading -->
                <p style="color: white; font-family: 'Inter', sans-serif; font-size: clamp(1.1rem, 2vw, 1.4rem); font-weight: 500; line-height: 1.5; margin-bottom: 0; max-width: 650px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                    You see the right habits at the right time so your day never feels crowded.
                </p>
            </div>
            
        </div>

        <!-- 3D Panels Section (Absolute, scrolls naturally) -->
        <div style="position: absolute; top: calc(100vh - 130px); left: 0; width: 100%; z-index: 10;">
          <div class="panels3d-demo" id="panels-demo">
            <div class="panels3d-space">
              <div class="panels3d-scene">
                <div class="panels3d-wrap" id="panels-wrap">
                  <div class="panels3d-panel" style="padding: 0;">
                    <img src="/images/mobile_screen_1.png" alt="Mobile App 1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 28px; pointer-events: none;" />
                  </div>
                  <div class="panels3d-panel" style="padding: 0;">
                    <img src="/images/mobile_screen_1.png" alt="Mobile App 2" style="width: 100%; height: 100%; object-fit: cover; border-radius: 28px; pointer-events: none;" />
                  </div>
                  <div class="panels3d-panel" style="padding: 0;">
                    <img src="/images/mobile_screen_1.png" alt="Mobile App 3" style="width: 100%; height: 100%; object-fit: cover; border-radius: 28px; pointer-events: none;" />
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        
        <!-- Bottom Fade to seamlessly blend into next section -->
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 300px; background: linear-gradient(to bottom, transparent, #fafafa); z-index: 2;"></div>
      </main>
      
      <!-- Text Content Section -->
      <section style="background: #fafafa; padding: 120px 20px 60px; text-align: center; position: relative; z-index: 5;">
        <div class="container" style="max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
          
          <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(2rem, 4.5vw, 3.5rem); font-weight: 700; color: #111827; line-height: 1.3; letter-spacing: -0.02em; margin-bottom: 0; max-width: 900px;">
            Build steady daily 
            <span style="display: inline-flex; align-items: center; justify-content: center; background: #e07a5f; border-radius: 50px; padding: 0 0.8em; height: 1.1em; vertical-align: -0.15em; margin: 0 0.1em; font-size: 0.85em; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">🚴</span> 
            habits with a layout that keeps your mornings, evenings, 
            <span style="display: inline-flex; align-items: center; justify-content: center; background: #90e0ef; border-radius: 50px; padding: 0 0.8em; height: 1.1em; vertical-align: -0.15em; margin: 0 0.1em; font-size: 0.85em; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">⛅</span> 
            and focus simple to follow.
          </h2>



        </div>
      </section>

      <!-- Clients as Family Section -->
      <section style="background: #ffffff; padding: 60px 20px 120px; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
          
          <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #111827; letter-spacing: -0.03em; margin-bottom: 16px;">
            <span style="text-decoration: line-through; color: #9ca3af; margin-right: 16px; font-weight: 600;">Clients</span>Family
          </h2>

          <p style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 500; color: #4b5563; margin-bottom: 64px;">
            We treat our clients as our family members.
          </p>

          <!-- Cards Container -->
          <div style="display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; width: 100%;">
            <!-- Card 1 -->
            <div style="background: transparent; width: 100%; max-width: 340px; text-align: center; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-8px)'" onmouseout="this.style.transform='translateY(0)'">
              <img src="/images/geekbychoice_casestudy.png" alt="GeekByChoice Case Study" style="width: 100%; height: auto; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);" />
            </div>

            <!-- Card 2 -->
            <div style="background: transparent; width: 100%; max-width: 340px; text-align: center; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-8px)'" onmouseout="this.style.transform='translateY(0)'">
              <img src="/images/ngo_casestudy.png" alt="MH14 Animal NGO Case Study" style="width: 100%; height: auto; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);" />
            </div>

            <!-- Card 3 -->
            <div style="background: transparent; width: 100%; max-width: 340px; text-align: center; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-8px)'" onmouseout="this.style.transform='translateY(0)'">
              <img src="/images/jayshree_casestudy.png" alt="Jayshree Electrocoating Case Study" style="width: 100%; height: auto; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);" />
            </div>

          </div>
        </div>
        </div>
      </section>

      <!-- Routine Poster Section -->
      <section style="padding: 60px 20px; background: #ffffff; display: flex; justify-content: center;">
        <div style="background: #0f1115; border-radius: 24px; width: 100%; max-width: 1200px; min-height: 540px; position: relative; overflow: hidden; display: flex; align-items: center; padding: 60px 48px; box-sizing: border-box; background-image: url('/images/hero-person.webp'); background-size: cover; background-position: center;">
          
          <!-- Gradient Overlay -->
          <div style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(15, 17, 21, 1) 0%, rgba(15, 17, 21, 0.95) 45%, rgba(15, 17, 21, 0.3) 100%); z-index: 1;"></div>

          <!-- Left Content -->
          <div style="flex: 1; z-index: 2; position: relative; max-width: 500px;">
             <h3 style="font-size: clamp(2rem, 4vw, 2.8rem); font-family: 'Inter', sans-serif; font-weight: 700; color: white; margin-bottom: 16px; letter-spacing: -0.02em;">Routine stacks</h3>
             <p style="font-size: 1.15rem; font-family: 'Inter', sans-serif; color: #d1d5db; margin-bottom: 40px; line-height: 1.6;">
               Group habits into simple blocks so your day feels organized instead of scattered.
             </p>
             <a href="#" style="display: inline-block; background: white; color: #111827; font-weight: 600; font-family: 'Inter', sans-serif; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-size: 1.05rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
               Start your routine now
             </a>
          </div>

          <!-- Right Phone Mockup -->
          <div style="flex: 1; display: flex; justify-content: flex-end; position: relative; z-index: 2; min-height: 400px; padding-right: 20px;">
             <div style="width: 320px; height: 500px; background: white; border-radius: 40px; border: 8px solid #1e293b; position: absolute; right: 0; top: -50px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); display: flex; flex-direction: column; padding: 20px 16px; overflow: hidden;">
               
               <!-- Phone Notch/Status -->
               <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; font-weight: 600; font-family: 'Inter', sans-serif; color: #0f172a; margin-bottom: 30px;">
                 <span>Mon, 07:32</span>
                 <div style="width: 70px; height: 22px; background: black; border-radius: 20px;"></div>
                 <div style="display: flex; gap: 4px;">
                   <span class="material-symbols-outlined" style="font-size: 14px;">signal_cellular_4_bar</span>
                   <span class="material-symbols-outlined" style="font-size: 14px;">wifi</span>
                   <span class="material-symbols-outlined" style="font-size: 14px;">battery_full</span>
                 </div>
               </div>

               <!-- Screen Content -->
               <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                 <h4 style="font-size: 1.4rem; font-weight: 700; font-family: 'Inter', sans-serif; color: #111827; line-height: 1.2; margin: 0;">Today's routine<br/>stacks</h4>
                 <span style="background: #fbbf24; color: #78350f; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">4 active stacks</span>
               </div>
               
               <!-- Mock blocks -->
               <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                 
                 <div style="background: #dcfce7; height: 130px; border-radius: 20px; padding: 16px; display: flex; flex-direction: column;">
                   <div><span style="background: #22c55e; color: white; padding: 4px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 700;">3 habits</span></div>
                   <div style="margin-top: auto;">
                     <div style="font-weight: 800; font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #14532d; margin-bottom: 4px;">Morning Start</div>
                     <div style="font-size: 0.7rem; color: #166534; line-height: 1.3;">Water, stretch, plan</div>
                   </div>
                 </div>

                 <div style="background: #f3e8ff; height: 130px; border-radius: 20px; padding: 16px; display: flex; flex-direction: column;">
                   <div><span style="background: #a855f7; color: white; padding: 4px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 700;">3 habits</span></div>
                   <div style="margin-top: auto;">
                     <div style="font-weight: 800; font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #4c1d95; margin-bottom: 4px;">Focus Block</div>
                     <div style="font-size: 0.7rem; color: #581c87; line-height: 1.3;">Deep work, break</div>
                   </div>
                 </div>

                 <div style="background: #ffedd5; height: 130px; border-radius: 20px; padding: 16px; display: flex; flex-direction: column;">
                   <div><span style="background: #f97316; color: white; padding: 4px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 700;">2 habits</span></div>
                   <div style="margin-top: auto;">
                     <div style="font-weight: 800; font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #7c2d12; margin-bottom: 4px;">Weekend Prep</div>
                     <div style="font-size: 0.7rem; color: #9a3412; line-height: 1.3;">Groceries, laundry</div>
                   </div>
                 </div>

                 <div style="background: #e0e7ff; height: 130px; border-radius: 20px; padding: 16px; display: flex; flex-direction: column;">
                   <div><span style="background: #6366f1; color: white; padding: 4px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 700;">2 habits</span></div>
                   <div style="margin-top: auto;">
                     <div style="font-weight: 800; font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #312e81; margin-bottom: 4px;">Evening Reset</div>
                     <div style="font-size: 0.7rem; color: #3730a3; line-height: 1.3;">Review, phone off</div>
                   </div>
                 </div>

               </div>
               
               <!-- Little popup overlapping -->
               <div style="position: absolute; left: -40px; top: 160px; background: white; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); padding: 16px; width: 170px; z-index: 10;">
                 <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                   <span style="font-weight: 700; font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #111827;">Morning Start</span>
                   <span style="background: #fbbf24; color: #78350f; padding: 2px 6px; border-radius: 8px; font-size: 0.65rem; font-weight: 700;">85%</span>
                 </div>
                 <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                   <span class="material-symbols-outlined" style="color: #22c55e; font-size: 16px; font-variation-settings: 'FILL' 1;">check_circle</span>
                   <span style="font-family: 'Inter', sans-serif; font-size: 0.7rem; color: #6b7280; text-decoration: line-through; line-height: 1.2;">Drink a full glass of water</span>
                 </div>
                 <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                   <span class="material-symbols-outlined" style="color: #22c55e; font-size: 16px; font-variation-settings: 'FILL' 1;">check_circle</span>
                   <span style="font-family: 'Inter', sans-serif; font-size: 0.7rem; color: #6b7280; text-decoration: line-through; line-height: 1.2;">Do a short stretch</span>
                 </div>
                 <div style="display: flex; align-items: flex-start; gap: 8px;">
                   <span class="material-symbols-outlined" style="color: #d1d5db; font-size: 16px; font-variation-settings: 'FILL' 1;">radio_button_unchecked</span>
                   <span style="font-family: 'Inter', sans-serif; font-size: 0.7rem; color: #111827; font-weight: 500; line-height: 1.2;">Review and plan the day</span>
                 </div>
               </div>

             </div>
          </div>

          <p style="font-size: 0.85rem; font-family: 'Inter', sans-serif; color: #9ca3af; position: absolute; bottom: 32px; left: 48px; z-index: 2; margin: 0;">
            *Simple blocks help you stay on track without thinking.
          </p>

        </div>
      </section>

      <!-- Services Section -->
      <section style="background: #fafafa; padding: 120px 20px; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
          
          <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #111827; letter-spacing: -0.03em; margin-bottom: 64px;">
            Services
          </h2>

          <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 24px; width: 100%; text-align: left;">
            
            <!-- Left Column (Two Stacked Boxes) -->
            <div style="flex: 1; min-width: 340px; display: flex; flex-direction: column; gap: 24px;">
              
              <!-- App Development -->
              <div style="flex: 1; background: white; border: 1px solid #e5e7eb; border-radius: 32px; padding: 48px; box-shadow: 0 10px 30px rgba(0,0,0,0.02); display: flex; flex-direction: column; justify-content: center; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="background: #eef2ff; width: 64px; height: 64px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                  <span class="material-symbols-outlined" style="color: #4f46e5; font-size: 32px;">smartphone</span>
                </div>
                <h3 style="font-family: 'Inter', sans-serif; font-weight: 700; font-size: 1.8rem; color: #111827; margin-bottom: 16px;">App Development</h3>
                <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; color: #6b7280; line-height: 1.6; margin: 0;">
                  We build highly scalable, fast, and beautiful applications for web and mobile platforms to help your business grow.
                </p>
              </div>

              <!-- LMS Systems -->
              <div style="flex: 1; background: white; border: 1px solid #e5e7eb; border-radius: 32px; padding: 48px; box-shadow: 0 10px 30px rgba(0,0,0,0.02); display: flex; flex-direction: column; justify-content: center; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="background: #fdf4ff; width: 64px; height: 64px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                  <span class="material-symbols-outlined" style="color: #c026d3; font-size: 32px;">school</span>
                </div>
                <h3 style="font-family: 'Inter', sans-serif; font-weight: 700; font-size: 1.8rem; color: #111827; margin-bottom: 16px;">LMS Systems</h3>
                <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; color: #6b7280; line-height: 1.6; margin: 0;">
                  Custom learning management systems tailored to your specific educational and corporate training needs.
                </p>
              </div>

            </div>

            <!-- Right Column (One Tall Box) -->
            <div style="flex: 1; min-width: 340px; display: flex;">
              
              <!-- ERP Systems -->
              <div style="flex: 1; background: linear-gradient(135deg, #111827 0%, #1f2937 100%); border-radius: 32px; padding: 64px 48px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                
                <!-- Decorative element -->
                <div style="position: absolute; right: -50px; bottom: -50px; width: 350px; height: 350px; background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%); border-radius: 50%;"></div>
                
                <div style="background: rgba(255,255,255,0.1); width: 64px; height: 64px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 32px; position: relative; z-index: 2; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);">
                  <span class="material-symbols-outlined" style="color: white; font-size: 32px;">account_tree</span>
                </div>
                
                <h3 style="font-family: 'Inter', sans-serif; font-weight: 700; font-size: 2.5rem; color: white; margin-bottom: 24px; position: relative; z-index: 2; line-height: 1.2;">ERP Systems</h3>
                
                <p style="font-family: 'Inter', sans-serif; font-size: 1.2rem; color: #d1d5db; line-height: 1.7; position: relative; z-index: 2; margin: 0;">
                  Enterprise resource planning software that connects your entire business in one streamlined, efficient platform. Maximize productivity, enhance data visibility, and automate your workflows across all departments.
                </p>
                
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- Globe Section -->
      <section style="background: #ffffff; padding: 120px 20px 80px; text-align: center; position: relative; overflow: hidden;">
        
        <!-- The Globe -->
        <div style="position: relative; width: 100%; max-width: 800px; height: 350px; overflow: hidden; margin: 0 auto; margin-bottom: 20px; display: flex; justify-content: center;">
          
          <!-- Globe Video -->
          <video autoplay loop muted playsinline style="width: 700px; height: 700px; object-fit: cover; border-radius: 50%; mix-blend-mode: multiply;">
            <source src="/globe-moving.mp4" type="video/mp4" />
          </video>
          
          <!-- Cloud Image Overlay -->
          <div style="position: absolute; bottom: -20px; left: -10%; width: 120%; height: 160px; background-image: url('/images/cloude_img.avif'); background-size: cover; background-position: top center; z-index: 5; pointer-events: none;"></div>
          
          <!-- Bottom Fade to white (in case the cloud image has hard edges) -->
          <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 80px; background: linear-gradient(to top, #ffffff 20%, transparent 100%); z-index: 6; pointer-events: none;"></div>
          
        </div>

        <!-- The Stats -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-around; max-width: 1000px; margin: 0 auto; gap: 40px; position: relative; z-index: 10;">
          <div>
            <h3 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 8px; color: #111827; letter-spacing: -0.04em; line-height: 1;">87<span style="color: #9333ea;">%</span></h3>
            <p style="font-size: 1.1rem; color: #4b5563; font-weight: 500; font-family: 'Inter', sans-serif; margin: 0; padding-top: 12px;">Faster AI execution</p>
          </div>
          <div>
            <h3 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 8px; color: #111827; letter-spacing: -0.04em; line-height: 1;">46</h3>
            <p style="font-size: 1.1rem; color: #4b5563; font-weight: 500; font-family: 'Inter', sans-serif; margin: 0; padding-top: 12px;">Sessions completed<br/>on average</p>
          </div>
          <div>
            <h3 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 8px; color: #111827; letter-spacing: -0.04em; line-height: 1;">32<span style="color: #2563eb;">+</span></h3>
            <p style="font-size: 1.1rem; color: #4b5563; font-weight: 500; font-family: 'Inter', sans-serif; margin: 0; padding-top: 12px;">Countries with active<br/>users</p>
          </div>
        </div>

      </section>

    </div>
    ${renderFooter()}
  `;
}

export function initHome(): void {
  // Hero Background Scroll Animation
  const heroBg = document.getElementById('hero-bg');
  const heroText = document.getElementById('hero-main-text');
  
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      // Calculate blur (0 to 20px) and scale (1 to 1.15)
      const maxBlur = 20;
      const blurAmount = Math.min(scrollY / 15, maxBlur);
      const scaleAmount = 1 + Math.min(scrollY / 2000, 0.15); // slight zoom
      
      heroBg.style.filter = `blur(${blurAmount}px)`;
      heroBg.style.transform = `scale(${scaleAmount})`;
      
      if (heroText) {
          const textScale = 1 + Math.min(scrollY / 3000, 0.1);
          heroText.style.transform = `scale(${textScale})`;
      }
    });
  }

  const space = document.querySelector('.panels3d-space') as HTMLElement;
  const wrap = document.getElementById('panels-wrap');

  if (space && wrap) {
    window.addEventListener('scroll', () => {
      // Get the position of the scene relative to the viewport
      const scene = document.querySelector('.panels3d-scene') as HTMLElement;
      if (!scene) return;
      const rect = scene.getBoundingClientRect();
      
      // Total distance the element travels from entering bottom to leaving top
      const totalDistance = window.innerHeight + rect.height;
      
      // How far it has traveled (0 when just entering bottom)
      const scrolled = window.innerHeight - rect.top;
      
      // Calculate progress from 0 to 1
      let progress = scrolled / totalDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      // Rotate between 0 and -60 degrees on Y axis, and maybe a bit on X
      const rotateY = progress * -60; 
      const rotateX = progress * 10;
      const translateZ = progress * 100;
      
      wrap.style.transform = `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }
}

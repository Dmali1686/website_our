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
          <div style="position: absolute; inset: 0;   background: linear-gradient(90deg, rgb(104 148 245 / 70%) 0%, rgb(70 115 172 / 40%) 50%, rgba(255, 255, 255, 0.1) 100%);"></div>
        </div>
        
        <!-- Sticky text wrapper -->
        <div style="position: sticky; top: 0; left: 0; width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 5;">
            <div class="container" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; transform: translateY(-8vh);">
                <!-- Main Heading -->
                <h1 id="hero-main-text" style="color: white; font-family: 'Playfair Display', serif; font-size: clamp(3rem, 7vw, 6rem); font-weight: 700; line-height: 1.05; margin-bottom: 24px; max-width: 900px; letter-spacing: -0.03em; text-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5); will-change: transform;">
                    Build habits that<br/>actually stick
                </h1>

                <!-- Subheading -->
                <p style="color: white; font-family: 'Inter', sans-serif; font-size: clamp(1.1rem, 2vw, 1.4rem); font-weight: 500; line-height: 1.5; margin-bottom: 0; max-width: 650px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                    You see the right habits at the right time so your day never feels crowded.
                </p>
            </div>
            
        </div>


        
        <!-- Bottom Fade to seamlessly blend into next section -->
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 300px; background: linear-gradient(to bottom, transparent, #fafafa); z-index: 2;"></div>
      </main>
      
      <!-- 3D Phones Section -->
      <section class="color-section" data-color="#f0f9ff" style="background: transparent; padding: 0; margin-top: -150px; margin-bottom: 0; position: relative; z-index: 10;">
        <div class="panels3d-demo" id="panels-demo-home">
          <div class="panels3d-space">
            <div class="panels3d-scene" id="panels-scene-home">
              <div class="panels3d-wrap" id="panels-wrap-home">
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
      </section>

      <!-- Text Content Section (Sticky Scroll Reveal) -->
      <section class="color-section" data-color="#bae6fd" style="background: transparent; position: relative; z-index: 5;">
        <div id="textreveal-scroll-wrapper" style="height: 150vh; position: relative;">
          <div style="position: sticky; top: 0; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden;">
            <div class="container" style="max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
              
              <div id="textreveal-home-container" style="text-align: center;">
                <style>
                  .reveal-word {
                    color: #cbd5e1;
                    transition: color 0.2s ease-out;
                    display: inline-block;
                    margin-right: 0.15em;
                  }
                  .reveal-word.revealed {
                    color: #111827;
                  }
                  .reveal-emoji {
                    opacity: 0.4;
                    transition: opacity 0.2s ease-out;
                    display: inline-flex; 
                    align-items: center; 
                    justify-content: center; 
                    border-radius: 50px; 
                    padding: 0 0.8em; 
                    height: 1.1em; 
                    vertical-align: -0.15em; 
                    margin: 0 0.1em; 
                    font-size: 0.85em; 
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
                  }
                  .reveal-emoji.revealed {
                    opacity: 1;
                  }
                </style>
                <h2 id="textreveal-home" style="font-family: 'Inter', sans-serif; font-size: clamp(2rem, 4.5vw, 3.5rem); font-weight: 700; line-height: 1.3; letter-spacing: -0.02em; margin-bottom: 0; max-width: 900px;">
                  <span class="reveal-word">Build</span>
                  <span class="reveal-word">steady</span>
                  <span class="reveal-word">daily</span>
                  <span class="reveal-word reveal-emoji" style="background: #3b82f6; color: white;">🚴</span>
                  <span class="reveal-word">habits</span>
                  <span class="reveal-word">with</span>
                  <span class="reveal-word">a</span>
                  <span class="reveal-word">layout</span>
                  <span class="reveal-word">that</span>
                  <span class="reveal-word">keeps</span>
                  <span class="reveal-word">your</span>
                  <span class="reveal-word">mornings,</span>
                  <span class="reveal-word">evenings,</span>
                  <span class="reveal-word reveal-emoji" style="background: #0ea5e9; color: white;">⛅</span>
                  <span class="reveal-word">and</span>
                  <span class="reveal-word">focus</span>
                  <span class="reveal-word">simple</span>
                  <span class="reveal-word">to</span>
                  <span class="reveal-word">follow.</span>
                </h2>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- Clients as Family Section -->
      <section class="color-section" data-color="#7dd3fc" style="background: transparent; padding: 60px 20px 120px; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
          
          <style>
            @keyframes strike-draw {
              0% { transform: scaleX(0); transform-origin: left; opacity: 1; }
              35% { transform: scaleX(1); transform-origin: left; opacity: 1; }
              50% { transform: scaleX(1); transform-origin: right; opacity: 1; }
              85% { transform: scaleX(0); transform-origin: right; opacity: 1; }
              100% { transform: scaleX(0); transform-origin: left; opacity: 1; }
            }
            .animated-strike {
              position: relative;
              display: inline-block;
              color: #9ca3af;
              margin-right: 16px;
              font-weight: 600;
            }
            .animated-strike::after {
              content: '';
              position: absolute;
              top: 52%;
              left: -5%;
              width: 110%;
              height: 0.1em;
              background-color: #9ca3af;
              border-radius: 4px;
              animation: strike-draw 2.5s infinite ease-in-out;
            }
          </style>
          <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #111827; letter-spacing: -0.03em; margin-bottom: 16px;">
            <span class="animated-strike">Clients</span>Family
          </h2>

          <p style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 500; color: #4b5563; margin-bottom: 64px;">
            We treat our clients as our family members.
          </p>

          <!-- Scroll-Snapping Cards Section -->
          <style>
            .snap-cards-wrapper {
              width: 100%;
              height: 400vh;
              position: relative;
            }
            .snap-sticky-viewport {
              position: sticky;
              top: 50%;
              transform: translateY(-50%);
              width: 100%;
              max-width: 1100px;
              height: 560px;
              margin: 0 auto;
              border-radius: 28px;
              overflow: hidden;
              box-shadow: 0 30px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05);
              display: flex;
            }
            .snap-half {
              flex: 1;
              position: relative;
              overflow: hidden;
            }
            .snap-half.left {
              flex: 0 0 50%;
            }
            .snap-half.right {
              flex: 0 0 50%;
            }
            .snap-slide-track {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 300%;
              display: flex;
              flex-direction: column;
              will-change: transform;
            }
            .snap-slide-track.right-track {
              top: auto;
              bottom: 0;
            }
            .snap-card {
              height: 33.3333%;
              position: relative;
              overflow: hidden;
              display: flex;
            }
            .snap-card-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
              transform: scale(1.05);
              transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
            }
            .snap-card:hover .snap-card-image {
              transform: scale(1.1);
            }
            .snap-card-image.contain-mode {
              object-fit: contain;
              padding: 8%;
              transform: scale(1);
            }
            .snap-card-image.contain-mode:hover {
              transform: scale(1.03);
            }

            /* Image overlay with gradient */
            .snap-image-overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 32px 28px;
              background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
              z-index: 2;
            }
            .snap-category-badge {
              display: inline-block;
              background: rgba(255,255,255,0.15);
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
              color: #fff;
              font-family: 'Inter', sans-serif;
              font-size: 0.7rem;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              padding: 5px 12px;
              border-radius: 50px;
              border: 1px solid rgba(255,255,255,0.15);
            }

            /* Text card styling */
            .snap-text-card {
              height: 33.3333%;
              padding: 52px 48px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: left;
              position: relative;
            }
            .snap-text-card::before {
              content: '';
              position: absolute;
              top: 16px;
              bottom: 16px;
              left: 0;
              width: 3px;
              border-radius: 3px;
              opacity: 0;
              transition: opacity 0.6s ease;
            }
            .snap-text-card.active::before {
              opacity: 1;
            }
            .snap-text-card:nth-child(1)::before { background: linear-gradient(180deg, #6366f1, #818cf8); }
            .snap-text-card:nth-child(2)::before { background: linear-gradient(180deg, #f472b6, #ec4899); }
            .snap-text-card:nth-child(3)::before { background: linear-gradient(180deg, #34d399, #10b981); }

            .snap-text-number {
              font-family: 'Inter', sans-serif;
              font-size: 0.75rem;
              font-weight: 700;
              color: rgba(255,255,255,0.25);
              letter-spacing: 0.15em;
              text-transform: uppercase;
              margin-bottom: 16px;
            }
            .snap-text-title {
              font-family: 'Inter', sans-serif;
              font-size: clamp(1.6rem, 2.5vw, 2.2rem);
              font-weight: 700;
              color: #ffffff;
              margin-bottom: 16px;
              line-height: 1.15;
              letter-spacing: -0.02em;
            }
            .snap-text-desc {
              font-family: 'Inter', sans-serif;
              font-size: 1rem;
              color: #9ca3af;
              line-height: 1.65;
              margin-bottom: 32px;
            }
            .snap-text-cta {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              background: #ffffff;
              color: #111827;
              padding: 12px 28px;
              border-radius: 50px;
              font-weight: 600;
              font-family: 'Inter', sans-serif;
              font-size: 0.9rem;
              text-decoration: none;
              transition: all 0.25s ease;
              width: fit-content;
            }
            .snap-text-cta:hover {
              background: #f3f4f6;
              transform: translateX(4px);
            }

            /* Progress dots */
            .snap-progress {
              position: absolute;
              right: 24px;
              top: 50%;
              transform: translateY(-50%);
              display: flex;
              flex-direction: column;
              gap: 10px;
              z-index: 10;
            }
            .snap-dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: rgba(255,255,255,0.2);
              transition: all 0.4s ease;
            }
            .snap-dot.active {
              background: #ffffff;
              height: 24px;
              border-radius: 4px;
            }

            @media (max-width: 768px) {
              .snap-cards-wrapper {
                height: 300vh;
              }
              .snap-sticky-viewport {
                flex-direction: column;
                height: 80vh;
                max-height: 600px;
                border-radius: 20px;
                margin: 0 16px;
                width: calc(100% - 32px);
              }
              .snap-half.left,
              .snap-half.right {
                flex: 0 0 50%;
              }
              .snap-text-card {
                padding: 28px 24px;
              }
              .snap-text-title {
                font-size: 1.35rem;
              }
              .snap-text-desc {
                font-size: 0.9rem;
                margin-bottom: 20px;
              }
              .snap-text-cta {
                padding: 10px 20px;
                font-size: 0.85rem;
              }
              .snap-progress {
                display: none;
              }
            }
          </style>

          <div class="snap-cards-wrapper" id="split-scroll-wrapper">
            <div class="snap-sticky-viewport">
              
              <!-- Left Side: Text Cards (Scrolls UP) -->
              <div class="snap-half left" style="background: #0f1115;">
                <div class="snap-slide-track" id="split-scroll-left">
                  
                  <div class="snap-text-card active" data-card-index="0">
                    <span class="snap-text-number">01 — EdTech</span>
                    <h3 class="snap-text-title">Geek By Choice LMS</h3>
                    <p class="snap-text-desc">
                      A powerful Learning Management System that helps students prepare, practice, and improve — with the right content, insights, and performance tracking.
                    </p>
                    <a href="#/use-cases" class="snap-text-cta" data-route="/use-cases">
                      View Case Study <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                    </a>
                  </div>

                  <div class="snap-text-card" data-card-index="1">
                    <span class="snap-text-number">02 — Animal Welfare</span>
                    <h3 class="snap-text-title">MH-14 Animal NGO</h3>
                    <p class="snap-text-desc">
                      An operational hub for animal rescue. Simplifying operations to save more lives with complete history tracking and volunteer management.
                    </p>
                    <a href="#/use-cases" class="snap-text-cta" data-route="/use-cases">
                      View Case Study <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                    </a>
                  </div>

                  <div class="snap-text-card" data-card-index="2">
                    <span class="snap-text-number">03 — Manufacturing</span>
                    <h3 class="snap-text-title">Jayshree Electrocoating</h3>
                    <p class="snap-text-desc">
                      Smart ERP for stronger operations. A powerful solution built to streamline every process from orders to production with complete visibility.
                    </p>
                    <a href="#/use-cases" class="snap-text-cta" data-route="/use-cases">
                      View Case Study <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                    </a>
                  </div>

                </div>
                <!-- Progress dots -->
                <div class="snap-progress" id="snap-progress-dots">
                  <div class="snap-dot active" data-dot="0"></div>
                  <div class="snap-dot" data-dot="1"></div>
                  <div class="snap-dot" data-dot="2"></div>
                </div>
              </div>

              <!-- Right Side: Images (Scrolls DOWN — reversed order) -->
              <div class="snap-half right">
                <div class="snap-slide-track right-track" id="split-scroll-right">
                  
                  <!-- Image 3: Jayshree (bottom of track) -->
                  <div class="snap-card" style="background: #031428;">
                    <img src="/images/jayshree_casestudy.png" alt="Jayshree Electrocoating" class="snap-card-image" />
                    <div class="snap-image-overlay">
                      <span class="snap-category-badge">Manufacturing & Enterprise</span>
                    </div>
                  </div>

                  <!-- Image 2: NGO -->
                  <div class="snap-card" style="background: #0a0a0a;">
                    <img src="/images/ngo_interanl.jpeg" alt="MH-14 NGO" class="snap-card-image contain-mode" />
                    <div class="snap-image-overlay">
                      <span class="snap-category-badge">NGO & Animal Welfare</span>
                    </div>
                  </div>

                  <!-- Image 1: Geek By Choice (top of track) -->
                  <div class="snap-card" style="background: #042f1c;">
                    <img src="/images/geekbychoice_casestudy.png" alt="Geek By Choice" class="snap-card-image" />
                    <div class="snap-image-overlay">
                      <span class="snap-category-badge">Education & EdTech</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
      </section>

      <!-- Text Scroll Marquee Section -->
      <section class="color-section" data-color="#0f172a" style="background: transparent; padding: 100px 0; overflow: hidden; display: flex; flex-direction: column; gap: 0;">
        
        <div class="marquee-line" data-reverse="false" style="white-space: nowrap; width: max-content; font-size: clamp(5rem, 12vw, 10rem); font-family: 'Inter', sans-serif; font-weight: 900; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.02em; will-change: transform;">
          ${Array(60).fill(0).map((_, i) => `<span style="${i % 2 === 0 ? 'color: #ffffff;' : 'color: transparent; -webkit-text-stroke: 2px #38bdf8;'} padding-right: 0.25em;">CREATIVE</span>`).join('')}
        </div>
        
        <div class="marquee-line" data-reverse="true" style="white-space: nowrap; width: max-content; font-size: clamp(5rem, 12vw, 10rem); font-family: 'Inter', sans-serif; font-weight: 900; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.02em; transform: translateX(-50%); will-change: transform;">
          ${Array(60).fill(0).map((_, i) => `<span style="${i % 2 === 0 ? 'color: #ffffff;' : 'color: transparent; -webkit-text-stroke: 2px #38bdf8;'} padding-right: 0.25em;">DESIGN</span>`).join('')}
        </div>
        
        <div class="marquee-line" data-reverse="false" style="white-space: nowrap; width: max-content; font-size: clamp(5rem, 12vw, 10rem); font-family: 'Inter', sans-serif; font-weight: 900; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.02em; will-change: transform;">
          ${Array(60).fill(0).map((_, i) => `<span style="${i % 2 === 0 ? 'color: #ffffff;' : 'color: transparent; -webkit-text-stroke: 2px #38bdf8;'} padding-right: 0.25em;">MOTION</span>`).join('')}
        </div>
        
        <div class="marquee-line" data-reverse="true" style="white-space: nowrap; width: max-content; font-size: clamp(5rem, 12vw, 10rem); font-family: 'Inter', sans-serif; font-weight: 900; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.02em; transform: translateX(-50%); will-change: transform;">
          ${Array(60).fill(0).map((_, i) => `<span style="${i % 2 === 0 ? 'color: #ffffff;' : 'color: transparent; -webkit-text-stroke: 2px #38bdf8;'} padding-right: 0.25em;">STUDIO</span>`).join('')}
        </div>
        
      </section>

      <!-- Routine Poster Section -->
      <section class="color-section" data-color="#0284c7" style="padding: 60px 20px; background: transparent; display: flex; justify-content: center;">
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
      <section class="color-section" data-color="#0369a1" style="background: transparent; padding: 120px 20px; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
          
          <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #ffffff; letter-spacing: -0.03em; margin-bottom: 64px;">
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
        </div>
      </section>

      <!-- Globe Section -->
      <section class="color-section" data-color="#e0f2fe" style="background: transparent; padding: 120px 20px 80px; text-align: center; position: relative; overflow: hidden;">
        
        <!-- Glowing Number Hero -->
        <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 40px; position: relative; z-index: 10;">
          <!-- Pill label -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 999px; padding: 8px 20px; font-size: 0.9rem; font-weight: 600; color: #334155; margin-bottom: 24px; font-family: 'Inter', sans-serif;">
            Real habits, real numbers
          </div>
          
          <!-- Heading -->
          <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 800; color: #0f172a; letter-spacing: -0.03em; line-height: 1.1; margin: 0 0 24px 0; max-width: 600px;">
            How people stay<br/>consistent over time
          </h2>
          
          <!-- Big glowing number container -->
          <div style="position: relative; display: inline-block;">
            <div style="font-family: 'Inter', sans-serif; font-size: clamp(6rem, 16vw, 13rem); font-weight: 900; color: #ff5500; line-height: 0.9; letter-spacing: -0.05em; text-shadow: 0 20px 80px rgba(255, 85, 0, 0.5);">
              62,000+
            </div>
            
            <!-- Tilted badge -->
            <div style="position: absolute; bottom: 15%; right: -5%; background: #ffffff; border: 1px solid #f1f5f9; border-radius: 999px; padding: 12px 24px; font-size: clamp(0.85rem, 2vw, 1rem); font-weight: 600; color: #334155; font-family: 'Inter', sans-serif; transform: rotate(6deg); box-shadow: 0 10px 30px rgba(0,0,0,0.1); white-space: nowrap;">
              Check-ins logged last month
            </div>
          </div>
        </div>
        
        <!-- The Globe -->
        <div style="position: relative; width: 100%; max-width: 800px; height: 350px; overflow: hidden; margin: 0 auto; margin-bottom: 20px; display: flex; justify-content: center;">
          
          <!-- Globe Video -->
          <video autoplay loop muted playsinline style="width: 700px; height: 700px; object-fit: cover; border-radius: 50%; mix-blend-mode: multiply; transform: scale(1.02);">
            <source src="/globe-moving.mp4" type="video/mp4" />
          </video>
          
          <!-- Cloud Image Overlay -->
          <div style="position: absolute; bottom: -20px; left: -10%; width: 120%; height: 160px; background-image: url('/images/cloude_img.avif'); background-size: cover; background-position: top center; z-index: 5; pointer-events: none;"></div>
          
          <!-- Bottom Fade to match section color -->
          <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 80px; background: linear-gradient(to top, #e0f2fe 20%, transparent 100%); z-index: 6; pointer-events: none;"></div>
          
        </div>

        <!-- The Stats -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-around; max-width: 1000px; margin: 0 auto; gap: 40px; position: relative; z-index: 10;">
          <div>
            <h3 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 8px; color: #111827; letter-spacing: -0.04em; line-height: 1;">87<span style="color: #60a5fa;">%</span></h3>
            <p style="font-size: 1.1rem; color: #4b5563; font-weight: 500; font-family: 'Inter', sans-serif; margin: 0; padding-top: 12px;">Faster AI execution</p>
          </div>
          <div>
            <h3 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 8px; color: #111827; letter-spacing: -0.04em; line-height: 1;">46</h3>
            <p style="font-size: 1.1rem; color: #4b5563; font-weight: 500; font-family: 'Inter', sans-serif; margin: 0; padding-top: 12px;">Sessions completed<br/>on average</p>
          </div>
          <div>
            <h3 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 8px; color: #111827; letter-spacing: -0.04em; line-height: 1;">32<span style="color: #60a5fa;">+</span></h3>
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

  const wrap = document.getElementById('panels-wrap-home');
  const scene = document.getElementById('panels-scene-home');

  if (scene && wrap) {
    window.addEventListener('scroll', () => {
      const rect = scene.getBoundingClientRect();
      const totalDistance = window.innerHeight + rect.height;
      const scrolled = window.innerHeight - rect.top;

      let progress = scrolled / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      const rotateY = progress * -60;
      const rotateX = progress * 10;
      const translateZ = progress * 100;

      wrap.style.transform = `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }

  // Text Reveal Scroll Animation (Sticky)
  const textRevealWrapper = document.getElementById('textreveal-scroll-wrapper');
  const textRevealContainer = document.getElementById('textreveal-home-container');

  if (textRevealWrapper && textRevealContainer) {
    const words = textRevealContainer.querySelectorAll('.reveal-word');
    const totalWords = words.length;

    window.addEventListener('scroll', () => {
      const rect = textRevealWrapper.getBoundingClientRect();

      // The wrapper is 150vh. The sticky child is 100vh.
      // Sticky starts when rect.top <= 0.
      // Sticky ends when rect.bottom <= window.innerHeight
      // Distance of sticky scroll = wrapper height - window height

      const stickyDistance = rect.height - window.innerHeight;

      // Progress is 0 when top is at 0. Progress is 1 when top is at -stickyDistance.
      let progress = -rect.top / stickyDistance;
      progress = Math.max(0, Math.min(1, progress));

      const revealIndex = Math.floor(progress * totalWords);

      words.forEach((word, index) => {
        if (index < revealIndex) {
          word.classList.add('revealed');
        } else {
          word.classList.remove('revealed');
        }
      });
    }, { passive: true });
  }

  // Text Marquee Scroll Animation
  const marqueeLines = document.querySelectorAll('.marquee-line') as NodeListOf<HTMLElement>;
  if (marqueeLines.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      marqueeLines.forEach((line) => {
        const isReverse = line.getAttribute('data-reverse') === 'true';
        const direction = isReverse ? 1 : -1;
        const offset = scrollY * 0.5 * direction;
        line.style.transform = `translateX(calc(${isReverse ? '-50%' : '0%'} + ${offset}px))`;
      });
    }, { passive: true });
  }

  // Scroll-Snapping Cards Animation
  const splitWrapper = document.getElementById('split-scroll-wrapper');
  const splitLeft = document.getElementById('split-scroll-left');
  const splitRight = document.getElementById('split-scroll-right');

  if (splitWrapper && splitLeft && splitRight) {
    const totalCards = 3;
    let lastCardIndex = 0;

    window.addEventListener('scroll', () => {
      const rect = splitWrapper.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Sticky is centered vertically, so it starts sticking when rect.top reaches ~(viewportH/2 - 280)
      // and unsticks when rect.bottom reaches ~(viewportH/2 + 280)
      const stickyDistance = rect.height - viewportH;

      let progress = -rect.top / stickyDistance;
      progress = Math.max(0, Math.min(1, progress));

      // Continuous translateY based on progress (from 0% to 66.666%)
      const offsetPercent = progress * (200 / 3);
      splitLeft.style.transform = `translateY(-${offsetPercent}%)`;
      splitRight.style.transform = `translateY(${offsetPercent}%)`;

      // Determine active card for progress indicators
      const cardIndex = Math.min(Math.floor(progress * totalCards), totalCards - 1);

      // Only update DOM class lists if card changed
      if (cardIndex !== lastCardIndex) {
        lastCardIndex = cardIndex;

        // Update progress dots
        const dots = document.querySelectorAll('.snap-dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === cardIndex);
        });

        // Update active text card indicator
        const textCards = document.querySelectorAll('.snap-text-card');
        textCards.forEach((card, i) => {
          card.classList.toggle('active', i === cardIndex);
        });
      }
    }, { passive: true });
  }

  // Background Color Transition
  const colorSections = document.querySelectorAll('.color-section');

  if (colorSections.length > 0) {
    document.body.style.transition = 'background-color 0.5s ease-out';
    document.body.style.backgroundColor = '#f0f9ff';

    window.addEventListener('scroll', () => {
      let activeColor = '#f0f9ff';
      colorSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the top of the section is above the middle of the screen
        if (rect.top <= window.innerHeight / 2) {
          activeColor = section.getAttribute('data-color') || activeColor;
        }
      });

      document.body.style.backgroundColor = activeColor;
    }, { passive: true });
  }
}


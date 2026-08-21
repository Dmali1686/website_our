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
            <style>
              .home-hero-text-wrapper {
                text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; transform: translateY(-12vh);
              }
              @media (max-width: 768px) {
                .home-hero-text-wrapper {
                  transform: translateY(-18vh); /* Push text higher to perfectly center it on mobile screens */
                }
              }
            </style>
            <div class="container home-hero-text-wrapper">
                <!-- Main Heading -->
                <h1 id="hero-main-text" style="color: white; font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 8vw, 6rem); font-weight: 700; line-height: 1.05; margin-bottom: 24px; max-width: 900px; letter-spacing: -0.03em; text-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5); will-change: transform;">
                    Building The Future One Solution At <br> A Time
                </h1>

                <!-- Subheading -->
                <p style="color: white; font-family: 'Inter', sans-serif; font-size: clamp(1.1rem, 2vw, 1.4rem); font-weight: 500; line-height: 1.5; margin-bottom: 0; max-width: 800px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                    Empowering businesses with modern software, AI-driven innovation, and scalable digital experiences.
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
                  <img src="/images/mobile_screen_1.webp" alt="Mobile App 1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 28px; pointer-events: none;" />
                </div>
                <div class="panels3d-panel" style="padding: 0;">
                  <img src="/images/mobile_screen_1.webp" alt="Mobile App 2" style="width: 100%; height: 100%; object-fit: cover; border-radius: 28px; pointer-events: none;" />
                </div>
                <div class="panels3d-panel" style="padding: 0;">
                  <img src="/images/mobile_screen_1.webp" alt="Mobile App 3" style="width: 100%; height: 100%; object-fit: cover; border-radius: 28px; pointer-events: none;" />
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>

      <!-- Text Content Section (Sticky Scroll Reveal) -->
      <section class="color-section text-reveal-section" data-color="#bae6fd" style="background: transparent; position: relative; z-index: 5;">
        <div id="textreveal-scroll-wrapper" class="text-reveal-wrapper" style="position: relative;">
          <div class="text-reveal-sticky" style="position: sticky; display: flex; align-items: center; justify-content: center; overflow: hidden;">
            <div class="container" style="max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
              
              <div id="textreveal-home-container" style="text-align: center;">
                <style>
                  .reveal-word {
                    color: rgba(17, 24, 39, 0.15); /* Semi-transparent dark */
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
                <h2 id="textreveal-home" style="font-family: 'Inter', sans-serif; font-size: clamp(2rem, 4.5vw, 3.5rem); font-weight: 500; line-height: 1.3; letter-spacing: -0.02em; margin-bottom: 0; max-width: 900px;">
                  <span class="reveal-word">Building</span>
                  <span class="reveal-word">the</span>
                  <span class="reveal-word">Future,</span>
                  <span class="reveal-word reveal-emoji" style="background: #3b82f6; color: white;">🚴</span>
                  <span class="reveal-word">Today.</span>
                  <br/>
                  <span class="reveal-word">AI-powered</span>
                  <span class="reveal-word">solutions</span>
                  <span class="reveal-word">designed</span>
                  <span class="reveal-word">for</span>
                  <span class="reveal-word">growth</span>
                  <span class="reveal-word">and</span>
                  <span class="reveal-word reveal-emoji" style="background: #0ea5e9; color: white;">⛅</span>
                  <span class="reveal-word">innovation.</span>
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
              color: #64748b; /* Darkened for better contrast */
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
              background-color: #64748b; /* Darkened for better contrast */
              border-radius: 4px;
              animation: strike-draw 2.5s infinite ease-in-out;
            }
          </style>
          <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: #111827; letter-spacing: -0.02em; margin-bottom: 16px;">
            <span class="animated-strike">Clients</span>Family
          </h2>

          <p style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 600; color: #1e293b; margin-bottom: clamp(24px, 5vw, 64px);">
            We treat our clients as our family members.
          </p>

          <!-- Scroll-Snapping Cards Section -->
          <style>
            .snap-cards-wrapper {
              width: 100%;
              height: 400vh;
              position: relative;
              margin-top: 250px;
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
            }
            .snap-card-image.contain-mode {
              object-fit: contain;
              padding: 8%;
            }

            /* Dynamic background transition for left panel */
            .snap-half.left {
              transition: background 0.6s ease;
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

            @media (max-width: 768px) {
              .routine-poster-container {
                display: flex !important;
                flex-direction: column;
                padding: 40px 24px 0 24px !important;
                align-items: flex-start !important;
              }
              .routine-poster-left {
                max-width: 100% !important;
                order: 1;
              }
              .routine-poster-footer {
                position: relative !important;
                bottom: auto !important;
                left: auto !important;
                margin-top: 32px !important;
                margin-bottom: 40px !important;
                order: 2;
              }
              .routine-poster-right {
                min-height: auto !important;
                width: 100%;
                justify-content: center !important;
                padding-right: 0 !important;
                margin-top: 0 !important;
                margin-bottom: -120px !important;
                order: 3;
              }
              .routine-poster-right img {
                position: relative !important;
                top: 0 !important;
                right: 0 !important;
                width: 75% !important;
                max-width: 300px !important;
                max-height: none !important;
                margin: 0 auto;
                display: block;
              }
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
            /* Color bar removed */

            .snap-text-number {
              font-family: 'Inter', sans-serif;
              font-size: 0.85rem;
              font-weight: 700;
              color: rgba(255, 255, 255, 0.6);
              letter-spacing: 0.15em;
              text-transform: uppercase;
              margin-bottom: 16px;
              transition: color 0.6s ease;
            }
            .snap-text-title {
              font-family: 'Playfair Display', serif;
              font-size: clamp(1.6rem, 2.5vw, 2.2rem);
              font-weight: 700;
              color: #ffffff;
              margin-bottom: 16px;
              line-height: 1.15;
              letter-spacing: -0.02em;
              transition: color 0.6s ease;
            }
            .snap-text-desc {
              font-family: 'Inter', sans-serif;
              font-size: 1rem;
              color: #9ca3af;
              line-height: 1.65;
              margin-bottom: 32px;
              transition: color 0.6s ease;
            }
            
            /* Light theme text adjustments for Geek By Choice */
            .snap-text-card[data-theme="geek-light"] .snap-text-title { color: #2b1b22; }
            .snap-text-card[data-theme="geek-light"] .snap-text-desc { color: #5a4b52; }
            .snap-text-card[data-theme="geek-light"] .snap-text-number { color: rgba(43, 27, 34, 0.5); }
            
            .snap-text-card[data-theme="geek-light"] .snap-text-cta {
              background: #ffffff;
              color: #2b1b22;
            }
            .snap-text-card[data-theme="geek-light"] .snap-text-cta:hover {
              background: #f3f4f6;
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



            @media (max-width: 768px) {
              .snap-cards-wrapper {
                height: auto !important;
                margin-top: 0px;
                margin-bottom: 60px;
              }
              .snap-sticky-viewport {
                position: relative;
                top: auto;
                transform: none;
                height: auto;
                max-height: none;
                border-radius: 0;
                margin: 0 -20px;
                width: calc(100% + 40px);
                box-shadow: none;
                
                /* Horizontal Scroll Grid */
                display: grid;
                grid-template-rows: auto auto;
                grid-template-columns: 7.5vw repeat(3, 85vw) 7.5vw;
                gap: 16px;
                padding: 0 0 30px 0;
                overflow-x: auto;
                overflow-y: hidden;
                scroll-snap-type: x mandatory;
                scrollbar-width: none; /* Firefox */
              }
              .snap-sticky-viewport::-webkit-scrollbar {
                display: none; /* Safari and Chrome */
              }
              
              /* Spacer elements to avoid clipping bugs on mobile */
              .snap-sticky-viewport::before,
              .snap-sticky-viewport::after {
                content: '';
                display: block;
              }
              .snap-sticky-viewport::before { grid-column: 1; grid-row: 1 / span 2; }
              .snap-sticky-viewport::after { grid-column: 5; grid-row: 1 / span 2; }

              .snap-half, .snap-slide-track {
                display: contents; /* Flattens the DOM for CSS Grid */
              }
              
              /* Reset transforms applied by JS */
              .snap-slide-track {
                transform: none !important;
              }

              /* Column 2: Image 1 and Text 1 */
              .snap-half.right .snap-card:nth-child(3) { grid-column: 2; grid-row: 1; border-radius: 24px; min-height: 250px; scroll-snap-align: center; }
              .snap-half.left .snap-text-card:nth-child(1) { grid-column: 2; grid-row: 2; margin-top: 0; scroll-snap-align: center; }
              
              /* Column 3: Image 2 and Text 2 */
              .snap-half.right .snap-card:nth-child(2) { grid-column: 3; grid-row: 1; border-radius: 24px; min-height: 250px; scroll-snap-align: center; }
              .snap-half.left .snap-text-card:nth-child(2) { grid-column: 3; grid-row: 2; margin-top: 0; scroll-snap-align: center; }
              
              /* Column 4: Image 3 and Text 3 */
              .snap-half.right .snap-card:nth-child(1) { grid-column: 4; grid-row: 1; border-radius: 24px; min-height: 250px; scroll-snap-align: center; }
              .snap-half.left .snap-text-card:nth-child(3) { grid-column: 4; grid-row: 2; margin-top: 0; scroll-snap-align: center; }

              .snap-text-card {
                padding: 32px 24px;
                height: auto;
                border-radius: 24px;
                width: 100%;
                box-sizing: border-box;
              }
              .snap-card {
                height: auto;
                border-radius: 24px;
                width: 100%;
                box-sizing: border-box;
              }
              .snap-text-number {
                color: #38bdf8;
              }
              .snap-text-title {
                font-size: 1.8rem;
                color: #ffffff;
              }
              .snap-text-desc {
                font-size: 1rem;
                margin-bottom: 24px;
                color: rgba(255,255,255,0.8);
                font-weight: 400;
              }
              .snap-text-cta {
                padding: 12px 24px;
                font-size: 0.9rem;
                background: #0f172a;
                color: white;
              }
            }
          </style>

          <div class="snap-cards-wrapper" id="split-scroll-wrapper">
            <div class="snap-sticky-viewport">
              
              <!-- Left Side: Text Cards (Scrolls UP) -->
              <div class="snap-half left">
                <div class="snap-slide-track" id="split-scroll-left">
                  
                  <div class="snap-text-card active" data-card-index="0" style="background: #e6d6da;" data-theme="geek-light">
                    <span class="snap-text-number">01 — EdTech</span>
                    <h3 class="snap-text-title">Geek By Choice LMS</h3>
                    <p class="snap-text-desc">
                      A powerful Learning Management System that helps students prepare, practice, and improve — with the right content, insights, and performance tracking.
                    </p>
                    <a href="/use-cases" class="snap-text-cta" data-route="/use-cases">
                      View Case Study <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                    </a>
                  </div>

                  <div class="snap-text-card" data-card-index="1" style="background: #0d3b1e;">
                    <span class="snap-text-number">02 — Animal Welfare</span>
                    <h3 class="snap-text-title">MH-14 Animal NGO</h3>
                    <p class="snap-text-desc">
                      An operational hub for animal rescue. Simplifying operations to save more lives with complete history tracking and volunteer management.
                    </p>
                    <a href="/use-cases" class="snap-text-cta" data-route="/use-cases">
                      View Case Study <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                    </a>
                  </div>

                  <div class="snap-text-card" data-card-index="2" style="background: #11152c;">
                    <span class="snap-text-number">03 — Manufacturing</span>
                    <h3 class="snap-text-title">Jayshree Electrocoating</h3>
                    <p class="snap-text-desc">
                      Smart ERP for stronger operations. A powerful solution built to streamline every process from orders to production with complete visibility.
                    </p>
                    <a href="/use-cases" class="snap-text-cta" data-route="/use-cases">
                      View Case Study <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                    </a>
                  </div>

                </div>

              </div>

              <!-- Right Side: Images (Scrolls DOWN — reversed order) -->
              <div class="snap-half right">
                <div class="snap-slide-track right-track" id="split-scroll-right">
                  
                  <!-- Image 3: Jayshree (bottom of track) -->
                  <div class="snap-card" style="background: #11152c;">
                    <img src="/images/Jayshree_Electrocoating.webp" alt="ERP System" class="snap-card-image" style="object-fit: cover;" />
                    <div class="snap-image-overlay">
                      <span class="snap-category-badge">Manufacturing & Enterprise</span>
                    </div>
                  </div>

                  <!-- Image 2: NGO -->
                  <div class="snap-card" style="background: #e8f5e9;">
                    <img src="/images/ngo_image.webp" alt="MH-14 NGO" class="snap-card-image" />
                    <div class="snap-image-overlay">
                      <span class="snap-category-badge">NGO & Animal Welfare</span>
                    </div>
                  </div>

                  <div class="snap-card" style="background: #fce1e6;">
                    <img src="/images/geek_by_choice_new.webp" alt="Geek By Choice" class="snap-card-image" style="object-fit: cover;" />
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
        <div class="routine-poster-container" style="background: #0f1115; border-radius: 24px; width: 100%; max-width: 1200px; min-height: 540px; position: relative; overflow: hidden; display: flex; align-items: center; padding: 60px 48px; box-sizing: border-box; background-image: url('/images/hero-person.webp'); background-size: cover; background-position: center;">
          
          <!-- Gradient Overlay -->
          <div style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(15, 17, 21, 1) 0%, rgba(15, 17, 21, 0.95) 45%, rgba(15, 17, 21, 0.3) 100%); z-index: 1;"></div>

          <!-- Left Content -->
          <div class="routine-poster-left" style="flex: 1; z-index: 2; position: relative; max-width: 500px;">
             <h3 style="font-size: clamp(2rem, 4vw, 2.8rem); font-family: 'Playfair Display', serif; font-weight: 700; color: white; margin-bottom: 16px; letter-spacing: -0.02em;">Intelligent Automation</h3>
             <p style="font-size: 1.15rem; font-family: 'Inter', sans-serif; color: #d1d5db; margin-bottom: 40px; line-height: 1.6;">
               Streamline your complex workflows into intelligent systems so your business runs efficiently without the clutter.
             </p>
             <a href="/contact" data-route="/contact" style="display: inline-block; background: white; color: #111827; font-weight: 600; font-family: 'Inter', sans-serif; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-size: 1.05rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
               Explore AI Solutions
             </a>
          </div>

          <!-- Right Phone Mockup -->
          <div class="routine-poster-right" style="flex: 1; display: flex; justify-content: flex-end; position: relative; z-index: 2; min-height: 400px; padding-right: 20px;">
             <img src="/images/tab.webp" alt="Tablet Dashboard Mockup" style="max-width: 100%; max-height: 120%; object-fit: contain; position: absolute; right: 0; top: -50px; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.4));" />
          </div>

          <p class="routine-poster-footer" style="font-size: 0.85rem; font-family: 'Inter', sans-serif; color: #9ca3af; position: absolute; bottom: 32px; left: 48px; z-index: 2; margin: 0;">
            *Custom-built systems tailored for your exact operational needs.
          </p>

        </div>
      </section>

      <!-- Services Section -->
      <section class="color-section" data-color="#0369a1" style="background: transparent; padding: 60px 20px; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
          
          <style>
            .service-card {
              transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
              cursor: pointer;
              text-decoration: none !important;
            }
            .service-card:hover {
              transform: translateY(-8px) !important;
              box-shadow: 0 30px 60px rgba(0,0,0,0.2) !important;
            }
            .service-icon-wrap {
              transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .service-card:hover .service-icon-wrap {
              transform: scale(1.1) rotate(5deg);
            }
            .service-card-btn {
              opacity: 0;
              transform: translateY(10px);
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .service-card:hover .service-card-btn {
              opacity: 1;
              transform: translateY(0);
            }
          </style>

          <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 700; color: #ffffff; letter-spacing: -0.02em; margin-bottom: 12px;">
            Services
          </h2>
          
          <p style="font-family: 'Inter', sans-serif; font-size: clamp(1rem, 1.5vw, 1.2rem); font-weight: 500; color: rgba(255,255,255,0.9); margin-bottom: 40px; max-width: 650px;">
            We deliver powerful digital solutions to help businesses automate processes, engage users, and drive growth.
          </p>

          <div class="services-grid" style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; width: 100%; text-align: left;">
            
            <!-- Left Column (Two Stacked Boxes) -->
            <div style="flex: 1; min-width: 320px; display: flex; flex-direction: column; gap: 20px;">
              
              <!-- App Development -->
              <a href="/services?tab=app-dev" class="service-card" style="flex: 1; background: white; border: 1px solid #e5e7eb; border-radius: 28px; padding: 32px 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.02); display: flex; flex-direction: column; justify-content: center; transform: translateY(0); color: inherit; text-decoration: none;">
                <div class="service-icon-wrap" style="background: #eff6ff; width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                  <span class="material-symbols-outlined" style="color: #2563eb; font-size: 28px;">smartphone</span>
                </div>
                <h3 style="font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.8rem; color: #111827; margin-bottom: 12px;">App Development</h3>
                <p style="font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 500; color: #6b7280; line-height: 1.5; margin: 0;">
                  We build highly scalable, fast, and beautiful applications for web and mobile platforms to help your business grow.
                </p>
                <div class="service-card-btn" style="margin-top: 20px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.95rem; color: #2563eb; display: flex; align-items: center; gap: 6px;">
                  Explore Services <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
                </div>
              </a>

              <!-- LMS Systems -->
              <a href="/services?tab=lms" class="service-card" style="flex: 1; background: white; border: 1px solid #e5e7eb; border-radius: 28px; padding: 32px 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.02); display: flex; flex-direction: column; justify-content: center; transform: translateY(0); color: inherit; text-decoration: none;">
                <div class="service-icon-wrap" style="background: #fdf4ff; width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                  <span class="material-symbols-outlined" style="color: #c026d3; font-size: 28px;">school</span>
                </div>
                <h3 style="font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.8rem; color: #111827; margin-bottom: 12px;">LMS Systems</h3>
                <p style="font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 500; color: #6b7280; line-height: 1.5; margin: 0;">
                  Custom learning management systems tailored to your specific educational and corporate training needs.
                </p>
                <div class="service-card-btn" style="margin-top: 20px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.95rem; color: #c026d3; display: flex; align-items: center; gap: 6px;">
                  Explore Services <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
                </div>
              </a>

            </div>

            <!-- Right Column (One Tall Box) -->
            <div style="flex: 1; min-width: 320px; display: flex;">
              
              <!-- ERP Systems -->
              <a href="/services?tab=erp" class="service-card" style="flex: 1; background: linear-gradient(135deg, #111827 0%, #1f2937 100%); border-radius: 28px; padding: 40px 48px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; transform: translateY(0); color: inherit; text-decoration: none;">
                
                <!-- Decorative element -->
                <div style="position: absolute; right: -50px; bottom: -50px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%); border-radius: 50%;"></div>
                
                <div class="service-icon-wrap" style="background: rgba(255,255,255,0.1); width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; position: relative; z-index: 2; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);">
                  <span class="material-symbols-outlined" style="color: white; font-size: 28px;">account_tree</span>
                </div>
                
                <h3 style="font-family: 'Playfair Display', serif; font-weight: 700; font-size: 2.4rem; color: white; margin-bottom: 20px; position: relative; z-index: 2; line-height: 1.2;">ERP Systems</h3>
                
                <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 500; color: #d1d5db; line-height: 1.6; position: relative; z-index: 2; margin: 0;">
                  Enterprise resource planning software that connects your entire business in one streamlined, efficient platform. Maximize productivity, enhance data visibility, and automate your workflows across all departments.
                </p>

                <div class="service-card-btn" style="margin-top: 24px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.95rem; color: #818cf8; display: flex; align-items: center; gap: 6px; position: relative; z-index: 2;">
                  Explore Services <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
                </div>
                
              </a>

            </div>

          </div>
        </div>
      </section>

      <!-- Globe Section -->
      <section class="color-section globe-section" data-color="#e0f2fe" style="background: transparent; padding: 120px 20px 80px; text-align: center; position: relative; overflow: hidden;">
        
        <!-- Glowing Number Hero -->
        <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 40px; position: relative; z-index: 10;">
          <!-- Pill label -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 999px; padding: 8px 20px; font-size: 0.9rem; font-weight: 600; color: #334155; margin-bottom: 24px; font-family: 'Inter', sans-serif;">
            Proven Track Record
          </div>
          
          <!-- Heading -->
          <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: #0f172a; letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 24px 0; max-width: 800px;">
            Building Solutions That<br/>Deliver Results
          </h2>
          
          <!-- Big glowing number container -->
          <div style="position: relative; display: inline-block;">
            <div style="font-family: 'Inter', sans-serif; font-size: clamp(6rem, 16vw, 13rem); font-weight: 900; color: #ff5500; line-height: 0.9; letter-spacing: -0.05em; text-shadow: 0 20px 80px rgba(255, 85, 0, 0.5);">
              50+
            </div>
            
            <!-- Tilted badge -->
            <div class="projects-badge" style="position: absolute; bottom: 15%; right: -5%; background: #ffffff; border: 1px solid #f1f5f9; border-radius: 999px; padding: 8px 16px; font-size: clamp(0.7rem, 1.5vw, 0.85rem); font-weight: 600; color: #334155; font-family: 'Inter', sans-serif; transform: rotate(6deg); box-shadow: 0 10px 30px rgba(0,0,0,0.1); white-space: nowrap;">
              Projects successfully launched
            </div>
          </div>
        </div>
        
        <!-- The Globe -->
        <style>
          @media (max-width: 768px) {
            .globe-section {
              padding-bottom: 0px !important;
            }
            .projects-badge {
              font-size: 0.55rem !important;
              padding: 4px 10px !important;
              right: -2% !important;
              bottom: 10% !important;
            }
            .globe-video-wrapper {
              width: calc(100% + 40px) !important;
              margin-left: -20px !important;
              margin-right: -20px !important;
              margin-bottom: 0px !important;
              background-color: #e0f2fe !important;
              -webkit-mask-image: linear-gradient(to top, transparent 0%, black 15%) !important;
              mask-image: linear-gradient(to top, transparent 0%, black 15%) !important;
            }
            .globe-bottom-fade {
              display: none !important;
            }
            .globe-video-element {
              width: 130vw !important;
              height: 130vw !important;
              max-width: none !important;
            }
            .stats-container {
              margin-bottom: 20px !important;
            }
          }
        </style>
        <div class="globe-video-wrapper" style="position: relative; width: 100%; max-width: 800px; height: 350px; overflow: hidden; margin: 0 auto; margin-bottom: 20px; display: flex; justify-content: center;">
          
          <!-- Globe Video -->
          <video class="globe-video-element" autoplay loop muted playsinline style="width: 700px; height: 700px; object-fit: cover; border-radius: 50%; mix-blend-mode: multiply; transform: scale(1.02);">
            <source src="/globe-moving.mp4" type="video/mp4" />
          </video>
          
          <!-- Cloud Image Overlay -->
          <div style="position: absolute; bottom: -20px; left: -10%; width: 120%; height: 160px; background-image: url('/images/cloude_img.avif'); background-size: cover; background-position: top center; z-index: 5; pointer-events: none;"></div>
          
          <!-- Bottom Fade to match section color -->
          <div class="globe-bottom-fade" style="position: absolute; bottom: 0; left: 0; right: 0; height: 80px; background: linear-gradient(to top, #e0f2fe 20%, transparent 100%); z-index: 6; pointer-events: none;"></div>
          
        </div>

        <!-- The Stats -->
        <div class="stats-container" style="display: flex; flex-wrap: wrap; justify-content: space-around; max-width: 1000px; margin: 0 auto; gap: 40px; position: relative; z-index: 10;">
          <div class="stat-item">
            <h3 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 8px; color: #111827; letter-spacing: -0.04em; line-height: 1;">99<span style="color: #60a5fa;">%</span></h3>
            <p style="font-size: 1.1rem; color: #4b5563; font-weight: 500; font-family: 'Inter', sans-serif; margin: 0; padding-top: 12px;">Client satisfaction rate</p>
          </div>
          <div class="stat-item">
            <h3 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 8px; color: #111827; letter-spacing: -0.04em; line-height: 1;">40<span style="color: #60a5fa;">%</span></h3>
            <p style="font-size: 1.1rem; color: #4b5563; font-weight: 500; font-family: 'Inter', sans-serif; margin: 0; padding-top: 12px;">Faster time-to-market</p>
          </div>
          <div class="stat-item">
            <h3 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 8px; color: #111827; letter-spacing: -0.04em; line-height: 1;">15<span style="color: #60a5fa;">+</span></h3>
            <p style="font-size: 1.1rem; color: #4b5563; font-weight: 500; font-family: 'Inter', sans-serif; margin: 0; padding-top: 12px;">Industries served globally</p>
          </div>
        </div>

      </section>

      <!-- Address / Location Section -->
      <section class="color-section" data-color="#f8fafc" style="background: transparent; padding: 80px 20px 100px; position: relative; overflow: hidden;">
        <style>
          .address-section-wrapper {
            max-width: 1200px;
            margin: 0 auto;
          }
          .address-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            align-items: stretch;
          }
          .address-info-card {
            background: #ffffff;
            border-radius: 28px;
            padding: 48px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 8px 32px rgba(0,0,0,0.06);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .address-map-card {
            border-radius: 28px;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            box-shadow: 0 8px 32px rgba(0,0,0,0.06);
            min-height: 380px;
          }
          .address-map-card iframe {
            width: 100%;
            height: 100%;
            min-height: 380px;
            border: 0;
            display: block;
          }
          .address-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #eff6ff, #e0f2fe);
            border: 1px solid #bfdbfe;
            border-radius: 999px;
            padding: 6px 16px;
            font-size: 0.8rem;
            font-weight: 700;
            color: #1d4ed8;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 24px;
            font-family: 'Inter', sans-serif;
          }
          .address-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            font-weight: 700;
            color: #0f172a;
            letter-spacing: -0.02em;
            margin-bottom: 28px;
            line-height: 1.15;
          }
          .address-detail-row {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 20px;
            padding: 16px 20px;
            background: #f8fafc;
            border-radius: 16px;
            transition: all 0.3s ease;
          }
          .address-detail-row:hover {
            background: #f1f5f9;
            transform: translateX(4px);
          }
          .address-icon-circle {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .address-detail-text {
            font-family: 'Inter', sans-serif;
          }
          .address-detail-text h4 {
            font-size: 0.8rem;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin: 0 0 4px 0;
          }
          .address-detail-text p {
            font-size: 1rem;
            font-weight: 500;
            color: #1e293b;
            margin: 0;
            line-height: 1.5;
            word-break: break-word;
          }
          .address-detail-text a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.2s;
            word-break: break-word;
          }
          .address-detail-text a:hover {
            color: #1d4ed8;
          }
          @media (max-width: 768px) {
            .address-grid {
              grid-template-columns: 1fr;
            }
            .address-info-card {
              padding: 32px 24px;
            }
            .address-map-card {
              min-height: 280px;
            }
            .address-map-card iframe {
              min-height: 280px;
            }
          }
        </style>

        <div class="address-section-wrapper">
          <div style="text-align: center; margin-bottom: 48px;">
            <div class="address-label">
              <span class="material-symbols-outlined" style="font-size: 16px;">location_on</span>
              Our Office
            </div>
            <h2 class="address-title">Visit Us or Get In Touch</h2>
            <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; color: #64748b; max-width: 600px; margin: 0 auto; line-height: 1.6;">
              We'd love to hear from you. Drop by our office or reach out through any of the channels below.
            </p>
          </div>

          <div class="address-grid">
            <!-- Info Card -->
            <div class="address-info-card">
              <div class="address-detail-row">
                <div class="address-icon-circle" style="background: linear-gradient(135deg, #eff6ff, #dbeafe);">
                  <span class="material-symbols-outlined" style="color: #2563eb; font-size: 22px;">apartment</span>
                </div>
                <div class="address-detail-text">
                  <h4>Office Address</h4>
                  <p>Office No. 302, 3rd Floor, Sai Plaza,<br/>Athavan Chowk, Nandadeep Colony,<br/>Kalewadi, Pimpri-Chinchwad,<br/>Maharashtra 411017</p>
                </div>
              </div>

              <div class="address-detail-row">
                <div class="address-icon-circle" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7);">
                  <span class="material-symbols-outlined" style="color: #16a34a; font-size: 22px;">call</span>
                </div>
                <div class="address-detail-text">
                  <h4>Phone</h4>
                  <p><a href="tel:+917387792415">+91 73877 92415</a></p>
                </div>
              </div>

              <div class="address-detail-row">
                <div class="address-icon-circle" style="background: linear-gradient(135deg, #fef3c7, #fde68a);">
                  <span class="material-symbols-outlined" style="color: #d97706; font-size: 22px;">mail</span>
                </div>
                <div class="address-detail-text">
                  <h4>Email</h4>
                  <p><a href="mailto:info@cresenixsolutions.com">info@cresenixsolutions.com</a></p>
                </div>
              </div>

              <div class="address-detail-row">
                <div class="address-icon-circle" style="background: linear-gradient(135deg, #fdf2f8, #fce7f3);">
                  <span class="material-symbols-outlined" style="color: #db2777; font-size: 22px;">schedule</span>
                </div>
                <div class="address-detail-text">
                  <h4>Working Hours</h4>
                  <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <!-- Map Card -->
            <div class="address-map-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.7988!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x71fd4d5e183a24b4!2sKalewadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411017!5e0!3m2!1sen!2sin!4v1703011200000!5m2!1sen!2sin" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Cresenix Solutions Office - Kalewadi, Pimpri-Chinchwad"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>

    <!-- Sticky WhatsApp Button -->
    <a id="whatsapp-sticky-btn" href="https://wa.me/917387792415?text=Hi%20Cresenix%20Solutions!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" style="position: fixed; bottom: 28px; right: 28px; z-index: 9999; display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 50%; background: #25D366; box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0,0,0,0.15); cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); text-decoration: none; animation: whatsapp-pulse 2s infinite;">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <!-- Tooltip -->
      <span class="whatsapp-tooltip" style="position: absolute; right: 72px; background: #1e293b; color: white; padding: 8px 16px; border-radius: 10px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; white-space: nowrap; opacity: 0; pointer-events: none; transition: all 0.3s ease; transform: translateX(8px); box-shadow: 0 4px 12px rgba(0,0,0,0.15);">Chat with us</span>
    </a>
    <style>
      @keyframes whatsapp-pulse {
        0% { box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0,0,0,0.15), 0 0 0 0 rgba(37, 211, 102, 0.4); }
        70% { box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0,0,0,0.15), 0 0 0 18px rgba(37, 211, 102, 0); }
        100% { box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0,0,0,0.15), 0 0 0 0 rgba(37, 211, 102, 0); }
      }
      #whatsapp-sticky-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 32px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(0,0,0,0.2);
      }
      #whatsapp-sticky-btn:hover .whatsapp-tooltip {
        opacity: 1;
        transform: translateX(0);
      }
      @media (max-width: 768px) {
        #whatsapp-sticky-btn {
          bottom: 20px !important;
          right: 20px !important;
          width: 54px !important;
          height: 54px !important;
        }
        #whatsapp-sticky-btn svg {
          width: 26px;
          height: 26px;
        }
        .whatsapp-tooltip {
          display: none !important;
        }
      }
    </style>

    ${renderFooter()}
  `;
}

export function initHome(): void {
  // --- DOM Elements ---
  const heroBg = document.getElementById('hero-bg');
  const heroText = document.getElementById('hero-main-text');
  const wrap = document.getElementById('panels-wrap-home');
  const scene = document.getElementById('panels-scene-home');
  const textRevealWrapper = document.getElementById('textreveal-scroll-wrapper');
  const textRevealContainer = document.getElementById('textreveal-home-container');
  const marqueeLines = document.querySelectorAll('.marquee-line') as NodeListOf<HTMLElement>;
  const splitWrapper = document.getElementById('split-scroll-wrapper');
  const splitLeft = document.getElementById('split-scroll-left');
  const splitRight = document.getElementById('split-scroll-right');
  const stickyViewport = document.querySelector('.snap-sticky-viewport');
  const colorSections = document.querySelectorAll('.color-section');
  const textCards = document.querySelectorAll('.snap-text-card');

  let textRevealWords: NodeListOf<Element> | null = null;
  if (textRevealContainer) {
    textRevealWords = textRevealContainer.querySelectorAll('.reveal-word');
  }

  // --- Animation State (Lerping) ---
  let targetScrollY = window.scrollY;
  let currentScrollY = window.scrollY;
  const lerpFactor = 0.08; // Lower = smoother, Higher = more responsive

  // Caching offsets for better performance and accurate lerping
  let sceneTop = 0;
  let sceneHeight = 0;
  let textRevealTop = 0;
  let textRevealHeight = 0;
  let splitWrapperTop = 0;
  let splitWrapperHeight = 0;
  
  function updateOffsets() {
     const scrollY = window.scrollY;
     if (scene) {
        const rect = scene.getBoundingClientRect();
        sceneTop = rect.top + scrollY;
        sceneHeight = rect.height;
     }
     if (textRevealWrapper) {
        const rect = textRevealWrapper.getBoundingClientRect();
        textRevealTop = rect.top + scrollY;
        textRevealHeight = rect.height;
     }
     if (splitWrapper) {
        const rect = splitWrapper.getBoundingClientRect();
        splitWrapperTop = rect.top + scrollY;
        splitWrapperHeight = rect.height;
     }
  }

  // --- Event Listeners ---
  let isPageScrolling = false;
  let pageScrollTimeout: number;

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
    
    // Track active scrolling to prevent auto-scroll from interrupting momentum
    isPageScrolling = true;
    window.clearTimeout(pageScrollTimeout);
    pageScrollTimeout = window.setTimeout(() => {
      isPageScrolling = false;
    }, 150);
  }, { passive: true });

  // Debounce resize to prevent layout thrashing on mobile address bar hide/show
  let resizeTimeout: number;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(updateOffsets, 200);
  }, { passive: true });
  
  // Initial calculation
  setTimeout(updateOffsets, 100);

  // Background transition setup
  if (colorSections.length > 0) {
    document.body.style.transition = 'background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    document.body.style.backgroundColor = '#f0f9ff';
  }

  // --- Main Render Loop ---
  let animationFrameId: number;
  let lastCardIndex = -1;
  let lastRenderedScrollY = -1;
  let lastRevealIndex = -1;

  function render() {
    // Lerp the scroll position
    currentScrollY += (targetScrollY - currentScrollY) * lerpFactor;
    
    // Optimization: avoid micro-calculations when very close
    if (Math.abs(targetScrollY - currentScrollY) < 0.1) {
      currentScrollY = targetScrollY;
    }

    // Skip DOM updates if scroll hasn't changed
    if (currentScrollY === lastRenderedScrollY) {
      animationFrameId = requestAnimationFrame(render);
      return;
    }
    lastRenderedScrollY = currentScrollY;

    const viewportH = window.innerHeight;

    // 1. Hero Background (Guard against negative values during rubber-band scroll)
    if (heroBg) {
      const maxBlur = 20;
      const blurAmount = Math.max(0, Math.min(currentScrollY / 15, maxBlur));
      const scaleAmount = Math.max(1, 1 + Math.min(currentScrollY / 2000, 0.15));
      heroBg.style.filter = `blur(${blurAmount}px)`;
      heroBg.style.transform = `scale(${scaleAmount})`;
    }
    if (heroText) {
      const textScale = Math.max(1, 1 + Math.min(currentScrollY / 3000, 0.1));
      heroText.style.transform = `scale(${textScale})`;
    }

    // 2. 3D Panels Section
    if (scene && wrap) {
      const totalDistance = viewportH + sceneHeight;
      // How much have we scrolled relative to the scene's top
      const scrolled = currentScrollY + viewportH - sceneTop;
      let progress = scrolled / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      const rotateY = progress * -60;
      const rotateX = progress * 10;
      const translateZ = progress * 100;

      wrap.style.transform = `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    // 3. Text Reveal (Sticky)
    if (textRevealWrapper && textRevealWords) {
      const stickyDistance = textRevealHeight - viewportH;
      let progress = (currentScrollY - textRevealTop) / stickyDistance;
      progress = Math.max(0, Math.min(1, progress));

      const totalWords = textRevealWords.length;
      const revealIndex = Math.floor(progress * totalWords);

      if (revealIndex !== lastRevealIndex) {
        lastRevealIndex = revealIndex;
        textRevealWords.forEach((word, index) => {
          if (index < revealIndex) {
            word.classList.add('revealed');
          } else {
            word.classList.remove('revealed');
          }
        });
      }
    }

    // 4. Text Marquee
    if (marqueeLines.length > 0) {
      marqueeLines.forEach((line) => {
        const isReverse = line.getAttribute('data-reverse') === 'true';
        const direction = isReverse ? 1 : -1;
        const offset = currentScrollY * 0.5 * direction;
        line.style.transform = `translateX(calc(${isReverse ? '-50%' : '0%'} + ${offset}px))`;
      });
    }

    // 5. Scroll-Snapping Cards (Desktop Only)
    if (splitWrapper && splitLeft && splitRight && window.innerWidth > 768) {
      const stickyDistance = splitWrapperHeight - viewportH;
      let progress = (currentScrollY - splitWrapperTop) / stickyDistance;
      progress = Math.max(0, Math.min(1, progress));

      const totalCards = 3;
      
      // Calculate stepped progress for a smooth magnetic snap effect
      const rawIndex = progress * (totalCards - 1);
      const i = Math.floor(rawIndex);
      const f = rawIndex - i;
      
      // Cosine easing creates a natural slowdown at the edges (centers of cards)
      const fStepped = (1 - Math.cos(f * Math.PI)) / 2;
      
      const steppedProgress = Math.min(1, Math.max(0, (i + fStepped) / (totalCards - 1)));

      const offsetPercent = steppedProgress * (200 / 3);
      splitLeft.style.transform = `translateY(-${offsetPercent}%)`;
      splitRight.style.transform = `translateY(${offsetPercent}%)`;

      // Use steppedProgress to accurately determine active card index
      const cardIndex = Math.min(Math.round(steppedProgress * (totalCards - 1)), totalCards - 1);

      if (cardIndex !== lastCardIndex && textCards.length > 0) {
        lastCardIndex = cardIndex;
        textCards.forEach((card, i) => {
          card.classList.toggle('active', i === cardIndex);
        });
      }
    }

    // 6. Background Color Transitions
    if (colorSections.length > 0) {
      let activeColor = '#f0f9ff';
      colorSections.forEach((section) => {
        const rectTop = section.getBoundingClientRect().top;
        if (rectTop <= viewportH / 2) {
          activeColor = section.getAttribute('data-color') || activeColor;
        }
      });
      if (document.body.style.backgroundColor !== activeColor) {
        document.body.style.backgroundColor = activeColor;
      }
    }

    animationFrameId = requestAnimationFrame(render);
  }

  // Start loop
  animationFrameId = requestAnimationFrame(render);

  // --- Mobile Auto-Scroll Logic ---
  let autoScrollInterval: number;
  const startAutoScroll = () => {
    if (window.innerWidth > 768 || !stickyViewport) return;
    clearInterval(autoScrollInterval);
    autoScrollInterval = window.setInterval(() => {
      if (!stickyViewport || isPageScrolling) return; // Don't interrupt if user is scrolling
      
      const cardWidth = window.innerWidth * 0.85 + 16;
      let nextScroll = stickyViewport.scrollLeft + cardWidth;
      
      if (nextScroll >= stickyViewport.scrollWidth - stickyViewport.clientWidth - 10) {
        nextScroll = 0;
      }
      stickyViewport.scrollTo({ left: nextScroll, behavior: 'smooth' });
    }, 3500);
  };

  if (stickyViewport) {
    // Detect touch ANYWHERE on the window to pause auto-scroll
    window.addEventListener('touchstart', () => clearInterval(autoScrollInterval), { passive: true });
    window.addEventListener('touchend', () => {
      setTimeout(startAutoScroll, 3000);
    }, { passive: true });
  }
  startAutoScroll();

  // Handle Resize for mobile interval
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      clearInterval(autoScrollInterval);
    } else {
      startAutoScroll();
    }
  }, { passive: true });

  // --- Cleanup ---
  // Ensure we don't leave memory leaks if the user navigates away from Home
  const cleanupObserver = new MutationObserver(() => {
    if (!document.getElementById('hero-bg')) {
      cancelAnimationFrame(animationFrameId);
      clearInterval(autoScrollInterval);
      window.removeEventListener('resize', updateOffsets);
      cleanupObserver.disconnect();
    }
  });
  cleanupObserver.observe(document.body, { childList: true, subtree: true });
}


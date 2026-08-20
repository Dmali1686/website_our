import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

function renderChallenge(title: string, subtitle: string, items: string[], imageSrc: string) {
  const pills = items.map(item => `
    <div class="uc-pill">
      <div class="uc-pill-icon icon-red">
        <span class="material-symbols-outlined" style="font-size: 18px; font-weight: 800;">close</span>
      </div>
      <span class="uc-pill-text">${item}</span>
    </div>
  `).join('');

  return `
    <div class="uc-redesign-row uc-animate-2">
      <div class="uc-column">
        <div class="uc-header-badge red-badge">
          <span class="material-symbols-outlined">warning</span>
        </div>
        <h3 class="uc-redesign-title">${title}</h3>
        <div class="uc-pill-list">
          ${pills}
        </div>
      </div>
      <div class="uc-column">
        <div class="uc-illustration-card card-red">
          <img src="${imageSrc}" alt="${title}" class="uc-card-img" />
          <div class="uc-card-badge badge-red">
            <span class="material-symbols-outlined">warning</span>
            <span>${subtitle}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSolution(title: string, subtitle: string, items: string[], imageSrc: string) {
  const pills = items.map(item => `
    <div class="uc-pill">
      <div class="uc-pill-icon icon-green">
        <span class="material-symbols-outlined" style="font-size: 18px; font-weight: 800;">check</span>
      </div>
      <span class="uc-pill-text">${item}</span>
      <span class="material-symbols-outlined uc-pill-trailing">task_alt</span>
    </div>
  `).join('');

  return `
    <div class="uc-redesign-row reverse uc-animate-3">
      <div class="uc-column">
        <div class="uc-illustration-card card-green" style="flex-direction: column; justify-content: flex-start; padding: 40px 30px;">
          ${title ? `
          <div class="uc-green-top-text">
            <div class="uc-top-icon"><span class="material-symbols-outlined">lightbulb</span></div>
            <h4>${title}</h4>
            <p>${subtitle}</p>
          </div>
          ` : ''}
          <img src="${imageSrc}" alt="Solution Image" class="uc-card-img" style="${title ? 'margin-top: auto; max-height: 220px;' : 'margin: auto; width: 100%; height: 100%; object-fit: contain; transform: scale(1.1);'}" />
        </div>
      </div>
      <div class="uc-column">
        <div class="uc-pill-list">
          ${pills}
        </div>
      </div>
    </div>
  `;
}

function renderImpactBlock(text: string, quote: string) {
  return `
    <div class="modern-impact-section uc-animate-4">
      <div class="modern-quote-mark">“</div>
      <div class="modern-impact-content">
        <h3 class="modern-impact-heading">Real-World Impact</h3>
        <p class="modern-impact-text">${text}</p>
        <div class="modern-impact-divider"></div>
        <p class="modern-impact-highlight">${quote}</p>
      </div>
    </div>
  `;
}

export function renderUseCasesPage(): string {
  return `
    <style>
      .uc-redesign-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        margin-bottom: 80px;
        align-items: center;
        position: relative;
      }
      .uc-column {
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;
      }
      
      .uc-header-badge {
        display: flex; align-items: center; justify-content: center;
        width: 56px; height: 56px; border-radius: 16px; margin-bottom: 24px;
      }
      .uc-header-badge.red-badge { background: #fee2e2; color: #ef4444; }
      
      .uc-redesign-title {
        font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; color: #0f172a; margin-bottom: 32px;
        position: relative; padding-bottom: 16px;
      }
      .uc-redesign-title::after {
        content: ''; position: absolute; left: 0; bottom: 0; width: 60px; height: 3px; background: #ef4444; border-radius: 2px;
      }
      
      .uc-pill-list {
        display: flex; flex-direction: column; gap: 16px;
      }
      .uc-pill {
        background: #ffffff; border-radius: 100px; padding: 12px 24px 12px 12px;
        display: flex; align-items: center; gap: 16px;
        box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04); border: 1px solid rgba(15, 23, 42, 0.02);
        
        opacity: var(--pill-opacity, 0);
        transform: translateX(var(--pill-x, -30px)) translateY(var(--pill-y, 0px));
        transition: box-shadow 0.3s ease;
        will-change: opacity, transform;
      }
      .uc-pill:hover { 
        --pill-y: -2px;
        box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08); 
      }
      
      .uc-pill-icon {
        width: 36px; height: 36px; border-radius: 50%;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      }
      .uc-pill-icon.icon-red { background: #fee2e2; color: #ef4444; }
      .uc-pill-icon.icon-green { background: #d1fae5; color: #10b981; }
      
      .uc-pill-text { font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #1e293b; font-weight: 600; line-height: 1.4; flex-grow: 1; text-align: left; }
      .uc-pill-trailing { color: #a7f3d0; font-size: 24px; opacity: 0.5; }
      
      .uc-illustration-card {
        position: relative; border-radius: 32px; overflow: hidden; padding: 40px;
        display: flex; align-items: center; justify-content: center; min-height: 420px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.05);
      }
      .uc-illustration-card.card-red {
        background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%);
        border: 1px solid #fecdd3;
      }
      .uc-illustration-card.card-green {
        background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
        border: 1px solid #a7f3d0;
      }
      .uc-card-img {
        max-width: 100%; height: auto; object-fit: contain; position: relative; z-index: 1; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.1));
        border-radius: 24px;
      }
      
      .uc-card-badge {
        position: absolute; bottom: 0; left: 0; right: 0; padding: 24px 30px;
        display: flex; align-items: center; gap: 16px; color: white;
        font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1.05rem; z-index: 2;
      }
      .uc-card-badge.badge-red { background: linear-gradient(90deg, #f43f5e, #fb7185); }
      
      .uc-green-top-text {
        display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 40px; position: relative; z-index: 2;
      }
      .uc-top-icon {
        width: 56px; height: 56px; border-radius: 50%; background: #ffffff; color: #10b981;
        display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2); margin-bottom: 16px;
      }
      .uc-green-top-text h4 { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 800; color: #064e3b; margin-bottom: 8px; }
      .uc-green-top-text p { font-family: 'Inter', sans-serif; color: #047857; font-size: 0.95rem; font-weight: 500; }
      
      /* Connecting Dotted Lines Background (Optional Decorative) */
      .uc-dotted-bg {
        position: absolute; top: -50px; left: -50px; right: -50px; bottom: -50px; z-index: 0; pointer-events: none;
        background-image: radial-gradient(rgba(15, 23, 42, 0.06) 2px, transparent 2px);
        background-size: 30px 30px;
        opacity: 0.5;
        border-radius: 40px;
      }
      
      /* --- Modern Typography-Led Impact Section --- */
      .modern-impact-section {
        position: relative;
        padding: 60px 40px;
        margin: 60px 0;
        border-radius: 32px;
        background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.8);
        box-shadow: 0 30px 60px rgba(15, 23, 42, 0.05), inset 0 0 0 1px rgba(255,255,255,1);
        overflow: hidden;
        z-index: 2;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
      }
      .modern-impact-section:hover {
        transform: translateY(-5px);
        box-shadow: 0 40px 80px rgba(15, 23, 42, 0.08), inset 0 0 0 1px rgba(255,255,255,1);
      }
      
      .modern-quote-mark {
        position: absolute;
        top: -40px;
        left: 20px;
        font-family: 'Playfair Display', serif;
        font-size: 240px;
        line-height: 1;
        color: rgba(147, 51, 234, 0.04);
        z-index: 0;
        pointer-events: none;
      }
      
      .modern-impact-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      .modern-impact-heading {
        font-family: 'Inter', sans-serif;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 0.85rem;
        font-weight: 700;
        color: #9333ea;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .modern-impact-heading::before, .modern-impact-heading::after {
        content: '';
        width: 40px;
        height: 2px;
        background: rgba(147, 51, 234, 0.2);
      }
      
      .modern-impact-text {
        font-family: 'Playfair Display', serif;
        font-size: 1.6rem;
        line-height: 1.6;
        color: #0f172a;
        max-width: 800px;
        margin-bottom: 32px;
        font-weight: 500;
      }
      
      .modern-impact-divider {
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #c084fc, #ec4899);
        border-radius: 2px;
        margin-bottom: 32px;
      }
      
      .modern-impact-highlight {
        font-family: 'Inter', sans-serif;
        font-size: 1.15rem;
        line-height: 1.5;
        font-weight: 600;
        color: #475569;
        max-width: 650px;
        background: linear-gradient(90deg, #9333ea, #db2777);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      /* Ambient Background Orbs (From Services Page) */
      .noise-overlay {
        position: fixed; inset: 0; z-index: 9999; pointer-events: none; opacity: 0.035; mix-blend-mode: multiply;
        background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
      }
      .uc-ambient-orb {
        position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 0;
        animation: orbFloat 25s infinite alternate ease-in-out;
      }
      @keyframes orbFloat {
        0% { transform: translate(0, 0) scale(1); }
        100% { transform: translate(80px, 60px) scale(1.15); }
      }
      .uc-watermark {
        position: absolute; top: 120px; left: 50%; transform: translateX(-50%);
        font-family: 'Playfair Display', serif; font-size: 20vw; font-weight: 900;
        color: rgba(15, 23, 42, 0.015); z-index: 0; pointer-events: none;
        white-space: nowrap; user-select: none; letter-spacing: -0.05em;
      }

      @media (max-width: 1000px) {
        .uc-redesign-row { 
          grid-template-columns: 1fr; 
          gap: 40px; 
          align-items: start; /* Prevents vertical centering bugs that cause overflow */
        }
        .uc-redesign-row.reverse .uc-column:first-child { order: 2; }
        .uc-redesign-row.reverse .uc-column:last-child { order: 1; }
        .uc-column { display: block; flex-shrink: 0; } /* Prevent column from shrinking and overflowing content */
      }
      @media (max-width: 768px) {
        .modern-impact-section { 
          padding: 32px 24px; 
          margin: 32px 0; 
          text-align: left; 
          border-radius: 24px;
        }
        .modern-impact-content { align-items: flex-start; text-align: left; }
        
        .modern-impact-heading { justify-content: flex-start; margin-bottom: 16px; }
        .modern-impact-heading::before { display: none; } /* Remove left line for pure left-alignment */
        
        .modern-impact-text { 
          font-family: 'Inter', sans-serif; /* Switch to crisp sans-serif on mobile */
          font-size: 1.05rem; 
          line-height: 1.6;
          color: #334155;
          font-weight: 400;
          margin-bottom: 24px;
        }
        
        .modern-impact-divider { display: none; } /* Hide center divider */
        
        .modern-impact-highlight { 
          font-size: 1rem; 
          line-height: 1.5;
          border-left: 3px solid #c084fc;
          padding-left: 16px;
          margin-top: 8px;
        }
        
        .modern-quote-mark { 
          font-size: 120px; 
          left: -10px; 
          top: -20px; 
          color: rgba(147, 51, 234, 0.08); 
        }
        
        .uc-redesign-title { font-size: 2rem; margin-bottom: 24px; }
        
        /* Transform list into a modern 2-column grid on mobile */
        .uc-pill-list { 
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px; 
          align-items: stretch; /* Ensure items in the same row stretch to match */
          min-height: max-content; /* Force container to wrap all rows */
        }
        
        .uc-pill { 
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 16px; 
          gap: 12px; 
          border-radius: 20px; 
          box-sizing: border-box;
          /* Removed explicit height:100% to let CSS Grid handle the stretching naturally, 
             preventing the container overflow bug on mobile browsers */
        }
        
        .uc-pill-icon { width: 36px; height: 36px; }
        .uc-pill-icon .material-symbols-outlined { font-size: 18px !important; }
        .uc-pill-text { font-size: 0.82rem; line-height: 1.4; }
        
        /* Hide the redundant trailing icon to save space in the new card layout */
        .uc-pill-trailing { display: none; }
        
        /* Limit the list to exactly 4 boxes on mobile to keep it compact and prevent excessive scrolling */
        .uc-pill-list .uc-pill:nth-child(n+5) {
          display: none !important;
        }
        
        .uc-card-badge { padding: 16px 20px; font-size: 0.95rem; }
      }
    </style>
    ${renderNavbar()}
    <div class="page-wrapper use-cases-page" style="background: #f0f9ff; padding-top: 120px; padding-bottom: 60px; position: relative; overflow: hidden; min-height: 100vh;">
      
      <div class="noise-overlay"></div>
      
      <!-- Ambient Background Orbs to match Services theme -->
      <div class="uc-ambient-orb" style="top: -10%; left: -5%; width: 600px; height: 600px; background: rgba(99,102,241,0.25);"></div>
      <div class="uc-ambient-orb" style="bottom: 10%; right: -5%; width: 700px; height: 700px; background: rgba(168,85,247,0.15); animation-delay: -5s;"></div>
      <div class="uc-ambient-orb" style="top: 40%; left: 50%; width: 500px; height: 500px; background: rgba(56,189,248,0.15); animation-delay: -10s; transform: translateX(-50%);"></div>
      <div class="uc-watermark">USE CASES</div>
      
      <div class="container" style="position: relative; z-index: 5;">
        
        <div class="uc-tabs-container animate-fade-in-up delay-300">
          <div class="uc-tabs">
            <button class="uc-tab active" data-target="mh14">
              <span class="material-symbols-outlined">pets</span> <span class="uc-tab-text">MH-14</span>
            </button>
            <button class="uc-tab" data-target="geek">
              <span class="material-symbols-outlined">school</span> <span class="uc-tab-text">Geek By Choice</span>
            </button>
            <button class="uc-tab" data-target="jayshree">
              <span class="material-symbols-outlined">factory</span> <span class="uc-tab-text">Jayshree Electrocoating</span>
            </button>
          </div>
        </div>

        <div class="uc-content-area">
            
            <!-- ===================== MH-14 PANE ===================== -->
            <div class="uc-pane active" id="pane-mh14">
              
              <div class="uc-image-wrapper uc-animate-1">
                <img src="/images/MH-14.webp" alt="MH-14 Project" class="uc-image" />
                <div class="uc-image-overlay">
                  <span class="uc-project-category">NGO & Animal Welfare</span>
                  <h2 class="uc-project-title-large">MH-14 Platform</h2>
                </div>
              </div>
              
              <div class="uc-details" style="position: relative;">
                <div class="uc-dotted-bg"></div>
                
                ${renderChallenge(
                  "The Challenge",
                  "Fragmented workflows limiting true impact.",
                  [
                    "No centralized rescue management",
                    "Scattered information and manual workflows",
                    "Difficult to track animal recovery journeys",
                    "Limited visibility into donations and expenses",
                    "Struggle to showcase real impact to donors"
                  ],
                  "/images/error_mh14.webp"
                )}
                
                ${renderSolution(
                  "",
                  "",
                  [
                    "Centralized NGO digital platform",
                    "End-to-end case management",
                    "Complete animal journey tracking",
                    "Seamless volunteer coordination",
                    "Integrated donation and expense tracking",
                    "Public platform to showcase impact"
                  ],
                  "/images/our_solution_mh14.webp"
                )}
                
                <!-- Impact -->
                ${renderImpactBlock(
                  "By making their work visible and structured, MH-14 builds a stronger audience. Consistently showcasing real rescue journeys strengthens donor trust and creates better opportunities to raise funds.",
                  "From managing operations to building trust — turning real-world impact into a loyal support community."
                )}
              </div>
            </div>

            <!-- ===================== GEEK BY CHOICE PANE ===================== -->
            <div class="uc-pane" id="pane-geek">
              
              <div class="uc-image-wrapper uc-animate-1">
                <img src="/images/Geek by Choice.webp" alt="Geek By Choice Project" class="uc-image" />
                <div class="uc-image-overlay">
                  <span class="uc-project-category">Education & EdTech</span>
                  <h2 class="uc-project-title-large">Geek By Choice LMS</h2>
                </div>
              </div>
              
              <div class="uc-details" style="position: relative;">
                <div class="uc-dotted-bg"></div>
                
                ${renderChallenge(
                  "The Challenge",
                  "Disconnected learning content and limited visibility.",
                  [
                    "Decentralized learning content",
                    "Limited student progress visibility",
                    "Hard to manage tests and assessments",
                    "Lack of clear performance insights",
                    "Need for scalable digital learning"
                  ],
                  "/images/challenges-illustration.webp"
                )}
                
                ${renderSolution(
                  "",
                  "",
                  [
                    "Custom scalable LMS",
                    "Centralized learning content",
                    "Online practice and assessments",
                    "Detailed performance tracking",
                    "Clear progress insights",
                    "Engaging digital learning experience"
                  ],
                  "/images/lms-solution.webp"
                )}
                
                <!-- Impact -->
                ${renderImpactBlock(
                  "The LMS delivers a consistent learning experience while giving students clear visibility into their progress. Structured digital learning creates stronger engagement and helps build a scalable education platform.",
                  "From scattered learning to a connected digital experience — helping students learn, practice, and improve."
                )}
              </div>
            </div>

            <!-- ===================== JAYSHREE ELECTROCOATING PANE ===================== -->
            <div class="uc-pane" id="pane-jayshree">
              
              <div class="uc-image-wrapper uc-animate-1">
                <img src="/images/Jayshree Electrocoating.webp" alt="Jayshree Electrocoating Project" class="uc-image" />
                <div class="uc-image-overlay">
                  <span class="uc-project-category">Manufacturing & Enterprise</span>
                  <h2 class="uc-project-title-large">Jayshree Electrocoating ERP</h2>
                </div>
              </div>
              
              <div class="uc-details" style="position: relative;">
                <div class="uc-dotted-bg"></div>
                
                ${renderChallenge(
                  "The Challenge",
                  "Fragmented processes disrupting production visibility.",
                  [
                    "Lack of centralized coordination",
                    "Fragmented production data",
                    "Limited process visibility",
                    "Slow manual decision-making",
                    "No real-time operational insights"
                  ],
                  "/images/challenges-illustration.webp"
                )}
                
                ${renderSolution(
                  "",
                  "",
                  [
                    "Custom centralized ERP",
                    "Streamlined order management",
                    "Real-time production tracking",
                    "Integrated inventory control",
                    "Quality control management",
                    "Seamless logistics coordination",
                    "Centralized reports and insights"
                  ],
                  "/images/erp-solution.webp"
                )}
                
                <!-- Impact -->
                ${renderImpactBlock(
                  "The ERP achieves better operational coordination and process visibility. By bringing critical manufacturing data into one platform, the system supports improved efficiency, accountability, and scalable growth.",
                  "From fragmented processes to one connected system — helping teams manage, monitor, and grow with clarity."
                )}
              </div>
            </div>

          </div>
        </div>

      ${renderFooter()}
    </div>
  `;
}

export function initUseCasesTabs(): void {
  const tabs = document.querySelectorAll('.uc-tab');
  const panes = document.querySelectorAll('.uc-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = (tab as HTMLElement).dataset.target;
      if (!target) return;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active pane with animation resetting
      panes.forEach(pane => {
        pane.classList.remove('active');
        
        // Remove animation classes briefly to trigger reflow
        const animatableElements = pane.querySelectorAll('[class*="uc-animate-"]');
        animatableElements.forEach(el => {
          (el as HTMLElement).style.animation = 'none';
        });

        if (pane.id === `pane-${target}`) {
          pane.classList.add('active');
          
          // Trigger reflow to restart animations
          void (pane as HTMLElement).offsetWidth;
          
          animatableElements.forEach(el => {
            (el as HTMLElement).style.animation = ''; // Restore CSS animation
          });
        }
      });
    });
  });

  // Scroll-scrubbing animation for the pills
  const handleScroll = () => {
    const lists = document.querySelectorAll('.uc-pill-list');
    const windowHeight = window.innerHeight;
    
    lists.forEach((list) => {
      // Only animate if the list's pane is active
      const pane = list.closest('.uc-pane');
      if (!pane || !pane.classList.contains('active')) return;
      
      const rect = list.getBoundingClientRect();
      
      // Calculate how far the list is into the viewport
      // Start when top is at 90% of screen height, end when top is at 30% of screen height
      let listProgress = (windowHeight * 0.9 - rect.top) / (windowHeight * 0.6);
      listProgress = Math.max(0, Math.min(1, listProgress));
      
      const pills = list.querySelectorAll('.uc-pill');
      const total = pills.length;
      
      pills.forEach((pill, index) => {
        // Distribute the listProgress evenly among the pills
        // pill 0 animates from 0.0 to 0.2
        // pill 1 animates from 0.2 to 0.4 (if total is 5)
        // We'll add a slight overlap so it feels smoother
        const startTrigger = (index / total) * 0.8;
        const endTrigger = startTrigger + 0.4; // 0.4 window for each pill to fade in
        
        let pillProgress = (listProgress - startTrigger) / (endTrigger - startTrigger);
        pillProgress = Math.max(0, Math.min(1, pillProgress));
        
        const opacity = pillProgress;
        const translateX = -30 * (1 - Math.pow(pillProgress, 3)); // Ease out cubic
        
        (pill as HTMLElement).style.setProperty('--pill-opacity', opacity.toString());
        (pill as HTMLElement).style.setProperty('--pill-x', `${translateX}px`);
      });
    });
  };

  // Add scroll listener and call once to initialize
  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

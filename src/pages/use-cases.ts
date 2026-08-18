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
          <div class="uc-green-top-text">
            <div class="uc-top-icon"><span class="material-symbols-outlined">lightbulb</span></div>
            <h4>${title}</h4>
            <p>${subtitle}</p>
          </div>
          <img src="${imageSrc}" alt="${title}" class="uc-card-img" style="margin-top: auto; max-height: 220px;" />
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
    <div class="uc-impact-block uc-animate-4 premium-impact" style="position: relative; z-index: 2;">
      <!-- Decorative Shimmer -->
      <div class="shimmer-sweep"></div>
      
      <!-- Floating Particles -->
      <div class="impact-particles">
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
      </div>
      
      <div class="uc-impact-header">
        <div class="uc-impact-icon-glow">
          <span class="material-symbols-outlined">auto_awesome</span>
        </div>
        <h3 class="uc-impact-title">Real-World Impact</h3>
      </div>
      <div class="uc-impact-content">
        <p>${text}</p>
        <p class="uc-impact-bold premium-quote">${quote}</p>
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
      
      .uc-pill-text { font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #334155; font-weight: 500; line-height: 1.4; flex-grow: 1; text-align: left; }
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
      
      /* --- Premium Impact Block Animations --- */
      .premium-impact {
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 20px 40px rgba(0,0,0,0.2), inset 0 0 40px rgba(147, 51, 234, 0.1);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
      }
      .premium-impact:hover {
        transform: translateY(-8px) scale(1.01) !important;
        box-shadow: 0 30px 60px rgba(0,0,0,0.3), inset 0 0 60px rgba(147, 51, 234, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
      }
      
      .shimmer-sweep {
        position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
        background: linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent);
        transform: skewX(-25deg);
        animation: sweep 7s infinite;
        pointer-events: none; z-index: 1;
      }
      @keyframes sweep {
        0% { left: -100%; }
        15% { left: 200%; }
        100% { left: 200%; }
      }
      
      .impact-particles { position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
      .particle { position: absolute; border-radius: 50%; background: #c084fc; filter: blur(2px); animation: float 10s infinite ease-in-out alternate; }
      .p1 { width: 5px; height: 5px; top: 20%; left: 15%; opacity: 0.4; animation-delay: 0s; }
      .p2 { width: 8px; height: 8px; top: 70%; left: 85%; opacity: 0.2; animation-delay: 2s; }
      .p3 { width: 4px; height: 4px; top: 85%; left: 25%; opacity: 0.5; animation-delay: 4s; }
      @keyframes float {
        0% { transform: translateY(0px) translateX(0px); }
        100% { transform: translateY(-25px) translateX(15px); }
      }
      
      .premium-quote {
        border-left: none !important; position: relative; padding-left: 24px !important;
      }
      .premium-quote::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; border-radius: 2px;
        background: linear-gradient(180deg, #c084fc, #ec4899);
        box-shadow: 0 0 10px rgba(192, 132, 252, 0.5);
        animation: quoteGlow 3s infinite alternate;
      }
      @keyframes quoteGlow {
        0% { box-shadow: 0 0 5px rgba(192, 132, 252, 0.3); }
        100% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.8); }
      }

      @media (max-width: 1000px) {
        .uc-redesign-row { grid-template-columns: 1fr; gap: 40px; }
        .uc-redesign-row.reverse .uc-column:first-child { order: 2; }
        .uc-redesign-row.reverse .uc-column:last-child { order: 1; }
      }
    </style>
    ${renderNavbar()}
    <div class="page-wrapper use-cases-page" style="padding-top: 120px; padding-bottom: 60px; position: relative; overflow: hidden;">
      
      <!-- Decorative Background Glow -->
      <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 80vw; height: 500px; background: radial-gradient(circle, rgba(192,132,252,0.08) 0%, rgba(45,212,191,0.05) 50%, rgba(15,23,42,0) 80%); filter: blur(60px); pointer-events: none; z-index: 1;"></div>
      
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
                <img src="/images/MH-14.png" alt="MH-14 Project" class="uc-image" />
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
                    "No centralized system for managing rescue and animal records",
                    "Information scattered across different channels and manual processes",
                    "Difficult to track an animal's journey from rescue to recovery/adoption",
                    "Limited visibility into donations, expenses, and supporting records",
                    "Difficult to showcase real work and impact to donors and funders"
                  ],
                  "/images/ngo_casestudy.png"
                )}
                
                ${renderSolution(
                  "Our Solution",
                  "A unified digital platform for complete operational control.",
                  [
                    "Centralized digital platform for NGO operations",
                    "Rescue, medical, and animal case management",
                    "Animal journey tracking from rescue to recovery/adoption",
                    "Volunteer and internal activity coordination",
                    "Donation, expense, document, and evidence management",
                    "Public-facing platform to showcase activities, stories, and impact"
                  ],
                  "/images/ngo_interanl.jpeg"
                )}
                
                <!-- Impact -->
                ${renderImpactBlock(
                  "The solution helps MH-14 build a stronger and more engaged audience by making their work visible, structured, and transparent. By consistently showcasing real activities, rescue journeys, and documented impact, the platform helps strengthen donor trust and long-term supporter relationships, creating better opportunities to attract donations and raise more funds for animal welfare.",
                  "From managing operations to building trust — turning real-world impact into a stronger digital presence and a more loyal support community."
                )}
              </div>
            </div>

            <!-- ===================== GEEK BY CHOICE PANE ===================== -->
            <div class="uc-pane" id="pane-geek">
              
              <div class="uc-image-wrapper uc-animate-1">
                <img src="/images/Geek by Choice.png" alt="Geek By Choice Project" class="uc-image" />
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
                    "Learning content and assessments were not centralized",
                    "Students had limited visibility into their learning progress",
                    "Difficult to consistently manage practice tests and assessments",
                    "Limited performance insights for identifying strengths and weaknesses",
                    "Need for a more engaging and scalable digital learning experience"
                  ],
                  "/images/geekbychoice_casestudy.png"
                )}
                
                ${renderSolution(
                  "Our Solution",
                  "A scalable, data-driven Learning Management System.",
                  [
                    "Custom Learning Management System (LMS)",
                    "Centralized learning content and exam categories",
                    "Online practice tests and assessments",
                    "Student performance and analytics tracking",
                    "Progress monitoring and learning insights",
                    "Organized digital learning experience for students"
                  ],
                  "/images/LPP cases.png"
                )}
                
                <!-- Impact -->
                ${renderImpactBlock(
                  "The LMS helps Geek By Choice deliver a more engaging and consistent learning experience, while giving students greater visibility into their progress. With performance data and structured digital learning in one place, it creates stronger student engagement, supports better learning outcomes, and helps Geek By Choice build a more scalable education platform.",
                  "From scattered learning to a connected digital experience — helping students learn, practice, measure, and improve."
                )}
              </div>
            </div>

            <!-- ===================== JAYSHREE ELECTROCOATING PANE ===================== -->
            <div class="uc-pane" id="pane-jayshree">
              
              <div class="uc-image-wrapper uc-animate-1">
                <img src="/images/Jayshree Electrocoating.png" alt="Jayshree Electrocoating Project" class="uc-image" />
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
                    "Manufacturing operations required better centralized coordination",
                    "Order, production, inventory, and dispatch information was fragmented",
                    "Difficult to maintain complete visibility across operational processes",
                    "Manual or disconnected workflows could slow down decision-making",
                    "Limited centralized reporting and real-time operational insights"
                  ],
                  "/images/jayshree_casestudy.png"
                )}
                
                ${renderSolution(
                  "Our Solution",
                  "An enterprise-grade, end-to-end management system.",
                  [
                    "Custom ERP system for centralized business operations",
                    "Order and work order management",
                    "Production and manufacturing tracking",
                    "Inventory and material management",
                    "Quality control and inspection management",
                    "Dispatch and logistics coordination",
                    "Centralized reports and operational insights"
                  ],
                  "/images/ERP cases.jpg"
                )}
                
                <!-- Impact -->
                ${renderImpactBlock(
                  "The ERP helps Jayshree Electrocoating achieve better operational coordination, greater process visibility, and more informed decision-making. By bringing critical manufacturing information into one platform, the system supports improved efficiency, accountability, and scalability as the business grows.",
                  "From fragmented processes to one connected system — helping manufacturing teams manage, monitor, and grow with greater clarity."
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

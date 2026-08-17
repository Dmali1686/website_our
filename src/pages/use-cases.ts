import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderUseCasesPage(): string {
  return `
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
              
              <div class="uc-details">
                
                <!-- Challenge (Text Left, Header Right) -->
                <div class="uc-split-row uc-animate-2">
                  <div class="uc-split-content">
                    <ul class="uc-list">
                      <li>No centralized system for managing rescue and animal records</li>
                      <li>Information scattered across different channels and manual processes</li>
                      <li>Difficult to track an animal's journey from rescue to recovery/adoption</li>
                      <li>Limited visibility into donations, expenses, and supporting records</li>
                      <li>Difficult to showcase real work and impact to donors and funders</li>
                    </ul>
                  </div>
                  <div class="uc-split-header danger-header">
                    <div class="uc-icon-box danger"><span class="material-symbols-outlined">warning</span></div>
                    <h3 class="uc-section-title">The Challenge</h3>
                    <p class="uc-header-sub">Fragmented workflows limiting true impact.</p>
                  </div>
                </div>
                
                <!-- Solution (Header Left, Text Right) -->
                <div class="uc-split-row reverse uc-animate-3">
                  <div class="uc-split-header success-header">
                    <div class="uc-icon-box success"><span class="material-symbols-outlined">lightbulb</span></div>
                    <h3 class="uc-section-title">Our Solution</h3>
                    <p class="uc-header-sub">A unified digital platform for complete operational control.</p>
                  </div>
                  <div class="uc-split-content">
                    <ul class="uc-list">
                      <li>Centralized digital platform for NGO operations</li>
                      <li>Rescue, medical, and animal case management</li>
                      <li>Animal journey tracking from rescue to recovery/adoption</li>
                      <li>Volunteer and internal activity coordination</li>
                      <li>Donation, expense, document, and evidence management</li>
                      <li>Public-facing platform to showcase activities, stories, and impact</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Impact -->
                <div class="uc-impact-block uc-animate-4">
                  <div class="uc-impact-header">
                    <div class="uc-impact-icon-glow">
                      <span class="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <h3 class="uc-impact-title">Real-World Impact</h3>
                  </div>
                  <div class="uc-impact-content">
                    <p>The solution helps MH-14 build a stronger and more engaged audience by making their work visible, structured, and transparent. By consistently showcasing real activities, rescue journeys, and documented impact, the platform helps strengthen donor trust and long-term supporter relationships, creating better opportunities to attract donations and raise more funds for animal welfare.</p>
                    <p class="uc-impact-bold">From managing operations to building trust — turning real-world impact into a stronger digital presence and a more loyal support community.</p>
                  </div>
                </div>
                
                <!-- Bottom Showcase Image -->
                <div class="uc-showcase-container uc-animate-4">
                  <img src="/images/APP cases.png" alt="App Cases Showcase" class="uc-showcase-img" />
                </div>
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
              
              <div class="uc-details">
                
                <!-- Challenge (Text Left, Header Right) -->
                <div class="uc-split-row uc-animate-2">
                  <div class="uc-split-content">
                    <ul class="uc-list">
                      <li>Learning content and assessments were not centralized</li>
                      <li>Students had limited visibility into their learning progress</li>
                      <li>Difficult to consistently manage practice tests and assessments</li>
                      <li>Limited performance insights for identifying strengths and weaknesses</li>
                      <li>Need for a more engaging and scalable digital learning experience</li>
                    </ul>
                  </div>
                  <div class="uc-split-header danger-header">
                    <div class="uc-icon-box danger"><span class="material-symbols-outlined">warning</span></div>
                    <h3 class="uc-section-title">The Challenge</h3>
                    <p class="uc-header-sub">Disconnected learning content and limited visibility.</p>
                  </div>
                </div>
                
                <!-- Solution (Header Left, Text Right) -->
                <div class="uc-split-row reverse uc-animate-3">
                  <div class="uc-split-header success-header">
                    <div class="uc-icon-box success"><span class="material-symbols-outlined">lightbulb</span></div>
                    <h3 class="uc-section-title">Our Solution</h3>
                    <p class="uc-header-sub">A scalable, data-driven Learning Management System.</p>
                  </div>
                  <div class="uc-split-content">
                    <ul class="uc-list">
                      <li>Custom Learning Management System (LMS)</li>
                      <li>Centralized learning content and exam categories</li>
                      <li>Online practice tests and assessments</li>
                      <li>Student performance and analytics tracking</li>
                      <li>Progress monitoring and learning insights</li>
                      <li>Organized digital learning experience for students</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Impact -->
                <div class="uc-impact-block uc-animate-4">
                  <div class="uc-impact-header">
                    <div class="uc-impact-icon-glow">
                      <span class="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <h3 class="uc-impact-title">Real-World Impact</h3>
                  </div>
                  <div class="uc-impact-content">
                    <p>The LMS helps Geek By Choice deliver a more engaging and consistent learning experience, while giving students greater visibility into their progress. With performance data and structured digital learning in one place, it creates stronger student engagement, supports better learning outcomes, and helps Geek By Choice build a more scalable education platform.</p>
                    <p class="uc-impact-bold">From scattered learning to a connected digital experience — helping students learn, practice, measure, and improve.</p>
                  </div>
                </div>

                <!-- Bottom Showcase Image -->
                <div class="uc-showcase-container uc-animate-4">
                  <img src="/images/LPP cases.png" alt="LMS Cases Showcase" class="uc-showcase-img" />
                </div>
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
              
              <div class="uc-details">
                
                <!-- Challenge (Text Left, Header Right) -->
                <div class="uc-split-row uc-animate-2">
                  <div class="uc-split-content">
                    <ul class="uc-list">
                      <li>Manufacturing operations required better centralized coordination</li>
                      <li>Order, production, inventory, and dispatch information was fragmented</li>
                      <li>Difficult to maintain complete visibility across operational processes</li>
                      <li>Manual or disconnected workflows could slow down decision-making</li>
                      <li>Limited centralized reporting and real-time operational insights</li>
                    </ul>
                  </div>
                  <div class="uc-split-header danger-header">
                    <div class="uc-icon-box danger"><span class="material-symbols-outlined">warning</span></div>
                    <h3 class="uc-section-title">The Challenge</h3>
                    <p class="uc-header-sub">Fragmented processes disrupting production visibility.</p>
                  </div>
                </div>
                
                <!-- Solution (Header Left, Text Right) -->
                <div class="uc-split-row reverse uc-animate-3">
                  <div class="uc-split-header success-header">
                    <div class="uc-icon-box success"><span class="material-symbols-outlined">lightbulb</span></div>
                    <h3 class="uc-section-title">Our Solution</h3>
                    <p class="uc-header-sub">An enterprise-grade, end-to-end management system.</p>
                  </div>
                  <div class="uc-split-content">
                    <ul class="uc-list">
                      <li>Custom ERP system for centralized business operations</li>
                      <li>Order and work order management</li>
                      <li>Production and manufacturing tracking</li>
                      <li>Inventory and material management</li>
                      <li>Quality control and inspection management</li>
                      <li>Dispatch and logistics coordination</li>
                      <li>Centralized reports and operational insights</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Impact -->
                <div class="uc-impact-block uc-animate-4">
                  <div class="uc-impact-header">
                    <div class="uc-impact-icon-glow">
                      <span class="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <h3 class="uc-impact-title">Real-World Impact</h3>
                  </div>
                  <div class="uc-impact-content">
                    <p>The ERP helps Jayshree Electrocoating achieve better operational coordination, greater process visibility, and more informed decision-making. By bringing critical manufacturing information into one platform, the system supports improved efficiency, accountability, and scalability as the business grows.</p>
                    <p class="uc-impact-bold">From fragmented processes to one connected system — helping manufacturing teams manage, monitor, and grow with greater clarity.</p>
                  </div>
                </div>

                <!-- Bottom Showcase Image -->
                <div class="uc-showcase-container uc-animate-4">
                  <img src="/images/ERP cases.jpg" alt="ERP Cases Showcase" class="uc-showcase-img" />
                </div>
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

  // Scroll reveal for list items
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  const listItems = document.querySelectorAll('.uc-list li');
  listItems.forEach(item => observer.observe(item));
}

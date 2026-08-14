import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderServicesPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper" style="padding-top: 80px;">
      <!-- Services Showcase Section -->
      <section class="section-gap" style="background: #fafbff; position: relative; z-index: 10; overflow: hidden;">
        <style>
          /* Service Showcase Styles */
          .svc-tabs-row {
            display: flex; gap: 16px; justify-content: center; margin-bottom: 48px; flex-wrap: wrap;
          }
          .svc-tab-btn {
            display: flex; align-items: center; gap: 12px; padding: 16px 32px;
            border-radius: 12px; border: 2px solid #e2e8f0; background: white;
            font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700;
            color: #334155; cursor: pointer; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            text-transform: uppercase; letter-spacing: 0.06em; position: relative; overflow: hidden;
          }
          .svc-tab-btn::before {
            content: ''; position: absolute; inset: 0;
            background: linear-gradient(135deg, #4f46e5, #6366f1);
            opacity: 0; transition: opacity 0.35s ease;
          }
          .svc-tab-btn:hover { border-color: #6366f1; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15); }
          .svc-tab-btn.active {
            border-color: #4f46e5; background: linear-gradient(135deg, #4f46e5, #6366f1);
            color: white; box-shadow: 0 8px 30px rgba(79, 70, 229, 0.25);
            transform: translateY(-2px);
          }
          .svc-tab-btn.active .svc-tab-icon { color: white; }
          .svc-tab-icon { font-size: 22px; color: #6366f1; transition: color 0.3s; }
          .svc-tab-subtitle { font-size: 0.7rem; font-weight: 400; text-transform: none; letter-spacing: 0; opacity: 0.7; display: block; }

          /* Service Content Panel */
          .svc-content-panel { display: none; animation: svcFadeIn 0.5s ease; }
          .svc-content-panel.active { display: flex; }
          @keyframes svcFadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

          .svc-content-row {
            display: flex; gap: 100px; align-items: center; max-width: 1200px; margin: 0 auto;
          }

          /* Phone Showcase (Left) */
          .svc-phones-wrapper {
            flex: 1; display: flex; align-items: flex-end; justify-content: center;
            position: relative; min-height: 640px; padding: 24px 0;
          }

          /* Decorative dots */
          .svc-dots {
            position: absolute; display: grid;
            grid-template-columns: repeat(4, 6px); gap: 8px;
          }
          .svc-dots span {
            width: 6px; height: 6px; border-radius: 50%;
            background: #6366f1; opacity: 0.25;
          }
          .svc-dots.top-right { top: 0; right: 20px; }
          .svc-dots.bottom-left { bottom: 20px; left: 0; }

          /* Phone Frame */
          .svc-phone {
            position: absolute; width: 230px; border-radius: 28px;
            background: #1a1a2e; padding: 8px; box-shadow: 0 20px 50px rgba(0,0,0,0.15);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            bottom: 60px;
          }
          .svc-phone:hover { bottom: 68px; box-shadow: 0 30px 60px rgba(0,0,0,0.2) !important; }
          .svc-phone-screen {
            width: 100%; border-radius: 20px; overflow: hidden;
            background: white; position: relative;
          }
          .svc-phone-screen img {
            width: 100%; height: 100%; object-fit: cover; display: block;
          }

          /* Phone positions */
          .svc-phone.left {
            left: 0; z-index: 1;
            transform: rotate(-12deg) translateX(10px);
          }
          .svc-phone.center {
            left: 50%; z-index: 3;
            transform: translateX(-50%);
            width: 260px;
          }
          .svc-phone.right {
            right: 0; z-index: 1;
            transform: rotate(12deg) translateX(-10px);
          }

          /* Video Play Overlay */
          .svc-video-overlay {
            position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
            background: rgba(0,0,0,0.08); cursor: pointer; transition: background 0.3s;
          }
          .svc-video-overlay:hover { background: rgba(0,0,0,0.15); }
          .svc-play-btn {
            width: 56px; height: 56px; border-radius: 50%;
            background: rgba(255,255,255,0.95); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2); transition: all 0.3s;
          }
          .svc-video-overlay:hover .svc-play-btn { transform: scale(1.1); box-shadow: 0 6px 28px rgba(0,0,0,0.3); }
          .svc-play-icon { color: #4f46e5; font-size: 28px; margin-left: 3px; }

          /* Video controls bar */
          .svc-video-controls {
            position: absolute; bottom: 0; left: 0; right: 0;
            background: rgba(0,0,0,0.7); padding: 8px 12px;
            display: flex; align-items: center; gap: 8px;
            font-size: 0.65rem; color: rgba(255,255,255,0.8); font-family: 'Inter', sans-serif;
          }
          .svc-video-controls .progress-bar {
            flex: 1; height: 3px; background: rgba(255,255,255,0.25); border-radius: 2px; position: relative;
          }
          .svc-video-controls .progress-bar::after {
            content: ''; position: absolute; left: 0; top: 0; height: 100%;
            width: 35%; background: #6366f1; border-radius: 2px;
          }

          /* Info Panel (Right) */
          .svc-info-panel {
            flex: 1; padding: 24px 24px 160px 0;
            height: 640px; overflow-y: auto;
            position: relative;
          }
          .svc-info-panel::-webkit-scrollbar { width: 4px; }
          .svc-info-panel::-webkit-scrollbar-track { background: transparent; }
          .svc-info-panel::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }

          .svc-info-label {
            font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.1em; color: #6366f1; margin-bottom: 12px;
          }
          .svc-info-heading {
            font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.2rem);
            font-weight: 800; color: #0f172a; margin-bottom: 8px; line-height: 1.2;
          }
          .svc-info-divider { width: 60px; height: 4px; background: #4f46e5; border-radius: 2px; margin-bottom: 32px; }
          
          /* Word-by-Word Reveal Animation */
          .textreveal-text {
            font-family: var(--font-display); font-size: 1.75rem; line-height: 1.4;
            font-weight: 700; color: #cbd5e1; margin-bottom: 40px;
          }
          .reveal-word {
            transition: color 0.2s ease;
          }
          .reveal-word.revealed {
            color: #0f172a;
          }

          /* Feature List */
          .svc-features-list { display: flex; flex-direction: column; gap: 24px; padding-bottom: 20px; }
          .svc-feature-item { 
            display: flex; gap: 16px; align-items: flex-start;
            opacity: 0; transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .svc-feature-item.feature-visible {
            opacity: 1; transform: translateY(0);
          }
          .svc-feature-icon-wrap {
            width: 44px; height: 44px; border-radius: 50%;
            background: rgba(99, 102, 241, 0.08); display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
          }
          .svc-feature-icon-wrap .material-symbols-outlined { font-size: 22px; color: #4f46e5; }
          .svc-feature-title {
            font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700;
            color: #0f172a; margin-bottom: 4px;
          }
          .svc-feature-desc {
            font-family: 'Inter', sans-serif; font-size: 0.85rem;
            color: #475569; line-height: 1.5;
          }

          /* Responsive */
          @media (max-width: 900px) {
            .svc-content-row { flex-direction: column; gap: 32px; }
            .svc-phones-wrapper { min-height: 400px; width: 100%; }
            .svc-phone { width: 150px; }
            .svc-phone.center { width: 170px; }
            .svc-info-panel { padding: 0 16px; }
            .svc-tab-btn { padding: 12px 20px; font-size: 0.8rem; }
          }
          @media (max-width: 600px) {
            .svc-phones-wrapper { min-height: 320px; }
            .svc-phone { width: 120px; }
            .svc-phone.center { width: 140px; }
            .svc-tab-btn { padding: 10px 16px; font-size: 0.75rem; }
            .svc-tab-subtitle { display: none; }
          }
        </style>

        <div class="container" style="max-width: 1200px;">
          
          <!-- Service Category Tabs -->
          <div class="svc-tabs-row" id="svcTabs">
            <button class="svc-tab-btn active" data-svc-target="app-dev">
              <span class="material-symbols-outlined svc-tab-icon">smartphone</span>
              <div>
                <span>APP DEV</span>
                <span class="svc-tab-subtitle">Mobile App Development</span>
              </div>
            </button>
            <button class="svc-tab-btn" data-svc-target="erp">
              <span class="material-symbols-outlined svc-tab-icon">domain</span>
              <div>
                <span>ERP SOLUTIONS</span>
                <span class="svc-tab-subtitle">Enterprise Resource Planning</span>
              </div>
            </button>
            <button class="svc-tab-btn" data-svc-target="lms">
              <span class="material-symbols-outlined svc-tab-icon">school</span>
              <div>
                <span>LMS SOLUTIONS</span>
                <span class="svc-tab-subtitle">Learning Management System</span>
              </div>
            </button>
          </div>

          <!-- APP DEV Panel -->
          <div class="svc-content-panel active" id="svc-panel-app-dev">
            <div class="svc-content-row">
              <!-- Left: Phone Screens -->
              <div class="svc-phones-wrapper">
                <div class="svc-dots top-right">
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                </div>
                <div class="svc-dots bottom-left">
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                </div>

                <!-- Left Phone (Tilted) -->
                <div class="svc-phone left">
                  <div class="svc-phone-screen">
                    <img src="/images/app-screen-left.jpg" alt="Mobile App Finance Dashboard" loading="lazy" />
                  </div>
                </div>

                <!-- Center Phone (Straight - Video) -->
                <div class="svc-phone center">
                  <div class="svc-phone-screen">
                    <img src="/images/app-screen-center.jpg" alt="App Demo Video" loading="lazy" />
                    <div class="svc-video-overlay">
                      <div class="svc-play-btn">
                        <span class="material-symbols-outlined svc-play-icon" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
                      </div>
                    </div>
                    <div class="svc-video-controls">
                      <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">play_arrow</span>
                      <span>0:00 / 1:25</span>
                      <div class="progress-bar"></div>
                      <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">volume_up</span>
                      <span class="material-symbols-outlined" style="font-size: 14px;">fullscreen</span>
                    </div>
                  </div>
                </div>

                <!-- Right Phone (Tilted) -->
                <div class="svc-phone right">
                  <div class="svc-phone-screen">
                    <img src="/images/app-screen-right.jpg" alt="Mobile App Analytics Dashboard" loading="lazy" />
                  </div>
                </div>
              </div>

              <!-- Right: Info Panel -->
              <div class="svc-info-panel">
                <div class="svc-info-label">ABOUT US</div>
                <h2 class="svc-info-heading">Powerful. Scalable. Reliable.</h2>
                <div class="svc-info-divider"></div>
                
                <p class="textreveal-text">
                  We deliver digital solutions that help businesses automate processes, engage users and drive growth. Our mobile apps are crafted for both Android & iOS with native performance.
                </p>
                
                <div class="svc-features-list">
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">memory</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Modern Technology</div>
                      <div class="svc-feature-desc">We use the latest technologies to build fast, secure and scalable applications.</div>
                    </div>
                  </div>
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">shield</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Secure & Reliable</div>
                      <div class="svc-feature-desc">Security and reliability are at the core of every solution we build.</div>
                    </div>
                  </div>
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">person</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">User Focused</div>
                      <div class="svc-feature-desc">We design experiences that are intuitive, engaging and impactful.</div>
                    </div>
                  </div>
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">trending_up</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Business Growth</div>
                      <div class="svc-feature-desc">Our solutions are built to help your business grow and stay ahead of the competition.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ERP Panel -->
          <div class="svc-content-panel" id="svc-panel-erp">
            <div class="svc-content-row">
              <div class="svc-phones-wrapper">
                <div class="svc-dots top-right">
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                </div>
                <div class="svc-dots bottom-left">
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                </div>
                <div class="svc-phone left">
                  <div class="svc-phone-screen">
                    <img src="/images/erp-screen-left.jpg" alt="ERP Inventory Management" loading="lazy" />
                  </div>
                </div>
                <div class="svc-phone center">
                  <div class="svc-phone-screen">
                    <img src="/images/erp-screen-center.jpg" alt="ERP Dashboard Demo" loading="lazy" />
                    <div class="svc-video-overlay">
                      <div class="svc-play-btn">
                        <span class="material-symbols-outlined svc-play-icon" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
                      </div>
                    </div>
                    <div class="svc-video-controls">
                      <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">play_arrow</span>
                      <span>0:00 / 2:10</span>
                      <div class="progress-bar"></div>
                      <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">volume_up</span>
                      <span class="material-symbols-outlined" style="font-size: 14px;">fullscreen</span>
                    </div>
                  </div>
                </div>
                <div class="svc-phone right">
                  <div class="svc-phone-screen">
                    <img src="/images/erp-screen-right.jpg" alt="ERP HR Management" loading="lazy" />
                  </div>
                </div>
              </div>

              <div class="svc-info-panel">
                <div class="svc-info-label">ENTERPRISE SOLUTIONS</div>
                <h2 class="svc-info-heading">Streamline. Automate. Scale.</h2>
                <div class="svc-info-divider"></div>
                
                <p class="textreveal-text">
                  Our ERP solutions unify your business operations — from procurement and inventory to HR and accounting — into one powerful, integrated platform.
                </p>
                
                <div class="svc-features-list">
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">inventory_2</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Inventory & Supply Chain</div>
                      <div class="svc-feature-desc">Real-time stock tracking, automated reordering, and multi-warehouse management.</div>
                    </div>
                  </div>
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">account_balance</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Financial Management</div>
                      <div class="svc-feature-desc">Automated invoicing, GST compliance, and real-time financial reporting dashboards.</div>
                    </div>
                  </div>
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">groups</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">HR & Payroll</div>
                      <div class="svc-feature-desc">Employee lifecycle management, attendance tracking, and automated payroll processing.</div>
                    </div>
                  </div>
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">analytics</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Business Intelligence</div>
                      <div class="svc-feature-desc">Custom dashboards and analytics to drive data-informed decisions across departments.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LMS Panel -->
          <div class="svc-content-panel" id="svc-panel-lms">
            <div class="svc-content-row">
              <div class="svc-phones-wrapper">
                <div class="svc-dots top-right">
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                </div>
                <div class="svc-dots bottom-left">
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span>
                </div>
                <div class="svc-phone left">
                  <div class="svc-phone-screen">
                    <img src="/images/lms-screen-left.jpg" alt="LMS Course Catalog" loading="lazy" />
                  </div>
                </div>
                <div class="svc-phone center">
                  <div class="svc-phone-screen">
                    <img src="/images/lms-screen-center.jpg" alt="LMS Dashboard Demo" loading="lazy" />
                    <div class="svc-video-overlay">
                      <div class="svc-play-btn">
                        <span class="material-symbols-outlined svc-play-icon" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
                      </div>
                    </div>
                    <div class="svc-video-controls">
                      <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">play_arrow</span>
                      <span>0:00 / 1:48</span>
                      <div class="progress-bar"></div>
                      <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">volume_up</span>
                      <span class="material-symbols-outlined" style="font-size: 14px;">fullscreen</span>
                    </div>
                  </div>
                </div>
                <div class="svc-phone right">
                  <div class="svc-phone-screen">
                    <img src="/images/lms-screen-right.jpg" alt="LMS Quiz Interface" loading="lazy" />
                  </div>
                </div>
              </div>

              <div class="svc-info-panel">
                <div class="svc-info-label">EDUCATION TECHNOLOGY</div>
                <h2 class="svc-info-heading">Teach. Track. Transform.</h2>
                <div class="svc-info-divider"></div>
                
                <p class="textreveal-text">
                  Build world-class learning experiences with our custom LMS platforms — from course creation and live classes to quizzes, certifications, and advanced analytics.
                </p>
                
                <div class="svc-features-list">
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">menu_book</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Course Builder</div>
                      <div class="svc-feature-desc">Drag-and-drop course creation with video, quizzes, assignments, and certificates.</div>
                    </div>
                  </div>
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">videocam</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Live Classes</div>
                      <div class="svc-feature-desc">Integrated video conferencing with screen sharing, recording, and chat functionality.</div>
                    </div>
                  </div>
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">quiz</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Assessments & Quizzes</div>
                      <div class="svc-feature-desc">Auto-graded quizzes, timed exams, question banks, and detailed performance analytics.</div>
                    </div>
                  </div>
                  <div class="svc-feature-item">
                    <div class="svc-feature-icon-wrap">
                      <span class="material-symbols-outlined">bar_chart</span>
                    </div>
                    <div>
                      <div class="svc-feature-title">Progress Tracking</div>
                      <div class="svc-feature-desc">Real-time dashboards for learners and admins with completion rates and engagement metrics.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
    ${renderFooter()}
  `;
}

export function initServiceShowcaseTabs(): void {
  const tabs = document.querySelectorAll('.svc-tab-btn');
  const panels = document.querySelectorAll('.svc-content-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Hide all panels
      panels.forEach(p => p.classList.remove('active'));

      // Activate clicked tab
      tab.classList.add('active');

      // Show matching panel
      const targetId = tab.getAttribute('data-svc-target');
      const targetPanel = document.getElementById(`svc-panel-${targetId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
        // Reset scroll position and reveal state when changing tabs
        const infoPanel = targetPanel.querySelector('.svc-info-panel');
        if (infoPanel) {
          infoPanel.scrollTop = 0;
          const words = infoPanel.querySelectorAll('.reveal-word');
          words.forEach(w => w.classList.remove('revealed'));
          const features = infoPanel.querySelectorAll('.svc-feature-item');
          features.forEach(f => f.classList.remove('feature-visible'));
        }
      }
    });
  });

  // Init text reveal word splitting
  const revealTexts = document.querySelectorAll('.textreveal-text');
  revealTexts.forEach(el => {
    const text = el.textContent || '';
    const words = text.trim().split(/\s+/);
    el.innerHTML = words.map(w => `<span class="reveal-word">${w}</span>`).join(' ');
  });

  // Handle panel scroll reveal for text and features
  const infoPanels = document.querySelectorAll('.svc-info-panel');
  infoPanels.forEach(panel => {
    panel.addEventListener('scroll', () => {
      const scrollY = panel.scrollTop;

      // Fast reveal: fully reveal text over just 60px of scrolling
      let progress = scrollY / 60;
      progress = Math.max(0, Math.min(1, progress));

      const words = panel.querySelectorAll('.reveal-word');
      const wordsToReveal = Math.floor(progress * words.length);

      words.forEach((word, index) => {
        if (index < wordsToReveal) {
          word.classList.add('revealed');
        } else {
          word.classList.remove('revealed');
        }
      });

      // Feature items scroll animation (starts strictly after text reveal)
      const features = panel.querySelectorAll('.svc-feature-item');
      features.forEach((feature, index) => {
        // Feature 0 at 70px, Feature 1 at 90px, Feature 2 at 110px...
        const triggerPoint = 70 + (index * 20);
        if (scrollY > triggerPoint) {
          feature.classList.add('feature-visible');
        } else {
          feature.classList.remove('feature-visible');
        }
      });
    });
  });
}

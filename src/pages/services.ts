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
            transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s;
            bottom: 60px; left: 50%;
            transform: translateX(-50%) rotate(0deg);
            z-index: 1;
          }
          .svc-phone:hover { box-shadow: 0 30px 60px rgba(0,0,0,0.2) !important; }
          .svc-phone-screen {
            width: 100%; border-radius: 20px; overflow: hidden;
            background: white; position: relative;
          }
          .svc-phone-screen img {
            width: 100%; height: 100%; object-fit: cover; display: block;
          }

          /* Phone positions & Fan out animation */
          .svc-phone.center {
            z-index: 3; width: 260px;
          }
          
          .svc-phones-wrapper.fanned-out .svc-phone.left {
            transform: translateX(calc(-50% - 130px)) rotate(-12deg);
          }
          .svc-phones-wrapper.fanned-out .svc-phone.right {
            transform: translateX(calc(-50% + 130px)) rotate(12deg);
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
            font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700; color: #0f172a; margin-bottom: 12px; line-height: 1.1; letter-spacing: -0.02em;
          }
          .svc-info-divider { width: 60px; height: 4px; background: #4f46e5; border-radius: 2px; margin-bottom: 32px; }
          
          /* Word-by-Word Reveal Animation */
          .textreveal-text {
            font-family: 'Inter', sans-serif; font-size: 1.5rem; line-height: 1.6;
            font-weight: 500; color: #cbd5e1; margin-bottom: 40px; letter-spacing: -0.01em;
          }
          .reveal-word {
            display: inline-block;
            opacity: 0.15;
            filter: blur(6px);
            transform: translateY(8px) scale(0.95) rotateX(-20deg);
            transform-origin: bottom;
            transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), color 0.6s ease;
            color: #94a3b8;
          }
          .reveal-word.revealed {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1) rotateX(0);
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

          /* Additional Sections */
          .svc-impact-scroll-track {
            height: 300vh;
            position: relative;
          }
          .svc-impact-sticky {
            position: sticky; top: 0;
            height: 100vh;
            display: flex; align-items: center; justify-content: center;
            overflow: hidden; background: #fdfdfd;
            background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
            background-size: 20px 20px;
          }
          .svc-impact-section {
            padding: 20px 24px;
            width: 100%;
            display: flex; justify-content: center; overflow: hidden;
          }
          .svc-impact-container {
            max-width: 1300px; width: 100%;
            background: #ffffff;
            border-radius: 24px;
            box-shadow: 0 20px 50px rgba(15,23,42,0.04), 0 4px 20px rgba(15,23,42,0.02);
            display: flex; overflow: hidden;
            border: 1px solid #f1f5f9;
            min-height: 600px; max-height: 90vh;
          }
          .svc-impact-left {
            flex: 1; padding: 40px 60px;
            background: #ffffff;
            display: flex; flex-direction: column; z-index: 10;
            box-shadow: 10px 0 30px rgba(255,255,255,1);
            justify-content: center;
          }
          .svc-impact-right {
            flex: 1; padding: 40px;
            background: #f8fafc;
            position: relative; display: flex; align-items: center;
            overflow: hidden;
          }

          .svc-impact-badge {
            background: #eef2ff; color: #4f46e5;
            padding: 6px 16px; border-radius: 20px;
            font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 24px;
            width: fit-content;
          }
          .svc-impact-heading {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            font-weight: 800; color: #0f172a; text-transform: uppercase;
            line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.01em;
          }
          .svc-impact-divider {
            width: 48px; height: 3px; background: #6366f1; border-radius: 2px; margin-bottom: 24px;
          }
          .svc-impact-desc {
            font-family: 'Inter', sans-serif; font-size: 1rem; color: #475569;
            line-height: 1.5; margin-bottom: 32px; max-width: 90%;
          }
          
          .svc-impact-list {
            display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px;
          }
          .svc-impact-list-item {
            display: flex; gap: 16px; align-items: flex-start;
            padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;
          }
          .svc-impact-list-item:last-child { border-bottom: none; padding-bottom: 0; }
          .svc-impact-list-icon {
            width: 48px; height: 48px; border-radius: 50%;
            background: linear-gradient(135deg, #f8fafc, #eff6ff);
            box-shadow: inset 0 2px 4px rgba(255,255,255,0.8), 0 4px 12px rgba(99,102,241,0.05);
            display: flex; align-items: center; justify-content: center;
            color: #6366f1; flex-shrink: 0; border: 1px solid #f1f5f9;
          }
          .svc-impact-list-icon .material-symbols-outlined { font-size: 24px; font-variation-settings: 'FILL' 1; }
          .svc-impact-list-text h4 {
            font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 6px;
          }
          .svc-impact-list-text p {
            font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #64748b; line-height: 1.5; margin: 0; max-width: 90%;
          }
          
          .svc-cta-btn {
            background: #eef2ff; color: #4f46e5;
            padding: 14px 28px; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 600;
            display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: all 0.2s;
            border: none; outline: none; width: fit-content;
          }
          .svc-cta-btn:hover { background: #e0e7ff; color: #4338ca; }

          /* Right Side Orbital Layout */
          .svc-orbit-ring {
            position: absolute; left: 0px; top: 50%; transform: translate(-50%, -50%);
            width: 720px; height: 720px; border-radius: 50%;
            border: 4px solid #eef2ff; pointer-events: none;
            z-index: 1;
          }
          .svc-orbit-center {
            position: absolute; left: 0px; top: 50%; transform: translate(-50%, -50%);
            width: 460px; height: 460px; border-radius: 50%;
            background: #ffffff; box-shadow: 0 0 60px rgba(99, 102, 241, 0.08);
            display: flex; flex-direction: column; align-items: flex-start; justify-content: center;
            text-align: left; padding-left: 260px; z-index: 2;
          }
          .svc-orbit-center h3 { font-family: 'Inter', sans-serif; font-size: 1.4rem; font-weight: 700; color: #0f172a; margin-bottom: 6px; letter-spacing: -0.02em; }
          .svc-orbit-center p { font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #6366f1; font-weight: 700; margin: 0; line-height: 1.4; }
          
          .svc-orbit-node-wrapper {
            position: absolute; left: 0; top: 50%; width: 360px; /* Radius is 360px */
            transform-origin: left center; z-index: 3;
            /* Direct transform driven by JS */
            transform: translateY(-50%) rotate(var(--target-angle, -90deg));
          }
          
          .svc-orbit-node {
            position: absolute; right: 0; top: 50%;
            /* Counter rotate to keep upright */
            transform: translate(50%, -50%) rotate(calc(-1 * var(--target-angle)));
            width: 64px; height: 64px;
          }
          .svc-orbit-icon {
            width: 64px; height: 64px; border-radius: 50%;
            background: white; box-shadow: 0 12px 30px rgba(15,23,42,0.06);
            display: flex; align-items: center; justify-content: center;
            color: #6366f1; border: 3px solid #ffffff;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative; z-index: 2;
          }
          .svc-orbit-node:hover .svc-orbit-icon { transform: scale(1.05); box-shadow: 0 16px 40px rgba(99,102,241,0.15); }
          .svc-orbit-icon .material-symbols-outlined { font-size: 28px; font-variation-settings: 'wght' 300; }
          
          .svc-orbit-small-dot {
            width: 12px; height: 12px; border-radius: 50%;
            background: #818cf8; border: 4px solid #ffffff;
            box-shadow: 0 0 0 2px #eef2ff;
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            z-index: 2;
          }
          .svc-orbit-text {
            position: absolute; left: calc(100% + 16px); top: 50%; transform: translateY(-50%);
            width: max-content; z-index: 1;
            padding: 8px 0;
          }
          .svc-orbit-text h4 { font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
          .svc-orbit-text p { font-family: 'Inter', sans-serif; font-size: 0.8rem; color: #64748b; margin: 0; max-width: 180px; line-height: 1.4; white-space: normal; }
          
          /* Scroll Reveal Animations */
          .motion-fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .motion-fade-up.motion-in-view {
            opacity: 1;
            transform: translateY(0);
          }

          .svc-extra-section {
            padding: 100px 24px;
            background: #ffffff;
            border-top: 1px solid #f1f5f9;
          }
          .svc-extra-section.alt {
            background: #f8fafc;
          }
          .svc-extra-container {
            max-width: 1200px; margin: 0 auto;
            display: flex; align-items: center; justify-content: center;
            min-height: 300px;
            border: 2px dashed #cbd5e1;
            border-radius: 16px;
          }
          .svc-extra-heading {
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.8rem, 3vw, 2.2rem);
            font-weight: 700; color: #0f172a; text-transform: uppercase;
            letter-spacing: 0.05em; text-align: center;
          }

          /* Responsive */
          @media (max-width: 1100px) {
            .svc-impact-container { flex-direction: column; }
            .svc-impact-left { border-bottom: 1px solid #e2e8f0; }
            .svc-impact-right { min-height: 500px; }
            .svc-orbit-ring { left: 50%; }
            .svc-orbit-center { left: 50%; }
            .svc-orbit-node-wrapper { left: 50%; transform-origin: center center; }
          }
          @media (max-width: 900px) {
            .svc-content-row { flex-direction: column; gap: 32px; }
            .svc-phones-wrapper { min-height: 400px; width: 100%; }
            .svc-phone { width: 150px; }
            .svc-phone.center { width: 170px; }
            .svc-phones-wrapper.fanned-out .svc-phone.left { transform: translateX(calc(-50% - 90px)) rotate(-10deg); }
            .svc-phones-wrapper.fanned-out .svc-phone.right { transform: translateX(calc(-50% + 90px)) rotate(10deg); }
            .svc-info-panel { padding: 0 16px; height: auto; }
            .svc-tab-btn { padding: 12px 20px; font-size: 0.8rem; }
            .svc-impact-grid { grid-template-columns: repeat(3, 1fr); gap: 40px 20px; }
            .svc-impact-item:not(:last-child)::after { display: none; }
            .svc-impact-cta { flex-direction: column; text-align: center; }
            .svc-cta-left { flex-direction: column; }
          }
          @media (max-width: 600px) {
            .svc-phones-wrapper { min-height: 320px; }
            .svc-phone { width: 120px; }
            .svc-phone.center { width: 140px; }
            .svc-phones-wrapper.fanned-out .svc-phone.left { transform: translateX(calc(-50% - 70px)) rotate(-8deg); }
            .svc-phones-wrapper.fanned-out .svc-phone.right { transform: translateX(calc(-50% + 70px)) rotate(8deg); }
            .svc-tab-btn { padding: 10px 16px; font-size: 0.75rem; }
            .svc-tab-subtitle { display: none; }
            .svc-impact-grid { grid-template-columns: 1fr; }
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

                <div class="svc-phone center">
                  <div class="svc-phone-screen">
                    <video class="svc-real-video" src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" loop muted playsinline poster="/images/app-screen-center.jpg" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: none; z-index: 5;"></video>
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
                    <video class="svc-real-video" src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" loop muted playsinline poster="/images/erp-screen-center.jpg" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: none; z-index: 5;"></video>
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
                    <video class="svc-real-video" src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" loop muted playsinline poster="/images/lms-screen-center.jpg" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: none; z-index: 5;"></video>
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

      <!-- Business Impact Section (Sticky Scrubbing Animation) -->
      <div class="svc-impact-scroll-track" id="svc-impact-track">
        <div class="svc-impact-sticky">
          <section class="svc-impact-section">
            <div class="svc-impact-container">
              <!-- Left Panel -->
              <div class="svc-impact-left">
                <div class="svc-impact-badge motion-fade-up">Business Impact</div>
                <h2 class="svc-impact-heading motion-fade-up">How This Will Impact Your Business</h2>
                <div class="svc-impact-divider motion-fade-up"></div>
                <p class="svc-impact-desc motion-fade-up">Our solutions help you streamline operations, reduce costs, and drive growth with better insights and smarter decisions.</p>
                
                <div class="svc-impact-list">
                  <div class="svc-impact-list-item motion-fade-up">
                    <div class="svc-impact-list-icon"><span class="material-symbols-outlined">trending_up</span></div>
                    <div class="svc-impact-list-text">
                      <h4>Increased Efficiency</h4>
                      <p>Automate workflows and eliminate manual tasks to get more done in less time.</p>
                    </div>
                  </div>
                  <div class="svc-impact-list-item motion-fade-up">
                    <div class="svc-impact-list-icon"><span class="material-symbols-outlined">savings</span></div>
                    <div class="svc-impact-list-text">
                      <h4>Cost Reduction</h4>
                      <p>Optimize resources and reduce operational costs across your business.</p>
                    </div>
                  </div>
                  <div class="svc-impact-list-item motion-fade-up">
                    <div class="svc-impact-list-icon"><span class="material-symbols-outlined">visibility</span></div>
                    <div class="svc-impact-list-text">
                      <h4>Real-time Visibility</h4>
                      <p>Get real-time insights into every department and make data-driven decisions.</p>
                    </div>
                  </div>
                  <div class="svc-impact-list-item motion-fade-up">
                    <div class="svc-impact-list-icon"><span class="material-symbols-outlined">track_changes</span></div>
                    <div class="svc-impact-list-text">
                      <h4>Better Decision Making</h4>
                      <p>Access accurate data and reports to make smarter, faster decisions.</p>
                    </div>
                  </div>
                </div>

                <button class="svc-cta-btn motion-fade-up">Let's Grow Together <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span></button>
              </div>

              <!-- Right Panel (Orbit) -->
              <div class="svc-impact-right">
                <div class="svc-orbit-ring"></div>
                <div class="svc-orbit-center">
                  <h3>Driving Growth</h3>
                  <p>Through Smart<br>Solutions</p>
                </div>
                
                <div class="svc-orbit-node-wrapper svc-orbit-node-anim" data-target-angle="-60" style="--target-angle: -180deg;">
                  <div class="svc-orbit-node">
                    <div class="svc-orbit-icon"><span class="material-symbols-outlined">shield</span></div>
                    <div class="svc-orbit-text">
                      <h4>Stronger Compliance</h4>
                      <p>Ensure data security and stay compliant with industry regulations.</p>
                    </div>
                  </div>
                </div>

                <div class="svc-orbit-node-wrapper svc-orbit-node-anim" data-target-angle="-40" style="--target-angle: -180deg;">
                  <div class="svc-orbit-node"><div class="svc-orbit-small-dot"></div></div>
                </div>

                <div class="svc-orbit-node-wrapper svc-orbit-node-anim" data-target-angle="-20" style="--target-angle: -180deg;">
                  <div class="svc-orbit-node">
                    <div class="svc-orbit-icon"><span class="material-symbols-outlined">rocket_launch</span></div>
                    <div class="svc-orbit-text">
                      <h4>Scalable Growth</h4>
                      <p>Our solutions grow with your business and adapt to your future needs.</p>
                    </div>
                  </div>
                </div>

                <div class="svc-orbit-node-wrapper svc-orbit-node-anim" data-target-angle="0" style="--target-angle: -180deg;">
                  <div class="svc-orbit-node"><div class="svc-orbit-small-dot"></div></div>
                </div>

                <div class="svc-orbit-node-wrapper svc-orbit-node-anim" data-target-angle="20" style="--target-angle: -180deg;">
                  <div class="svc-orbit-node">
                    <div class="svc-orbit-icon"><span class="material-symbols-outlined">groups</span></div>
                    <div class="svc-orbit-text">
                      <h4>Better Collaboration</h4>
                      <p>Improve communication and collaboration across teams and departments.</p>
                    </div>
                  </div>
                </div>

                <div class="svc-orbit-node-wrapper svc-orbit-node-anim" data-target-angle="40" style="--target-angle: -180deg;">
                  <div class="svc-orbit-node"><div class="svc-orbit-small-dot"></div></div>
                </div>

                <div class="svc-orbit-node-wrapper svc-orbit-node-anim" data-target-angle="60" style="--target-angle: -180deg;">
                  <div class="svc-orbit-node">
                    <div class="svc-orbit-icon"><span class="material-symbols-outlined">pie_chart</span></div>
                    <div class="svc-orbit-text">
                      <h4>Data-Driven Insights</h4>
                      <p>Leverage advanced analytics to uncover opportunities and drive business growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- Why We & Our Process Section -->
      <section class="svc-extra-section alt">
        <div class="svc-extra-container motion-fade-up">
          <h2 class="svc-extra-heading">Why We &amp; Our Process</h2>
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

  // Handle video play on center phones
  const centerPhones = document.querySelectorAll('.svc-phone.center .svc-phone-screen');
  centerPhones.forEach(screen => {
    const video = screen.querySelector('.svc-real-video') as HTMLVideoElement;
    const overlay = screen.querySelector('.svc-video-overlay') as HTMLElement;
    const controls = screen.querySelector('.svc-video-controls') as HTMLElement;
    const img = screen.querySelector('img');
    
    if (video && overlay) {
      overlay.addEventListener('click', () => {
        video.muted = true;
        video.style.display = 'block';
        video.setAttribute('controls', 'true');
        
        // Small delay to ensure display: block is rendered before playing
        setTimeout(() => {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.warn("Video playback was blocked:", error);
            });
          }
        }, 50);
        
        overlay.style.display = 'none';
        if (controls) controls.style.display = 'none';
      });
    }
  });

   // Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('motion-in-view');
        
        // Trigger phone fan-out animation
        if (entry.target.classList.contains('svc-phones-wrapper')) {
          entry.target.classList.add('fanned-out');
        }
      } else {
        // Reverse phone fan-out animation when scrolling away
        if (entry.target.classList.contains('svc-phones-wrapper')) {
          entry.target.classList.remove('fanned-out');
        }
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

  const fadeElements = document.querySelectorAll('.motion-fade-up, .svc-phones-wrapper');
  fadeElements.forEach((el) => {
    // Stagger list items
    if (el.classList.contains('svc-impact-list-item')) {
      const items = Array.from(document.querySelectorAll('.svc-impact-list-item'));
      const index = items.indexOf(el);
      (el as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
    } 
    observer.observe(el);
  });

  // Scroll Scrubbing Animation for Orbit
  const impactTrack = document.getElementById('svc-impact-track');
  const orbitNodes = document.querySelectorAll('.svc-orbit-node-anim');
  
  if (impactTrack && orbitNodes.length > 0) {
    const handleScroll = () => {
      const rect = impactTrack.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      
      // Calculate progress (0 to 1) through the sticky track
      let progress = -rect.top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      // Starting angle: hidden at top of the circle (-180deg or -90deg)
      const startAngle = -150; 
      
      orbitNodes.forEach((node, index) => {
        const targetAngle = parseFloat(node.getAttribute('data-target-angle') || '0');
        
        // Offset each node slightly so they arrive in sequence
        // e.g. node 0 starts moving immediately, node 3 waits a bit
        let nodeProgress = progress * 1.5 - (index * 0.1);
        nodeProgress = Math.max(0, Math.min(1, nodeProgress));
        
        // Easing (easeOutCubic)
        const ease = 1 - Math.pow(1 - nodeProgress, 3);
        
        const currentAngle = startAngle + (ease * (targetAngle - startAngle));
        
        // Fade in as they swing out from the starting position
        let opacity = nodeProgress * 2.5; 
        opacity = Math.max(0, Math.min(1, opacity));
        
        (node as HTMLElement).style.setProperty('--target-angle', `${currentAngle}deg`);
        (node as HTMLElement).style.opacity = opacity.toString();
      });
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }
}

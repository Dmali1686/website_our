import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderServicesPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      
      <!-- Services Showcase Section -->
      <section class="section-gap" style="background: #f0f9ff; position: relative; z-index: 10; overflow: hidden; border-bottom: 1px solid #e2e8f0; padding-top: 100px;">
        <style>
          /* Global Noise Overlay */
          .noise-overlay {
            position: fixed; inset: 0; z-index: 9999; pointer-events: none; opacity: 0.035; mix-blend-mode: multiply;
            background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
          }
          
          /* Ambient Background Orbs */
          .svc-ambient-orb {
            position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 0;
            animation: orbFloat 25s infinite alternate ease-in-out;
          }
          @keyframes orbFloat {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(80px, 60px) scale(1.15); }
          }
          
          /* Huge Background Watermark */
          .svc-watermark {
            position: absolute; top: 18%; left: 50%; transform: translateX(-50%);
            font-family: 'Playfair Display', serif; font-size: 28vw; font-weight: 900;
            color: rgba(15, 23, 42, 0.015); z-index: 0; pointer-events: none;
            white-space: nowrap; user-select: none; letter-spacing: -0.05em;
          }

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
            background: linear-gradient(135deg, #2563eb, #3b82f6);
            opacity: 0; transition: opacity 0.35s ease;
          }
          .svc-tab-btn:hover { border-color: #3b82f6; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15); }
          .svc-tab-btn.active {
            border-color: #2563eb; background: linear-gradient(135deg, #2563eb, #3b82f6);
            color: white; box-shadow: 0 8px 30px rgba(79, 70, 229, 0.25);
            transform: translateY(-2px);
          }
          .svc-tab-btn.active .svc-tab-icon { color: white; }
          .svc-tab-icon { font-size: 22px; color: #3b82f6; transition: color 0.3s; }
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
            background: #3b82f6; opacity: 0.25;
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
          .svc-play-icon { color: #2563eb; font-size: 28px; margin-left: 3px; }

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
            width: 35%; background: #3b82f6; border-radius: 2px;
          }

          /* Info Panel (Right) */
          .svc-info-panel {
            flex: 1; padding: 24px 24px 160px 0;
            height: 640px; overflow-y: auto;
            position: relative;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .svc-info-panel::-webkit-scrollbar { 
            display: none; 
          }

          .svc-info-label {
            font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.1em; color: #3b82f6; margin-bottom: 12px;
          }
          .svc-info-heading {
            font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700; color: #0f172a; margin-bottom: 12px; line-height: 1.1; letter-spacing: -0.02em;
          }
          .svc-info-divider { width: 60px; height: 4px; background: #2563eb; border-radius: 2px; margin-bottom: 32px; }
          
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
          .svc-feature-icon-wrap .material-symbols-outlined { font-size: 22px; color: #2563eb; }
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
            overflow: hidden; background: #f0f9ff;
            background-image: radial-gradient(#dbeafe 1.5px, transparent 1.5px);
            background-size: 24px 24px;
          }
          .svc-impact-section {
            padding: 20px 24px;
            width: 100%;
            display: flex; justify-content: center; overflow: hidden;
            perspective: 1200px;
          }
          .svc-impact-container {
            max-width: 1300px; width: 100%;
            background: rgba(255, 255, 255, 0.98);
            border-radius: 32px;
            box-shadow: 0 40px 100px -20px rgba(50, 50, 93, 0.15), 0 30px 60px -30px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 1);
            display: flex; overflow: hidden;
            border: 1px solid rgba(241, 245, 249, 0.8);
            border-top: 1px solid rgba(255, 255, 255, 1);
            min-height: 600px; max-height: 90vh;
            transform: translateY(0) translateZ(0);
            transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .svc-impact-container:hover {
            transform: translateY(-8px) translateZ(20px);
            box-shadow: 0 50px 120px -20px rgba(50, 50, 93, 0.2), 0 30px 60px -30px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 1);
          }
          .svc-impact-left {
            flex: 1; padding: 24px 40px;
            background: transparent;
            display: flex; flex-direction: column; z-index: 10;
            justify-content: center;
          }
          .svc-impact-right {
            flex: 1; padding: 40px;
            background: #f8fafc;
            position: relative; display: flex; align-items: center;
            overflow: hidden;
          }

          .svc-impact-badge {
            background: #eff6ff; color: #2563eb;
            padding: 6px 16px; border-radius: 20px;
            font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 24px;
            width: fit-content;
          }
          .svc-impact-heading {
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.8rem, 3vw, 2.4rem);
            font-weight: 800; color: #0f172a; text-transform: uppercase;
            line-height: 1.1; margin-bottom: 16px; letter-spacing: -0.01em;
          }
          .svc-impact-divider {
            width: 48px; height: 3px; background: #3b82f6; border-radius: 2px; margin-bottom: 16px;
          }
          .svc-impact-desc {
            font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #475569;
            line-height: 1.5; margin-bottom: 24px; max-width: 90%;
          }
          
          .svc-impact-list {
            display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;
          }
          .svc-impact-list-item {
            display: flex; gap: 16px; align-items: flex-start;
            padding-bottom: 12px; border-bottom: 1px solid #f1f5f9;
          }
          .svc-impact-list-item:last-child { border-bottom: none; padding-bottom: 0; }
          .svc-impact-list-icon {
            width: 48px; height: 48px; border-radius: 50%;
            background: linear-gradient(135deg, #f8fafc, #eff6ff);
            box-shadow: inset 0 2px 4px rgba(255,255,255,0.8), 0 4px 12px rgba(99,102,241,0.05);
            display: flex; align-items: center; justify-content: center;
            color: #3b82f6; flex-shrink: 0; border: 1px solid #f1f5f9;
          }
          .svc-impact-list-icon .material-symbols-outlined { font-size: 24px; font-variation-settings: 'FILL' 1; }
          .svc-impact-list-text h4 {
            font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 6px;
          }
          .svc-impact-list-text p {
            font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #64748b; line-height: 1.5; margin: 0; max-width: 90%;
          }
          
          .svc-cta-btn {
            background: #eff6ff; color: #2563eb;
            padding: 12px 24px; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 600;
            display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: all 0.2s;
            border: none; outline: none; width: fit-content; text-decoration: none;
          }
          .svc-cta-btn:hover { background: #e0e7ff; color: #4338ca; }

          /* Right Side Orbital Layout */
          .svc-orbit-ring {
            position: absolute; left: 0px; top: 50%; transform: translate(-50%, -50%);
            width: 600px; height: 600px; border-radius: 50%;
            border: 4px solid #eff6ff; pointer-events: none;
            z-index: 1;
          }
          .svc-orbit-center {
            position: absolute; left: 0px; top: 50%; transform: translate(-50%, -50%);
            width: 380px; height: 380px; border-radius: 50%;
            background: #ffffff; box-shadow: 0 0 60px rgba(99, 102, 241, 0.08);
            display: flex; flex-direction: column; align-items: flex-start; justify-content: center;
            text-align: left; padding-left: 220px; z-index: 2;
          }
          .svc-orbit-center h3 { font-family: 'Inter', sans-serif; font-size: 1.4rem; font-weight: 700; color: #0f172a; margin-bottom: 6px; letter-spacing: -0.02em; }
          .svc-orbit-center p { font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #3b82f6; font-weight: 700; margin: 0; line-height: 1.4; }
          
          .svc-orbit-node-wrapper {
            position: absolute; left: 0; top: 50%; width: 300px; /* Radius is 300px */
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
            color: #3b82f6; border: 3px solid #ffffff;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative; z-index: 2;
          }
          .svc-orbit-node:hover .svc-orbit-icon { transform: scale(1.05); box-shadow: 0 16px 40px rgba(99,102,241,0.15); }
          .svc-orbit-icon .material-symbols-outlined { font-size: 28px; font-variation-settings: 'wght' 300; }
          
          .svc-orbit-small-dot {
            width: 12px; height: 12px; border-radius: 50%;
            background: #818cf8; border: 4px solid #ffffff;
            box-shadow: 0 0 0 2px #eff6ff;
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
            .svc-impact-scroll-track { height: auto !important; }
            .svc-impact-sticky { position: relative !important; top: auto !important; height: auto !important; padding: 40px 0; }
            .svc-impact-container { transform: none !important; min-height: auto; max-height: none; }
            .svc-impact-right { display: none !important; }
            .svc-content-row { flex-direction: column; gap: 16px; }
            .svc-phones-wrapper { min-height: auto !important; height: auto !important; width: 100%; flex: none !important; padding: 40px 0 !important; }
            .svc-phone { width: 150px; bottom: 40px !important; }
            .svc-phone.center { width: 170px; position: relative !important; bottom: auto !important; left: auto !important; transform: none !important; margin: 0 auto; }
            .svc-phones-wrapper.fanned-out .svc-phone.left { transform: translateX(calc(-50% - 90px)) rotate(-10deg); }
            .svc-phones-wrapper.fanned-out .svc-phone.right { transform: translateX(calc(-50% + 90px)) rotate(10deg); }
            .svc-info-panel { padding: 0 16px; height: auto; }
            /* Disable text reveal and feature animation since panel is height: auto and doesn't scroll internally */
            .reveal-word { opacity: 1 !important; filter: blur(0) !important; transform: none !important; color: #0f172a !important; }
            .svc-feature-item { opacity: 1 !important; transform: none !important; }
            .svc-tab-btn { padding: 12px 20px; font-size: 0.8rem; }
            .svc-impact-grid { grid-template-columns: repeat(3, 1fr); gap: 40px 20px; }
            .svc-impact-item:not(:last-child)::after { display: none; }
            .svc-impact-cta { flex-direction: column; text-align: center; }
            .svc-cta-left { flex-direction: column; }
            .section-gap { padding-top: 120px !important; }
            .textreveal-text { font-size: 1.15rem !important; margin-bottom: 32px !important; }
            .svc-tabs-row { display: grid !important; grid-template-columns: 1fr 1fr; gap: 10px !important; margin-bottom: 32px !important; }
            .svc-tab-btn { padding: 12px 10px !important; font-size: 0.75rem !important; border-radius: 8px !important; justify-content: center; text-align: center; width: 100%; box-sizing: border-box; }
            .svc-tab-btn:last-child { grid-column: 1 / -1; }
          }
          @media (max-width: 600px) {
            .svc-phone { width: 130px; bottom: 40px !important; }
            .svc-phone.center { width: 150px; }
            .svc-phones-wrapper.fanned-out .svc-phone.left { transform: translateX(calc(-50% - 70px)) rotate(-8deg); }
            .svc-phones-wrapper.fanned-out .svc-phone.right { transform: translateX(calc(-50% + 70px)) rotate(8deg); }
            .svc-tab-btn { padding: 10px 16px; font-size: 0.75rem; }
            .svc-tab-subtitle { display: none; }
            .svc-impact-grid { grid-template-columns: 1fr; }
            
            /* 2-Column Features List for Mobile */
            .svc-features-list { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 16px 12px !important; }
            .svc-feature-item { 
              flex-direction: column !important; 
              align-items: center !important; 
              text-align: center !important;
              background: rgba(255, 255, 255, 0.5); 
              padding: 20px 12px !important; 
              border-radius: 16px; 
              border: 1px solid rgba(255, 255, 255, 0.8);
              box-shadow: 0 4px 16px rgba(0,0,0,0.03);
              gap: 12px !important; 
            }
            .svc-feature-icon-wrap { width: 44px !important; height: 44px !important; margin: 0 auto !important; }
            .svc-feature-icon-wrap .material-symbols-outlined { font-size: 22px !important; }
            .svc-feature-title { font-size: 0.95rem !important; line-height: 1.3 !important; font-weight: 700 !important; }
            .svc-feature-desc { display: none !important; } /* Hidden to reduce text on mobile */
            
            /* Business Impact Mobile Sizing */
            .svc-impact-left { padding: 24px 16px !important; }
            .svc-impact-badge { margin-bottom: 16px !important; font-size: 0.7rem !important; }
            .svc-impact-heading { font-size: 1.6rem !important; margin-bottom: 16px !important; }
            .svc-impact-desc { font-size: 0.95rem !important; max-width: 100% !important; margin-bottom: 24px !important; line-height: 1.5 !important; }
            
            /* 2-Column Impact List for Mobile */
            .svc-impact-list { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 16px 12px !important; }
            .svc-impact-list-item { 
              flex-direction: column !important; 
              align-items: center !important; 
              text-align: center !important;
              gap: 8px !important; 
              border-bottom: none !important; 
              background: #ffffff; 
              padding: 20px 12px !important; 
              border-radius: 16px; 
              border: 1px solid #f1f5f9; 
              box-shadow: 0 4px 16px rgba(0,0,0,0.03); 
            }
            .svc-impact-list-icon { width: 44px !important; height: 44px !important; margin: 0 auto 8px auto !important; }
            .svc-impact-list-icon .material-symbols-outlined { font-size: 22px !important; }
            .svc-impact-list-text h4 { font-size: 0.95rem !important; line-height: 1.3 !important; margin-bottom: 0 !important; font-weight: 700 !important; }
            .svc-impact-list-text p { display: none !important; } /* Hidden to reduce text on mobile */
          }
        </style>

        <div class="noise-overlay"></div>
        
        <!-- Background Ambient Elements -->
        <div class="svc-ambient-orb" style="top: -10%; left: -5%; width: 600px; height: 600px; background: rgba(99,102,241,0.25);"></div>
        <div class="svc-ambient-orb" style="bottom: 10%; right: -5%; width: 700px; height: 700px; background: rgba(168,85,247,0.15); animation-delay: -5s;"></div>
        <div class="svc-ambient-orb" style="top: 40%; left: 50%; width: 500px; height: 500px; background: rgba(56,189,248,0.15); animation-delay: -10s; transform: translateX(-50%);"></div>
        <div class="svc-watermark">SERVICES</div>

        <div class="container" style="max-width: 1200px; position: relative; z-index: 2;">
          
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
                    <img src="/images/app-screen-left.webp" alt="Mobile App Finance Dashboard" loading="lazy" />
                  </div>
                </div>

                <div class="svc-phone center">
                  <div class="svc-phone-screen">
                    <img src="/images/app-screen-center.webp" alt="App Demo Video" loading="lazy" style="width: 100%; height: auto; display: block;" />
                    <video class="svc-real-video" src="/videos/Web.mp4" loop playsinline controls poster="/images/app-screen-center.webp" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 5;"></video>
                  </div>
                </div>

                <!-- Right Phone (Tilted) -->
                <div class="svc-phone right">
                  <div class="svc-phone-screen">
                    <img src="/images/app-screen-right.webp" alt="Mobile App Analytics Dashboard" loading="lazy" />
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
                    <img src="/images/erp-screen-left.webp" alt="ERP Inventory Management" loading="lazy" />
                  </div>
                </div>
                <div class="svc-phone center">
                  <div class="svc-phone-screen">
                    <img src="/images/erp-screen-center.webp" alt="ERP Dashboard Demo" loading="lazy" style="width: 100%; height: auto; display: block;" />
                    <video class="svc-real-video" src="/videos/erp.mp4" loop playsinline controls poster="/images/erp-screen-center.webp" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 5;"></video>
                  </div>
                </div>
                <div class="svc-phone right">
                  <div class="svc-phone-screen">
                    <img src="/images/erp-screen-right.webp" alt="ERP HR Management" loading="lazy" />
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
                    <img src="/images/lms-screen-left.webp" alt="LMS Course Catalog" loading="lazy" />
                  </div>
                </div>
                <div class="svc-phone center">
                  <div class="svc-phone-screen">
                    <img src="/images/lms-screen-center.webp" alt="LMS Dashboard Demo" loading="lazy" style="width: 100%; height: auto; display: block;" />
                    <video class="svc-real-video" src="/videos/lms_main.mp4" loop playsinline controls poster="/images/lms-screen-center.webp" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 5;"></video>
                  </div>
                </div>
                <div class="svc-phone right">
                  <div class="svc-phone-screen">
                    <img src="/images/lms-screen-right.webp" alt="LMS Quiz Interface" loading="lazy" />
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

                <a href="/contact" data-route="/contact" class="svc-cta-btn motion-fade-up">Let's Grow Together <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span></a>
              </div>

              <!-- Right Panel (Orbit) -->
              <div class="svc-impact-right">
                <div class="svc-orbit-ring"></div>
                <div class="svc-orbit-center" style="margin-right: 5px;padding-left: 200px;">
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
      <section class="svc-process-section" style="padding: 120px 24px; background: #0f172a; overflow: hidden; position: relative;">
        <style>
          .svc-process-container {
            max-width: 1300px; margin: 0 auto;
            display: flex; align-items: center; gap: 60px;
          }
          .svc-process-left { flex: 0 0 380px; }
          .svc-process-right {
            flex: 1; position: relative; height: 500px;
            display: flex; align-items: center; justify-content: center;
          }
          
          .svc-process-badge {
            background: rgba(99, 102, 241, 0.15); color: #818cf8; padding: 6px 16px; border-radius: 20px; border: 1px solid rgba(99,102,241,0.3);
            font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 24px; width: fit-content;
          }
          .svc-process-heading {
            font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 3.5vw, 2.8rem);
            font-weight: 800; color: #ffffff; line-height: 1.1; margin-bottom: 20px; text-transform: uppercase; letter-spacing: -0.02em;
          }
          .svc-process-divider { width: 48px; height: 3px; background: #3b82f6; margin-bottom: 24px; border-radius: 2px; }
          .svc-process-desc { font-family: 'Inter', sans-serif; font-size: 1rem; color: #94a3b8; line-height: 1.6; margin-bottom: 40px; }
          
          .svc-process-feature-item { display: flex; gap: 16px; margin-bottom: 32px; }
          .svc-process-feature-item:last-child { margin-bottom: 0; }
          .svc-process-feature-icon {
            width: 48px; height: 48px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center; flex-shrink: 0;
            background: rgba(99,102,241,0.15) !important; color: #818cf8 !important;
          }
          .svc-process-feature-icon .material-symbols-outlined { font-size: 24px; font-variation-settings: 'wght' 600; }
          .svc-process-feature-text h4 { font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: #f8fafc; margin-bottom: 4px; }
          .svc-process-feature-text p { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin: 0; }
          
          /* Carousel CSS */
          .svc-carousel-btn {
            position: absolute; top: 50%; transform: translateY(-50%); z-index: 20;
            width: 44px; height: 44px; border-radius: 50%; background: white; border: 1px solid #e2e8f0;
            display: flex; align-items: center; justify-content: center; color: #3b82f6; cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05); transition: all 0.2s;
          }
          .svc-carousel-btn:hover { background: #f8fafc; color: #2563eb; box-shadow: 0 6px 16px rgba(0,0,0,0.08); }
          .svc-carousel-btn.prev { left: 0; }
          .svc-carousel-btn.next { right: 0; }
          
          .svc-carousel-viewport {
            position: absolute; inset: 0 40px; /* leave room for buttons */
          }
          
          .svc-carousel-card {
            position: absolute; top: 50%; left: 50%;
            width: 220px; height: 380px;
            background: white; border-radius: 20px; overflow: hidden;
            display: flex; flex-direction: column;
            box-shadow: 0 10px 30px rgba(15,23,42,0.04);
            transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
            /* Hidden State Default */
            opacity: 0; pointer-events: none;
            transform: translate(-50%, -50%) scale(0.7); z-index: 1;
          }
          
          .card-top { padding: 32px 20px; text-align: center; flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; }
          .card-icon-wrap {
            width: 56px; height: 56px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 20px;
          }
          .card-icon-wrap .material-symbols-outlined { font-size: 28px; font-variation-settings: 'wght' 300; }
          .card-top h4 { font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 800; color: #0f172a; margin-bottom: 12px; }
          .card-top p { font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #64748b; line-height: 1.5; margin: 0; }
          .card-bottom { height: 140px; background: #f1f5f9; width: 100%; position: relative; }
          .card-bottom img { width: 100%; height: 100%; object-fit: cover; }
          
          /* Logical Positions */
          .svc-carousel-card.pos-active {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1; z-index: 10; pointer-events: auto;
            box-shadow: 0 25px 60px rgba(15,23,42,0.12);
          }
          .svc-carousel-card.pos-prev {
            transform: translate(calc(-50% - 190px), -50%) scale(0.95);
            opacity: 0.85; z-index: 5; pointer-events: auto; cursor: pointer;
          }
          .svc-carousel-card.pos-next {
            transform: translate(calc(-50% + 190px), -50%) scale(0.95);
            opacity: 0.85; z-index: 5; pointer-events: auto; cursor: pointer;
          }
          .svc-carousel-card.pos-prev-far {
            transform: translate(calc(-50% - 350px), -50%) scale(0.85);
            opacity: 0.4; z-index: 3; pointer-events: auto; cursor: pointer;
          }
          .svc-carousel-card.pos-next-far {
            transform: translate(calc(-50% + 350px), -50%) scale(0.85);
            opacity: 0.4; z-index: 3; pointer-events: auto; cursor: pointer;
          }
          
          .svc-carousel-pagination {
            position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%);
            display: flex; gap: 8px; z-index: 20;
          }
          .svc-page-dot {
            width: 8px; height: 8px; border-radius: 50%; background: #e2e8f0;
            cursor: pointer; transition: all 0.3s;
          }
          .svc-page-dot.active {
            background: #3b82f6; transform: scale(1.2); box-shadow: 0 0 0 4px rgba(99,102,241,0.1);
          }
          
          @media (max-width: 1024px) {
            .svc-process-container { flex-direction: column; }
            .svc-process-left { padding-right: 0; text-align: center; }
            .svc-process-badge { margin: 0 auto 24px; }
            .svc-process-divider { margin: 0 auto 24px; }
            .svc-process-desc { margin: 0 auto 40px; }
            .svc-process-feature-item { text-align: left; }
            .svc-process-right { width: 100%; min-height: 500px; }
          }
          @media (max-width: 768px) {
            .svc-carousel-card.pos-prev { transform: translate(calc(-50% - 130px), -50%) scale(0.85); }
            .svc-carousel-card.pos-next { transform: translate(calc(-50% + 130px), -50%) scale(0.85); }
            .svc-carousel-card.pos-prev-far, .svc-carousel-card.pos-next-far { opacity: 0; pointer-events: none; }
            
            /* Give the card more room so the image doesn't get pushed out */
            .svc-carousel-card { width: 260px !important; height: 440px !important; }
            .card-top { padding: 24px 16px !important; }
            .card-bottom { height: 180px !important; }
          }
          @media (max-width: 500px) {
            .svc-carousel-btn { display: none; }
            .svc-carousel-card.pos-prev, .svc-carousel-card.pos-next { opacity: 0; pointer-events: none; }
          }
        </style>
        
        <div class="svc-process-container">
          <!-- Left Content -->
          <div class="svc-process-left">
            <div class="svc-process-badge motion-fade-up">OUR DIFFERENCE</div>
            <h2 class="svc-process-heading motion-fade-up">WHY WE &amp;<br>OUR PROCESS</h2>
            <div class="svc-process-divider motion-fade-up"></div>
            <p class="svc-process-desc motion-fade-up">We combine strategy, creativity, and technology to build digital solutions that drive real results for your business.</p>
            
            <div class="svc-process-features">
              <div class="svc-process-feature-item motion-fade-up">
                <div class="svc-process-feature-icon" style="background:#eff6ff; color:#3b82f6;"><span class="material-symbols-outlined">track_changes</span></div>
                <div class="svc-process-feature-text">
                  <h4>Purpose-Driven Solutions</h4>
                  <p>We focus on understanding your goals and delivering solutions that create measurable impact.</p>
                </div>
              </div>
              <div class="svc-process-feature-item motion-fade-up">
                <div class="svc-process-feature-icon" style="background:#f5f3ff; color:#8b5cf6;"><span class="material-symbols-outlined">handshake</span></div>
                <div class="svc-process-feature-text">
                  <h4>Collaborative Partnership</h4>
                  <p>We work closely with you at every step, ensuring transparency and alignment.</p>
                </div>
              </div>
              <div class="svc-process-feature-item motion-fade-up">
                <div class="svc-process-feature-icon" style="background:#eff6ff; color:#3b82f6;"><span class="material-symbols-outlined">rocket_launch</span></div>
                <div class="svc-process-feature-text">
                  <h4>Continuous Improvement</h4>
                  <p>We constantly refine our process to adapt, optimize, and deliver long-term value.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Carousel -->
          <div class="svc-process-right motion-fade-up">
            <button class="svc-carousel-btn prev" id="processBtnPrev"><span class="material-symbols-outlined">chevron_left</span></button>
            
            <div class="svc-carousel-viewport" id="processCarousel">
              <!-- Cards rendered by JS -->
            </div>
            
            <button class="svc-carousel-btn next" id="processBtnNext"><span class="material-symbols-outlined">chevron_right</span></button>
            <div class="svc-carousel-pagination" id="processPagination"></div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="svc-faq-section" style="padding: 120px 24px; background: #fafafa;">
        <style>
          .svc-faq-container { max-width: 1200px; margin: 0 auto; display: flex; gap: 80px; align-items: flex-start; }
          .svc-faq-left { flex: 0 0 380px; position: sticky; top: 120px; }
          .svc-faq-right { flex: 1; }
          
          .svc-faq-badge {
            display: inline-block; padding: 6px 16px; border-radius: 30px; border: 1px solid #e2e8f0;
            background: white; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600;
            color: #334155; margin-bottom: 24px; box-shadow: 0 4px 10px rgba(0,0,0,0.02);
          }
          .svc-faq-heading {
            font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 700;
            color: #0f172a; line-height: 1.1; margin-bottom: 40px; letter-spacing: -0.03em;
          }
          
          .svc-faq-contact-card {
            background: white; border-radius: 20px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          }
          .svc-faq-contact-card .icon {
            width: 48px; height: 48px; border-radius: 50%; background: #ff5722; color: white;
            display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
            box-shadow: 0 8px 20px rgba(255,87,34,0.3);
          }
          .svc-faq-contact-card h4 {
            font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 20px;
          }
          .svc-faq-contact-card .btn {
            background: #0f172a; color: white; border: none; padding: 14px 28px; border-radius: 30px;
            font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.95rem; cursor: pointer;
            box-shadow: 0 10px 20px rgba(15,23,42,0.2); transition: all 0.3s;
          }
          .svc-faq-contact-card .btn:hover { background: #1e293b; transform: translateY(-2px); }
          
          .svc-faq-item {
            background: white; border-radius: 16px; margin-bottom: 16px; overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.02); transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); border: 1px solid transparent;
          }
          .svc-faq-item:hover { box-shadow: 0 8px 25px rgba(0,0,0,0.04); }
          .svc-faq-item.active { border-color: #f1f5f9; box-shadow: 0 12px 30px rgba(0,0,0,0.05); }
          
          .svc-faq-question {
            width: 100%; text-align: left; background: none; border: none; padding: 24px 32px;
            font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 700; color: #0f172a;
            cursor: pointer; display: flex; justify-content: space-between; align-items: center;
          }
          .svc-faq-question .icon {
            width: 32px; height: 32px; border-radius: 50%; background: #f1f5f9; display: flex;
            align-items: center; justify-content: center; color: #475569; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); flex-shrink: 0;
            margin-left: 20px;
          }
          .svc-faq-question .icon .material-symbols-outlined { font-size: 20px; font-weight: 600; transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1); }
          
          .svc-faq-answer-wrapper {
            display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .svc-faq-item.active .svc-faq-answer-wrapper {
            grid-template-rows: 1fr;
          }
          .svc-faq-answer {
            overflow: hidden; opacity: 0; padding: 0 32px; transform: translateY(-10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          .svc-faq-item.active .svc-faq-answer {
            opacity: 1; transform: translateY(0);
            transition: opacity 0.5s ease 0.15s, transform 0.5s cubic-bezier(0.25, 1, 0.5, 1) 0.1s;
          }
          .svc-faq-answer p {
            margin: 0; padding-bottom: 24px; color: #475569; line-height: 1.6; font-family: 'Inter', sans-serif; font-size: 0.95rem;
          }
          
          .svc-faq-item.active .svc-faq-question .icon { background: #e2e8f0; }
          .svc-faq-item.active .svc-faq-question .icon .material-symbols-outlined { transform: rotate(45deg); color: #0f172a; }
          
          @media (max-width: 900px) {
            .svc-faq-section { padding: 60px 16px !important; }
            .svc-faq-container { flex-direction: column; gap: 32px; }
            .svc-faq-left { flex: none; width: 100%; position: static; }
            .svc-faq-heading { font-size: 2rem; margin-bottom: 24px; }
            .svc-faq-contact-card { padding: 24px; }
            .svc-faq-contact-card .icon { width: 40px; height: 40px; margin-bottom: 16px; }
            .svc-faq-contact-card h4 { font-size: 1.1rem; margin-bottom: 16px; }
            .svc-faq-question { padding: 20px 16px; font-size: 1rem; }
            .svc-faq-answer { padding: 0 16px; }
            .svc-faq-answer p { font-size: 0.9rem; padding-bottom: 20px; }
          }
        </style>
        
        <div class="svc-faq-container">
          <!-- Left Column -->
          <div class="svc-faq-left motion-fade-up">
            <div class="svc-faq-badge">Common questions</div>
            <h2 class="svc-faq-heading">Frequently<br>asked questions</h2>
            
            <div class="svc-faq-contact-card">
              <div class="icon"><span class="material-symbols-outlined">support_agent</span></div>
              <h4>Can't find your answer?</h4>
              <button class="btn">Contact us</button>
            </div>
          </div>
      
          <!-- Right Column (Accordion) -->
          <div class="svc-faq-right">
            
            <div class="svc-faq-item active motion-fade-up">
              <button class="svc-faq-question">
                What is your typical project timeline?
                <span class="icon"><span class="material-symbols-outlined">add</span></span>
              </button>
              <div class="svc-faq-answer-wrapper">
                <div class="svc-faq-answer">
                  <p>Timelines vary depending on the complexity of the project. A standard web application might take 8-12 weeks, while a comprehensive enterprise system can take 4-6 months. We will provide a detailed timeline during the discovery phase.</p>
                </div>
              </div>
            </div>
            
            <div class="svc-faq-item motion-fade-up">
              <button class="svc-faq-question">
                Do you provide ongoing support and maintenance?
                <span class="icon"><span class="material-symbols-outlined">add</span></span>
              </button>
              <div class="svc-faq-answer-wrapper">
                <div class="svc-faq-answer">
                  <p>Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular security updates, performance monitoring, and priority bug fixing to ensure your solution runs smoothly.</p>
                </div>
              </div>
            </div>
            
            <div class="svc-faq-item motion-fade-up">
              <button class="svc-faq-question">
                How do you handle project communication?
                <span class="icon"><span class="material-symbols-outlined">add</span></span>
              </button>
              <div class="svc-faq-answer-wrapper">
                <div class="svc-faq-answer">
                  <p>We maintain transparent communication through regular stand-ups, weekly progress reports, and a dedicated project management channel (e.g., Slack, Teams). You will always have direct access to your project manager.</p>
                </div>
              </div>
            </div>
            
            <div class="svc-faq-item motion-fade-up">
              <button class="svc-faq-question">
                Can you integrate with our existing systems?
                <span class="icon"><span class="material-symbols-outlined">add</span></span>
              </button>
              <div class="svc-faq-answer-wrapper">
                <div class="svc-faq-answer">
                  <p>Absolutely. We have extensive experience building seamless integrations with legacy systems, third-party APIs, and modern cloud infrastructure to ensure your new software works perfectly with your existing stack.</p>
                </div>
              </div>
            </div>
            
            <div class="svc-faq-item motion-fade-up">
              <button class="svc-faq-question">
                What is your pricing structure?
                <span class="icon"><span class="material-symbols-outlined">add</span></span>
              </button>
              <div class="svc-faq-answer-wrapper">
                <div class="svc-faq-answer">
                  <p>We offer both fixed-price contracts for clearly defined projects and time-and-materials billing for agile development. We'll work with you to choose the model that best fits your budget and flexibility requirements.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <!-- FAQ Section -->
      <section style="padding: 100px 24px; background: #ffffff;">
        <div class="container" style="max-width: 800px; margin: 0 auto;">
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; color: #111827; text-align: center; margin-bottom: 48px;">Frequently Asked Questions</h2>
          <div class="svc-faq-list">
            
            <div class="svc-faq-item" style="border-bottom: 1px solid #e5e7eb; padding: 20px 0;">
              <button class="svc-faq-question" style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0; cursor: pointer; text-align: left; font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 600; color: #111827;">
                What is the typical cost for custom software development?
                <span class="material-symbols-outlined transition-transform duration-300">expand_more</span>
              </button>
              <div class="svc-faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;">
                <p style="padding-top: 16px; color: #4b5563; line-height: 1.6; margin: 0;">Costs in India typically range from ₹3 Lakhs to ₹50 Lakhs depending on complexity, features, and platform support. We offer free technical consultations to provide you with a precise estimate.</p>
              </div>
            </div>

            <div class="svc-faq-item" style="border-bottom: 1px solid #e5e7eb; padding: 20px 0;">
              <button class="svc-faq-question" style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0; cursor: pointer; text-align: left; font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 600; color: #111827;">
                Do you provide post-launch support and maintenance?
                <span class="material-symbols-outlined transition-transform duration-300">expand_more</span>
              </button>
              <div class="svc-faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;">
                <p style="padding-top: 16px; color: #4b5563; line-height: 1.6; margin: 0;">Yes! We provide comprehensive SLA-backed maintenance and support for all our custom software, mobile apps, and ERP systems to ensure 99.9% uptime.</p>
              </div>
            </div>

            <div class="svc-faq-item" style="border-bottom: 1px solid #e5e7eb; padding: 20px 0;">
              <button class="svc-faq-question" style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0; cursor: pointer; text-align: left; font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 600; color: #111827;">
                Which technologies do you use for mobile app development?
                <span class="material-symbols-outlined transition-transform duration-300">expand_more</span>
              </button>
              <div class="svc-faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;">
                <p style="padding-top: 16px; color: #4b5563; line-height: 1.6; margin: 0;">We specialize in modern frameworks like React Native and Flutter for cross-platform apps, as well as native Swift (iOS) and Kotlin (Android) when device-level performance is strictly required.</p>
              </div>
            </div>

            <div class="svc-faq-item" style="border-bottom: 1px solid #e5e7eb; padding: 20px 0;">
              <button class="svc-faq-question" style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0; cursor: pointer; text-align: left; font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 600; color: #111827;">
                How long does it take to build an MVP?
                <span class="material-symbols-outlined transition-transform duration-300">expand_more</span>
              </button>
              <div class="svc-faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;">
                <p style="padding-top: 16px; color: #4b5563; line-height: 1.6; margin: 0;">A typical Minimum Viable Product (MVP) takes anywhere from 6 to 12 weeks to design, develop, test, and launch, depending on the core features required.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="svc-contact-section" style="padding: 80px 24px 140px; background: #fafafa; display: flex; justify-content: center;">
        <style>
          .svc-contact-card {
            display: flex; max-width: 1100px; width: 100%; background: #ffffff; border-radius: 32px; overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.04); border: 1px solid #f1f5f9;
          }
          .svc-contact-image {
            flex: 0 0 45%; background: url('/images/3d_software_services.webp') center/cover no-repeat;
            position: relative;
          }
          .svc-contact-image::after {
            content: ''; position: absolute; inset: 0; background: linear-gradient(to right, transparent, rgba(255,255,255,0.1));
          }
          .svc-contact-form {
            flex: 1; padding: 60px; background: #ffffff;
          }
          .svc-form-row {
            display: flex; gap: 24px; margin-bottom: 24px;
          }
          .svc-form-group {
            flex: 1; display: flex; flex-direction: column; gap: 10px;
          }
          .svc-form-label {
            font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 700; color: #334155;
          }
          .svc-form-input, .svc-form-textarea {
            width: 100%; padding: 16px 20px; border-radius: 12px; border: 1px solid #e2e8f0; background: #f8fafc;
            font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #0f172a; transition: all 0.2s; outline: none;
          }
          .svc-form-input::placeholder, .svc-form-textarea::placeholder {
            color: #94a3b8; font-weight: 500;
          }
          .svc-form-input:focus, .svc-form-textarea:focus {
            border-color: #3b82f6; background: #ffffff; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
          }
          .svc-form-textarea {
            resize: vertical; min-height: 140px;
          }
          .svc-form-btn {
            background: #3b82f6; color: #ffffff; border: none; padding: 16px 40px; border-radius: 30px;
            font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1.05rem; cursor: pointer;
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
            transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
            margin-top: 10px; display: inline-block; letter-spacing: 0.02em;
          }
          .svc-form-btn:hover {
            transform: translateY(-2px); box-shadow: 0 14px 28px rgba(59, 130, 246, 0.4);
            background: #2563eb; color: #ffffff;
          }
          .svc-form-btn:active {
            transform: translateY(2px); box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
          }
          
          @media (max-width: 900px) {
            .svc-contact-section { padding: 40px 16px 60px !important; }
            .svc-contact-card { flex-direction: column; }
            .svc-contact-image { flex: none !important; height: 250px; width: 100%; }
            .svc-contact-form { flex: none !important; padding: 32px 16px; width: 100%; box-sizing: border-box; }
            .svc-form-row { flex-direction: column; gap: 20px; margin-bottom: 20px; }
            .svc-form-input, .svc-form-textarea { padding: 12px 16px; font-size: 0.9rem; }
            .svc-form-textarea { min-height: 100px; }
            .svc-form-btn { padding: 14px 32px; font-size: 0.95rem; width: 100%; }
          }
        </style>

        <div class="svc-contact-card motion-fade-up">
          <div class="svc-contact-image"></div>
          <div class="svc-contact-form">
            <div class="svc-form-row">
              <div class="svc-form-group">
                <label class="svc-form-label">Your name*</label>
                <input type="text" class="svc-form-input" placeholder="Dennis Barrett" />
              </div>
              <div class="svc-form-group">
                <label class="svc-form-label">Subject</label>
                <input type="text" class="svc-form-input" placeholder="Topic of your request" />
              </div>
            </div>
            
            <div class="svc-form-row">
              <div class="svc-form-group">
                <label class="svc-form-label">Email address*</label>
                <input type="email" class="svc-form-input" placeholder="dannis@example.com" />
              </div>
            </div>
            
            <div class="svc-form-row" style="margin-bottom: 32px;">
              <div class="svc-form-group">
                <label class="svc-form-label">Message</label>
                <textarea class="svc-form-textarea" placeholder="Write your message"></textarea>
              </div>
            </div>
            
            <button class="svc-form-btn">Send a message</button>
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

  const switchTab = (targetId: string, shouldScroll: boolean = false) => {
    // Hide all currently active tabs and panels
    document.querySelectorAll('.svc-tab-btn.active').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.svc-content-panel.active').forEach(p => p.classList.remove('active'));

    // Activate matching tab
    const targetTab = document.querySelector(`.svc-tab-btn[data-svc-target="${targetId}"]`);
    if (targetTab) {
      targetTab.classList.add('active');
    }

    // Show matching panel
    const targetPanel = document.getElementById(`svc-panel-${targetId}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
      // Reset scroll position and reveal state
      const infoPanel = targetPanel.querySelector('.svc-info-panel');
      if (infoPanel) {
        infoPanel.scrollTop = 0;
        const words = infoPanel.querySelectorAll('.reveal-word');
        words.forEach(w => w.classList.remove('revealed'));
        const features = infoPanel.querySelectorAll('.svc-feature-item');
        features.forEach(f => f.classList.remove('feature-visible'));
      }
    }

    if (shouldScroll) {
      setTimeout(() => {
        const showcase = document.getElementById('svcTabs');
        if (showcase) {
          showcase.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute('data-svc-target');
      if (targetId) {
        window.history.replaceState(null, '', `/services?tab=${targetId}`);
        switchTab(targetId, false);
      }
    });
  });

  const handleHashChange = () => {
    if (!document.getElementById('svcTabs')) {
      window.removeEventListener('popstate', handleHashChange);
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const targetTabId = urlParams.get('tab');
    if (targetTabId) {
      switchTab(targetTabId, true);
    }
  };

  // Run initial switch slightly delayed to ensure DOM is ready and painted
  setTimeout(handleHashChange, 100);
  window.addEventListener('popstate', handleHashChange);

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

  // Handle video autoplay on intersection
  const centerPhones = document.querySelectorAll('.svc-phone.center .svc-phone-screen');
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector('.svc-real-video') as HTMLVideoElement;
        if (video) {
          video.volume = 0.5; // Set volume to medium
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => { /* Ignore auto-play errors */ });
            }
          } else {
            video.pause();
          }
        }
      });
    }, { threshold: 0.1 });

    centerPhones.forEach(screen => {
      videoObserver.observe(screen);
    });
  } else {
    // Fallback if no IntersectionObserver
    centerPhones.forEach(screen => {
      const video = screen.querySelector('.svc-real-video') as HTMLVideoElement;
      if (video) {
        video.volume = 0.5; // Set volume to medium
        video.setAttribute('autoplay', 'true');
      }
    });
  }

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

  // Process Carousel Logic
  const processCardsData = [
    { id: '01', title: 'Discover', desc: 'We research, analyze and understand your business challenges and opportunities.', icon: 'search', color: '#a78bfa', img: '/images/1.webp' },
    { id: '02', title: 'Strategize', desc: 'We create a smart strategy tailored to your goals and market opportunities.', icon: 'lightbulb', color: '#fb923c', img: '/images/2.webp' },
    { id: '03', title: 'Design', desc: 'We design intuitive, functional and user-friendly solutions that your users will love.', icon: 'edit', color: '#4ade80', img: '/images/3.webp' },
    { id: '04', title: 'Develop', desc: 'We build robust and scalable solutions using the latest technologies.', icon: 'code', color: '#c084fc', img: '/images/4.webp' },
    { id: '05', title: 'Deliver', desc: 'We deliver with excellence and continuously optimize for better performance and growth.', icon: 'bar_chart', color: '#60a5fa', img: '/images/5.webp' }
  ];

  const carouselViewport = document.getElementById('processCarousel');
  const carouselPagination = document.getElementById('processPagination');
  const btnPrev = document.getElementById('processBtnPrev');
  const btnNext = document.getElementById('processBtnNext');

  if (carouselViewport && carouselPagination && btnPrev && btnNext) {
    let currentIndex = 2; // Start with the middle item (index 2) active
    const totalCards = processCardsData.length;

    // Render cards
    processCardsData.forEach((card, index) => {
      // Create Card
      const cardEl = document.createElement('div');
      cardEl.className = 'svc-carousel-card';
      cardEl.innerHTML = `
          <div class="card-top">
            <div class="card-icon-wrap" style="background: ${card.color};">
              <span class="material-symbols-outlined">${card.icon}</span>
            </div>
            <h4>${card.id}. ${card.title}</h4>
            <p>${card.desc}</p>
          </div>
          <div class="card-bottom">
            <img src="${card.img}" alt="${card.title}" />
          </div>
        `;
      // Handle click to select
      cardEl.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        resetAutoPlay();
      });
      carouselViewport.appendChild(cardEl);

      // Create Pagination Dot
      const dot = document.createElement('div');
      dot.className = 'svc-page-dot';
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        resetAutoPlay();
      });
      carouselPagination.appendChild(dot);
    });

    const cardElements = carouselViewport.querySelectorAll('.svc-carousel-card');
    const dotElements = carouselPagination.querySelectorAll('.svc-page-dot');

    const updateCarousel = () => {
      cardElements.forEach((card, i) => {
        card.className = 'svc-carousel-card'; // reset classes

        let diff = (i - currentIndex) % totalCards;
        if (diff < 0) diff += totalCards;

        if (diff === 0) card.classList.add('pos-active');
        else if (diff === 1) card.classList.add('pos-next');
        else if (diff === 2) card.classList.add('pos-next-far');
        else if (diff === totalCards - 1) card.classList.add('pos-prev');
        else if (diff === totalCards - 2) card.classList.add('pos-prev-far');
      });

      dotElements.forEach((dot, i) => {
        if (i === currentIndex) dot.classList.add('active');
        else dot.classList.remove('active');
      });
    };

    // Controls
    const goNext = () => { currentIndex = (currentIndex + 1) % totalCards; updateCarousel(); };
    const goPrev = () => { currentIndex = (currentIndex - 1 + totalCards) % totalCards; updateCarousel(); };

    btnNext.addEventListener('click', () => { goNext(); resetAutoPlay(); });
    btnPrev.addEventListener('click', () => { goPrev(); resetAutoPlay(); });

    // Auto Play loop
    let autoPlayInterval = setInterval(goNext, 3500);
    const resetAutoPlay = () => {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(goNext, 3500);
    };

    // Initial render
    updateCarousel();
  }

  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.svc-faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.svc-faq-question');
    const answer = item.querySelector('.svc-faq-answer') as HTMLElement;
    const icon = item.querySelector('.material-symbols-outlined') as HTMLElement;
    
    btn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(faq => {
        faq.classList.remove('active');
        const fAns = faq.querySelector('.svc-faq-answer') as HTMLElement;
        const fIcon = faq.querySelector('.material-symbols-outlined') as HTMLElement;
        if (fAns) fAns.style.maxHeight = '0px';
        if (fIcon) fIcon.style.transform = 'rotate(0deg)';
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/**
 * Cresenix Solutions — ERP & LMS Page
 * Hero + two platform detail cards (ERP features + LMS features).
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderERPLMSPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      <!-- Hero Section -->
      <header class="hero" style="overflow:hidden; position: relative; min-height: 100vh; display: flex; align-items: center; padding: 80px 0; background-image: url('/images/erp-hero-bg.webp'); background-size: cover; background-position: center;">
        
        <!-- Dark Gradient Overlay -->
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(7, 71, 111, 0.85) 0%, rgba(17, 24, 39, 0.95) 100%); z-index: 1;"></div>

        <!-- Full-height Dissolved Image on the Right -->
        <div class="animate-scale-in delay-300" style="position: absolute; top: 0; right: 0; bottom: 0; width: 55%; z-index: 2; pointer-events: none; padding-left:70px">
          <img
            src="/images/erp-team.webp"
            alt="Enterprise technology team"
            style="display: block; width: 100%; height: 100%; object-fit: cover; object-position: center left; opacity: 0.8; -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%); mask-image: linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%);"
          />
        </div>

        <div class="container" style="position: relative; z-index: 5;">
          <div class="hero-grid" style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; min-height: 500px;">
            <div class="hero-content" style="padding-right: 40px;">
              <span class="hero-badge animate-fade-in-up" style="padding: 10px 16px; border-radius: 100px; display: inline-flex; align-items: center; gap: 6px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 24px; background: rgba(255,255,255,0.1); color: #60a5fa; border: 1px solid rgba(255,255,255,0.2); font-family: 'Inter', sans-serif;">
                <span class="material-symbols-outlined" style="font-size:16px;">verified</span>
                ENTERPRISE SOLUTIONS
              </span>
              <h1 class="hero-title animate-fade-in-up delay-100" style="font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; color: #ffffff; margin-bottom: 24px;">
                Custom <span style="background: linear-gradient(90deg, #60a5fa, #34d399); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">ERP Software & LMS</span> Development
              </h1>
              <p class="hero-subtitle animate-fade-in-up delay-200" style="font-family: 'Inter', sans-serif; font-size: 1.15rem; color: rgba(255, 255, 255, 0.8); line-height: 1.6; max-width: 550px; margin-bottom: 32px;">
                Custom systems designed for operational excellence. Streamline HR, payroll, inventory management, and educational delivery with scalable, high-performance platforms.
              </p>
              <div class="hero-actions animate-fade-in-up delay-300" style="display: flex; gap: 16px; flex-wrap: wrap;">
                <a href="/contact" data-route="/contact" style="background: #3b82f6; color: white; text-decoration: none; border: none; padding: 14px 28px; border-radius: 100px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1rem; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4); transition: transform 0.2s;">
                  Request Audit <span class="material-symbols-outlined" style="font-size:20px;">arrow_forward</span>
                </a>
                <a data-route="/portfolio" href="/portfolio" style="background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); padding: 14px 28px; border-radius: 100px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1rem; text-decoration: none; cursor: pointer; transition: background 0.2s;">
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Platforms Section -->
      <section style="background: #f8fafc; padding: 120px 0;">
        <div class="container" style="max-width: 1280px; margin: 0 auto; padding: 0 24px;">
          <div class="section-header animate-fade-in-up" style="text-align: center; margin-bottom: 80px;">
            <h2 style="font-family: 'Inter', sans-serif; font-size: clamp(2.2rem, 3vw, 3rem); font-weight: 900; color: #07476f; letter-spacing: -0.02em; margin-bottom: 20px;">Comprehensive Platforms</h2>
            <p style="font-family: 'Inter', sans-serif; font-size: 1.15rem; color: #4b5563; max-width: 700px; margin: 0 auto; line-height: 1.6;">Unified architecture for managing physical resources and intellectual capital.</p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 40px;">
            
            <!-- ERP Card -->
            <div class="animate-fade-in-up delay-100" style="background: #ffffff; border-radius: 24px; padding: 48px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05); transition: transform 0.4s ease, box-shadow 0.4s ease;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 25px 50px -12px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 40px -10px rgba(0,0,0,0.05)';">
              <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 32px;">
                <div style="width: 60px; height: 60px; border-radius: 16px; background: rgba(59, 130, 246, 0.1); color: #3b82f6; display: flex; align-items: center; justify-content: center;">
                  <span class="material-symbols-outlined" style="font-size: 32px;">calendar_view_month</span>
                </div>
                <div>
                  <span style="font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em;">RESOURCE PLANNING</span>
                  <h3 style="font-family: 'Inter', sans-serif; font-size: 1.75rem; font-weight: 800; color: #111827; margin: 0;">Custom ERP Systems</h3>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <div style="display: flex; gap: 16px;">
                  <span class="material-symbols-outlined" style="color: #10b981; font-size: 24px;">check_circle</span>
                  <div>
                    <h4 style="font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 700; color: #1f2937; margin: 0 0 4px 0;">Procurement & Sourcing</h4>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #6b7280; line-height: 1.5; margin: 0;">Automate vendor management and purchase orders.</p>
                  </div>
                </div>
                <div style="display: flex; gap: 16px;">
                  <span class="material-symbols-outlined" style="color: #10b981; font-size: 24px;">check_circle</span>
                  <div>
                    <h4 style="font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 700; color: #1f2937; margin: 0 0 4px 0;">Financial Accounting</h4>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #6b7280; line-height: 1.5; margin: 0;">Real-time ledger tracking and financial reporting.</p>
                  </div>
                </div>
                <div style="display: flex; gap: 16px;">
                  <span class="material-symbols-outlined" style="color: #10b981; font-size: 24px;">check_circle</span>
                  <div>
                    <h4 style="font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 700; color: #1f2937; margin: 0 0 4px 0;">Inventory Management</h4>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #6b7280; line-height: 1.5; margin: 0;">Barcode integration and stock level alerts.</p>
                  </div>
                </div>
                <div style="display: flex; gap: 16px;">
                  <span class="material-symbols-outlined" style="color: #10b981; font-size: 24px;">check_circle</span>
                  <div>
                    <h4 style="font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 700; color: #1f2937; margin: 0 0 4px 0;">HR & Payroll</h4>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #6b7280; line-height: 1.5; margin: 0;">Comprehensive employee lifecycle management.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- LMS Card -->
            <div class="animate-fade-in-up delay-200" style="background: #ffffff; border-radius: 24px; padding: 48px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05); transition: transform 0.4s ease, box-shadow 0.4s ease;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 25px 50px -12px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 40px -10px rgba(0,0,0,0.05)';">
              <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 32px;">
                <div style="width: 60px; height: 60px; border-radius: 16px; background: rgba(139, 92, 246, 0.1); color: #8b5cf6; display: flex; align-items: center; justify-content: center;">
                  <span class="material-symbols-outlined" style="font-size: 32px;">wifi_tethering</span>
                </div>
                <div>
                  <span style="font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em;">LEARNING MANAGEMENT</span>
                  <h3 style="font-family: 'Inter', sans-serif; font-size: 1.75rem; font-weight: 800; color: #111827; margin: 0;">Educational Excellence</h3>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                <div style="display: flex; align-items: center; gap: 20px; background: #f8fafc; padding: 16px 20px; border-radius: 16px;">
                  <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <span class="material-symbols-outlined">auto_stories</span>
                  </div>
                  <div>
                    <h4 style="font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 700; color: #1f2937; margin: 0 0 4px 0;">Course Management</h4>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #6b7280; margin: 0;">Intuitive curriculum builders for easy content creation.</p>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 20px; background: #f8fafc; padding: 16px 20px; border-radius: 16px;">
                  <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #f59e0b, #ef4444); color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <span class="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div>
                    <h4 style="font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 700; color: #1f2937; margin: 0 0 4px 0;">Advanced Analytics</h4>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #6b7280; margin: 0;">Deep insights into learner engagement and performance.</p>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 20px; background: #f8fafc; padding: 16px 20px; border-radius: 16px;">
                  <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #10b981, #3b82f6); color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <span class="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <h4 style="font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 700; color: #1f2937; margin: 0 0 4px 0;">Progress Tracking</h4>
                    <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #6b7280; margin: 0;">Gamified milestones and automated certifications.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

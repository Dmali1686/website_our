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
      <header class="hero bg-mesh" style="overflow:hidden;">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content">
              <div class="hero-badge animate-fade-in-up" style="background: rgba(37,99,235,0.08); border-color: rgba(37,99,235,0.2);">
                <span class="material-symbols-outlined" style="font-size:16px;color:var(--accent);">verified</span>
                <span style="color:var(--accent);">ENTERPRISE SOLUTIONS</span>
              </div>
              <h1 class="hero-title animate-fade-in-up delay-100">
                Enterprise-Grade <span class="text-gradient">ERP &amp; LMS</span> Solutions
              </h1>
              <p class="hero-subtitle animate-fade-in-up delay-200">
                Custom systems designed for operational excellence. Streamline HR, payroll, inventory management, and educational delivery with scalable, high-performance platforms.
              </p>
              <div class="hero-actions animate-fade-in-up delay-300">
                <a class="btn-primary" data-route="/contact" href="#/contact">
                  Request Demo <span class="material-symbols-outlined" style="font-size:20px;">arrow_forward</span>
                </a>
                <a class="btn-ghost" data-route="/portfolio" href="#/portfolio">
                  View Case Studies
                </a>
              </div>
            </div>
            <div class="hero-visual animate-scale-in delay-300">
              <div class="hero-image-wrapper" style="background:linear-gradient(135deg, #e5eeff 0%, #dce9ff 100%);">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcS7fFTuxvCp3uVYpVhppKIBwVvoWUEeV7-1H0KYkMKhzFMOpaY-ce2Pl30N_uLoc1lx1iK-cy0VWnqTc1nHS7LtDOw6GNUi_rjlsGN1MGFSPqTtMvp3JWxTz9S49bohBaDt6RA5sWWocVqDi2zIaz4ZFrWg17Ob685ENXNzV8YIAliJ3ZiZ1YMui4LrQPyk_Yj1TDUsDULjqdK3jDeIfuG-pBlp95_ehx3NsVhvEo9e3BBrSlaXvXCw"
                  alt="Enterprise technology dashboard showing data analytics and connected systems"
                  style="opacity:0.9;"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Platforms Section -->
      <section class="bg-surface-lowest section-gap">
        <div class="container">
          <div class="section-header animate-fade-in-up">
            <h2 class="section-title">Comprehensive Platforms</h2>
            <p class="section-subtitle">Unified architecture for managing physical resources and intellectual capital.</p>
          </div>
          <div class="platform-grid">
            <!-- ERP Card -->
            <div class="platform-card animate-fade-in-up delay-100">
              <div class="platform-card-header">
                <span class="category-label">RESOURCE PLANNING</span>
                <div class="card-icon-wrapper" style="background:var(--surface-container-high);color:var(--accent-dark);">
                  <span class="material-symbols-outlined">calendar_view_month</span>
                </div>
              </div>
              <h3>Custom ERP Systems</h3>
              <div class="platform-features cols-2">
                <div class="platform-feature">
                  <div class="feature-icon check">
                    <span class="material-symbols-outlined">check_circle</span>
                  </div>
                  <div class="feature-content">
                    <h4>Procurement &amp; Sourcing</h4>
                    <p>Automate vendor management and purchase orders.</p>
                  </div>
                </div>
                <div class="platform-feature">
                  <div class="feature-icon check">
                    <span class="material-symbols-outlined">check_circle</span>
                  </div>
                  <div class="feature-content">
                    <h4>Financial Accounting</h4>
                    <p>Real-time ledger tracking and financial reporting.</p>
                  </div>
                </div>
                <div class="platform-feature">
                  <div class="feature-icon check">
                    <span class="material-symbols-outlined">check_circle</span>
                  </div>
                  <div class="feature-content">
                    <h4>Inventory Management</h4>
                    <p>Barcode integration and stock level alerts.</p>
                  </div>
                </div>
                <div class="platform-feature">
                  <div class="feature-icon check">
                    <span class="material-symbols-outlined">check_circle</span>
                  </div>
                  <div class="feature-content">
                    <h4>HR &amp; Payroll</h4>
                    <p>Comprehensive employee lifecycle management.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- LMS Card -->
            <div class="platform-card animate-fade-in-up delay-200">
              <div class="platform-card-header">
                <span class="category-label">LEARNING MANAGEMENT</span>
                <div class="card-icon-wrapper" style="background:rgba(37,99,235,0.08);color:var(--accent);">
                  <span class="material-symbols-outlined">wifi_tethering</span>
                </div>
              </div>
              <h3>Educational Excellence</h3>
              <div class="platform-features">
                <div class="platform-feature">
                  <div class="feature-icon gradient">
                    <span class="material-symbols-outlined">auto_stories</span>
                  </div>
                  <div class="feature-content">
                    <h4>Course Management</h4>
                    <p>Intuitive curriculum builders.</p>
                  </div>
                </div>
                <div class="platform-feature">
                  <div class="feature-icon gradient">
                    <span class="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div class="feature-content">
                    <h4>Advanced Analytics</h4>
                    <p>Deep insights into learner engagement.</p>
                  </div>
                </div>
                <div class="platform-feature">
                  <div class="feature-icon gradient">
                    <span class="material-symbols-outlined">trending_up</span>
                  </div>
                  <div class="feature-content">
                    <h4>Progress Tracking</h4>
                    <p>Gamified milestones and certifications.</p>
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

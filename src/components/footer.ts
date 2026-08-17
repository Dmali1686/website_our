/**
 * Cresenix Solutions — Footer Component
 * Multi-column footer with brand, navigation links, and copyright.
 */

export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="container section-gap">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="footer-logo" style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px; text-decoration: none;" data-route="/" href="#/">
              <img src="/images/logo.png" alt="Cresenix Solutions Logo" style="height: 36px; width: auto; object-fit: contain;" />
              <div class="logo-text-stack" style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.1;">
                <span class="logo-text-top" style="font-family: var(--font-display); font-size: 16px; font-weight: 800; letter-spacing: 0.05em; color: var(--on-background);">CRESENIX</span>
                <span class="logo-text-bottom" style="font-family: var(--font-body); font-size: 10px; font-weight: 500; letter-spacing: 0.1em; color: var(--on-surface-variant); text-transform: uppercase;">SOLUTIONS LLP</span>
              </div>
            </a>
            <p class="footer-tagline">Engineering scalable digital solutions for modern enterprises.</p>
            <p class="footer-copyright">© 2026 Cresenix Solutions LLP. All rights reserved.</p>
          </div>
          <div class="footer-column">
            <span class="footer-column-title">Services</span>
            <a class="footer-link" data-route="/" href="#/">Software</a>
            <a class="footer-link" data-route="/portfolio" href="#/portfolio">Web Apps</a>
            <a class="footer-link" data-route="/portfolio" href="#/portfolio">Mobile Apps</a>
          </div>
          <div class="footer-column">
            <span class="footer-column-title">Solutions</span>
            <a class="footer-link" data-route="/erp-lms" href="#/erp-lms">ERP</a>
            <a class="footer-link" data-route="/erp-lms" href="#/erp-lms">LMS</a>
            <a class="footer-link" data-route="/ai-solutions" href="#/ai-solutions">AI Solutions</a>
          </div>
          <div class="footer-column">
            <span class="footer-column-title">Company</span>
            <a class="footer-link" data-route="/about" href="#/about">About Us</a>
            <a class="footer-link" data-route="/careers" href="#/careers">Careers</a>
            <a class="footer-link" data-route="/contact" href="#/contact">Contact</a>
          </div>
          <div class="footer-column">
            <span class="footer-column-title">Legal</span>
            <a class="footer-link" data-route="/privacy" href="#/privacy">Privacy Policy</a>
            <a class="footer-link" data-route="/terms" href="#/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

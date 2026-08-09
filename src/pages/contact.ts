/**
 * Cresenix Solutions — Contact Page
 * Contact info card + form with service dropdown.
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderContactPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper">
      <!-- Contact Header -->
      <div class="contact-header">
        <div class="container">
          <h1 class="animate-fade-in-up">Let's build the future together.</h1>
          <p class="animate-fade-in-up delay-100">
            Reach out to our team of experts to discuss how Cresenix Solutions can accelerate your digital transformation.
          </p>
        </div>
      </div>

      <!-- Contact Grid -->
      <section style="padding-bottom:var(--section-gap-desktop);">
        <div class="container">
          <div class="contact-grid">
            <!-- Info Card -->
            <div class="contact-info-card animate-fade-in-up delay-100">
              <h2>Cresenix Solutions LLP</h2>
              <div class="contact-info-item">
                <div class="info-icon">
                  <span class="material-symbols-outlined">mail</span>
                </div>
                <div class="info-content">
                  <span class="info-label">EMAIL</span>
                  <span class="info-value">contact@cresenix.com</span>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="info-icon">
                  <span class="material-symbols-outlined">call</span>
                </div>
                <div class="info-content">
                  <span class="info-label">PHONE</span>
                  <span class="info-value">+1 (555) 123-4567</span>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="info-icon">
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <div class="info-content">
                  <span class="info-label">HEADQUARTERS</span>
                  <span class="info-value">100 Innovation Drive<br/>Tech District<br/>San Francisco, CA 94105</span>
                </div>
              </div>
              <div class="contact-info-actions">
                <button aria-label="Schedule meeting">
                  <span class="material-symbols-outlined" style="font-size:20px;">calendar_today</span>
                </button>
                <button aria-label="Live chat">
                  <span class="material-symbols-outlined" style="font-size:20px;">chat_bubble</span>
                </button>
              </div>
            </div>

            <!-- Form Card -->
            <div class="contact-form-card animate-fade-in-up delay-200">
              <form id="contact-form" class="form-grid" onsubmit="return false;">
                <div class="form-group">
                  <label class="form-label" for="fullName">FULL NAME</label>
                  <input class="form-input" type="text" id="fullName" placeholder="John Doe" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="company">COMPANY</label>
                  <input class="form-input" type="text" id="company" placeholder="Acme Corp" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">EMAIL ADDRESS</label>
                  <input class="form-input" type="email" id="email" placeholder="john@acmecorp.com" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="phone">PHONE NUMBER</label>
                  <input class="form-input" type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                </div>
                <div class="form-group full-width">
                  <label class="form-label" for="service">SERVICE INTERESTED IN</label>
                  <select class="form-select" id="service">
                    <option value="" disabled selected>Select a service...</option>
                    <option value="software">Custom Software Development</option>
                    <option value="web">Web Applications</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="erp">ERP Systems</option>
                    <option value="lms">LMS Platforms</option>
                    <option value="ai">AI Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="form-group full-width">
                  <label class="form-label" for="message">MESSAGE</label>
                  <textarea class="form-textarea" id="message" placeholder="Tell us about your project..." rows="5"></textarea>
                </div>
                <div class="form-group full-width">
                  <button type="submit" class="form-submit">
                    Send Message <span class="material-symbols-outlined" style="font-size:20px;">arrow_forward</span>
                  </button>
                  <p class="form-disclaimer">By submitting, you agree to our <a href="#">Privacy Policy</a>.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

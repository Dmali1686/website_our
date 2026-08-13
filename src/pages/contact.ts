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
      <div class="contact-header" style="position: relative; background-image: url('/images/contact-bg.png'); background-size: cover; background-position: center; padding-top: 160px; padding-bottom: 60px; margin-bottom: 40px; border-radius: 0 0 40px 40px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <!-- Dark Overlay -->
        <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(7, 71, 111, 0.85) 0%, rgba(14, 165, 233, 0.7) 100%); z-index: 1;"></div>
        
        <div class="container" style="position: relative; z-index: 2;">
          <h1 class="font-display-lg animate-fade-in-up" style="color: #ffffff; font-weight: 800; letter-spacing: -0.02em;">
            Contact Us — Book a <span style="color: #67e8f9;">Free Consultation</span>
          </h1>
          <p class="animate-fade-in-up delay-100" style="color: rgba(255, 255, 255, 0.9); font-size: 1.15rem; max-width: 600px; margin: 16px auto 0;">
            Reach out to our team of experts to discuss how Cresenix Solutions can accelerate your digital transformation.
          </p>
        </div>
      </div>

      <!-- Contact Grid -->
      <section style="padding-bottom: 24px;">
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
                  <span class="info-value">+91 73877 92415</span>
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
              <form id="contact-form" class="form-grid">
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
                  <textarea class="form-textarea" id="message" placeholder="Tell us about your project..." rows="3"></textarea>
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

export function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.form-submit') as HTMLButtonElement;
    const originalBtnHTML = submitBtn.innerHTML;
    
    // Set loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <span class="material-symbols-outlined" style="font-size:20px; animation: spin 1s linear infinite;">sync</span>';

    try {
      const payload = {
        fullName: (document.getElementById('fullName') as HTMLInputElement).value,
        company: (document.getElementById('company') as HTMLInputElement).value || null,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value || null,
        service: (document.getElementById('service') as HTMLSelectElement).value,
        message: (document.getElementById('message') as HTMLTextAreaElement).value
      };

      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Success
      submitBtn.innerHTML = 'Message Sent! <span class="material-symbols-outlined" style="font-size:20px;">check</span>';
      submitBtn.style.backgroundColor = '#10b981'; // green
      form.reset();
      
      // Reset button after 3s
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.style.backgroundColor = '';
      }, 3000);

    } catch (err) {
      console.error(err);
      submitBtn.innerHTML = 'Error. Try Again.';
      submitBtn.style.backgroundColor = '#ef4444'; // red
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.style.backgroundColor = '';
      }, 3000);
    }
  });
}

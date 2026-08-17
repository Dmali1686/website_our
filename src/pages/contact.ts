/**
 * Cresenix Solutions — Contact Page
 * Contact info card + form with service dropdown.
 */

import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderContactPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper" style="background: #f0f9ff;">
      <!-- Contact Header -->
      <div class="contact-header" style="position: relative; padding-top: 180px; padding-bottom: 80px; overflow: hidden;">
        <!-- Ambient Background Orbs -->
        <div style="position: absolute; top: -100px; left: 10%; width: 400px; height: 400px; background: rgba(59, 130, 246, 0.1); border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0;"></div>
        <div style="position: absolute; top: 0px; right: 10%; width: 300px; height: 300px; background: rgba(45, 212, 191, 0.1); border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0;"></div>
        
        <div class="container" style="position: relative; z-index: 2; text-align: center;">
          <div class="motion-fade-up" style="display: inline-block; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 999px; padding: 6px 16px; font-size: 0.85rem; font-weight: 600; color: #334155; margin-bottom: 24px; font-family: 'Inter', sans-serif;">
            Get in Touch
          </div>
          <h1 class="motion-fade-up" style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 800; color: #0f172a; line-height: 1.1; letter-spacing: -0.02em; margin: 0 auto 24px; max-width: 800px;">
            Let's Build Something <span style="color: #3b82f6;">Extraordinary</span>
          </h1>
          <p class="motion-fade-up" style="color: #475569; font-size: 1.15rem; max-width: 600px; margin: 0 auto; font-family: 'Inter', sans-serif; line-height: 1.6;">
            Reach out to our team of experts to discuss how Cresenix Solutions can accelerate your digital transformation.
          </p>
        </div>
      </div>

      <!-- Contact Form Section -->
      <section class="svc-contact-section" style="padding: 40px 24px 140px; display: flex; justify-content: center;">
        <style>
          .svc-contact-card {
            display: flex; max-width: 1100px; width: 100%; background: #ffffff; border-radius: 32px; overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.04); border: 1px solid #f1f5f9;
          }
          .svc-contact-image {
            flex: 0 0 45%; background: url('/images/3d_software_services.jpg') center/cover no-repeat;
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
            box-sizing: border-box;
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
            .svc-contact-card { flex-direction: column; }
            .svc-contact-image { height: 300px; }
            .svc-contact-form { padding: 40px 24px; }
            .svc-form-row { flex-direction: column; gap: 16px; margin-bottom: 16px; }
          }
        </style>

        <div class="svc-contact-card animate-fade-in-up">
          <div class="svc-contact-image"></div>
          <form id="contact-form" class="svc-contact-form">
            <div class="svc-form-row">
              <div class="svc-form-group">
                <label class="svc-form-label">Your name*</label>
                <input type="text" id="fullName" class="svc-form-input" placeholder="Dennis Barrett" required />
              </div>
              <div class="svc-form-group">
                <label class="svc-form-label">Subject</label>
                <input type="text" id="subject" class="svc-form-input" placeholder="Topic of your request" required />
              </div>
            </div>
            
            <div class="svc-form-row">
              <div class="svc-form-group">
                <label class="svc-form-label">Email address*</label>
                <input type="email" id="email" class="svc-form-input" placeholder="dannis@example.com" required />
              </div>
            </div>
            
            <div class="svc-form-row" style="margin-bottom: 32px;">
              <div class="svc-form-group">
                <label class="svc-form-label">Message</label>
                <textarea id="message" class="svc-form-textarea" placeholder="Write your message" required></textarea>
              </div>
            </div>
            
            <button type="submit" class="svc-form-btn">Send a message</button>
          </form>
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
    const submitBtn = form.querySelector('.svc-form-btn') as HTMLButtonElement;
    const originalBtnHTML = submitBtn.innerHTML;
    
    // Set loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <span class="material-symbols-outlined" style="font-size:20px; vertical-align: middle; animation: spin 1s linear infinite;">sync</span>';

    try {
      const payload = {
        fullName: (document.getElementById('fullName') as HTMLInputElement).value,
        subject: (document.getElementById('subject') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        message: (document.getElementById('message') as HTMLTextAreaElement).value
      };

      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Success
      submitBtn.style.background = '#10b981';
      submitBtn.style.boxShadow = '0 10px 20px rgba(16, 185, 129, 0.3)';
      submitBtn.innerHTML = 'Sent Successfully! <span class="material-symbols-outlined" style="font-size:20px; vertical-align: middle;">check_circle</span>';
      form.reset();

      setTimeout(() => {
        submitBtn.style.background = '';
        submitBtn.style.boxShadow = '';
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.disabled = false;
      }, 3000);

    } catch (error) {
      console.error('Contact form error:', error);
      submitBtn.style.background = '#f43f5e';
      submitBtn.style.boxShadow = '0 10px 20px rgba(244, 63, 94, 0.3)';
      submitBtn.innerHTML = 'Error Sending <span class="material-symbols-outlined" style="font-size:20px; vertical-align: middle;">error</span>';
      
      setTimeout(() => {
        submitBtn.style.background = '';
        submitBtn.style.boxShadow = '';
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.disabled = false;
      }, 3000);
    }
  });
}

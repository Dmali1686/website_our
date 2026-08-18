import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderPrivacyPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper" style="background-color: #0f172a; color: #f8fafc; font-family: 'Inter', sans-serif;">
      
      <!-- Hero Section -->
      <section style="position: relative; padding: 160px 24px 60px; background: linear-gradient(180deg, rgba(14, 165, 233, 0.1) 0%, transparent 100%);">
        <div class="container text-center" style="max-width: 800px; position: relative; z-index: 5;">
          <h1 style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #ffffff; letter-spacing: -0.02em; margin-bottom: 16px;">
            Privacy Policy
          </h1>
          <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; color: #94a3b8;">
            Last updated: August 2026
          </p>
        </div>
      </section>

      <!-- Content Section -->
      <section style="padding: 40px 24px 100px;">
        <div class="container">
          <div style="max-width: 800px; margin: 0 auto; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; padding: 48px; backdrop-filter: blur(12px); box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
            
            <h2 style="font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 700; color: #f8fafc; margin-top: 0; margin-bottom: 16px;">1. Information We Collect</h2>
            <p style="color: #cbd5e1; line-height: 1.8; margin-bottom: 32px; font-size: 1.05rem;">
              When you use our website, we may collect personal information that you provide to us directly, such as your name, email address, phone number, and company details when you submit a contact form.
            </p>
            
            <h2 style="font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 700; color: #f8fafc; margin-top: 32px; margin-bottom: 16px;">2. How We Use Your Information</h2>
            <p style="color: #cbd5e1; line-height: 1.8; margin-bottom: 32px; font-size: 1.05rem;">
              We use the information we collect to communicate with you, provide our services, improve our website, and ensure security. We do not sell your personal data to third parties.
            </p>

            <h2 style="font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 700; color: #f8fafc; margin-top: 32px; margin-bottom: 16px;">3. Data Security</h2>
            <p style="color: #cbd5e1; line-height: 1.8; margin-bottom: 32px; font-size: 1.05rem;">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 style="font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 700; color: #f8fafc; margin-top: 32px; margin-bottom: 16px;">4. Contact Us</h2>
            <p style="color: #cbd5e1; line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem;">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@cresenix.com" style="color: #38bdf8; text-decoration: none; font-weight: 600;">contact@cresenix.com</a>.
            </p>

          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

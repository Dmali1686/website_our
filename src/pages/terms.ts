import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderTermsPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper" style="background-color: #0f172a; color: #f8fafc; font-family: 'Inter', sans-serif;">
      
      <!-- Hero Section -->
      <section style="position: relative; padding: 160px 24px 60px; background: linear-gradient(180deg, rgba(167, 139, 250, 0.1) 0%, transparent 100%);">
        <div class="container text-center" style="max-width: 800px; position: relative; z-index: 5;">
          <h1 style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #ffffff; letter-spacing: -0.02em; margin-bottom: 16px;">
            Terms of Service
          </h1>
          <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; color: #94a3b8;">
            Last updated: August 2026
          </p>
        </div>
      </section>

      <!-- Mobile Responsive Styles -->
      <style>
        .terms-card {
          max-width: 800px; margin: 0 auto; 
          background: rgba(255,255,255,0.02); 
          border: 1px solid rgba(255,255,255,0.05); 
          border-radius: 24px; 
          padding: 48px; 
          backdrop-filter: blur(12px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .terms-h2 {
          font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 700; color: #f8fafc; margin-top: 32px; margin-bottom: 16px;
        }
        .terms-h2:first-of-type {
          margin-top: 0;
        }
        .terms-p {
          color: #cbd5e1; line-height: 1.8; margin-bottom: 32px; font-size: 1.05rem;
        }
        .terms-p:last-of-type {
          margin-bottom: 16px;
        }
        
        @media (max-width: 768px) {
          .terms-card { padding: 24px 16px; border-radius: 16px; }
          .terms-h2 { font-size: 1.25rem; margin-top: 24px; }
          .terms-p { font-size: 0.95rem; margin-bottom: 24px; line-height: 1.6; }
        }
      </style>

      <!-- Content Section -->
      <section style="padding: 40px 24px 100px;">
        <div class="container">
          <div class="terms-card">
            
            <h2 class="terms-h2">1. Acceptance of Terms</h2>
            <p class="terms-p">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 class="terms-h2">2. Use License</h2>
            <p class="terms-p">
              Permission is granted to temporarily download one copy of the materials (information or software) on Cresenix Solutions' website for personal, non-commercial transitory viewing only.
            </p>

            <h2 class="terms-h2">3. Disclaimer</h2>
            <p class="terms-p">
              The materials on Cresenix Solutions' website are provided on an 'as is' basis. Cresenix Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 class="terms-h2">4. Limitations</h2>
            <p class="terms-p">
              In no event shall Cresenix Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cresenix Solutions' website.
            </p>

          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

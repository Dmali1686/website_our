import { renderFooter } from '../components/footer';

export function renderTermsPage(): string {
  return `
    <div class="page-transition">
      <section class="section" style="padding-top: 120px; padding-bottom: 40px; background-color: var(--surface);">
        <div class="container text-center">
          <h1 class="font-display-md" style="margin-bottom: 16px;">Terms of Service</h1>
          <p class="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Last updated: August 2026
          </p>
        </div>
      </section>

      <section class="section" style="padding-top: 40px; padding-bottom: 80px;">
        <div class="container">
          <div class="max-w-3xl mx-auto" style="line-height: 1.8; color: var(--on-surface);">
            <h2 class="font-headline-sm" style="margin-top: 32px; margin-bottom: 16px;">1. Acceptance of Terms</h2>
            <p style="margin-bottom: 16px;">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 class="font-headline-sm" style="margin-top: 32px; margin-bottom: 16px;">2. Use License</h2>
            <p style="margin-bottom: 16px;">
              Permission is granted to temporarily download one copy of the materials (information or software) on Cresenix Solutions' website for personal, non-commercial transitory viewing only.
            </p>

            <h2 class="font-headline-sm" style="margin-top: 32px; margin-bottom: 16px;">3. Disclaimer</h2>
            <p style="margin-bottom: 16px;">
              The materials on Cresenix Solutions' website are provided on an 'as is' basis. Cresenix Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 class="font-headline-sm" style="margin-top: 32px; margin-bottom: 16px;">4. Limitations</h2>
            <p style="margin-bottom: 16px;">
              In no event shall Cresenix Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cresenix Solutions' website.
            </p>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

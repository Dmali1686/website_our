import { renderFooter } from '../components/footer';

export function renderPrivacyPage(): string {
  return `
    <div class="page-transition">
      <section class="section" style="padding-top: 120px; padding-bottom: 40px; background-color: var(--surface);">
        <div class="container text-center">
          <h1 class="font-display-md" style="margin-bottom: 16px;">Privacy Policy</h1>
          <p class="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Last updated: August 2026
          </p>
        </div>
      </section>

      <section class="section" style="padding-top: 40px; padding-bottom: 80px;">
        <div class="container">
          <div class="max-w-3xl mx-auto" style="line-height: 1.8; color: var(--on-surface);">
            <h2 class="font-headline-sm" style="margin-top: 32px; margin-bottom: 16px;">1. Information We Collect</h2>
            <p style="margin-bottom: 16px;">
              When you use our website, we may collect personal information that you provide to us directly, such as your name, email address, phone number, and company details when you submit a contact form.
            </p>
            
            <h2 class="font-headline-sm" style="margin-top: 32px; margin-bottom: 16px;">2. How We Use Your Information</h2>
            <p style="margin-bottom: 16px;">
              We use the information we collect to communicate with you, provide our services, improve our website, and ensure security. We do not sell your personal data to third parties.
            </p>

            <h2 class="font-headline-sm" style="margin-top: 32px; margin-bottom: 16px;">3. Data Security</h2>
            <p style="margin-bottom: 16px;">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 class="font-headline-sm" style="margin-top: 32px; margin-bottom: 16px;">4. Contact Us</h2>
            <p style="margin-bottom: 16px;">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@cresenix.com" style="color: var(--primary);">contact@cresenix.com</a>.
            </p>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

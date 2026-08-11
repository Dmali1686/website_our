import { renderFooter } from '../components/footer';

export function renderCareersPage(): string {
  return `
    <div class="page-transition">
      <!-- Header Section -->
      <section class="section" style="padding-top: 120px; padding-bottom: 40px; background-color: var(--surface);">
        <div class="container text-center">
          <h1 class="font-display-md" style="margin-bottom: 16px;">Join Our Team</h1>
          <p class="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
            At Cresenix Solutions, we are always looking for passionate and talented individuals to help us build the future. 
            Discover open opportunities and build your career with us.
          </p>
        </div>
      </section>

      <!-- Open Positions -->
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="max-w-3xl mx-auto">
            <h2 class="font-headline-md" style="margin-bottom: 24px;">Open Positions</h2>
            
            <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #eee; margin-bottom: 16px;">
              <h3 class="font-headline-sm" style="margin-bottom: 8px;">Senior Frontend Developer</h3>
              <p class="text-on-surface-variant" style="margin-bottom: 16px;">Remote / Full-time</p>
              <p class="font-body-md" style="margin-bottom: 16px;">
                We are looking for an experienced Frontend Developer with deep knowledge of modern JavaScript frameworks (React, Vue) and CSS architectures to build scalable user interfaces.
              </p>
              <a href="#/contact" class="btn btn-primary" style="padding: 8px 16px; font-size: 14px;">Apply Now</a>
            </div>

            <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #eee; margin-bottom: 16px;">
              <h3 class="font-headline-sm" style="margin-bottom: 8px;">Backend Software Engineer (Python)</h3>
              <p class="text-on-surface-variant" style="margin-bottom: 16px;">Remote / Full-time</p>
              <p class="font-body-md" style="margin-bottom: 16px;">
                Join our backend team to build and maintain robust APIs using Python and FastAPI. Experience with PostgreSQL and cloud architecture is a big plus.
              </p>
              <a href="#/contact" class="btn btn-primary" style="padding: 8px 16px; font-size: 14px;">Apply Now</a>
            </div>
            
            <p class="text-center font-body-md text-on-surface-variant" style="margin-top: 32px;">
              Don't see a role that fits? <a href="#/contact" style="color: var(--primary);">Send us your resume</a> anyway!
            </p>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

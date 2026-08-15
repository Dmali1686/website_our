import { renderNavbar } from '../components/navbar';

export function renderDemoPage(): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper" style="min-height: 100vh;">
      <style>
        .demo-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          letter-spacing: .04em;
          text-align: center;
          padding: 0 20px;
        }
        /* A subtle shadow to make text pop against any background */
        .demo-section h1 {
          text-shadow: 0 4px 24px rgba(0,0,0,0.1);
        }
      </style>
      
      <div class="color-demo-page" style="padding-top: 80px;">
        <div class="demo-section" data-color="#f0f9ff" style="color: #0ea5e9;">
          <h1>Scroll to Change</h1>
        </div>
        <div class="demo-section" data-color="#bae6fd" style="color: #0284c7;">
          <h1>Light Sky Blue</h1>
        </div>
        <div class="demo-section" data-color="#0ea5e9">
          <h1>Vibrant Cyan</h1>
        </div>
        <div class="demo-section" data-color="#0369a1">
          <h1>Deep Ocean</h1>
        </div>
        <div class="demo-section" data-color="#0f172a">
          <h1>Dark Navy Depths</h1>
        </div>
      </div>
    </div>
  `;
}

// Keep track of the listener so we can clean it up
let scrollHandler: (() => void) | null = null;

export function initDemo(): void {
  // Set body transition
  document.body.style.transition = 'background-color 0.5s ease-out';
  document.body.style.backgroundColor = '#f0f9ff';

  const colorSections = document.querySelectorAll('.demo-section');

  scrollHandler = () => {
    let activeColor = '#f0f9ff';
    colorSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2) {
        activeColor = section.getAttribute('data-color') || activeColor;
      }
    });
    document.body.style.backgroundColor = activeColor;
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });
}

export function cleanupDemo(): void {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler);
    scrollHandler = null;
  }
}

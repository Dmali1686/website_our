/**
 * Cresenix Solutions — Hash-based SPA Router
 * Handles client-side routing between pages with smooth transitions.
 */

import { setActiveNavId, getActiveNavId } from './components/navbar';

export interface Route {
  path: string;
  title: string;
  description?: string;
  render: () => string;
  onMount?: () => void;
}

let routes: Route[] = [];
let currentPath = '';
let onNavigateCallback: (() => void) | null = null;

/** Register all app routes */
export function registerRoutes(appRoutes: Route[]): void {
  routes = appRoutes;
}

/** Set a callback that fires after every navigation */
export function onNavigate(cb: () => void): void {
  onNavigateCallback = cb;
}

/** Get the current hash path, defaulting to '/' */
function getHashPath(): string {
  const hash = window.location.hash.slice(1); // Remove '#'
  return hash || '/';
}

/** Navigate to a specific path */
export function navigateTo(path: string): void {
  window.location.hash = `#${path}`;
}

/** Find route matching a path */
function matchRoute(path: string): Route | undefined {
  return routes.find(r => r.path === path);
}

/** Update the meta description tag dynamically for SPA SEO */
function updateMetaDescription(description: string): void {
  let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
  }
  meta.content = description;
}

/** Render the current route into #app */
function renderRoute(): void {
  const path = getHashPath();
  
  // Don't re-render the same page, but still update nav highlighting
  if (path === currentPath) {
    updateActiveNav(path);
    return;
  }
  
  const route = matchRoute(path);
  const appEl = document.getElementById('app');
  if (!appEl) return;

  // Page exit animation
  const pageWrapper = appEl.querySelector('.page-wrapper');
  if (pageWrapper && currentPath !== '') {
    pageWrapper.classList.add('page-exit');
    
    setTimeout(() => {
      performRender(route, appEl, path);
    }, 250);
  } else {
    performRender(route, appEl, path);
  }
}

function performRender(route: Route | undefined, appEl: HTMLElement, path: string): void {
  currentPath = path;

  if (route) {
    appEl.innerHTML = route.render();
    document.title = route.title;
    
    // Update meta description for SEO
    if (route.description) {
      updateMetaDescription(route.description);
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    // Update active nav link
    updateActiveNav(path);
    
    // Fire route-specific mount logic
    if (route.onMount) {
      requestAnimationFrame(() => {
        route.onMount!();
      });
    }

    // Fire global navigate callback (e.g., for scroll animations)
    if (onNavigateCallback) {
      requestAnimationFrame(() => {
        onNavigateCallback!();
      });
    }
  } else {
    // 404 fallback
    appEl.innerHTML = `
      <div class="page-wrapper" style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;">
        <h1 class="font-display-lg-mobile" style="color:var(--on-background);">404</h1>
        <p class="font-body-lg" style="color:var(--on-surface-variant);">Page not found.</p>
        <a href="#/" class="btn-primary" style="margin-top:16px;">Back to Home</a>
      </div>
    `;
  }
}

/** Highlight the active navigation link — only one per route */
function updateActiveNav(path: string): void {
  // Get the tracked active nav ID
  const activeNavId = getActiveNavId();

  const allNavLinks = document.querySelectorAll('.nav-link[data-route]');
  const activatedRoutes = new Set<string>();

  allNavLinks.forEach(link => {
    const route = link.getAttribute('data-route');
    const navId = link.getAttribute('data-nav-id');

    link.classList.remove('active');

    if (route === path) {
      // If we know which specific nav item was clicked, only activate that one
      if (activeNavId && navId === activeNavId) {
        link.classList.add('active');
      } else if (!activeNavId && !activatedRoutes.has(route)) {
        // Fallback: activate only the first link for this route
        link.classList.add('active');
        activatedRoutes.add(route);
      }
    }
  });
}

/** Initialize the router — call once on app start */
export function initRouter(): void {
  window.addEventListener('hashchange', renderRoute);
  
  // Handle clicks on route links
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('[data-route]');
    if (target) {
      e.preventDefault();
      const route = target.getAttribute('data-route');
      const navId = target.getAttribute('data-nav-id');
      if (route) {
        // Track which nav item was clicked for proper highlighting
        if (navId) {
          setActiveNavId(navId);
        }
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu?.classList.contains('open')) {
          mobileMenu.classList.remove('open');
        }
        // If already on this route, hashchange won't fire, so update nav manually
        if (getHashPath() === route) {
          updateActiveNav(route);
        } else {
          navigateTo(route);
        }
      }
    }
  });

  // Initial render
  renderRoute();
}

/** Get the current active path */
export function getCurrentPath(): string {
  return getHashPath();
}

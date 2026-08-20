/**
 * Cresenix Solutions — SPA Router
 * Handles client-side routing between pages with History API (pushState) for SEO.
 */

import { setActiveNavId, getActiveNavId } from './components/navbar';

export interface Route {
  path: string;
  title: string;
  description?: string;
  render: () => string;
  onMount?: () => void;
  schema?: () => object; // Optional function returning JSON-LD object
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

/** Get the current path, defaulting to '/' */
function getPath(): string {
  const path = window.location.pathname;
  return path || '/';
}

/** Navigate to a specific path */
export function navigateTo(path: string): void {
  history.pushState(null, '', path);
  renderRoute();
}

/** Find route matching a path */
function matchRoute(path: string): Route | undefined {
  return routes.find(r => r.path === path);
}

/** Update the meta tags dynamically for SPA SEO */
function updateMetaTags(route: Route, path: string): void {
  // Update Meta Description
  if (route.description) {
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = route.description;
  }

  // Update Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = `https://cresenixsolutions.com${path === '/' ? '' : path}`;

  // Update OG URL
  let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.content = `https://cresenixsolutions.com${path === '/' ? '' : path}`;
  
  // Update OG Title
  let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.content = route.title;
  
  // Update Twitter Title
  let twitterTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
  if (!twitterTitle) {
    twitterTitle = document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.content = route.title;
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

/** Update Structured Data (JSON-LD) dynamically */
function updateStructuredData(route: Route, path: string): void {
  // Remove existing dynamic schemas
  document.querySelectorAll('script[data-dynamic-schema]').forEach(el => el.remove());

  const baseUrl = 'https://cresenixsolutions.com';

  // 1. BreadcrumbList Schema (for all pages except Home)
  if (path !== '/') {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": route.title.split('|')[0].trim(),
          "item": `${baseUrl}${path}`
        }
      ]
    };
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.setAttribute('data-dynamic-schema', 'true');
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);
  }

  // 2. Service Schema (for specific service pages)
  if (['/services', '/ai-solutions', '/erp-lms'].includes(path)) {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": route.title.split('|')[0].trim(),
      "description": route.description || '',
      "provider": {
        "@type": "Organization",
        "name": "Cresenix Solutions LLP"
      },
      "areaServed": {
        "@type": "State",
        "name": "Maharashtra"
      },
      "url": `${baseUrl}${path}`
    };
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-dynamic-schema', 'true');
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);
  }

  // 3. Route-specific custom schema (e.g. BlogPosting, FAQPage)
  if (route.schema) {
    const customSchema = route.schema();
    const customScript = document.createElement('script');
    customScript.type = 'application/ld+json';
    customScript.setAttribute('data-dynamic-schema', 'true');
    customScript.textContent = JSON.stringify(customSchema);
    document.head.appendChild(customScript);
  }
}

/** Render the current route into #app */
function renderRoute(): void {
  const path = getPath();
  
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
    
    // Update meta tags for SEO
    updateMetaTags(route, path);
    updateStructuredData(route, path);
    
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
        <a href="/" class="btn-primary" style="margin-top:16px;">Back to Home</a>
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
  window.addEventListener('popstate', renderRoute);
  
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
        // If already on this route, don't push state but update nav manually
        if (getPath() === route) {
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
  return getPath();
}

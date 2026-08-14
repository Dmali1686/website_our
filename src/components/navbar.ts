/**
 * Cresenix Solutions — Navbar Component
 * Fixed top navigation with glassmorphism, responsive mobile drawer.
 */

import { getCurrentPath } from '../router';

interface NavLink {
  path?: string;
  label: string;
  id: string;
  dropdown?: { path: string; label: string; id: string; }[];
}

const NAV_LINKS: NavLink[] = [
  {
    label: 'Services',
    id: 'services',
    dropdown: [
      { path: '/ai-solutions', label: 'AI Solutions', id: 'ai-dev' },
      { path: '/erp-lms', label: 'ERP & LMS Systems', id: 'erp-lms' },
      { path: '/use-cases', label: 'Use Cases', id: 'use-cases' },
      { path: '/portfolio', label: 'Web & Mobile Development', id: 'web-mobile' },
    ]
  },
  { path: '/portfolio', label: 'Portfolio', id: 'portfolio' },
  { path: '/about', label: 'About Us', id: 'about' },
  { path: '/contact', label: 'Contact', id: 'contact' },
];

/* Track which nav item was last clicked so we only highlight that one */
let activeNavId: string | null = null;

export function setActiveNavId(id: string): void {
  activeNavId = id;
}

export function getActiveNavId(): string | null {
  return activeNavId;
}

function resolveActiveId(currentPath: string): string | null {
  // If an explicit nav item was clicked, use it
  if (activeNavId) return activeNavId;

  // Fallback: pick the first link that matches the current route
  const match = NAV_LINKS.find(l => l.path === currentPath);
  return match ? match.id : null;
}

export function renderNavbar(): string {
  const currentPath = getCurrentPath();
  const resolvedId = resolveActiveId(currentPath);

  // Track which route has already been marked active (prevents double-highlight)
  const activatedRoutes = new Set<string>();

  const linksHTML = NAV_LINKS.map(link => {
    let isActive = false;
    
    // Check if link or its dropdown children are active
    if (resolvedId) {
      isActive = link.id === resolvedId || !!(link.dropdown && link.dropdown.find(d => d.id === resolvedId));
    } else {
      if (link.path && link.path === currentPath && !activatedRoutes.has(link.path)) {
        isActive = true;
        activatedRoutes.add(link.path);
      } else if (link.dropdown) {
        const activeChild = link.dropdown.find(d => d.path === currentPath && !activatedRoutes.has(d.path));
        if (activeChild) {
          isActive = true;
          activatedRoutes.add(activeChild.path);
        }
      }
    }

    if (link.dropdown) {
      const dropdownHtml = link.dropdown.map(d => 
        `<a class="dropdown-link" data-route="${d.path}" data-nav-id="${d.id}" href="#${d.path}">${d.label}</a>`
      ).join('');
      
      return `
        <div class="nav-dropdown-wrapper">
          <button class="nav-link nav-dropdown-btn${isActive ? ' active' : ''}">
            ${link.label} <span class="material-symbols-outlined nav-chevron">expand_more</span>
          </button>
          <div class="nav-dropdown-menu">
            ${dropdownHtml}
          </div>
        </div>
      `;
    }
    
    return `<a class="nav-link${isActive ? ' active' : ''}" data-route="${link.path}" data-nav-id="${link.id}" href="#${link.path}">${link.label}</a>`;
  }).join('');

  // Reset for mobile links
  activatedRoutes.clear();

  const mobileLinksHTML = NAV_LINKS.map(link => {
    if (link.dropdown) {
      const childrenHtml = link.dropdown.map(d => {
        let isChildActive = false;
        if (resolvedId) {
          isChildActive = d.id === resolvedId;
        } else if (d.path === currentPath && !activatedRoutes.has(d.path)) {
          isChildActive = true;
          activatedRoutes.add(d.path);
        }
        return `<a class="nav-link${isChildActive ? ' active' : ''}" data-route="${d.path}" data-nav-id="${d.id}" href="#${d.path}" style="padding-left: 32px; font-size: 0.95rem; font-weight: 500;">${d.label}</a>`;
      }).join('');
      
      return `
        <div style="padding: 12px 16px 4px 16px; font-weight: 700; color: var(--on-surface-variant); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 8px;">
          ${link.label}
        </div>
        ${childrenHtml}
      `;
    }

    let isActive = false;
    if (resolvedId) {
      isActive = link.id === resolvedId;
    } else {
      if (link.path === currentPath && !activatedRoutes.has(link.path!)) {
        isActive = true;
        activatedRoutes.add(link.path!);
      }
    }
    return `<a class="nav-link${isActive ? ' active' : ''}" data-route="${link.path}" data-nav-id="${link.id}" href="#${link.path}">${link.label}</a>`;
  }).join('');

  return `
    <header class="main-nav" id="main-nav">
      <div class="nav-inner">
        <a class="nav-logo" data-route="/" href="#/">
          <img src="/images/logo.png" alt="Cresenix Solutions Logo" class="nav-logo-img" style="height: 36px; width: auto; object-fit: contain;" />
          <div class="logo-text-stack">
            <span class="logo-text-top">CRESENIX</span>
            <span class="logo-text-bottom">SOLUTIONS LLP</span>
          </div>
        </a>
        <nav class="nav-links">
          ${linksHTML}
        </nav>
        <div class="nav-actions">
          <a class="nav-start-btn" data-route="/contact" href="#/contact" style="background: #facc15; color: #111827; padding: 10px 28px; border-radius: 50px; font-weight: 600; font-family: 'Inter', sans-serif; text-decoration: none; font-size: 0.95rem; transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='scale(1.05)'; this.style.background='#eab308';" onmouseout="this.style.transform='scale(1)'; this.style.background='#facc15';">
            Contact Us
          </a>
        </div>
        <button class="nav-mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
    <div class="mobile-menu" id="mobile-menu">
      ${mobileLinksHTML}
      <div class="mobile-menu-actions">
        <a class="nav-login" href="#" style="text-align:center;font-size:16px;">Login</a>
        <a class="nav-cta" data-route="/contact" href="#/contact">Get Started</a>
      </div>
    </div>
  `;
}

/** Initialize navbar scroll behavior and mobile menu toggle */
export function initNavbar(): void {
  // Scroll effect
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Mobile toggle
  const toggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      const icon = toggle.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = isOpen ? 'menu' : 'close';
      }
    });
  }

  // Track which nav item is clicked so only one highlights
  document.querySelectorAll('[data-nav-id]').forEach(el => {
    el.addEventListener('click', () => {
      const navId = (el as HTMLElement).dataset.navId;
      if (navId) {
        setActiveNavId(navId);
      }
    });
  });
}

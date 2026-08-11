/**
 * Cresenix Solutions — Main Entry Point
 * Bootstraps the router, registers routes, and initializes effects.
 */

import './style.css';
import { registerRoutes, initRouter, onNavigate } from './router';
import { initNavbar } from './components/navbar';
import { initAllEffects } from './effects';
import { renderHomePage, initHomeForm } from './pages/home';
import { renderAISolutionsPage } from './pages/ai-solutions';
import { renderERPLMSPage } from './pages/erp-lms';
import { renderPortfolioPage } from './pages/portfolio';
import { renderContactPage, initContactForm } from './pages/contact';
import { renderAboutPage } from './pages/about';
import { renderCareersPage } from './pages/careers';
import { renderPrivacyPage } from './pages/privacy';
import { renderTermsPage } from './pages/terms';

// Register all application routes
registerRoutes([
  {
    path: '/',
    title: 'Software & Services',
    render: renderHomePage,
    onMount: () => {
      initNavbar();
      initHomeForm();
    },
  },
  {
    path: '/ai-solutions',
    title: 'AI Solutions',
    render: renderAISolutionsPage,
    onMount: initNavbar
  },
  {
    path: '/erp-lms',
    title: 'ERP & LMS Systems',
    render: renderERPLMSPage,
    onMount: initNavbar
  },
  {
    path: '/portfolio',
    title: 'Our Portfolio',
    render: renderPortfolioPage,
    onMount: initNavbar
  },
  {
    path: '/about',
    title: 'About Us',
    render: renderAboutPage,
    onMount: initNavbar
  },
  {
    path: '/contact',
    title: 'Contact Us',
    render: renderContactPage,
    onMount: () => {
      initNavbar();
      initContactForm();
    },
  },
  {
    path: '/careers',
    title: 'Careers',
    render: renderCareersPage,
    onMount: initNavbar
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    render: renderPrivacyPage,
    onMount: initNavbar
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    render: renderTermsPage,
    onMount: initNavbar
  }
]);

// After every navigation, re-initialize scroll animations and effects
onNavigate(() => {
  initAllEffects();
});

// Boot the application
initRouter();

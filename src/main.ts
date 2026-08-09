/**
 * Cresenix Solutions — Main Entry Point
 * Bootstraps the router, registers routes, and initializes effects.
 */

import './style.css';
import { registerRoutes, initRouter, onNavigate } from './router';
import { initNavbar } from './components/navbar';
import { initAllEffects } from './effects';
import { renderHomePage } from './pages/home';
import { renderAISolutionsPage } from './pages/ai-solutions';
import { renderERPLMSPage } from './pages/erp-lms';
import { renderPortfolioPage } from './pages/portfolio';
import { renderContactPage } from './pages/contact';
import { renderAboutPage } from './pages/about';

// Register all application routes
registerRoutes([
  {
    path: '/',
    title: 'Software & Services',
    render: renderHomePage,
    onMount: () => {
      initNavbar();
    },
  },
  {
    path: '/ai-solutions',
    title: 'AI Solutions',
    render: renderAISolutionsPage,
    onMount: () => {
      initNavbar();
    },
  },
  {
    path: '/erp-lms',
    title: 'ERP & LMS Solutions',
    render: renderERPLMSPage,
    onMount: () => {
      initNavbar();
    },
  },
  {
    path: '/portfolio',
    title: 'Portfolio & Case Studies',
    render: renderPortfolioPage,
    onMount: () => {
      initNavbar();
    },
  },
  {
    path: '/contact',
    title: 'Contact Us',
    render: renderContactPage,
    onMount: () => {
      initNavbar();
    },
  },
  {
    path: '/about',
    title: 'About Us',
    render: renderAboutPage,
    onMount: () => {
      initNavbar();
    },
  },
]);

// After every navigation, re-initialize scroll animations and effects
onNavigate(() => {
  initAllEffects();
});

// Boot the application
initRouter();

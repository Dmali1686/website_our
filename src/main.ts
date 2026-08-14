/**
 * Cresenix Solutions — Main Entry Point
 * Bootstraps the router, registers routes, and initializes effects.
 */

import './style.css';
import { registerRoutes, initRouter, onNavigate } from './router';
import { initNavbar } from './components/navbar';
import { initAllEffects } from './effects';
import { renderHomePage, initHomeForm, initTestimonialCarousel, initTechStackTabs } from './pages/home';
import { renderAISolutionsPage } from './pages/ai-solutions';
import { renderERPLMSPage } from './pages/erp-lms';
import { renderPortfolioPage } from './pages/portfolio';
import { renderContactPage, initContactForm } from './pages/contact';
import { renderAboutPage } from './pages/about';
import { renderCareersPage } from './pages/careers';
import { renderPrivacyPage } from './pages/privacy';
import { renderTermsPage } from './pages/terms';
import { renderUseCasesPage, initUseCasesTabs } from './pages/use-cases';

// Register all application routes with SEO-optimized titles & descriptions
registerRoutes([
  {
    path: '/',
    title: 'Custom Software, AI & App Development | Cresenix Solutions LLP',
    description: 'Cresenix Solutions LLP builds custom software, mobile apps, AI chatbots, ERP systems, and digital marketing solutions for startups, SMEs, and enterprises across India.',
    render: renderHomePage,
    onMount: () => {
      initNavbar();
      initHomeForm();
      initTestimonialCarousel();
      initTechStackTabs();
    },
  },
  {
    path: '/ai-solutions',
    title: 'AI Chatbots, Voice Agents & Automation | Cresenix Solutions',
    description: 'Build intelligent AI chatbots, voice assistants, calling agents, OCR systems, and workflow automation with Cresenix Solutions. Scalable AI for modern enterprises.',
    render: renderAISolutionsPage,
    onMount: initNavbar
  },
  {
    path: '/erp-lms',
    title: 'Custom ERP & LMS Development Company | Cresenix Solutions',
    description: 'Custom ERP software and Learning Management System (LMS) development by Cresenix Solutions. Streamline HR, payroll, inventory, and education delivery.',
    render: renderERPLMSPage,
    onMount: initNavbar
  },
  {
    path: '/portfolio',
    title: 'Case Studies & Portfolio | Cresenix Solutions LLP',
    description: 'Explore real case studies from Cresenix Solutions — custom LMS platforms, animal rescue apps, charity ERP systems, and industrial automation projects.',
    render: renderPortfolioPage,
    onMount: initNavbar
  },
  {
    path: '/about',
    title: 'About Cresenix Solutions LLP | AI & Software Consultancy',
    description: 'Cresenix Solutions LLP is an AI and software consultancy building custom enterprise applications, intelligent automation, and scalable digital solutions.',
    render: renderAboutPage,
    onMount: initNavbar
  },
  {
    path: '/contact',
    title: 'Contact Us — Free Consultation | Cresenix Solutions',
    description: 'Book a free software consultation with Cresenix Solutions. Get expert advice on custom software, AI, mobile apps, and enterprise system development.',
    render: renderContactPage,
    onMount: () => {
      initNavbar();
      initContactForm();
    },
  },
  {
    path: '/careers',
    title: 'Careers at Cresenix Solutions LLP | Join Our Team',
    description: 'Join Cresenix Solutions LLP — explore open positions in software development, AI engineering, mobile development, and digital marketing.',
    render: renderCareersPage,
    onMount: initNavbar
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Cresenix Solutions LLP',
    description: 'Read the privacy policy of Cresenix Solutions LLP. Learn how we collect, use, and protect your personal information.',
    render: renderPrivacyPage,
    onMount: initNavbar
  },
  {
    path: '/terms',
    title: 'Terms of Service | Cresenix Solutions LLP',
    description: 'Review the terms of service for Cresenix Solutions LLP. Understand the conditions governing our software development and consulting services.',
    render: renderTermsPage,
    onMount: initNavbar
  },
  {
    path: '/use-cases',
    title: 'Use Cases & Real-World Impact | Cresenix Solutions LLP',
    description: 'Explore how Cresenix Solutions solves complex problems with custom software, LMS platforms, and ERP systems for NGOs, education, and manufacturing.',
    render: renderUseCasesPage,
    onMount: () => {
      initNavbar();
      initUseCasesTabs();
    }
  }
]);

// After every navigation, re-initialize scroll animations and effects
onNavigate(() => {
  initAllEffects();
});

// Boot the application
initRouter();

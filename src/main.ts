/**
 * Cresenix Solutions — Main Entry Point
 * Bootstraps the router, registers routes, and initializes effects.
 */

import './style.css';
import { registerRoutes, initRouter, onNavigate } from './router';
import { initNavbar } from './components/navbar';
import { initAllEffects } from './effects';
import { renderHomePage, initHome } from './pages/home';
import { renderServicesPage, initServiceShowcaseTabs } from './pages/services';
import { renderAISolutionsPage, initAISolutions } from './pages/ai-solutions';
import { renderERPLMSPage } from './pages/erp-lms';
import { renderPortfolioPage, initPortfolio } from './pages/portfolio';
import { renderContactPage, initContactForm } from './pages/contact';
import { renderAboutPage, initAbout } from './pages/about';
import { renderCareersPage, initCareers, cleanupCareers } from './pages/careers';
import { renderPrivacyPage } from './pages/privacy';
import { renderTermsPage } from './pages/terms';
import { renderDemoPage, initDemo, cleanupDemo } from './pages/demo';
import { renderUseCasesPage, initUseCasesTabs } from './pages/use-cases';

// Register all application routes with SEO-optimized titles & descriptions
registerRoutes([
  {
    path: '/',
    title: 'Custom Software & AI Development Company in Pune | Cresenix Solutions LLP',
    description: 'Cresenix Solutions LLP is a leading software development company in Pimpri-Chinchwad, Pune. We build custom software, mobile apps, AI chatbots, ERP systems, and LMS platforms for startups, SMEs, and enterprises across Maharashtra and India.',
    render: renderHomePage,
    onMount: () => {
      initNavbar();
      initHome();
    },
  },
  {
    path: '/services',
    title: 'Software Development Services in Pimpri-Chinchwad & Pune | Cresenix Solutions',
    description: 'Explore our software development services in Pune — mobile app development, enterprise ERP systems, custom LMS platforms, AI chatbots, and web applications for businesses in Pimpri-Chinchwad and Maharashtra.',
    render: renderServicesPage,
    onMount: () => {
      initNavbar();
      initServiceShowcaseTabs();
    },
  },
  {
    path: '/ai-solutions',
    title: 'AI Chatbots & Automation Solutions in Pune | Cresenix Solutions',
    description: 'Build intelligent AI chatbots, voice assistants, calling agents, OCR systems, and workflow automation with Cresenix Solutions in Pimpri-Chinchwad, Pune. Scalable AI solutions for modern enterprises in Maharashtra.',
    render: renderAISolutionsPage,
    onMount: () => {
      initNavbar();
      initAISolutions();
    }
  },
  {
    path: '/erp-lms',
    title: 'Custom ERP & LMS Development Company in Pune | Cresenix Solutions',
    description: 'Custom ERP software and Learning Management System (LMS) development in Pimpri-Chinchwad, Pune by Cresenix Solutions. Streamline HR, payroll, inventory, and education delivery for businesses across Maharashtra.',
    render: renderERPLMSPage,
    onMount: initNavbar
  },
  {
    path: '/portfolio',
    title: 'Case Studies & Portfolio — Software Projects in Pune | Cresenix Solutions',
    description: 'Explore real case studies from Cresenix Solutions in Pune — custom LMS platforms, animal rescue apps, charity ERP systems, and industrial automation projects delivered across Pimpri-Chinchwad and Maharashtra.',
    render: renderPortfolioPage,
    onMount: () => {
      initNavbar();
      initPortfolio();
    }
  },
  {
    path: '/use-cases',
    title: 'Software Use Cases & Industry Solutions in Pune | Cresenix Solutions',
    description: 'Explore real-world use cases of Cresenix Solutions custom software, AI, and enterprise applications built for businesses in Pune, Pimpri-Chinchwad, and across India.',
    render: renderUseCasesPage,
    onMount: () => {
      initNavbar();
      initUseCasesTabs();
    },
  },
  {
    path: '/about',
    title: 'About Cresenix Solutions LLP | Software Company in Pune, Pimpri-Chinchwad',
    description: 'Cresenix Solutions LLP is a software development and AI consultancy based in Pimpri-Chinchwad, Pune. We build custom enterprise applications, intelligent automation, and scalable digital solutions for businesses across Maharashtra.',
    render: renderAboutPage,
    onMount: () => {
      initNavbar();
      initAbout();
    }
  },
  {
    path: '/contact',
    title: 'Contact Us in Pimpri-Chinchwad, Pune — Free Consultation | Cresenix Solutions',
    description: 'Book a free software consultation with Cresenix Solutions in Pune. Get expert advice on custom software, AI chatbots, mobile apps, ERP, and LMS development in Pimpri-Chinchwad and Maharashtra.',
    render: renderContactPage,
    onMount: () => {
      initNavbar();
      initContactForm();
    },
  },
  {
    path: '/careers',
    title: 'Careers at Cresenix Solutions, Pune | Software Development Jobs in PCMC',
    description: 'Join Cresenix Solutions LLP in Pimpri-Chinchwad, Pune — explore open positions in software development, AI engineering, mobile development, and digital marketing.',
    render: renderCareersPage,
    onMount: () => {
      initNavbar();
      initCareers();
    }
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
    path: '/demo',
    title: 'Color Scroll Demo | Cresenix Solutions',
    description: 'A demo page showing scroll-based background color transitions.',
    render: renderDemoPage,
    onMount: () => {
      initNavbar();
      initDemo();
    }
  }
]);

// After every navigation, re-initialize scroll animations and effects
onNavigate(() => {
  // Cleanup scroll listeners if navigating away
  if (window.location.hash !== '#/demo') {
    cleanupDemo();
  }
  if (window.location.hash !== '#/careers') {
    cleanupCareers();
  }
  
  // Reset body background to default if not on demo page
  if (window.location.hash !== '#/demo') {
    document.body.style.backgroundColor = '#fafafa';
  }

  initAllEffects();
});

// Boot the application
initRouter();

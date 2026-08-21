/**
 * Cresenix Solutions — Main Entry Point
 * Bootstraps the router, registers routes, and initializes effects.
 */

import './style.css';
import { registerRoutes, initRouter, onNavigate, getCurrentPath } from './router';
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
import { renderBlogPage } from './pages/blog';
import { renderBlogPostPage } from './pages/blog-post';
import { blogPosts } from './data/blog-posts';

const dynamicBlogRoutes = blogPosts.map(post => ({
  path: `/blog/${post.slug}`,
  title: `${post.title} | Cresenix Solutions`,
  description: post.excerpt,
  render: () => renderBlogPostPage(post),
  onMount: initNavbar,
  schema: () => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://cresenixsolutions.com${post.imageUrl}`,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "description": post.excerpt
  })
}));

// Register all application routes with SEO-optimized titles & descriptions
registerRoutes([
  ...dynamicBlogRoutes,
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
    schema: () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the typical cost for custom software development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs in India typically range from ₹3 Lakhs to ₹50 Lakhs depending on complexity, features, and platform support. We offer free technical consultations to provide you with a precise estimate."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide post-launch support and maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide comprehensive SLA-backed maintenance and support for all our custom software, mobile apps, and ERP systems to ensure 99.9% uptime."
          }
        },
        {
          "@type": "Question",
          "name": "Which technologies do you use for mobile app development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in modern frameworks like React Native and Flutter for cross-platform apps, as well as native Swift (iOS) and Kotlin (Android) when device-level performance is strictly required."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build an MVP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical Minimum Viable Product (MVP) takes anywhere from 6 to 12 weeks to design, develop, test, and launch, depending on the core features required."
          }
        }
      ]
    })
  },
  {
    path: '/ai-solutions',
    title: 'AI Chatbots & Automation Solutions in Pune | Cresenix Solutions',
    description: 'Build intelligent AI chatbots, voice assistants, calling agents, OCR systems, and workflow automation with Cresenix Solutions in Pimpri-Chinchwad, Pune. Scalable AI solutions for modern enterprises in Maharashtra.',
    render: renderAISolutionsPage,
    onMount: () => {
      initNavbar();
      initAISolutions();
    },
    schema: () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an AI Chatbot and how does it help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI Chatbot uses Natural Language Processing (NLP) to understand and respond to customer queries automatically. It can handle support, generate leads, and automate repetitive tasks 24/7 without human intervention."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate AI Chatbots with WhatsApp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build custom AI Chatbots that seamlessly integrate with the WhatsApp Business API, allowing you to engage with customers directly on their preferred messaging platform."
          }
        },
        {
          "@type": "Question",
          "name": "Is my data secure when using your AI solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We use enterprise-grade LLMs and isolated environments to ensure that your proprietary data is never used to train public models. Security and compliance are built in from day one."
          }
        }
      ]
    })
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
  },
  {
    path: '/blog',
    title: 'Blog & Resources | Cresenix Solutions',
    description: 'Insights and expert guides on software development, AI automation, mobile apps, and scaling tech for modern businesses.',
    render: renderBlogPage,
    onMount: initNavbar
  }
]);

// After every navigation, re-initialize scroll animations and effects
onNavigate(() => {
  const path = getCurrentPath();
  
  // Cleanup scroll listeners if navigating away
  if (path !== '/demo') {
    cleanupDemo();
  }
  if (path !== '/careers') {
    cleanupCareers();
  }
  
  // Reset body background to default if not on demo page
  if (path !== '/demo') {
    document.body.style.backgroundColor = '#fafafa';
  }

  initAllEffects();
});

// Boot the application
initRouter();

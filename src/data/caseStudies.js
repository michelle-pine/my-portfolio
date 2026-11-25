import CaseStudy from '../projects/CaseStudy';
import DesignSystemImg from '../media/project-media/case-studies/design-system.svg';
import AiMigrationsImg from '../media/project-media/case-studies/ai-migrations.svg';
import DataModelImg from '../media/project-media/case-studies/data-model.svg';
import UpgradeFlowsImg from '../media/project-media/case-studies/upgrade-flows.svg';
import EmailEditorImg from '../media/project-media/case-studies/email-editor.svg';
import BookBubHomeImg from '../media/project-media/bookbub/home.webp';
import BookBubBookPageImg from '../media/project-media/bookbub/book-page.webp';
import BookBubDealsImg from '../media/project-media/bookbub/deals.webp';
import BookBubEmailImg from '../media/project-media/bookbub/email.webp';
import BookBubCoverImg from '../media/project-media/bookbub/cover.webp';

// Professional work, shown as case studies. Each entry renders with the shared
// CaseStudy page, so adding one only requires data and a cover image.
const caseStudies = [
  {
    title: 'Design System Token Migration',
    url: 'design-system-migration',
    year: 2025,
    type: ['professional', 'coding', 'design'],
    image: DesignSystemImg,
    description:
      "Led the migration of 200+ UI components to a token-based design system across roughly 2,000 frontend applications—the largest migration in HubSpot's history.",
    tags: ['design tokens', 'codemods', 'accessibility', 'react', 'typescript', 'hubspot'],
    caseStudy: {
      organization: 'HubSpot',
      role: 'Frontend Technical Lead II – Design System',
      timeline: 'Oct 2025 – Present',
      summary: [
        "As a technical lead on HubSpot's Design System team, I help maintain the company's most widely adopted evergreen UI library: a mission-critical dependency that powers thousands of downstream applications and shared libraries.",
        'I led and enabled a company-wide migration of 200+ UI components to a token-based design system, shaping component APIs so the migration could be automated with codemods across roughly 2,000 frontend applications.',
      ],
      highlights: [
        "Drove the largest migration in HubSpot's history, spanning roughly 2,000 frontend applications.",
        'Optimized component APIs for automated codemod compatibility.',
        'Kept a library with thousands of dependents reliable and backwards compatible throughout continuous delivery.',
        'Partnered with principal designers and cross-functional engineering teams to architect and roll out modernized, accessible component libraries.',
      ],
      stack: ['React', 'TypeScript', 'Design Tokens', 'Codemods', 'WCAG', 'Figma'],
    },
  },
  {
    title: 'AI-Assisted Migration Tooling',
    url: 'ai-assisted-migrations',
    year: 2025,
    type: ['professional', 'coding'],
    image: AiMigrationsImg,
    description:
      'Custom Claude Skills and agent workflows that automate and accelerate large-scale component migrations and design system prototyping.',
    tags: ['claude', 'claude skills', 'conductor', 'ai', 'codemods', 'hubspot'],
    caseStudy: {
      organization: 'HubSpot',
      role: 'Frontend Technical Lead II – Design System',
      timeline: 'Oct 2025 – Present',
      summary: [
        'To support a migration spanning hundreds of components and thousands of applications, I authored custom Claude Skills and used Claude and Conductor to automate and accelerate the work.',
        'Beyond the migration itself, I use these workflows to research and prototype complex design system architectures before committing to them.',
      ],
      highlights: [
        'Authored numerous custom Claude Skills that encode migration patterns and design system conventions.',
        'Used Claude and Conductor to automate and accelerate large-scale component migrations.',
        'Combined AI-assisted code generation with codemods to move migrations forward across the codebase.',
        'Researched and prototyped complex design system architectures.',
      ],
      stack: ['Claude', 'Claude Skills', 'Conductor', 'Codemods', 'TypeScript'],
    },
  },
  {
    title: 'Data Model Visualizer',
    url: 'data-model-visualizer',
    year: 2023,
    type: ['professional', 'coding', 'design'],
    image: DataModelImg,
    description:
      'Interactive web applications for visualizing, monitoring, and configuring customer data models, built with React, TypeScript, ReactFlow, Apollo, and GraphQL.',
    tags: ['reactflow', 'graphql', 'apollo', 'react', 'typescript', 'hubspot'],
    caseStudy: {
      organization: 'HubSpot',
      role: 'Frontend Technical Lead I – Data Model',
      timeline: 'Nov 2022 – Oct 2025',
      summary: [
        "As frontend technical lead for HubSpot's Data Model team, I architected and launched interactive applications that let customers visualize, monitor, and configure their data models.",
        'Alongside the product work, I led department-wide migrations to TypeScript, GraphQL, and React Testing Library, and set engineering standards for the team.',
      ],
      highlights: [
        'Architected interactive data model visualizations using ReactFlow, backed by Apollo and GraphQL.',
        'Led department-wide migrations to TypeScript, GraphQL, and React Testing Library, significantly reducing runtime defects and improving developer velocity.',
        'Established team best practices for reliability, frontend performance, and accessibility.',
        'Mentored engineers within and across teams, directly supporting teammate promotions.',
      ],
      stack: ['React', 'TypeScript', 'ReactFlow', 'Apollo Client', 'GraphQL', 'React Testing Library'],
    },
  },
  {
    title: 'In-App Upgrade Flows',
    url: 'in-app-upgrade-flows',
    year: 2022,
    type: ['professional', 'coding', 'design'],
    image: UpgradeFlowsImg,
    description:
      'Strategically placed in-app upgrade experiences that generated an additional $160K in Monthly Recurring Revenue.',
    tags: ['growth', 'performance', 'accessibility', 'react', 'hubspot'],
    caseStudy: {
      organization: 'HubSpot',
      role: 'Senior Frontend Software Engineer',
      timeline: 'Dec 2021 – Nov 2022',
      summary: [
        'I engineered strategically placed in-app upgrade flows that generated an additional $160K in Monthly Recurring Revenue.',
        'During the same period I focused on making the apps faster and more accessible.',
      ],
      highlights: [
        'Generated an additional $160K in Monthly Recurring Revenue (MRR).',
        'Implemented JavaScript treeshaking, cutting many bundle sizes and load times by 50%.',
        'Spearheaded cross-library refactors that achieved near-complete screen reader accessibility across team-owned applications.',
        'Wrote documentation of new and legacy systems to streamline onboarding.',
      ],
      stack: ['React', 'JavaScript', 'Webpack', 'Treeshaking', 'WCAG / Screen Readers'],
    },
  },
  {
    title: 'Email Editor Redesign',
    url: 'email-editor-redesign',
    year: 2020,
    type: ['professional', 'coding', 'design'],
    image: EmailEditorImg,
    description:
      "A major redesign of HubSpot's core email editor interface, built with modular, custom React components.",
    tags: ['email', 'react', 'testing', 'hubspot'],
    caseStudy: {
      organization: 'HubSpot',
      role: 'Frontend Software Engineering Co-op',
      timeline: 'Jan 2020 – Jun 2021',
      summary: [
        "As a co-op, I implemented a major redesign of HubSpot's core email editor interface using modular, custom React components.",
      ],
      highlights: [
        'Built the redesigned editor interface from modular, custom React components.',
        'Refactored shared frontend libraries and applications to introduce strongly typed abstract data structures.',
        'Built automated unit and end-to-end test suites using Enzyme, Jasmine, and Selenium.',
      ],
      stack: ['React', 'JavaScript', 'Enzyme', 'Jasmine', 'Selenium'],
    },
  },
  {
    title: 'BookBub Component Library',
    url: 'bookbub-component-library',
    year: 2019,
    type: ['professional', 'coding', 'design'],
    image: BookBubCoverImg,
    description:
      'The reusable, accessible UI component library that makes up the BookBub website, built to internal design specifications.',
    tags: ['component library', 'design system', 'accessibility', 'react', 'ruby on rails', 'postgresql', 'bookbub'],
    caseStudy: {
      organization: 'BookBub',
      role: 'Full-Stack Software Engineering Co-op',
      timeline: 'Jan 2019 – Dec 2019',
      summary: [
        "At BookBub, our team built the reusable UI component library that makes up the BookBub website. Every page is assembled from these shared pieces: navigation and search, category filters, deal cards, book pages, and sidebar panels.",
        "The components adhere strictly to BookBub's design specifications and web accessibility standards, so pages stay visually consistent and usable as the site grows. Alongside the library, I worked across the full stack.",
      ],
      highlights: [
        'Built reusable, accessible UI components to internal design specifications.',
        'Components are shared across the site: headers, search, filter pills, deal cards, book detail layouts, buttons, and sidebar panels.',
        'Developed and extended full-stack web features using React, Ruby on Rails, and PostgreSQL.',
        'Engineered dynamic mass-marketing email templates powered by a Clojure templating system and internal REST APIs.',
      ],
      stack: ['React', 'Ruby on Rails', 'PostgreSQL', 'Clojure', 'REST APIs', 'WCAG'],
      hero: {
        src: BookBubHomeImg,
        alt: 'BookBub home page with a navigation header, three featured deal collections, category filter pills, and a wishlist sidebar.',
      },
      gallery: [
        {
          src: BookBubDealsImg,
          alt: 'Grid of discounted book deal cards with covers, titles, authors, genres, and prices, beside wishlist and followed-author panels.',
          caption: 'Deal cards in a responsive grid, alongside the wishlist and "My Authors" sidebar panels.',
        },
        {
          src: BookBubBookPageImg,
          alt: 'A book detail page showing the cover, title, authors, star rating, description, a deal price card, and wishlist, review, and share actions.',
          caption: 'Book page: cover, ratings, description, deal pricing, and wishlist, review, and share actions.',
        },
        {
          src: BookBubEmailImg,
          alt: 'A BookBub deal email featuring Black Leopard, Red Wolf by Marlon James, with a description, a personalized "Because you\'re interested in Fantasy" note, a $1.99 price, and an Amazon button.',
          caption: 'Personalized deal email built with the Clojure templating system.',
        },
      ],
      links: [{ to: 'https://www.bookbub.com', text: 'Visit BookBub', icon: 'fa-globe' }],
      note: {
        icon: 'fa-info-circle',
        text: "Screenshots are from the live BookBub site. I'm happy to talk through how the component library was built.",
      },
    },
  },
].map((study) => ({
  ...study,
  page: CaseStudy,
  caseStudy: { ...study.caseStudy, title: study.title, year: study.year, image: study.image },
}));

export default caseStudies;

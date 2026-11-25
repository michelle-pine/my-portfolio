import CaseStudy from '../projects/CaseStudy';
import DesignSystemImg from '../media/project-media/case-studies/design-system.svg';
import AiMigrationsImg from '../media/project-media/case-studies/ai-migrations.svg';
import DataModelImg from '../media/project-media/case-studies/data-model.svg';
import UpgradeFlowsImg from '../media/project-media/case-studies/upgrade-flows.svg';
import EmailEditorImg from '../media/project-media/case-studies/email-editor.svg';
import ComponentLibraryImg from '../media/project-media/case-studies/component-library.svg';

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
    image: ComponentLibraryImg,
    description:
      'A reusable UI component library built to internal design specifications and web accessibility standards.',
    tags: ['component library', 'accessibility', 'react', 'ruby on rails', 'postgresql', 'bookbub'],
    caseStudy: {
      organization: 'BookBub',
      role: 'Full-Stack Software Engineering Co-op',
      timeline: 'Jan 2019 – Dec 2019',
      summary: [
        "At BookBub, I built a reusable UI component library that adhered strictly to the company's design specifications and web accessibility standards, and worked across the full stack.",
      ],
      highlights: [
        'Built a reusable, accessible UI component library to internal design specifications.',
        'Developed and extended full-stack web features using React, Ruby on Rails, and PostgreSQL.',
        'Engineered dynamic mass-marketing email templates powered by a Clojure templating system and internal REST APIs.',
      ],
      stack: ['React', 'Ruby on Rails', 'PostgreSQL', 'Clojure', 'REST APIs'],
    },
  },
].map((study) => ({
  ...study,
  page: CaseStudy,
  caseStudy: { ...study.caseStudy, title: study.title, year: study.year, image: study.image },
}));

export default caseStudies;

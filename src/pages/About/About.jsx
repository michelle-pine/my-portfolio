import React from "react";
import PropTypes from "prop-types";
import "./About.scss";
import Title from "../../components/Title";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import BigLink from "../../components/BigLink";
import { RESUME_URL } from "../../data/links";

import { Link } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page about-page">
        <Title title="About" />
        <div className="about-bio">
          <div className="about-bio-image" />
          <div className="about-bio-info">
            <strong>
              My name is Michelle Pine. I'm a Boston-based frontend technical
              lead, designer, aspiring writer, and incurable dog-lover!
            </strong>
            <p>
              I've spent 8+ years building scalable React and TypeScript web
              applications, enterprise design systems, and accessible user
              interfaces. With a background in both computer science and
              design, I love working where engineering and visual craft meet.
              Check out my <Link to="/">projects</Link> for a taste of what
              I've done along the way.
            </p>
            <p>
              Right now, I'm a Frontend Technical Lead on HubSpot's Design
              System team, where I help maintain the company's most widely
              adopted UI library and led the migration of 200+ components to a
              token-based design system across roughly 2,000 frontend
              applications. I also build AI-assisted workflows with Claude to
              automate large-scale migrations. In my free time, I love to write
              and hope to be a novelist one day.
            </p>
          </div>
        </div>
        <div className="about-resume">
          <BigLink to={RESUME_URL} icon="fa-file-text-o" text="Download My Resume (PDF)" />
        </div>
        <Title title="Experience" overrideTitle="About" />
        <div className="experience-set">
          <Experience
            organization="HubSpot"
            position="Frontend Technical Lead II – Design System"
            year="Oct 2025 – Present"
            description="Maintain the company's most widely adopted evergreen UI library, a mission-critical dependency powering thousands of downstream applications. Led a company-wide migration of 200+ UI components to a token-based design system across roughly 2,000 frontend applications, the largest migration in HubSpot's history. Authored custom Claude Skills and used Claude and Conductor to automate large-scale component migrations and prototype design system architectures. Partner with principal designers to roll out modernized, accessible component libraries at enterprise scale."
          ></Experience>
          <Experience
            organization="HubSpot"
            position="Frontend Technical Lead I – Data Model"
            year="Nov 2022 – Oct 2025"
            description="Architected and launched interactive web applications to visualize, monitor, and configure customer data models using React, TypeScript, ReactFlow, Apollo, and GraphQL. Led department-wide migrations to TypeScript, GraphQL, and React Testing Library, reducing runtime defects and improving developer velocity. Established team best practices for reliability, performance, and accessibility, and mentored engineers within and across teams."
          ></Experience>
          <Experience
            organization="HubSpot"
            position="Senior Frontend Software Engineer"
            year="Dec 2021 – Nov 2022"
            description="Engineered in-app upgrade flows that generated an additional $160K in Monthly Recurring Revenue. Implemented JavaScript treeshaking, reducing many bundle sizes and load times by 50%. Spearheaded cross-library refactors that achieved near-complete screen reader accessibility across team-owned applications. Authored comprehensive documentation of new and legacy systems to streamline onboarding."
          ></Experience>
          <Experience
            organization="HubSpot"
            position="Frontend Software Engineer"
            year="Jun 2021 – Dec 2021"
            description="Supervised production builds, deployments, and rollbacks. Took part in on-call rotations covering incident monitoring, triage, root-cause analysis, and debugging. Paid down critical technical debt by rearchitecting high-traffic legacy frontend modules."
          ></Experience>
          <Experience
            organization="HubSpot"
            position="Frontend Software Engineering Co-op"
            year="Jan 2020 – Jun 2021"
            description="Implemented a major redesign of the core email editor interface using custom React components. Refactored shared libraries and applications to introduce strongly typed abstract data structures. Built automated unit and end-to-end test suites using Enzyme, Jasmine, and Selenium."
          ></Experience>
          <Experience
            organization="BookBub"
            position="Full-Stack Software Engineering Co-op"
            year="Jan 2019 – Dec 2019"
            description="Built a reusable UI component library adhering to design specifications and accessibility standards. Extended full-stack web features using React, Ruby on Rails, and PostgreSQL. Engineered dynamic mass-marketing email templates using a Clojure templating system and internal REST APIs."
          ></Experience>
          <Experience
            organization="Boston Children's Hospital"
            position="Web UI Innovator and Graphics Designer"
            year="Jan 2018 – Jun 2018"
            description="Developed and maintained the frontend interfaces of four clinical web applications using Angular, Bootstrap, and internal APIs. Designed intuitive, modern interfaces to improve usability across new and existing hospital software tools."
          ></Experience>
          <Experience
            organization="Harold Grinspoon Foundation"
            position="Social Media Intern and Freelancer"
            year="Jul 2016 – Jun 2018"
            description="Designed social media graphics; composed, edited, and animated book trailers and other promotional videos; marketed the organization through social media copy."
          ></Experience>
        </div>
        <Title title="Skills" overrideTitle="About" />
        <div className="skill-set">
          <Skills
            header="Languages"
            icon="fa-code"
            skills={[
              "TypeScript",
              "JavaScript (ES6+)",
              "HTML5",
              "CSS3",
              "SASS / LESS",
              "GraphQL",
              "SQL (PostgreSQL)",
              "Python",
              "Ruby",
              "Java",
            ]}
          />
          <Skills
            header="Frontend"
            icon="fa-file-archive-o"
            skills={[
              "React",
              "Redux",
              "Apollo Client",
              "ReactFlow",
              "Angular",
              "Bootstrap",
              "Design Tokens",
              "Responsive Web Design",
            ]}
          />
          <Skills
            header="AI & Tooling"
            icon="fa-magic"
            skills={[
              "Claude",
              "Claude Skills",
              "Conductor",
              "AI-Assisted Migrations",
              "Codemods",
              "Webpack",
              "Treeshaking",
            ]}
          />
          <Skills
            header="Testing & DevOps"
            icon="fa-check-square-o"
            skills={[
              "React Testing Library",
              "Jest",
              "Jasmine",
              "Enzyme",
              "Selenium",
              "Git & GitHub",
              "CI/CD",
            ]}
          />
          <Skills
            header="Design & Accessibility"
            icon="fa-crop"
            skills={[
              "WCAG",
              "Screen Readers",
              "Design Systems Architecture",
              "Interaction Design",
              "Figma",
              "Photoshop",
              "Illustrator",
              "Premiere Pro",
              "After Effects",
            ]}
          />
        </div>
        <Title title="Leadership" overrideTitle="About" />
        <div className="leadership-set">
          <Experience
            organization="Northeastern University Women in Technology"
            position="President"
            year="2019–2020"
          ></Experience>
          <Experience
            organization="Khoury College Student Advisory Board"
            position="Member"
            year="2019–2021"
          ></Experience>
          <Experience
            organization="Northeastern University Women in Technology"
            position="Web Chair"
            year="2018–2019"
          ></Experience>
        </div>
      </div>
    );
  }
}

About.defaultProps = {};

About.propTypes = {};

export default About;

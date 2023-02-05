import React from "react";
import PropTypes from "prop-types";
import "./About.scss";
import Title from "../../components/Title";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";

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
              My name is Michelle Pine. I'm a Boston-based software engineer,
              designer, video editor, aspiring writer, and incurable dog-lover!
            </strong>
            <p>
              As a computer scientist and designer, I'm constantly exploring
              ways to use code and visuals to display my ideas in creative and
              exciting ways. I generally focus on front-end development and
              UI/UX design, but I have back-end development experience as well.
              Check out my <Link to="/">projects</Link> for a taste of what I've
              done so far.
            </p>
            <p>
              Right now, I'm a Frontend Technical Lead at HubSpot, where we're
              always trying to discover new technical solutions for our
              customers. In my free time, I love to write and hope to be a
              novelist one day.
            </p>
          </div>
        </div>
        <Title title="Experience" overrideTitle="About" />
        <div className="experience-set">
          <Experience
            organization="HubSpot"
            position="Frontend Technical Lead"
            year="Nov 2022 – Present"
          ></Experience>
          <Experience
            organization="HubSpot"
            position="Senior Software Engineer"
            year="Dec 2021 – Nov 2022"
            description="Produced critical, comprehensive documentation about new & legacy systems. Improved app performance/memory by facilitating proper Javascript treeshaking, reducing load time by several hundred milliseconds & file sizes by 50%. Advocated and organized cross-library refactors which achieved near-complete screen reader accessibility in team-owned applications."
          ></Experience>
          <Experience
            organization="HubSpot"
            position="Software Engineer"
            year="Jun 2021 – Dec 2021"
            description="Supervised application/library builds, deploys, and rollbacks. Assumed engineer on-call duties which included monitoring, triage, & debugging. Resolved technical debt and rearchitected significant swathes of legacy code. Mentored & supported peers, interns, & new hires."
          ></Experience>
          <Experience
            organization="HubSpot"
            position="Software Engineering Co-op"
            year="Jan 2020 – Jun 2021"
            description="Implemented redesign of email interface using custom React components. Refactored libraries and apps to facilitate introduction of abstract data types. Instituted comprehensive enzyme/jasmine & selenium test suites."
          ></Experience>
          <Experience
            organization="BookBub"
            position="Software Engineering Co-op"
            description="Programmed component library adhering to design and accessibility standards. Extended full-stack web apps using Ruby, Rails, PostgreSQL, & React. Developed custom mass marketing emails using a Clojure templater system &  internal APIs."
            year="Jan 2019 - Dec 2019"
          ></Experience>
          <Experience
            organization="Boston Children's Hospital"
            description="Developed and maintained front-end interface of four different web applications using Angular, Bootstrap, and internal APIs. Designed modern and highly usable interfaces for new & existing hospital apps. Adhered to principles of collaborative scrum/agile development."
            position="Web UI Innovator and Graphics Designer"
            year="Jan 2018 - June 2018"
          ></Experience>
          <Experience
            organization="Harold Grinspoon Foundation"
            description="Designed various social media graphics; Composed, edited, and animated book trailers and other promotional videos; Marketed the organization through social media copy."
            position="Social Media Intern and Freelancer"
            year="July 2016 - June 2018"
          ></Experience>
        </div>
        <Title title="Skills" overrideTitle="About" />
        <div className="skill-set">
          <Skills
            header="Languages"
            icon="fa-code"
            skills={[
              "Ruby",
              "Java",
              "Javascript",
              "PostgreSQL",
              "Typescript",
              "HTML",
              "CSS",
              "R",
              "Python",
              "C#",
              "Clojure",
              "Racket",
              "Command Line",
            ]}
          />
          <Skills
            header="Libraries"
            icon="fa-file-archive-o"
            skills={[
              "React",
              "Redux",
              "GraphQL",
              "Flux",
              "Unity",
              "React Flow",
              "ElkJS",
              "Selenium",
              "Jasmine",
              "React Testing Library",
              "Enzyme",
              "Bootstrap",
              "Angular",
              "SCSS",
              "LESS",
              "p5",
              "Processing",
            ]}
          />
          <Skills
            header="Design"
            icon="fa-crop"
            skills={[
              "Photoshop",
              "Illustrator",
              "Premiere Pro",
              "InDesign",
              "After Effects",
              "Figma",
              "Marvel",
              "Invision",
              "Balsamiq",
            ]}
          />
          <Skills
            header="More"
            icon="fa-plus-circle"
            skills={[
              "Project Management",
              "Interaction Design",
              "Graphic Design",
              "User Testing",
              "Video Editing",
              "Photo Editing",
              "Public Speaking",
              "Social Media",
              "Copywriting",
              "Editing",
              "Accessibility Auditing",
            ]}
          />
        </div>
        <Title title="Leadership" overrideTitle="About" />
        <div className="leadership-set">
          <Experience
            organization="Northeastern University Women in Technology"
            position="President"
            year="2019-2020"
          ></Experience>
          <Experience
            organization="Khoury College Student Advisory Board"
            position="Member"
            year="2019-present"
          ></Experience>
          <Experience
            organization="Northeastern University Women in Technology"
            position="Web Chair"
            year="2018-2019"
          ></Experience>
        </div>
      </div>
    );
  }
}

About.defaultProps = {};

About.propTypes = {};

export default About;

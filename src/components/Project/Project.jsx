import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Project.scss';

const TYPE_ICONS = {
  professional: 'fa-briefcase',
  design: 'fa-crop',
  video: 'fa-play',
  writing: 'fa-pencil',
  coding: 'fa-code',
};

export default function Project({ project, single = false }) {
  const className = `project ${single ? 'single' : ''}`;
  const content = (
    <>
      <div
        className={`project-image${project.caseStudy ? ' project-image--fill' : ''}`}
        style={{ backgroundImage: `url("${project.image}")` }}
      ></div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-topbar">
          <div className="project-icons">
            {project.type.map((type) => (
              <div className="project-icon" key={type} title={type}>
                <span className="sr-only">{type} </span>
                <i className={`fa ${TYPE_ICONS[type] || 'fa-code'}`} aria-hidden="true"></i>
              </div>
            ))}
          </div>
          <div className="project-year">
            <span className="sr-only">Year: </span> {project.year}
          </div>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </>
  );

  if (project.redirect) {
    return (
      <a className={className} href={project.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link className={className} to={`/projects/${project.url}`}>
      {content}
    </Link>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  single: PropTypes.bool,
};

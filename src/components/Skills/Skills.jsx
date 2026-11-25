import PropTypes from 'prop-types';
import './Skills.scss';

export default function Skills({ header, icon, skills }) {
  return (
    <div className="skills">
      <h3 className="skills-header">
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        {header}
      </h3>
      <ul className="skills-group">
        {skills.map((skill) => (
          <li className="skill" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

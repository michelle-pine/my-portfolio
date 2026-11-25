import PropTypes from 'prop-types';
import './Experience.scss';

export default function Experience({ organization, position, year, description }) {
  return (
    <div className="experience">
      <div className="experience-organization">
        <h3>{organization}</h3>
      </div>
      <div className="experience-position">
        <h4>
          {position} <span className="year">({year})</span>
        </h4>
      </div>
      {description && (
        <div className="experience-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

Experience.propTypes = {
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string,
};

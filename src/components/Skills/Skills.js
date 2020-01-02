import React from 'react';
import PropTypes from 'prop-types';
import './Skills.scss';

class Skills extends React.Component {
  constructor(props) {
    super(props)
  }

  renderSkills() {
    return this.props.skills.map(function(skill) {
      return <div className="skill">
        {skill}
      </div>
    });
  }

  render() {
    return (
    <div className="skills">
      <div className="skills-header">
        <i className={`fa ${this.props.icon}`}></i>
        {this.props.header}
      </div>
      <div className="skills-group">
        {this.renderSkills()}
      </div>
    </div>
    );
  }
};

Skills.defaultProps = {

};

Skills.propTypes = {
  header: PropTypes.string,
  icon: PropTypes.string,
  skills: PropTypes.array,
};

export default Skills;

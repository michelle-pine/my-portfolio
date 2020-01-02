import React from 'react';
import PropTypes from 'prop-types';
import './CoLab.scss';
import Title from '../../components/Title';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/colab-preview.png';
import BackButton from '../../components/BackButton';


class CoLab extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="CoLab (2019)"/>
      <div className="page-description">
        <p>The UI design for an online platform that allows computer science students—as well as students in other fields—to find students with complementary skills with whom to work on portfolio projects. Developed for my Human Computer Interaction class.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper"><img src={Preview}/></a>
      <BigLink to="https://michelle-pine.github.io/colab" icon="fa-tumblr" text="View Demo"/>
      <BigLink to="https://github.com/michelle-pine/colab" text="View Github Code" icon="fa-github"/>
    </div>
    );
  }
};

CoLab.defaultProps = {

};

CoLab.propTypes = {

};

export default CoLab;

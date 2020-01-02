import React from 'react';
import PropTypes from 'prop-types';
import './WizardQuest.scss';
import Title from '../../components/Title';
import BigLink from '../../components/BigLink';
import Preview1 from '../../media/project-media/wizard-quest/wizard.gif';
import Preview2 from '../../media/project-media/wizard-quest/cat.gif';
import BackButton from '../../components/BackButton';


class WizardQuest extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="WizardQuest (2019)"/>
      <div className="page-description">
        <p>An interactive choose-your-own-adventure game created for my Narrative Basics class in 2019. Produced in collaboration with Samantha Silvers and Jonathan Ma, this game combines web development, animation, audio mixing, storytelling to create an immersive spatial narrative. If played as intended, the game can only be played if users visit particular locations on Northeastern's campus, but geolocation has been disabled for off-campus use.</p>
      </div>
      <div className="side-by-side-image">
        <a href={Preview1} target="_blank" className="page-image-wrapper"><img alt="" src={Preview1}/></a>
        <a href={Preview2} target="_blank" className="page-image-wrapper"><img alt="" src={Preview2}/></a>
      </div>
      <BigLink target="_blank" to="https://michelle-pine.github.io/wizard-quest/" text="View Demo" icon="fa-laptop"/>
      <BigLink target="_blank" to="https://github.com/michelle-pine/wizard-quest" text="View Code" icon="fa-github"/>
    </div>
    );
  }
};

WizardQuest.defaultProps = {

};

WizardQuest.propTypes = {

};

export default WizardQuest;

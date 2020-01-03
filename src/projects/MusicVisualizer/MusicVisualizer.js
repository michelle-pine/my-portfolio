import React from 'react';
import PropTypes from 'prop-types';
import './MusicVisualizer.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';

class MusicVisualizer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="nuWIT Music Visualizer (2019)"/>
      <div className="page-description">
        <p>A music visualizer designed by me for my student organization, Northeastern University Women in Technology (nuWIT). Created using HTML5 canvas and <a href="https://github.com/zachwinter/spotify-viz">Spotify Viz</a> project by <a href="https://github.com/zachwinter">Zachary Winter</a>.</p>
        <p>IMPORTANT: This application requires <strong>Spotify credentials</strong> and <strong>music playing on that Spotify account</strong> to run.</p>
      </div>
      <BigLink to="https://nuwit-visualizer.herokuapp.com/" text="View Demo" icon="fa-laptop"/>
      <BigLink to="https://github.com/michelle-pine/NUWIT-Visualizer" text="View Code" icon="fa-github"/>

    </div>
    );
  }
};

MusicVisualizer.defaultProps = {

};

MusicVisualizer.propTypes = {

};

export default MusicVisualizer;

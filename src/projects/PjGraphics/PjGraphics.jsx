import React from 'react';
import PropTypes from 'prop-types';
import './PjGraphics.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

const images = Object.entries(
  import.meta.glob('../../media/project-media/pj-graphics/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
  })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

class PjGraphics extends React.Component {
  constructor(props) {
    super(props)
  }

  renderImages() {
    return images.map(function(image, i) {
      return (
        <a key={image} target="_blank" rel="noopener noreferrer" className="pj-graphic-wrapper" href={image} style={{backgroundImage: `url("${image}")`}}><span className="sr-only">PJ Library graphic {i + 1}</span></a>
      );
    });
  }

  render() {
    return (
    <div className='page pj-graphics'>
      <BackButton />
      <Title title="PJ Graphics (2016)" />
      <div className="page-description">
        <p>A series of graphics designed for the Harold Grinspoon Foundation's social media.</p>
      </div>
      <div className="graphics-container">
        {this.renderImages()}
      </div>
    </div>
    );
  }
};

PjGraphics.defaultProps = {

};

PjGraphics.propTypes = {

};

export default PjGraphics;

import React from 'react';
import PropTypes from 'prop-types';
import './NotFound.scss';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';


class NotFound extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <Title title="Not Found"/>
      <div className="page-description">
        <p>This page is not found. <Link to="/">Return to the homepage.</Link></p>
      </div>
    </div>
    );
  }
};

NotFound.defaultProps = {

};

NotFound.propTypes = {

};

export default NotFound;

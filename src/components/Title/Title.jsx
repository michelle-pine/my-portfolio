import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

export default function Title({ title, overrideTitle }) {
  useEffect(() => {
    document.title = `${overrideTitle || title} - Michelle Pine`;
  }, [title, overrideTitle]);

  return <h2 className="title">{title}</h2>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  overrideTitle: PropTypes.string,
};

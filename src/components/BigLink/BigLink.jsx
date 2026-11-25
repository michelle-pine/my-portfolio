import PropTypes from 'prop-types';
import './BigLink.scss';

export default function BigLink({ icon, text, to, locked = false, onClick }) {
  const content = (
    <>
      <div className="big-link-icon">
        <i className={`fa ${icon}`} aria-hidden="true"></i>
      </div>
      <div className="big-link-text">
        {text}
        {!locked && to && <span className="sr-only"> (opens in a new tab)</span>}
      </div>
      {!locked && (
        <div className="big-link-arrow">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      )}
    </>
  );

  if (locked) {
    return <div className="big-link locked">{content}</div>;
  }
  if (!to) {
    // Action-only links (e.g. opening a popup window) still need to be keyboard accessible.
    return (
      <a
        className="big-link unlocked"
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.(e);
          }
        }}
      >
        {content}
      </a>
    );
  }
  return (
    <a
      className="big-link unlocked"
      href={to}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}

BigLink.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
  locked: PropTypes.bool,
  onClick: PropTypes.func,
};

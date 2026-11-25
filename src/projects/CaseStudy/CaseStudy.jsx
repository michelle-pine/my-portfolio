import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CaseStudy.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

export default function CaseStudy({ caseStudy }) {
  const { title, year, organization, role, timeline, stack, summary, highlights, image } =
    caseStudy;

  return (
    <div className="page case-study">
      <BackButton />
      <Title title={`${title} (${year})`} overrideTitle={title} />
      <div className="page-image-wrapper no-zoom">
        <img src={image} alt="" />
      </div>
      <dl className="case-study-meta">
        <div>
          <dt>Organization</dt>
          <dd>{organization}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{role}</dd>
        </div>
        <div>
          <dt>Timeline</dt>
          <dd>{timeline}</dd>
        </div>
      </dl>
      <div className="page-description">
        {summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <h3>Highlights</h3>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>Tools &amp; technologies</h3>
        <ul className="case-study-stack">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="page-description case-study-note">
        <p>
          <i className="fa fa-lock" aria-hidden="true"></i> This is proprietary
          work, so source code and internal screenshots aren't public. I'm happy
          to walk through it in more detail. <Link to="/contact">Get in touch</Link>.
        </p>
      </div>
    </div>
  );
}

CaseStudy.propTypes = {
  caseStudy: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    organization: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

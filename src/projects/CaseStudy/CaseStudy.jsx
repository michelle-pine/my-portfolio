import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CaseStudy.scss';
import Title from '../../components/Title';
import BigLink from '../../components/BigLink';
import BackButton from '../../components/BackButton';

export default function CaseStudy({ caseStudy }) {
  const {
    title,
    year,
    organization,
    role,
    timeline,
    stack,
    summary,
    highlights,
    image,
    hero,
    gallery = [],
    links = [],
    note = DEFAULT_NOTE,
  } = caseStudy;

  return (
    <div className="page case-study">
      <BackButton />
      <Title title={`${title} (${year})`} overrideTitle={title} />
      {hero ? (
        <a
          href={hero.src}
          target="_blank"
          rel="noopener noreferrer"
          className="page-image-wrapper case-study-hero"
        >
          <img src={hero.src} alt={hero.alt} />
        </a>
      ) : (
        <div className="page-image-wrapper no-zoom">
          <img src={image} alt="" />
        </div>
      )}
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
      {gallery.length > 0 && (
        <section className="case-study-gallery" aria-label={`${title} screenshots`}>
          {gallery.map(({ src, alt, caption }) => (
            <figure key={src}>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="page-image-wrapper"
              >
                <img src={src} alt={alt} loading="lazy" />
              </a>
              {caption && <figcaption>{caption}</figcaption>}
            </figure>
          ))}
        </section>
      )}
      {links.map(({ to, text, icon }) => (
        <BigLink key={to} to={to} text={text} icon={icon} />
      ))}
      {note && (
        <div className="page-description case-study-note">
          <p>
            <i className={`fa ${note.icon}`} aria-hidden="true"></i> {note.text}{' '}
            <Link to="/contact">Get in touch</Link>.
          </p>
        </div>
      )}
    </div>
  );
}

const DEFAULT_NOTE = {
  icon: 'fa-lock',
  text: "This is proprietary work, so source code and internal screenshots aren't public. I'm happy to walk through it in more detail.",
};

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
    hero: PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string.isRequired }),
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        caption: PropTypes.string,
      })
    ),
    links: PropTypes.arrayOf(
      PropTypes.shape({ to: PropTypes.string, text: PropTypes.string, icon: PropTypes.string })
    ),
    note: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.shape({ icon: PropTypes.string, text: PropTypes.string }),
    ]),
  }).isRequired,
};

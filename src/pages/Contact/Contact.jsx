import { useEffect } from 'react';
import './Contact.scss';
import Title from '../../components/Title';
import { RESUME_URL } from '../../data/links';
import { showLoader } from '../../utils/loader';

// The embedded form takes a moment to load, so cover it with the loader.
export default function Contact() {
  useEffect(() => showLoader({ solid: true, duration: 2500 }), []);

  return (
    <div className="page contact-page">
      <Title title="Contact" />
      <div className="page-description">
        <p>
          Interested in my work? Feel free to contact me, or{' '}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            view my resume
          </a>
          .
        </p>
      </div>
      <div className="contact-form">
        <iframe
          title="Contact form"
          scrolling="no"
          className="contact-frame"
          width="100%"
          height="900"
          id="contactform123"
          name="contactform123"
          src="https://www.123formbuilder.com/my-contact-form-5218252.html"
        >
          <p>
            Your browser does not support iframes. The contact form cannot be
            displayed.
          </p>
        </iframe>
      </div>
    </div>
  );
}

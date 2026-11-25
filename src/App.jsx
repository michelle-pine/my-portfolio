import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import projectList from './data/projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { scrollPastHeader } from './utils/scroll';
import { showLoader } from './utils/loader';

const SCROLL_TRIGGERS = [
  '.navbar-left .navbar-link',
  '.down-button',
  "a.project:not([target='_blank'])",
].join(', ');

export default function App() {
  useEffect(() => showLoader({ duration: 2000 }), []);

  useEffect(() => {
    const onClick = (event) => {
      if (event.target.closest(SCROLL_TRIGGERS)) {
        scrollPastHeader();
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // HashRouter owns the URL hash, so the skip link moves focus itself instead of
  // relying on an in-page #anchor.
  const skipToContent = (event) => {
    event.preventDefault();
    const main = document.getElementById('main-content');
    main?.focus();
    main?.scrollIntoView();
  };

  return (
    <>
      <a className="skip-link" href="#main-content" onClick={skipToContent}>
        Skip to main content
      </a>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="logo-bg" aria-hidden="true">
        {/* Decorative: the visible page heading is the sr-only h1 in Header. */}
        <div className="header-logo">
          <span className="header-logo-sun">
            <span className="header-logo-first">Michelle</span>
          </span>
          <span className="header-logo-moon">
            <span className="header-logo-last">Pine</span>
          </span>
        </div>
      </div>
      <Navbar />
      <Header />
      <main id="main-content" tabIndex={-1} className="page-content">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {projectList
              .filter((project) => !project.redirect)
              .map(({ url, page: Page, caseStudy }) => (
                <Route
                  key={url}
                  path={`/projects/${url}`}
                  element={<Page caseStudy={caseStudy} />}
                />
              ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </main>
      <Loader />
    </>
  );
}

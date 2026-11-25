import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { isPastHeader } from '../../utils/scroll';

import { RESUME_URL } from '../../data/links';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(isPastHeader());
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const projectsActive = pathname === '/' || pathname.startsWith('/projects');
  const linkClass = ({ isActive }) => `navbar-link${isActive ? ' active' : ''}`;

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">
            <span className="sr-only">Michelle Pine – home</span>
            <span className="navbar-logo-mark" aria-hidden="true">
              <span className="navbar-logo-m">M</span>
              <span className="navbar-logo-p">P</span>
            </span>
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink
              className={`navbar-link${projectsActive ? ' active' : ''}`}
              to="/"
              end
            >
              projects
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/about">
              about
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-social-media">
          <li>
            <a
              className="navbar-link resume"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
              <span className="sr-only">Resume (PDF)</span>
            </a>
          </li>
          <li>
            <a className="navbar-link github" href="https://github.com/michelle-pine">
              <i className="fa fa-github" aria-hidden="true"></i>
              <span className="sr-only">GitHub</span>
            </a>
          </li>
          <li>
            <a
              className="navbar-link linkedin"
              href="https://www.linkedin.com/in/michelle-pine"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

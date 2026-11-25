import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <h1 className="sr-only">Michelle Pine</h1>
      <button type="button" className="down-button">
        <span className="sr-only">Scroll Down</span>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </button>
      <div className="header-city"></div>
    </header>
  );
}

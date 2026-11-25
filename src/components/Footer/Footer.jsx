import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      © Copyright {new Date().getFullYear()} Michelle Pine. All rights reserved.
    </footer>
  );
}

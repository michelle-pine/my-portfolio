import { Link } from 'react-router-dom';
import './NotFound.scss';
import Title from '../../components/Title';

export default function NotFound() {
  return (
    <div className="page">
      <Title title="Not Found" />
      <div className="page-description">
        <p>
          This page is not found. <Link to="/">Return to the homepage.</Link>
        </p>
      </div>
    </div>
  );
}

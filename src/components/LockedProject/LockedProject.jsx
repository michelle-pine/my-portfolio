import { Link } from 'react-router-dom';
import './LockedProject.scss';
import BigLink from '../BigLink';

export default function LockedProject() {
  return (
    <div>
      <BigLink locked text="This Project is Locked" icon="fa-lock" />
      <div className="page-description no-top-border">
        <p>
          To prevent plagiarism, this project can only be viewed upon{' '}
          <Link to="/contact">request.</Link>
        </p>
      </div>
    </div>
  );
}

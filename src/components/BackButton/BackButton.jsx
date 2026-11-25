import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button type="button" className="back-button" onClick={() => navigate(-1)}>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>Back
    </button>
  );
}

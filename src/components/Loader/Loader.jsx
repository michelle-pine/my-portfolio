import './Loader.scss';
import loader from '../../media/loader.svg';

export default function Loader() {
  return (
    <div id="loader" className="loader-wrapper" aria-hidden="true">
      <img src={loader} alt="" />
    </div>
  );
}

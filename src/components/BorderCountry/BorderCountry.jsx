import { Link } from 'react-router-dom';
import './BorderCountry.scss';

const BorderCountry = ({ name, code }) => {
  return (
    <div className="border-wrapper">
      <Link
        to={`/countries-app/country/${code}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="border-country background-component">
          <span className="border-country__name text">{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default BorderCountry;

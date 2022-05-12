import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../utils/ThemeContext';
import './BorderCountry.scss';

const BorderCountry = ({ name, code }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`border-wrapper`}>
      <Link
        to={`/countries-app/country/${code}`}
        style={{ textDecoration: 'none' }}
      >
        <div
          className={`border-country ${
            theme === 'light' ? ' background-component' : ''
          }`}
        >
          <span className="border-country__name text">{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default BorderCountry;

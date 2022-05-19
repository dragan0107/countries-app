import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../utils/ThemeContext';

import './BorderCountry.scss';

interface BorderCountryProps {
  name: string;
  code?: string;
  noBorder?: boolean;
}

const BorderCountry: FC<BorderCountryProps> = ({ name, code, noBorder }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="border-wrapper ">
      <Link
        to={!noBorder ? `/countries-app/country/${code}` : ''}
        style={{ textDecoration: 'none' }}
      >
        <div
          className={`border-country ${
            theme?.theme === 'light' ? ' background-component' : ''
          }`}
        >
          <span className="border-country__name text">{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default BorderCountry;

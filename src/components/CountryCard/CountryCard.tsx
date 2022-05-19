import { FC } from 'react';
import { Link } from 'react-router-dom';

import './CountryCard.scss';

export interface Flags {
  svg: string;
  png: string;
}

interface CountryInfo {
  name: string;
  population: number;
  region: string;
  flags: Flags;
  independent: boolean;
  capital: string;
  alpha3Code: string;
}

interface CountryCardProps {
  countryInfo: CountryInfo;
  fetching: boolean;
}

const CountryCard: FC<CountryCardProps> = ({ countryInfo, fetching }) => {
  return (
    <Link to={`/countries-app/country/${countryInfo.alpha3Code}`}>
      <div
        className="country-card background-component text hover-shadow"
        style={{ opacity: fetching ? '.1' : '1' }}
      >
        <div className="country-card__image">
          <img src={countryInfo.flags.png} alt="" />
        </div>
        <div className="country-card__info">
          <h4>{countryInfo.name}</h4>
          <ul>
            <li>
              <span>Population: </span>
              {parseInt(String(countryInfo.population)).toLocaleString()}
            </li>
            <li>
              <span>Region: </span>
              {countryInfo.region}
            </li>
            <li>
              <span>Capital: </span>
              {countryInfo.capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;

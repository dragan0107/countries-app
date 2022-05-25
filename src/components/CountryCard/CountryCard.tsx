import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CountryInfoCard } from '../../types/types';

import './CountryCard.scss';

interface CountryCardProps {
  countryInfo: CountryInfoCard;
}

const CountryCard: FC<CountryCardProps> = ({ countryInfo }) => {
  return (
    <Link to={`/countries-app/country/${countryInfo.alpha3Code}`}>
      <article className="country-card background-component text hover-shadow">
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
      </article>
    </Link>
  );
};

export default CountryCard;

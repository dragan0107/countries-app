import './CountryCard.scss';

import { Link } from 'react-router-dom';
const CountryCard = ({ countryInfo, fetching }) => {
  return (
    <Link to={`/countries-app/country/${countryInfo.alpha3Code}`}>
      <div
        className="country-card background-component text"
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
              {parseInt(countryInfo.population).toLocaleString()}
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

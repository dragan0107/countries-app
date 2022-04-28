import './CountryCard.scss';
const CountryCard = ({ countryInfo }) => {
  return (
    <div className="country-card">
      <div className="country-card__image">
        <img src={countryInfo.flag} alt="" />
      </div>
      <div className="country-card__info">
        <h4>{countryInfo.name}</h4>
        <ul>
          <li>
            <span>Population: </span>
            {countryInfo.population}
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
  );
};

export default CountryCard;

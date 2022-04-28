import './CountryCard.scss';
const CountryCard = () => {
  return (
    <div className="country-card">
      <div className="country-card__image">
        <img src="https://flagcdn.com/rs.svg" alt="" />
      </div>
      <div className="country-card__info">
        <h4>Serbia</h4>
        <ul>
          <li>
            <span>Population:</span> 7,000,000
          </li>
          <li>
            <span>Region:</span> Europe
          </li>
          <li>
            <span>Capital:</span> Belgrade
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;

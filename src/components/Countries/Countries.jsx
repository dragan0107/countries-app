import { useEffect, useState } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import RegionSelect from '../RegionSelect/RegionSelect';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import './Countries.scss';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [region, setRegion] = useState('all');
  const [searchedCountry, setSearchedCountry] = useState('');
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    getCountries(region);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region, searchedCountry]);

  const getCountries = (reg) => {
    setFetching(true);
    axios
      .get(
        searchedCountry
          ? `https://restcountries.com/v2/name/${searchedCountry}`
          : reg !== 'all'
          ? `https://restcountries.com/v2/region/${reg}`
          : 'https://restcountries.com/v2/all'
      )
      .then((res) => {
        res.data.length === 0 ? setNotification(true) : setNotification(false);
        setCountries(res.data);
        setFetching(false);
      })
      .catch((err) => {
        setFetching(false);
        setNotification(true);
        setCountries([]);
      });
  };
  return (
    <div className="countries-wrapper">
      <div className="countries">
        <div className="countries__filters">
          <SearchBar setSearchedCountry={setSearchedCountry} />
          <RegionSelect setRegion={setRegion} />
        </div>
        <div className="countries__card-container">
          {fetching && <LoadingSpinner />}
          {notification && (
            <span className="countries__card-container__notification">
              No countries found.
            </span>
          )}
          {countries.map((cou) => (
            <CountryCard
              key={cou.alpha3Code}
              countryInfo={cou}
              fetching={fetching}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;

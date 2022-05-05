import { useCallback, useEffect, useState } from 'react';

import CountryCard from '../CountryCard/CountryCard';
import RegionSelect from '../RegionSelect/RegionSelect';
import SearchBar from '../SearchBar/SearchBar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { getCountries } from '../../api/APICalls';

import './Countries.scss';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [region, setRegion] = useState('all');
  const [searchedCountry, setSearchedCountry] = useState('');
  const [notification, setNotification] = useState(false);

  const handleSearchChange = (e) => {
    setSearchedCountry(e.target.value);
  };

  const debounce = (fn, waitTime) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, waitTime);
    };
  };

  const debouncedSearch = useCallback(debounce(handleSearchChange, 500), []);

  useEffect(() => {
    (async () => {
      setFetching(true);
      const res = await getCountries(region, searchedCountry);
      setFetching(false);
      if (res.data) {
        setCountries(res.data);
        setNotification(false);
      } else {
        setCountries([]);
        setNotification(true);
      }
    })();
  }, [region, searchedCountry]);

  return (
    <div className="countries-wrapper">
      <div className="countries">
        <div className="countries__filters">
          <SearchBar
            setSearchedCountry={setSearchedCountry}
            debouncedSearch={debouncedSearch}
          />
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

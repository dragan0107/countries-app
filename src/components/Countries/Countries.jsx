import { useEffect, useState } from 'react';

import { debounce } from '../../utils/debounce';

import CountryCard from '../CountryCard/CountryCard';
import RegionSelect from '../RegionSelect/RegionSelect';
import SearchBar from '../SearchBar/SearchBar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { getCountries } from '../../api/APICalls';

import './Countries.scss';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countriesOriginal, setCountriesOriginal] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [region, setRegion] = useState('all');
  const [searchedCountry, setSearchedCountry] = useState('');
  const [notification, setNotification] = useState(false);

  const handleSearchChange = (e) => {
    setSearchedCountry(e.target.value);
  };

  const debouncedSearch = debounce(handleSearchChange, 500);

  useEffect(() => {
    let filtered = [];
    countriesOriginal.forEach((cou) => {
      if (cou.name.toLowerCase().includes(searchedCountry.toLowerCase())) {
        filtered.push(cou);
      }
    });
    setCountries(filtered);
  }, [searchedCountry, countriesOriginal]);

  useEffect(() => {
    if (!searchedCountry) {
      (async () => {
        setFetching(true);
        const res = await getCountries(region, searchedCountry);
        setFetching(false);
        if (res.data) {
          setCountries(res.data);
          setCountriesOriginal(res.data);
          setNotification(false);
        } else {
          setCountries([]);
          setCountriesOriginal([]);
          setNotification(true);
        }
      })();
    }
  }, [region, searchedCountry]);

  return (
    <div className="countries-wrapper  background">
      <div className="countries background">
        <div className="countries__filters">
          <SearchBar debouncedSearch={debouncedSearch} />
          <RegionSelect
            setRegion={setRegion}
            setSearchedCountry={setSearchedCountry}
          />
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

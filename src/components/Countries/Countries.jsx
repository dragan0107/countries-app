import { lazy, Suspense, useEffect, useState } from 'react';

import { debounce } from '../../utils/Debounce';

import RegionSelect from '../RegionSelect/RegionSelect';
import SearchBar from '../SearchBar/SearchBar';
import { getCountries } from '../../api/APICalls';

import './Countries.scss';
import CircleSpinner from '../CircleSpinner/CircleSpinner';

const CountryCard = lazy(() => import('../CountryCard/CountryCard'));

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
    if (region !== 'all') {
      let filtered = [];
      countriesOriginal.forEach((cou) => {
        if (
          cou.name.toLowerCase().includes(searchedCountry.toLowerCase()) &&
          cou.region.toLowerCase() === region
        ) {
          filtered.push(cou);
        }
      });
      setCountries(filtered);
      filtered.length === 0 ? setNotification(true) : setNotification(false);
    }
  }, [searchedCountry, countriesOriginal, region]);

  useEffect(() => {
    if (
      !searchedCountry ||
      (searchedCountry && region === 'all') ||
      (searchedCountry && region !== 'all')
    ) {
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
    <div className="countries-wrapper background">
      <div className="countries">
        <div className="countries__filters">
          <SearchBar debouncedSearch={debouncedSearch} />
          <RegionSelect
            setRegion={setRegion}
            setSearchedCountry={setSearchedCountry}
          />
        </div>
        <div className="countries__card-container">
          {notification && !fetching && (
            <span className="countries__card-container__notification text">
              No countries found.
            </span>
          )}
          {countries.map((cou) => (
            <Suspense fallback={<CircleSpinner />} key={cou.alpha3Code}>
              <CountryCard countryInfo={cou} fetching={fetching} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;

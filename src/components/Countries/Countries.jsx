import { lazy, Suspense, useCallback, useEffect, useState } from 'react';

import { debounce } from '../../utils/Debounce';
import { getCountries } from '../../api/APICalls';

import RegionSelect from '../RegionSelect/RegionSelect';
import SearchBar from '../SearchBar/SearchBar';
import CircleSpinner from '../CircleSpinner/CircleSpinner';

import './Countries.scss';

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

  const filterHelper = useCallback(
    (arr) => {
      let filtered = [];
      arr.forEach((cou) => {
        if (
          cou.name.toLowerCase().includes(searchedCountry.toLowerCase()) &&
          cou.region.toLowerCase() === region
        ) {
          filtered.push(cou);
        }
      });
      return filtered;
    },
    [region, searchedCountry]
  );

  useEffect(() => {
    if (region !== 'all') {
      const filtered = filterHelper(countriesOriginal);
      setCountries(filtered);
      filtered.length === 0 ? setNotification(true) : setNotification(false);
    }
  }, [searchedCountry, countriesOriginal, region, filterHelper]);

  useEffect(() => {
    if (
      !searchedCountry ||
      (searchedCountry && region === 'all') ||
      (searchedCountry && region !== 'all')
    ) {
      (async () => {
        setFetching(true);
        const res = await getCountries(region, searchedCountry);
        if (res.data) {
          if (searchedCountry && region !== 'all') {
            const filtered = filterHelper(res.data);
            setCountries(filtered);
          } else {
            setCountries(res.data);
          }
          setCountriesOriginal(res.data);
          setNotification(false);
        } else {
          setCountries([]);
          setCountriesOriginal([]);
          setNotification(true);
        }
        setFetching(false);
      })();
    }
  }, [region, searchedCountry, filterHelper]);

  return (
    <div className="countries-wrapper background">
      <section className="countries">
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
          {!fetching &&
            countries?.map((cou) => (
              <Suspense fallback={<CircleSpinner />} key={cou.alpha3Code}>
                <CountryCard countryInfo={cou} fetching={fetching} />
              </Suspense>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Countries;

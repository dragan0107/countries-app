import { useEffect, useState } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import RegionSelect from '../RegionSelect/RegionSelect';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import './Countries.scss';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = () => {
      axios.get('https://restcountries.com/v2/all').then((res) => {
        setCountries(res.data);
      });
    };
    getCountries();
  }, []);
  return (
    <div className="countries-wrapper">
      <div className="countries">
        <div className="countries__filters">
          <SearchBar />
          <RegionSelect />
        </div>
        <div className="countries__card-container">
          {countries.map((cou) => (
            <CountryCard countryInfo={cou} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;

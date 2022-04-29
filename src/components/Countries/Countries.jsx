import { useEffect, useState } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import RegionSelect from '../RegionSelect/RegionSelect';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import './Countries.scss';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('');

  useEffect(() => {
    getCountries(region);
  }, [region]);
  const getCountries = (reg) => {
    axios
      .get(
        reg !== 'all'
          ? `https://restcountries.com/v2/region/${reg}`
          : 'https://restcountries.com/v2/all'
      )
      .then((res) => {
        setCountries(res.data);
      });
  };
  return (
    <div className="countries-wrapper">
      <div className="countries">
        <div className="countries__filters">
          <SearchBar />
          <RegionSelect setRegion={setRegion} />
        </div>
        <div className="countries__card-container">
          {countries.map((cou) => (
            <CountryCard key={cou.alpha3Code} countryInfo={cou} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;

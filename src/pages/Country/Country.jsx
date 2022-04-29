import React, { useEffect, useState } from 'react';
import './Country.scss';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import axios from 'axios';

const Country = () => {
  const countryCode = useParams().countryName;
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v2/alpha/${countryCode}`
        );
        setCountryData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, [countryCode]);
  return (
    <div className="country-page">
      <Header />
      <div className="country-info-wrapper">
        <div className="country-info">
          <Link to="/">
            <div className="country-info__btn">
              <i class="fa-solid fa-arrow-left-long"></i> <span>Back</span>
            </div>
          </Link>
          <div className="country-info__about">
            <div className="country-info__about__flag">
              <img src={countryData.flag} alt="" />
            </div>
            <div className="country-info__about__desc">
              <div className="country-desc-wrapper">
                <h3>{countryData.name}</h3>
                <div className="country-details">
                  <ul>
                    <li>
                      Native Name: <span>{countryData.nativeName}</span>
                    </li>
                    <li>
                      Population:{' '}
                      <span>
                        {parseInt(countryData.population).toLocaleString()}
                      </span>
                    </li>
                    <li>
                      Region: <span>{countryData.region}</span>
                    </li>
                    <li>
                      Sub Region: <span>{countryData.subregion}</span>{' '}
                    </li>
                    <li>
                      Capital: <span>{countryData.capital}</span>{' '}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Top Level Domain:{' '}
                      <span>{countryData.topLevelDomain}</span>
                    </li>
                    <li>
                      Currencies:{' '}
                      {countryData.currencies?.map((el) => (
                        <span>{el.name}</span>
                      ))}
                    </li>
                    <li>
                      Languages:{' '}
                      {countryData.languages?.map((el) => (
                        <span>{el.name}, </span>
                      ))}
                    </li>
                  </ul>
                </div>
                <div className="country-borders">
                  <span className="country-borders__title">
                    Border Countries:
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

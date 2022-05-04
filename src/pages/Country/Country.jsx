import React, { useEffect, useState } from 'react';
import './Country.scss';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { getCountryInfo } from '../../api/APICalls';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import BorderCountry from '../../components/BorderCountry/BorderCountry';

const Country = () => {
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    (async () => {
      setFetching(true);
      const res = await getCountryInfo(countryCode);
      setCountryData(res);
      setFetching(false);
    })();
  }, [countryCode]);

  useEffect(() => {
    let countries = [];
    countryData.borders?.forEach((cou) => {
      (async () => {
        const res = await getCountryInfo(cou);
        countries.push(res.name);
        setBorders([...countries]);
      })();
    });
  }, [countryData]);

  return (
    <div className="country-page">
      <Header />
      <div className="country-info-wrapper">
        <div className="country-info">
          <Link to="/">
            <div className="country-info__btn">
              <i class="fa-solid fa-arrow-left-long"></i>
              <span>Back</span>
            </div>
          </Link>
          <div className="country-info__about">
            <div className="countries-spinner">
              {fetching && <LoadingSpinner />}
            </div>
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
                      {countryData.currencies?.map((el, idx) => (
                        <span key={idx}>{el.name}</span>
                      ))}
                    </li>
                    <li>
                      Languages:{' '}
                      {countryData.languages?.map((el, idx) => (
                        <span key={idx}>{el.name}, </span>
                      ))}
                    </li>
                  </ul>
                </div>
                {countryData?.borders && (
                  <div className="country-borders">
                    <span className="country-borders__title">
                      Border Countries:
                    </span>
                    {borders.map((bor, idx) => (
                      <BorderCountry key={idx} name={bor} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

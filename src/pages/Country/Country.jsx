import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getCountryInfo } from '../../api/APICalls';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import BorderCountry from '../../components/BorderCountry/BorderCountry';
import BackButton from '../../components/BackButton/BackButton';

import './Country.scss';

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
    console.log('i run once');
  }, [countryCode]);

  useEffect(() => {
    let countries = [];
    countryData.borders?.forEach((cou) => {
      (async () => {
        const getOnlyName = true;
        const res = await getCountryInfo(cou, getOnlyName);
        countries.push(res.name);
        setBorders([...countries]);
      })();
    });
  }, [countryData]);

  return (
    <div className="country-page">
      <div className="country-info-wrapper">
        <div className="country-info">
          <Link to="/">
            <BackButton />
          </Link>
          <div className="country-info__about">
            <div className="countries-spinner">
              {fetching && <LoadingSpinner />}
            </div>
            <div className="country-info__about__flag">
              <img src={countryData.flags?.png} alt="" />
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
                        <span key={idx}>
                          {el.name}
                          {idx !== countryData.languages.length - 1
                            ? ','
                            : ''}{' '}
                        </span>
                      ))}
                    </li>
                  </ul>
                </div>
                {borders.length > 0 && (
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

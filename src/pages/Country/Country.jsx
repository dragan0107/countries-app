import { lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCountryInfo } from '../../api/APICalls';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import BackButton from '../../components/BackButton/BackButton';
import CircleSpinner from '../../components/CircleSpinner/CircleSpinner';

import './Country.scss';

const BorderCountry = lazy(() =>
  import('../../components/BorderCountry/BorderCountry')
);

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
        const getOnlyName = true;
        const res = await getCountryInfo(cou, getOnlyName);
        countries.push(res);
        setBorders([...countries]);
      })();
    });
  }, [countryData]);

  return (
    <div className="country-page">
      <div className="country-info-wrapper background">
        <div className="country-info">
          <BackButton />
          <div className="country-info__about ">
            {fetching ? (
              <div className="countries-spinner">
                <LoadingSpinner />
              </div>
            ) : (
              <>
                <div className="country-info__about__flag">
                  <img src={countryData.flags?.png} alt="" />
                </div>
                <div className="country-info__about__desc text">
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
                    <div className="country-borders">
                      <span className="country-borders__title">
                        Border Countries:
                      </span>
                      {borders.length > 0 ? (
                        borders.map((bor, idx) => (
                          <Suspense fallback={<CircleSpinner />} key={idx}>
                            <BorderCountry
                              name={bor.name}
                              code={bor.alpha3Code}
                            />
                          </Suspense>
                        ))
                      ) : (
                        <Suspense fallback={<CircleSpinner />} key="0">
                          <BorderCountry noBorder name="No border countries." />
                        </Suspense>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

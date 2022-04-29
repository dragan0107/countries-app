import React from 'react';
import './Country.scss';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Country = () => {
  const countryCode = useParams().countryName;
  return (
    <div className="country-page">
      <Header />
      <div className="country-info-wrapper">
        <div className="country-info">
          <div className="country-info__btn">
            <i class="fa-solid fa-arrow-left-long"></i> <span>Back</span>
          </div>
          <div className="country-info__about">
            <div className="country-info__about__flag">
              <img src="https://flagcdn.com/rs.svg" alt="" />
            </div>
            <div className="country-info__about__desc">
              <h3>Serbia</h3>
              <div className="country-details">
                <ul>
                  <li>
                    Native Name: <span>Serbia</span>
                  </li>
                  <li>
                    Population: <span>123123</span>
                  </li>
                  <li>
                    Region: <span>Europe</span>
                  </li>
                  <li>
                    Sub Region: <span>Eastern Europe</span>{' '}
                  </li>
                  <li>
                    Capital: <span>Belgrade</span>{' '}
                  </li>
                </ul>
                <ul>
                  <li>Top Level Domain: </li>
                  <li>
                    Currencies: <span>Dinar</span>
                  </li>
                  <li>
                    Languages: <span>Serbian</span>
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
  );
};

export default Country;

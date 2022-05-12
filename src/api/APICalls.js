import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v2';
const FIELDS = '?fields=name,capital,region,population,flags,alpha3Code';

export const getCountries = async (reg, searchedCountry) => {
  try {
    const res = await axios.get(
      searchedCountry && reg === 'all'
        ? `${BASE_URL}/name/${searchedCountry}${FIELDS}`
        : reg !== 'all'
        ? `${BASE_URL}/region/${reg}${FIELDS}`
        : `${BASE_URL}/all${FIELDS}`
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getCountryInfo = async (countryCode, getOnlyName) => {
  try {
    const res = await axios.get(
      getOnlyName
        ? `${BASE_URL}/alpha/${countryCode}?fields=name,alpha3Code`
        : `${BASE_URL}/alpha/${countryCode}${FIELDS},nativeName,topLevelDomain,currencies,languages,subregion,flag,borders,flags`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

import axios from 'axios';

export const getCountries = async (reg, searchedCountry) => {
  try {
    const res = await axios.get(
      searchedCountry
        ? `https://restcountries.com/v2/name/${searchedCountry}`
        : reg !== 'all'
        ? `https://restcountries.com/v2/region/${reg}`
        : 'https://restcountries.com/v2/all?fields=name,capital,region,population,flags,alpha3Code'
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getCountryInfo = async (countryCode) => {
  try {
    const res = await axios.get(
      `https://restcountries.com/v2/alpha/${countryCode}`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

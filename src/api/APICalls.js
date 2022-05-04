import axios from 'axios';

export const getCountries = async (
  reg,
  setCountries,
  setFetching,
  searchedCountry,
  setNotification
) => {
  try {
    setFetching(true);
    const res = await axios.get(
      searchedCountry
        ? `https://restcountries.com/v2/name/${searchedCountry}`
        : reg !== 'all'
        ? `https://restcountries.com/v2/region/${reg}`
        : 'https://restcountries.com/v2/all?fields=name,capital,region,population,flags,alpha3Code'
    );
    res.data.length === 0 ? setNotification(true) : setNotification(false);
    setCountries(res.data);
    setFetching(false);
  } catch (error) {
    setFetching(false);
    setNotification(true);
    setCountries([]);
  }
};

export const getCountryInfo = async (
  countryCode,
  setCountryData,
  setFetching
) => {
  try {
    setFetching(true);
    const res = await axios.get(
      `https://restcountries.com/v2/alpha/${countryCode}`
    );
    setCountryData(res.data);
    setFetching(false);
  } catch (error) {
    console.log(error);
    setFetching(false);
  }
};

export const getCouName = async (cou, setBorders) => {
  try {
    const res = await axios.get(
      `https://restcountries.com/v2/alpha/${cou}?fields=name`
    );
    setBorders((prevValues) => [
      ...prevValues.filter((val) => val !== res.data.name),
      res.data.name,
    ]);
  } catch (error) {
    console.log(error);
  }
};

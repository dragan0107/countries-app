import axios from 'axios';

const BASE_URL: string = 'https://restcountries.com/v2';
const FIELDS: string =
  '?fields=name,capital,region,population,flags,alpha3Code,';

export const getCountries = async (reg: string, searchedCountry: string) => {
  try {
    const { data } = await axios.get(
      searchedCountry && reg === 'all'
        ? `${BASE_URL}/name/${searchedCountry}${FIELDS}`
        : reg !== 'all'
        ? `${BASE_URL}/region/${reg}${FIELDS}`
        : `${BASE_URL}/all${FIELDS}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getCountryInfo = async (
  countryCode: string | undefined,
  getOnlyName?: boolean
) => {
  try {
    const { data } = await axios.get(
      getOnlyName
        ? `${BASE_URL}/alpha/${countryCode}?fields=name,alpha3Code`
        : `${BASE_URL}/alpha/${countryCode}${FIELDS},nativeName,topLevelDomain,currencies,languages,subregion,flag,borders,flags`
    );
    if (data !== undefined) {
      return data;
    }
  } catch (error) {
    return error;
  }
};

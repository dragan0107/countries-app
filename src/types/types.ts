export interface Flags {
  svg: string;
  png: string;
}

export interface CountryInfoCard {
  name: string;
  population: number;
  region: string;
  flags: Flags;
  independent: boolean;
  capital: string;
  alpha3Code: string;
}

export interface Country {
  name: string;
  borderCountries: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
  }[];
  populationByYear: {
    year: number;
    value: number;
  }[];
  flag: string | null;
}

export interface CountryBasic {
  countryCode: string;
  name: string;
}

import { Country, CountryBasic } from '../interfaces';

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = (await response.json()) as CountryBasic[];
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};


export const fetchCountry = async (countryCode: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries/${countryCode}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = (await response.json()) as Country;
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

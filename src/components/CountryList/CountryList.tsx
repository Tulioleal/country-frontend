import { CountryBasic } from '@/app/interfaces';
import { fetchCountries } from '@/app/lib/getCountries';
import Link from 'next/link';
import styles from './CountryList.module.css';

const CountryList = async () => {
  const countries: CountryBasic[] = await fetchCountries() ?? []

  return (
    <section className={styles.countryList}>
      {countries.map((country, index) => (
        <Link href={`/${country.countryCode}`} key={index}>
          <h2>{country.name}</h2>
        </Link>
      ))}
    </section>
  );
};

export default CountryList;

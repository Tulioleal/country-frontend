import { fetchCountry } from '../lib/getCountries';
import Image from 'next/image';
import Link from 'next/link';
import styles from './country.module.css';
import PopulationChart from '@/components/PopulationChart/PopulationChart';

const PLACEHOLDER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_with_question_mark.svg/1200px-Flag_with_question_mark.svg.png"

export default async function Country({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const countryCode = (await params).country
  const country = await fetchCountry(countryCode);

  return (
    <>
      {
        country ? (
          <>
            <header className={styles.header}>
              <h1>{country.name}</h1>
              <Image className={styles.flag}
                src={country.flag || PLACEHOLDER_IMAGE}
                alt={`Flag of ${country}`}
                width={500}
                height={350}
                layout='responsive'
              />
            </header>
            <main className={styles.content}>
              <div>
                <h2>Border countries</h2>
                <div className={styles.borderCountries}>
                  {
                    country.borderCountries.length > 0 ? (
                      country.borderCountries.map((borderCountry) => (
                        <Link href={`/${borderCountry.countryCode}`} key={borderCountry.countryCode}>
                          <h4>
                            {borderCountry.commonName}
                          </h4>
                        </Link>
                      ))
                    ) : (
                      <p>No border countries</p>
                    )
                }
                </div>
              </div>
              <PopulationChart populationByYear={country.populationByYear}/>
            </main>
          </>
        ) : (
          <p>Country not found</p>
        )
      }
    </>
  );
}

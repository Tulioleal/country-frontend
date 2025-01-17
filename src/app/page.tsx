import CountryList from '@/components/CountryList/CountryList';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Countries</h1>
      <CountryList />
    </main>
  );
}

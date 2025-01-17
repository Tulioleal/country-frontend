import styles from './country.module.css';

export default function CountryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.page}>
      {children}
    </main>
  );
}

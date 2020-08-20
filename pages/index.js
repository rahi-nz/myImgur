import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Page from '../components/Page';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyImgur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Page>flow test</Page>
        <h1 className={styles.title}>
          Welcome to myImgur
        </h1>
        <div className={styles.grid} />
      </main>
      <footer className={styles.footer}>
        <div>footer</div>
      </footer>
    </div>
  );
}

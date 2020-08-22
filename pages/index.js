import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Page from '../components/Page';
import Dropdown from '../components/Dropdown/Dropdown';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyImgur</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon-96x96.png" />
      </Head>
      <>
        <Page />
      </>
    </div>
  );
}

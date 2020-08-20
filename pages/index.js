import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyImgur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to myImgur
        </h1>
        <div className={styles.grid}>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>footer</div>
      </footer>
    </div>
  )
}

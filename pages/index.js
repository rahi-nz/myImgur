import React from 'react';
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css'
import { getGalleryAction } from '../store/getGallery/getGalleryAction';

const { useEffect } = require('react');

export default function Home() {
  const data = useSelector(state => state.galleryList.data);
  console.log("data", data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGalleryAction());
  }, []); // eslint-disable-line
  return (
    <div className={styles.container}>
      <Head>
        <title>MyImgur</title>
        <link rel="icon" href="/public/favicon.ico" />
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

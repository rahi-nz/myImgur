import React from 'react';
import Head from 'next/head';
import GalleryContainer from '../components/GalleryContainer/GalleryContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyImgur</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon-96x96.png" />
      </Head>
      <GalleryContainer />
    </div>
  );
}

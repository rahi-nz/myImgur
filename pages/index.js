import React from 'react';
import Head from 'next/head';
import GalleryContainer from '../components/GalleryContainer/GalleryContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyImgur</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon/favicon-96x96.png" />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
      </Head>
      <GalleryContainer />
    </div>
  );
}

import React from 'react';
import withRedux from 'next-redux-wrapper';
import '../styles/globals.css';
import configureStore from '../store/store';


function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default withRedux(configureStore)(MyApp);

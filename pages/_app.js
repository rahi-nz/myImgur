// @flow
import React from 'react';
import withRedux from 'next-redux-wrapper';
import '../styles/globals.css';
import configureStore from '../store/store';

type Props = {
  Component: Function,
  pageProps: Object,
};

function MyApp({ Component, pageProps }: Props) {
  return (
    <Component {...pageProps} />
  );
}

export default withRedux(configureStore)(MyApp);

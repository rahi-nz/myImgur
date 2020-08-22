// @flow
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryAction } from '../store/getGallery/getGalleryAction';
import GalleryLists from './GalleryList/GalleryList';

type Props = {
  title?: string,
};

const Page = ({
  title = 'Home Page',
}: Props) => {
  const data = useSelector((state) => state.galleryList.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGalleryAction(0));
}, []); // eslint-disable-line

  return (
    <section className="container">
      <Head>
        <title>{title}</title>
      </Head>
      {data && <GalleryLists />}
    </section>
  );
};
export default Page;

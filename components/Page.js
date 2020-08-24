// @flow
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryAction } from '../store/getGallery/getGalleryAction';
import GalleryLists from './GalleryList/GalleryList';
import styles from '../styles/Home.module.css';
import Dropdown from './Dropdown/Dropdown';
import { sectionList, windowList } from '../webConfig';

const Page = () => {
  const [viral, setViral] = useState(false);
  const [section, setSection] = useState('hot');
  const [window, setWindow] = useState('day');

  const data = useSelector((state) => state.galleryList.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGalleryAction(1, section, viral, window));
}, [viral,section,window]); // eslint-disable-line
  const handleChangeViral = () => {
    setViral((prevState) => !prevState);
  };

  const handleChangeSection = (value) => {
    setSection(value);
  };

  const handleChangeWindow = (value) => {
    setWindow(value);
  };

  return (
    <section className="container">
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className={styles.title}>
        Welcome to myImgur
      </h1>
      <div className="filter-Dropdown">
        <div className="filter-Dropdown-item">
          <Dropdown filterName="section" defaultValue={section} list={sectionList} handleChangeFilter={handleChangeSection} />
          {
            section === 'top' && <Dropdown filterName="date range" defaultValue={window} list={windowList} handleChangeFilter={handleChangeWindow} />
          }
        </div>
        <div className="header-btn-filter">
          <button type="button" onClick={handleChangeViral}>{viral ? 'hide viral images' : 'Show viral images' }</button>
        </div>
      </div>
      {data && <GalleryLists viral={viral} section={section} window={window} />}
    </section>
  );
};

export default Page;

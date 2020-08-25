// @flow
import React, { useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { useDispatch, useSelector } from 'react-redux';
import { ItemContainer, ListContainer } from './style';
import { getGalleryAction } from '../../store/getGallery/getGalleryAction';
import GalleryItems from '../GalleryItems/GalleryItems';

type Props = {
  section: string,
  viral: boolean,
  dateRange: string
};

const GalleryLists = ({ section, viral, dateRange }:Props) => {
  const dispatch = useDispatch();
  const itemsCount = useSelector((state) => state.galleryList.data.length);
  const [page, setPage] = useState(2);

  const loadMore = () => {
    dispatch(getGalleryAction(false, page, section, viral, dateRange));
    setPage((prevState) => prevState + 1);
  };

  return (
    <VirtuosoGrid
      totalCount={itemsCount}
      overscan={100}
      ItemContainer={ItemContainer}
      ListContainer={ListContainer}
      endReached={() => loadMore()}
      item={(index) => <GalleryItems index={index} />}
      style={{ height: '100vh' }}
    />
  );
};
export default GalleryLists;

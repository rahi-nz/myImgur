// @flow
import React, { useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { useDispatch, useSelector } from 'react-redux';
import { ItemContainer, ItemWrapper, ListContainer } from './style';
import { getGalleryAction } from '../../store/getGallery/getGalleryAction';

type Props = {
  section: string,
  viral: boolean,
  window: string
};

const GalleryLists = ({ section, viral, window }:Props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.galleryList.data);
  const itemsCount = useSelector((state) => state.galleryList.data.length);
  const [page, setPage] = useState(2);

  const loadMore = () => {
    dispatch(getGalleryAction(page, section, viral, window));
    setPage((prevState) => prevState + 1);
  };

  return (
    <VirtuosoGrid
      totalCount={itemsCount}
      overscan={100}
      ItemContainer={ItemContainer}
      ListContainer={ListContainer}
      endReached={() => loadMore()}
      item={(index) => (
        <ItemWrapper>{`Item -${items[index]?.title}- ${index}`}</ItemWrapper>
      )}
      style={{ height: '100vh', width: '100%' }}
      footer={() => (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          Loading...
        </div>
      )}
    />
  );
};
export default GalleryLists;

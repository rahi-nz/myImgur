// @flow
import React, { useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { useDispatch, useSelector } from 'react-redux';
import {
  ItemContainer, ItemWrapper, ListContainer, ItemWrapperImg, ItemWrapperVideo,
} from './style';
import { getGalleryAction } from '../../store/getGallery/getGalleryAction';

type Props = {
  section: string,
  viral: boolean,
  dateRange: string
};

const GalleryLists = ({ section, viral, dateRange }:Props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.galleryList.data);
  const itemsCount = useSelector((state) => state.galleryList.data.length);
  const [page, setPage] = useState(2);

  const loadMore = () => {
    dispatch(getGalleryAction(page, section, viral, dateRange));
    setPage((prevState) => prevState + 1);
  };

  const renderItems = (index) => (items[index]?.images ? (
    <ItemWrapper>
      {items[index]?.images[0].type === 'video/mp4' ? (
      // eslint-disable-next-line jsx-a11y/media-has-caption
        <div>
          <ItemWrapperVideo autoPlay loop muted>
            <source
              type="video/mp4"
              src="https://i.imgur.com/dfxL1Bz.mp4"
            />
          </ItemWrapperVideo>
        </div>
      ) : (
        <ItemWrapperImg
          src={
            items[index]?.images[0].type === 'video/mp4'
              ? items[index]?.images[0].gifv
              : items[index]?.images[0].link
            }
          alt={items[index]?.title}
        />
      )}
    </ItemWrapper>
  ) : (
    <ItemWrapper>
      <ItemWrapperImg src={items[index]?.link} alt={items[index]?.title} />
    </ItemWrapper>
  ));

  return (
    <VirtuosoGrid
      totalCount={itemsCount}
      overscan={100}
      ItemContainer={ItemContainer}
      ListContainer={ListContainer}
      endReached={() => loadMore()}
      item={renderItems}
      style={{ height: '100vh', width: '70%', margin: 'auto' }}
      footer={() => (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          Loading...
        </div>
      )}
    />
  );
};
export default GalleryLists;

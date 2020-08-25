// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import {
  ItemWrapper, ItemWrapperImg, ItemWrapperVideo, ItemWrapperTitle,
} from './style';

type Props = {
  index: number,
};

const GalleryItems = ({ index }:Props) => {
  const items = useSelector((state) => state.galleryList.data);
  const coverSrc = items[index]?.images
    ? items[index]?.images.find((el) => el.id === items[index]?.cover)?.link
    : items[index]?.link;
  return (
    <ItemWrapper>
      <Link href={`/album/${items[index]?.id}`}>
        <a>
          {items[index]?.images[0].type === 'video/mp4' ? (
            <div data-test-id="video-wrapper">
              <ItemWrapperVideo autoPlay loop muted preload="auto">
                <source
                  type="video/mp4"
                  src={coverSrc}
                />
              </ItemWrapperVideo>
            </div>
          ) : (
            <ItemWrapperImg
              src={coverSrc}
              alt={items[index]?.title}
            />
          )}
          <ItemWrapperTitle>{items[index]?.title}</ItemWrapperTitle>
        </a>
      </Link>
    </ItemWrapper>
  );
};
export default GalleryItems;

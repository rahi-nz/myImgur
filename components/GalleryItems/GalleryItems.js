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
    items[index]?.images ? (
      <ItemWrapper>
        <Link href={`/image/${items[index]?.id}`}>
          <a>
            {items[index]?.images[0].type === 'video/mp4' ? (
              <div>
                <ItemWrapperVideo autoPlay loop muted>
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
    ) : (
      <ItemWrapper>
        <Link href={`/image/${items[index]?.id}`}>
          <a>
            <ItemWrapperImg src={coverSrc} alt={items[index]?.title} />
            <ItemWrapperTitle>{items[index]?.title}</ItemWrapperTitle>
          </a>
        </Link>
      </ItemWrapper>
    )
  );
};
export default GalleryItems;

// @flow
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/named
import { request } from '../../store/request';
import { getGalleryImage } from '../../resources/Api';
import {
  ItemWrapperVideo,
  ItemWrapperImg,
  DescriptionContainer,
  Details,
  Description,
  DescriptionTitle,
  ImagesContainer,
  VoteContainer,
  Vote,
  Span,
  VoteWrapper,
} from './style';

type Props = {
  query: Object
};

const Image = ({ query }:Props) => {
  const [galleryImage, setGalleryImage] = useState();

  useEffect(() => {
    (async () => {
      const data = await request.get(getGalleryImage(query.id));
      setGalleryImage(data.data.data);
    })();
  });

  return (
    <div>
      <Head>
        <title>{galleryImage?.title || 'Details'}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon-96x96.png" />
      </Head>
      <DescriptionContainer>
        <ImagesContainer>
          <DescriptionTitle>{galleryImage?.description}</DescriptionTitle>
          {
            galleryImage?.images.map((el) => (el.type === 'video/mp4' ? (
              <ItemWrapperVideo controls key={el.id}>
                <source
                  type="video/mp4"
                  src={el.link}
                />
              </ItemWrapperVideo>
            ) : <ItemWrapperImg key={el.id} src={el.link} alt={el.title} />))
          }
        </ImagesContainer>
        <Details>
          <Description>{galleryImage?.title || 'Description'}</Description>
          <VoteContainer>
            <VoteWrapper>
              <Vote src="/like.svg" alt="like" />
              <Span>{galleryImage?.downs}</Span>
            </VoteWrapper>
            <VoteWrapper>
              <Vote src="/disLike.svg" alt="dislike" />
              <Span>{galleryImage?.ups}</Span>
            </VoteWrapper>
            <VoteWrapper>
              <Vote src="/score.png" alt="score" />
              <Span>{galleryImage?.score}</Span>
            </VoteWrapper>
          </VoteContainer>
        </Details>
      </DescriptionContainer>
    </div>
  );
};

Image.getInitialProps = async ({ query }) => ({ query });

export default Image;

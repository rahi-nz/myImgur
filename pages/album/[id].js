// @flow
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/named
import { request } from '../../store/request';
import { getAlbum } from '../../resources/Api';
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
  ScoreWrapper,
  LikeWrapper,
  DislikeWrapper,
  SpanDown,
} from './style';
import { LoadingContainer, LoadingGif, LoadingTitle } from '../../components/GalleryContainer/style';

type Props = {
  query: Object
};

const Image = ({ query }:Props) => {
  const [galleryImage, setGalleryImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await request.get(getAlbum(query.id));
      setGalleryImage(data.data.data);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>{galleryImage?.title || 'Details'}</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon/favicon-96x96.png" />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
      </Head>
      {
        loading ? (
          <LoadingContainer>
            <LoadingTitle>loading Data ...</LoadingTitle>
            <LoadingGif alt="MyImgur" src="/loading/loading.gif" />
          </LoadingContainer>
        ) : (
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
                <LikeWrapper>
                  <Vote src="/icon/like.svg" alt="like" />
                  <Span>{galleryImage?.ups}</Span>
                </LikeWrapper>
                <DislikeWrapper>
                  <Vote src="/icon/disLike.svg" alt="dislike" />
                  <SpanDown>{galleryImage?.downs}</SpanDown>
                </DislikeWrapper>
                <ScoreWrapper>
                  <Vote src="/icon/score.svg" alt="score" />
                  <Span>{galleryImage?.score}</Span>
                </ScoreWrapper>
              </VoteContainer>
            </Details>
          </DescriptionContainer>
        )
      }

    </div>
  );
};

Image.getInitialProps = async ({ query }) => ({ query });

export default Image;

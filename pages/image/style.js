import styled from 'styled-components';

export const ItemWrapperVideo = styled.video`
  height: 300px;
  background: #000;
`;

export const ItemWrapperImg = styled.img`
  height: 300px;
  background: #000;
  margin: 10px;
  border-radius: 6px;
`;

export const DescriptionContainer = styled.div`
  width: 70%;
  margin: 30px auto;
  display: flex;
  
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: start;
  align-items: center;
  
  @media (max-width: 1200px) {
    width: 100%;
    order: 1;
  }
`;

export const Description = styled.p`
  color: #fff;
`;

export const DescriptionTitle = styled.p`
  color: #fff;
  font-size: 14px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  
  @media (max-width: 1200px) {
    width: 100%;
    order: 2;
  }
`;

export const VoteContainer = styled.div`
  display: flex;
`;

export const Vote = styled.img`
  width: 40px;
`;

export const Span = styled.span`
  color: #fff;
  margin-top: 5px;
`;

export const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

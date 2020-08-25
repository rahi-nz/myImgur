import styled from 'styled-components';

export const ItemWrapperVideo = styled.video`
  height: 300px;
  background: #000;
  margin: 10px;
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
  background: #f5f3f3;
  height: auto;
  border-radius: 6px;
  
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
  color: #A65215;
  padding: 5px;
`;

export const DescriptionTitle = styled.p`
  color: #A65215;
  font-size: 14px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid #E7DFDC;
  padding: 10px;
  
  @media (max-width: 1200px) {
    width: 100%;
    order: 2;
    border-right: 0;
  }
`;

export const VoteContainer = styled.div`
  display: flex;
`;

export const Vote = styled.img`
  width: 40px;
`;

export const Span = styled.span`
  color: #A65215;
  margin-top: 15px;
  font-size: 16px;
`;

export const SpanDown = styled.span`
  color: #A65215;
  margin-top: 5px;
  font-size: 16px;
`;

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const DislikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px 10px;
`;

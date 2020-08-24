import styled from 'styled-components';

export const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 25%;
  background: #99B0DD;
  display: flex;
  flex: none;
  align-content: stretch;

  @media (max-width: 1024px) {
    width: 33%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ItemWrapper = styled.div`
    flex: 1;
    text-align: center;
    font-size: 80%;
    padding: 2rem;
    box-shadow: 0 5px 6px -6px #777;
    background: white;
    border-radius: 6px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemWrapperImg = styled.img`
  width: 100%;
  height: 180px;
`;

export const ItemWrapperVideo = styled.video`
  width: 100%;
  height: 180px;
`;

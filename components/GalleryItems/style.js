import styled from 'styled-components';

export const ItemWrapperImg = styled.img`
  width: 100%;
  height: 180px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const ItemWrapperVideo = styled.video`
  width: 100%;
  height: 180px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const ItemWrapperTitle = styled.p`
  text-align: left;
  padding: 5px 10px;
  color: #A65215;
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 38px;
  overflow: hidden;
`;

export const ItemWrapper = styled.div`
    flex: 1;
    text-align: center;
    font-size: 80%;
    box-shadow: 0 5px 6px -6px #777;
    background: #f5f3f3;
    border-radius: 6px;
    width: 100%;
    &:hover {
    box-shadow: 0 5px 6px -4px #212121;
    }
  }
`;

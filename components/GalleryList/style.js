import styled from 'styled-components';

export const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 25%;
  background: #E7DFDC;
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

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
`;

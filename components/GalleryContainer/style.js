import styled from 'styled-components';

export const MainContainer = styled.section`
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const DropdownFilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DropdownFilterItem = styled.div`
  display: flex;
  flex-direction: column;
  }
`;
export const FilterViral = styled.div`
  display: flex;
  align-items: center;
  }
`;

export const FilterViralBtn = styled.button`
  background: darkolivegreen;
  color: #fff;
  box-shadow: none;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  width: 150px;
  &:focus {
    outline: none;
  }
`;

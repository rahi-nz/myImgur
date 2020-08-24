import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-between;
  align-items: center;
`;
export const DropdownSelect = styled.select`
  background: #F58535;
  border: none;
  color: #fff;
  border-radius: 6px;
  padding: 5px 10px;
  height: 26px;
  width: 100px;
  &:focus {
    outline: none;
    }
`;

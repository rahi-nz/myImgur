// @flow
import React from 'react';
import { DropdownContainer, DropdownSelect } from './style';

type Props = {
  defaultValue:string,
  list: Array<string>,
  handleChangeFilter: Function
};

const Dropdown = ({
  defaultValue, list, handleChangeFilter,
}: Props) => {
  const handleChange = (event) => {
    handleChangeFilter(event.target.value);
  };

  return (
    <DropdownContainer>
      <DropdownSelect value={defaultValue} onChange={handleChange}>
        {list?.map((el) => <option key={el.value} value={el.value}>{el.value}</option>)}
      </DropdownSelect>
    </DropdownContainer>
  );
};
export default Dropdown;

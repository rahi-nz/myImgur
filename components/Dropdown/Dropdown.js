// @flow
import React from 'react';

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
    <div className="DropdownContainer">
      <select value={defaultValue} onChange={handleChange}>
        {list?.map((el) => <option key={el.value} value={el.value}>{el.value}</option>)}
      </select>
    </div>
  );
};
export default Dropdown;

import React, { useState } from 'react';
import { DropdownWrapper } from '../styles';

const style = {
  fontSize: '1.2rem',
  outline: 'none',
};

const Dropdown = ({ heading, list }) => {
  const [optionValue, setOptionValue] = useState('default');

  const renderedlist = list.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const handleSelect = (e) => {
    console.log(e.target.value);
    if (optionValue) setOptionValue(e.target.value);
  };

  return (
    <DropdownWrapper>
      <h3>{heading}</h3>
      <select onChange={handleSelect} style={style}>
        {renderedlist}
      </select>
    </DropdownWrapper>
  );
};

export default Dropdown;

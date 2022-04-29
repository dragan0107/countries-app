import React from 'react';

const SingleRegion = ({ handleChange, reg }) => {
  let regUppercase = reg[0].toUpperCase() + reg.slice(1);
  return (
    <li
      className="region-select__menu__list__item"
      onClick={() => handleChange(reg, regUppercase)}
    >
      <span>{regUppercase}</span>
    </li>
  );
};

export default SingleRegion;

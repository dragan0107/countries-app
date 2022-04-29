import React from 'react';

const SingleRegion = ({ handleChange, reg }) => {
  return (
    <li
      className="region-select__menu__list__item"
      onClick={() => handleChange(reg)}
    >
      <span>{reg[0].toUpperCase() + reg.slice(1)}</span>
    </li>
  );
};

export default SingleRegion;

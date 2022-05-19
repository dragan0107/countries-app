import { FC } from 'react';

interface RegionProps {
  reg: string;
  handleChange: (reg: string, regUppercase: string) => void;
}

const SingleRegion: FC<RegionProps> = ({ handleChange, reg }) => {
  let regUppercase: string = reg[0].toUpperCase() + reg.slice(1);

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

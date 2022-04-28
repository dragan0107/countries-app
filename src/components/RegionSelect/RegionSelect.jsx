import { useState } from 'react';
import './RegionSelect.scss';

const RegionSelect = () => {
  const [showRegionList, setShowRegionList] = useState(false);

  return (
    <div
      className="region-select"
      onClick={() => setShowRegionList(!showRegionList)}
    >
      <div className="region-select__menu">
        <span className="region-select__menu__title">Filter by Region</span>
        <i
          class={
            'fa-solid' +
            (showRegionList ? ' fa-chevron-up' : ' fa-chevron-down')
          }
        ></i>
      </div>
      {showRegionList && (
        <ul className="region-select__menu__list">
          <li className="region-select__menu__list__item">
            <span>Africa</span>
          </li>
          <li className="region-select__menu__list__item">
            <span>Americas</span>
          </li>
          <li className="region-select__menu__list__item">
            <span>Asia</span>{' '}
          </li>
          <li className="region-select__menu__list__item">
            <span>Europe</span>{' '}
          </li>
          <li className="region-select__menu__list__item">
            <span>Oceania</span>{' '}
          </li>
        </ul>
      )}
    </div>
  );
};

export default RegionSelect;

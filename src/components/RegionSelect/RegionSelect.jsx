import { useState } from 'react';
import './RegionSelect.scss';

const RegionSelect = ({ setRegion }) => {
  const [showRegionList, setShowRegionList] = useState(false);

  const handleChange = (val) => {
    setRegion(val);
  };

  return (
    <div
      className="region-select"
      onClick={() => setShowRegionList(!showRegionList)}
    >
      <div className="region-select__menu">
        <span className="region-select__menu__title">Filter by Region</span>
        <i
          className={
            'fa-solid' +
            (showRegionList ? ' fa-chevron-up' : ' fa-chevron-down')
          }
        ></i>
      </div>
      {showRegionList && (
        <ul className="region-select__menu__list">
          <li
            className="region-select__menu__list__item"
            onClick={() => handleChange('all')}
          >
            <span>All Regions</span>
          </li>
          <li
            className="region-select__menu__list__item"
            onClick={() => handleChange('africa')}
          >
            <span>Africa</span>
          </li>
          <li
            className="region-select__menu__list__item"
            onClick={() => handleChange('americas')}
          >
            <span>Americas</span>
          </li>
          <li
            className="region-select__menu__list__item"
            onClick={() => handleChange('asia')}
          >
            <span>Asia</span>{' '}
          </li>
          <li
            className="region-select__menu__list__item"
            onClick={() => handleChange('europe')}
          >
            <span>Europe</span>{' '}
          </li>
          <li
            className="region-select__menu__list__item"
            onClick={() => handleChange('oceania')}
          >
            <span>Oceania</span>{' '}
          </li>
        </ul>
      )}
    </div>
  );
};

export default RegionSelect;

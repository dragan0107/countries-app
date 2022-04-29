import { useState } from 'react';
import SingleRegion from '../SingleRegion/SingleRegion';
import './RegionSelect.scss';

const RegionSelect = ({ setRegion }) => {
  const [showRegionList, setShowRegionList] = useState(false);
  const regions = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania'];

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
          {regions.map((reg) => (
            <SingleRegion reg={reg} handleChange={handleChange} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegionSelect;

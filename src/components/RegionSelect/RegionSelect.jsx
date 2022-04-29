import { useState } from 'react';
import SingleRegion from '../SingleRegion/SingleRegion';
import './RegionSelect.scss';

const RegionSelect = ({ setRegion }) => {
  const [showRegionList, setShowRegionList] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('All');
  const regions = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania'];

  const handleChange = (val, valUppercase) => {
    setRegion(val);
    setCurrentRegion(valUppercase);
  };

  return (
    <div
      className="region-select"
      onClick={() => setShowRegionList(!showRegionList)}
    >
      <div className="region-select__menu">
        <span className="region-select__menu__title">{currentRegion}</span>
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
            <SingleRegion
              reg={reg}
              handleChange={handleChange}
              setCurrentRegion={setCurrentRegion}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegionSelect;

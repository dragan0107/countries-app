import { useEffect, useRef, useState } from 'react';
import SingleRegion from '../SingleRegion/SingleRegion';
import './RegionSelect.scss';

const RegionSelect = ({ setRegion }) => {
  const [showRegionList, setShowRegionList] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('All');
  const regions = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania'];
  const regionRef = useRef();

  const handleChange = (val, valUppercase) => {
    setRegion(val);
    setCurrentRegion(valUppercase);
  };
  useEffect(() => {
    const checkIfClickedOut = (e) => {
      if (
        showRegionList &&
        regionRef.current &&
        !regionRef.current.contains(e.target)
      ) {
        setShowRegionList(false);
      }
    };
    document.addEventListener('click', checkIfClickedOut);
    return () => {
      document.removeEventListener('click', checkIfClickedOut);
    };
  }, [showRegionList]);

  return (
    <div
      className="region-select"
      onClick={() => setShowRegionList(!showRegionList)}
      ref={regionRef}
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
              key={reg}
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

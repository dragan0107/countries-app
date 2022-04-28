import RegionSelect from '../RegionSelect/RegionSelect';
import SearchBar from '../SearchBar/SearchBar';
import './Countries.scss';

const Countries = () => {
  return (
    <div className="countries-wrapper">
      <div className="countries">
        <div className="countries__filters">
          <SearchBar />
          <RegionSelect />
        </div>
      </div>
    </div>
  );
};

export default Countries;

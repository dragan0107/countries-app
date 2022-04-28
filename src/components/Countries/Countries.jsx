import SearchBar from '../SearchBar/SearchBar';
import './Countries.scss';

const Countries = () => {
  return (
    <div className="countries-wrapper">
      <div className="countries">
        <SearchBar />
      </div>
    </div>
  );
};

export default Countries;

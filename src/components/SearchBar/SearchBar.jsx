import './SearchBar.scss';

const SearchBar = ({ setSearchedCountry }) => {
  return (
    <div className="search-bar">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        autoFocus
        onChange={(e) => setSearchedCountry(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

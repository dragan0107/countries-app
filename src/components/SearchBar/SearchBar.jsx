import './SearchBar.scss';

const SearchBar = ({ debouncedSearch }) => {
  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        autoFocus
        onChange={(e) => debouncedSearch(e)}
      />
    </div>
  );
};

export default SearchBar;

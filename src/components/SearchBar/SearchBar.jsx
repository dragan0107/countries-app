import './SearchBar.scss';

const SearchBar = ({ debouncedSearch }) => {
  return (
    <div className="search-bar background-component text">
      <i className="fa-solid fa-magnifying-glass text"></i>
      <input
        className="text"
        type="text"
        placeholder="Search for a country..."
        autoFocus
        onChange={(e) => debouncedSearch(e)}
      />
    </div>
  );
};

export default SearchBar;

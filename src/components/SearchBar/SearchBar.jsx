import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country..." autoFocus />
    </div>
  );
};

export default SearchBar;

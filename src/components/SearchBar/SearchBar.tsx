import { FC } from 'react';
import './SearchBar.scss';

type SearchBarProps = {
  debouncedSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: FC<SearchBarProps> = ({ debouncedSearch }) => {
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

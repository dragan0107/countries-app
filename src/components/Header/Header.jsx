import { useContext } from 'react';

import { ThemeContext } from '../../utils/ThemeContext';

import './Header.scss';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeHandler = () => {
    if (theme === 'light') {
      setTheme('');
      localStorage.setItem('theme', '');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <header className="header-wrapper background-component text">
      <div className="header">
        <h1 className="header__title">Where in the world?</h1>
        <div className="header__theme-picker" onClick={themeHandler}>
          <i className={`fa-solid ${theme ? 'fa-sun' : 'fa-moon'}`}></i>
          <span>{!theme ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

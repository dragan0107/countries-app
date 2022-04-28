import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <div className="header__theme-picker">
        <i class="fa-solid fa-moon"></i>
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;

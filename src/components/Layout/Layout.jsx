import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

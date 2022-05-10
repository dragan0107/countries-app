import React, { useContext } from 'react';

import { ThemeContext } from '../../utils/ThemeContext';

import Header from '../Header/Header';

import './Layout.scss';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`layout ${theme}`}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

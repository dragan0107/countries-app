import React, { FC, useContext } from 'react';

import { ThemeContext } from '../../utils/ThemeContext';

import Header from '../Header/Header';

import './Layout.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`layout ${theme?.theme}`}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

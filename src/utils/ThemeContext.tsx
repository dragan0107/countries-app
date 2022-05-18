import React, { createContext, useState } from 'react';

interface Theme {
  theme: string | null;
  setTheme: (theme: string) => void;
}

interface ProviderProps {
  children?: React.ReactNode;
}

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

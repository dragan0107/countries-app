import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Country from './pages/Country/Country';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

import { ThemeProvider } from './utils/ThemeContext';

const App: FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/countries-app" element={<Home />} />
            <Route
              path="/countries-app/country/:countryCode"
              element={<Country />}
            />
            <Route
              path="*"
              element={<Navigate replace to="/countries-app" />}
            />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

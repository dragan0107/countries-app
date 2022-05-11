import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Country from './pages/Country/Country';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

import { ThemeProvider } from './utils/ThemeContext';

const App = () => {
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
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

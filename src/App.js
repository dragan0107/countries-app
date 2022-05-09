import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Country from './pages/Country/Country';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

import './App.scss';

import { ThemeProvider } from './utils/ThemeContext';

const App = () => {
  return (
    <div className="app">
      <ThemeProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:countryCode" element={<Country />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;

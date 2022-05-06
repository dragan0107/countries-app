import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Country from './pages/Country/Country';
import Home from './pages/Home/Home';
import './App.scss';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryCode" element={<Country />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;

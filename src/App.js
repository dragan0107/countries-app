import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Country from './pages/Country/Country';
import Home from './pages/Home/Home';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

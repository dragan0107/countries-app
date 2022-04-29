import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Country from './pages/Country/Country';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

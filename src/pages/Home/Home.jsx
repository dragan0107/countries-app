import Countries from '../../components/Countries/Countries';
import Header from '../../components/Header/Header';
import './Home.scss';
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Countries />
    </div>
  );
};

export default Home;

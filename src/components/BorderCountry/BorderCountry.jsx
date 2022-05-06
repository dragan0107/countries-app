import { Link } from 'react-router-dom';
import './BorderCountry.scss';

const BorderCountry = ({ name }) => {
  return (
    <div className="border-country">
      <span className="border-country__name">{name}</span>
    </div>
  );
};

export default BorderCountry;

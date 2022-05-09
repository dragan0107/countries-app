import './BorderCountry.scss';

const BorderCountry = ({ name }) => {
  return (
    <div className="border-country background-component">
      <span className="border-country__name text">{name}</span>
    </div>
  );
};

export default BorderCountry;

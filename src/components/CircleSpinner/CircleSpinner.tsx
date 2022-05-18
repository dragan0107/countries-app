import './CircleSpinner.scss';

const CircleSpinner: React.FC = () => {
  return (
    <div className="circle-spinner">
      <div className="lds-ring">
        <div className="spinner-color"></div>
        <div className="spinner-color"></div>
        <div className="spinner-color"></div>
        <div className="spinner-color"></div>
      </div>
    </div>
  );
};

export default CircleSpinner;

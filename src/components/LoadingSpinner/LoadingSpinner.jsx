import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className="ellipsis-wrapper">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

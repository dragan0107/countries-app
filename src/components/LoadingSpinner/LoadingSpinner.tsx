import './LoadingSpinner.scss';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="ellipsis-wrapper">
      <div className="lds-ellipsis">
        <div className="ellipsis-circle background-dark"></div>
        <div className="ellipsis-circle background-dark"></div>
        <div className="ellipsis-circle background-dark"></div>
        <div className="ellipsis-circle background-dark"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

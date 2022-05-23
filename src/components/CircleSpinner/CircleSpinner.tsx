import { FC } from 'react';

import './CircleSpinner.scss';

const CircleSpinner: FC = () => {
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

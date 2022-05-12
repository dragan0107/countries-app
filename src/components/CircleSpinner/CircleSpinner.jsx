import React from 'react';
import './CircleSpinner.scss';

const CircleSpinner = () => {
  return (
    <div className="circle-spinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CircleSpinner;

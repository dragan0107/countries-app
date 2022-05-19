import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeContext } from '../../utils/ThemeContext';

const BackButton: FC = () => {
  const theme = useContext(ThemeContext);

  const navigate = useNavigate();

  return (
    <div
      className={`country-info__btn hover-shadow ${
        theme?.theme === 'light' ? ' background-component' : ''
      }`}
      onClick={() => navigate(-1)}
    >
      <i className="fa-solid fa-arrow-left-long text"></i>
      <span className="text">Back</span>
    </div>
  );
};

export default BackButton;

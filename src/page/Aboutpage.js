import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    // navigate(내가 가고싶은 곳 주소)
    navigate('/');
  };
  return (
    <div>
      <h1>About page!</h1>
      <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  );
};

export default Aboutpage;

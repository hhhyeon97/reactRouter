import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate('/products?q=pants');
  };
  return (
    <div>
      <h1>Homepage</h1>
      {/*라우터간에 이동할 수 있게 도와주는 링크*/}
      <Link to="/about">Go to about page</Link>
      <button onClick={goProductPage}>go to product page</button>
    </div>
  );
};

export default Homepage;

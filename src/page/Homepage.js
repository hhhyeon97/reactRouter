import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      {/*라우터간에 이동할 수 있게 도와주는 링크*/}
      <Link to="/about">Go to about page</Link>
    </div>
  );
};

export default Homepage;

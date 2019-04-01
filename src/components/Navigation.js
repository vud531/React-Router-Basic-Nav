import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <a to="/about">About</a>
        </div>
        <div>
          <a to="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

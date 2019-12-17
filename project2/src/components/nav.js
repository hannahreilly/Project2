import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    
      <ul>
      <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/popular">
        <li>Popular</li>
        </Link>
        <Link to="/about">
        <li>About</li>
        </Link>
      </ul>
    
  )
}

export default Nav;

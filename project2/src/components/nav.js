import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
    <header>
      <img className="logo" src="https://i.imgur.com/OfqsXoa.png" alt="logo" />
    </header>
    <div className="Nav">
      <ul>
      <Link to="/about">
        <li>About</li>
        </Link>
        <Link to="/popular">
        <li>Popular</li>
        </Link>
      <Link to="/">
        <li>Home</li>
        </Link>
      </ul>
      </div>
      </div>
  )
}

export default Nav;

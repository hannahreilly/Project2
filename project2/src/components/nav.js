import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <img className="logo" src="https://i.imgur.com/dtpzfez.png" alt="logo"/>
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
      </header>
  )
}

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
      <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/books">
        <li>Books</li>
        </Link>
        <Link to="/footer">
        <li>Footer</li>
        </Link>
        <Link to="/header">
        <li>Header</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;

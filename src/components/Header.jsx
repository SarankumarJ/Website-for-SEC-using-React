import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Saveetha Engineering College</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/courses">Courses Offered</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

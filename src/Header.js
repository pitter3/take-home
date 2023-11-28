import React from 'react';
import './Header.css';


function Header() {
  const redirectToHomePage = () => {
    window.location.href = '/';
  }

  return (
    <nav>
      <input type="checkbox" id="nav-toggle" />
      <h1 className='title' onClick={redirectToHomePage}>Daily Digest</h1>
      <ul className="links">
        <li><a href="/">Home</a></li>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
}

export default Header;

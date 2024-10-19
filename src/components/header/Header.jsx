

//import React, { useState } from 'react';
import { useState } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from './images/vsg.png';

const Header = ({ isAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
      <div className="logo"><img src={logo} alt="Logo" /></div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to={"/courses"} onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to={"/contect"} onClick={() => setMenuOpen(false)}>Contact</Link>
          {isAuth ? (
            <Link to={"/account"} onClick={() => setMenuOpen(false)} >Account</Link>
          ) : (
            <Link to={"/login"} onClick={() => setMenuOpen(false)} style={{ border: '1px solid white', borderRadius: '5px', padding: '5px'}}>Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;


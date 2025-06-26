import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="logo">MovieExplorer</NavLink>
        <NavLink to="/" activeclassname="active">Movies</NavLink>
        <NavLink to="/series" activeclassname="active">Web Series</NavLink>
      </div>
      <div className="navbar-right">
        <button className="nav-btn">Login</button>
        <button className="nav-btn">Join</button>
      </div>
    </nav>
  );
}

export default Navbar;

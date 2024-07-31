import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="header">
    <div id="navigationBar">
    <nav className="navbar">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link home" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/teams" className="nav-link teams" href="#">Teams</Link>
        </li>
        <li className="nav-item">
          <Link to="/driver" className="nav-link drivers" href="#">Drivers</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/following" className="nav-link following" href="#">Following</Link>
        </li>
      </ul>
    </nav>
    </div>
    </div>
  );
};

export default Navbar;
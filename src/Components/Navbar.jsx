import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="d-md-flex p-2">
    <nav className="navbar justify-content-evenly">
      <ul class="nav">
        <li class="nav-item">
          <Link to="/" class="nav-link home" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/teams" class="nav-link teams" href="#">Teams</Link>
        </li>
        <li class="nav-item">
          <Link to="/driver" class="nav-link drivers" href="#">Drivers</Link>
        </li>
        <li class="nav-item"> 
          <Link to="/following" class="nav-link following" href="#">Following</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
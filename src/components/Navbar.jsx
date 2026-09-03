import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <img src="/logo.png" alt="Eseosa's Kitchen" />
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <a className="nav-order" href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">
          Order now <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
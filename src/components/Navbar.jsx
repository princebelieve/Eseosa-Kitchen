import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src="/logo.png" alt="Eseosa's Kitchen" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <div id="site-navigation" className={`nav-links${isMenuOpen ? ' is-open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/menu" onClick={closeMenu}>Menu</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
        <a className="nav-order" href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">
          Order now <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
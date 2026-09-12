import React from 'react';
import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    installPrompt.prompt();
    const result = await installPrompt.userChoice;

    if (result.outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

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
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
        {installPrompt && (
          <button
            type="button"
            className="nav-install"
            aria-label="Install app"
            title="Install app"
            onClick={handleInstallClick}
          >
            <FaDownload aria-hidden="true" />
          </button>
        )}
        <a className="nav-order" href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">
          Order now <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
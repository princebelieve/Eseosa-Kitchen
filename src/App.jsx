import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import ShareButton from './components/ShareButton.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { initPullToRefresh } from './utils/pullToRefresh.js';
import './styles/global.css';

function App() {
  const handleRefresh = () => {
    window.location.reload();
  };

  React.useEffect(() => {
    const cleanup = initPullToRefresh({ onRefresh: handleRefresh, threshold: 90 });
    return cleanup;
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="site-footer">
        <div className="site-footer-brand">
          <img src="/logo.png" alt="Eseosa's Kitchen logo" />
          <span>Eseosa's Kitchen</span>
        </div>
        <p>Follow us</p>
        <SocialLinks />
      </footer>
      <ShareButton />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
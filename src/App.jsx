import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Contact from './pages/Contact.jsx';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="site-footer">
        <p>Follow Eseosa's Kitchen</p>
        <SocialLinks />
      </footer>
      {/* Global Button - It appears on every page */}
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
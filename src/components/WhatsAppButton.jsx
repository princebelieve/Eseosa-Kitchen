import React from 'react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <span aria-hidden="true">◉</span> Order on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
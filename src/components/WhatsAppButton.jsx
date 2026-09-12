import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Order on WhatsApp"
      title="Order on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
      await navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
import React from 'react';
import ScrollReveal from '../components/ScrollReveal.jsx';

const Contact = () => {
  return (
    <main className="contact-page section-wrap">
      <ScrollReveal as="div" className="page-intro" direction="left" delay={80}>
        <p className="eyebrow">Come say hello</p>
        <h1>Let's make<br /><span>something tasty.</span></h1>
        <p>We're cooking in Benin City and ready when you are.</p>
      </ScrollReveal>

      <div className="contact-grid">
        <div className="contact-details">
          <ScrollReveal as="div" direction="left" delay={120}>
            <small>Find us</small>
            <h2>Benin City,<br />Edo State.</h2>
          </ScrollReveal>
          <ScrollReveal as="div" direction="up" delay={180}>
            <small>Call or chat</small>
            <a href="tel:09120837198">0912 083 7198</a>
            <a href="https://wa.me/2349120837198" target="_blank" rel="noopener noreferrer">WhatsApp us ↗</a>
          </ScrollReveal>
          <ScrollReveal as="div" direction="right" delay={240}>
            <small>Hours</small>
            <p>Monday - Saturday<br />10:00am - 9:00pm</p>
          </ScrollReveal>
        </div>
        <ScrollReveal as="div" className="map-wrap" direction="right" delay={200}>
          <iframe title="Map showing Benin City, Edo State" src="https://www.google.com/maps?q=Benin%20City%2C%20Edo%20State%2C%20Nigeria&output=embed" width="100%" height="360" style={{ border: 0 }} allowFullScreen loading="lazy" />
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Contact;
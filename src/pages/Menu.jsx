import React, { useState } from 'react';
import Lightbox from '../components/Lightbox.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

const Menu = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src, alt) => setLightboxImage({ src, alt });
  const closeLightbox = () => setLightboxImage(null);

  return (
    <main className="menu-page section-wrap">
      <ScrollReveal as="div" className="page-intro" direction="left" delay={80}>
        <p className="eyebrow">Made fresh to order</p>
        <h1>Our <span>menu.</span></h1>
        <p>Big flavors, generous portions, and a little taste of home in every box.</p>
      </ScrollReveal>

      <div className="menu-layout">
        <ScrollReveal as="section" className="menu-group" direction="left" delay={120}>
          <h2>Rice dishes</h2>
          <MenuItem name="Party Jollof Rice" detail="with chicken or fish" image="/jollof-rice.png" onImageClick={openLightbox} />
          <MenuItem name="Fried Rice" detail="with chicken or fish" image="/jollof-rice.png" onImageClick={openLightbox} />
        </ScrollReveal>

        <ScrollReveal as="section" className="menu-group" direction="up" delay={150}>
          <h2>Soups & swallows</h2>
          <MenuItem name="Egusi Soup" detail="rich melon seed soup" image="/egusi-soup.png" onImageClick={openLightbox} />
          <MenuItem name="Ogbono Soup" detail="draw soup, made right" image="/ogbono-soup.png" onImageClick={openLightbox} />
          <MenuItem name="Okro Soup" detail="fresh and hearty" image="/okro-soup.png" onImageClick={openLightbox} />
          <MenuItem name="Vegetable Soup" detail="fresh, savory and filling" image="/vegetable-soup.png" onImageClick={openLightbox} />
        </ScrollReveal>

        <ScrollReveal as="section" className="menu-group" direction="right" delay={180}>
          <h2>Junk food</h2>
          <MenuItem name="Loaded Shawarma" detail="chicken, veggies & sauce" image="/shawama.png" onImageClick={openLightbox} />
          <MenuItem name="Chicken & Chips" detail="crispy, golden, satisfying" image="/chicken-and-chips.png" onImageClick={openLightbox} />
          <MenuItem name="Cold Drinks" detail="something refreshing" image="/drinks.png" onImageClick={openLightbox} />
        </ScrollReveal>
      </div>

      <ScrollReveal as="div" direction="up" delay={200}>
        <a className="btn menu-cta" href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">Order your favorites <span>↗</span></a>
      </ScrollReveal>

      <Lightbox isOpen={Boolean(lightboxImage)} onClose={closeLightbox} src={lightboxImage?.src} alt={lightboxImage?.alt} />
    </main>
  );
};

const MenuItem = ({ name, detail, image, onImageClick }) => {
  const message = encodeURIComponent(`Hello Eseosa's Kitchen! I would like to order ${name}.`);

  return (
    <a className="menu-item" href={`https://wa.me/2349120837198?text=${message}`} target="_blank" rel="noopener noreferrer">
      <img
        src={image}
        alt={name}
        onClick={(event) => {
          event.preventDefault();
          onImageClick(image, name);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onImageClick(image, name);
          }
        }}
        role="button"
        tabIndex={0}
      />
      <div><h3>{name}</h3><p>{detail}</p></div>
      <span aria-hidden="true">→</span>
    </a>
  );
};

export default Menu;
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Lightbox from '../components/Lightbox.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

const Home = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src, alt) => setLightboxImage({ src, alt });
  const closeLightbox = () => setLightboxImage(null);

  const previewItems = [
    { src: '/jollof-rice.png', alt: 'Rice dishes', title: 'Rice dishes', text: 'Jollof and fried rice with your choice of protein.' },
    { src: '/ogbono-soup.png', alt: 'Soups', title: 'Soups & swallows', text: 'Egusi, ogbono, okro, and vegetable soup.' },
    { src: '/chicken-and-chips.png', alt: 'Chicken and chips', title: 'Junk food', text: 'Shawarma, chicken and chips, plus cold drinks.' },
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <ScrollReveal as="div" direction="left" delay={80}>
            <p className="eyebrow">Home-cooked joy, delivered</p>
            <h1>A place<br /><span>like home.</span></h1>
            <p className="hero-text">Authentic Nigerian food and delicious comfort bites, made fresh in Benin City.</p>
            <div className="hero-actions">
              <a className="btn" href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">Order on WhatsApp <span>↗</span></a>
              <Link className="text-link" to="/menu">Explore our menu <span>→</span></Link>
            </div>
            <div className="hero-note"><span>★ ★ ★ ★ ★</span> Loved by foodies in Benin City</div>
          </ScrollReveal>
        </div>
        <div className="hero-visual">
          <ScrollReveal as="div" direction="right" delay={180}>
            <img
              className="hero-image"
              src="/jollof-rice.png"
              alt="Eseosa's Kitchen jollof rice"
              onClick={() => openLightbox('/jollof-rice.png', "Eseosa's Kitchen jollof rice")}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openLightbox('/jollof-rice.png', "Eseosa's Kitchen jollof rice");
                }
              }}
              role="button"
              tabIndex={0}
            />
            <div className="hero-badge"><strong>100%</strong><span>made with<br />heart</span></div>
          </ScrollReveal>
        </div>
      </section>

      <section className="specialties section-wrap">
        <div className="section-heading">
          <ScrollReveal as="div" direction="left" delay={80}>
            <p className="eyebrow">What we're serving</p>
            <h2>Good food,<br /><span>good mood.</span></h2>
          </ScrollReveal>
          <ScrollReveal as="div" direction="right" delay={140}>
            <Link className="text-link" to="/menu">See full menu <span>→</span></Link>
          </ScrollReveal>
        </div>
        <div className="food-grid">
          <ScrollReveal as="article" className="food-card food-card-large" direction="up" delay={100}>
            <img
              className="food-image"
              src="/jollof-rice.png"
              alt="Party jollof rice"
              onClick={() => openLightbox('/jollof-rice.png', 'Party jollof rice')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openLightbox('/jollof-rice.png', 'Party jollof rice');
                }
              }}
              role="button"
              tabIndex={0}
            />
            <div><h3>Party Jollof Rice</h3><p>Smoky, rich, and always worth sharing.</p></div>
          </ScrollReveal>
          <ScrollReveal as="article" className="food-card" direction="up" delay={180}>
            <img
              className="food-image"
              src="/egusi-soup.png"
              alt="Egusi soup"
              onClick={() => openLightbox('/egusi-soup.png', 'Egusi soup')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openLightbox('/egusi-soup.png', 'Egusi soup');
                }
              }}
              role="button"
              tabIndex={0}
            />
            <div><h3>Egusi Soup</h3><p>Comfort in every spoonful.</p></div>
          </ScrollReveal>
          <ScrollReveal as="article" className="food-card" direction="up" delay={260}>
            <img
              className="food-image"
              src="/shawama.png"
              alt="Loaded shawarma"
              onClick={() => openLightbox('/shawama.png', 'Loaded shawarma')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openLightbox('/shawama.png', 'Loaded shawarma');
                }
              }}
              role="button"
              tabIndex={0}
            />
            <div><h3>Loaded Shawarma</h3><p>Messy in the best possible way.</p></div>
          </ScrollReveal>
        </div>
      </section>

      <section className="home-menu-preview section-wrap">
        <div className="section-heading">
          <ScrollReveal as="div" direction="left" delay={80}>
            <p className="eyebrow">A table full of options</p>
            <h2>From our kitchen<br /><span>to your table.</span></h2>
          </ScrollReveal>
          <ScrollReveal as="div" direction="right" delay={140}>
            <p className="section-blurb">Nigerian classics, satisfying sides, and quick bites for every kind of hunger.</p>
          </ScrollReveal>
        </div>
        <div className="category-row">
          {previewItems.map((item, index) => (
            <ScrollReveal key={item.title} as="div" direction={index % 2 === 0 ? 'left' : 'right'} delay={120 + index * 120}>
              <img
                src={item.src}
                alt={item.alt}
                onClick={() => openLightbox(item.src, item.alt)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openLightbox(item.src, item.alt);
                  }
                }}
                role="button"
                tabIndex={0}
              />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal as="div" direction="up" delay={180}>
          <Link className="btn" to="/menu">Browse all dishes <span>↗</span></Link>
        </ScrollReveal>
      </section>

      <section className="process-band">
        <div className="section-wrap">
          <ScrollReveal as="div" direction="left" delay={60}>
            <p className="eyebrow">Easy as one, two, three</p>
            <h2>Your cravings,<br /><span>sorted.</span></h2>
          </ScrollReveal>
          <div className="steps">
            {[
              ['Pick your favorites', 'Browse our menu and choose what sounds good.'],
              ['Send us a message', 'Tell us your order on WhatsApp in seconds.'],
              ['Eat happy', 'We prepare, package, and get it to you.'],
            ].map(([title, text], index) => (
              <ScrollReveal key={title} as="div" direction={index % 2 === 0 ? 'up' : 'down'} delay={120 + index * 120}>
                <b>{`0${index + 1}`}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-wrap">
        <ScrollReveal as="div" direction="left" delay={80}>
          <p className="eyebrow">A little about us</p>
          <h2>Food that feels<br /><span>familiar.</span></h2>
        </ScrollReveal>
        <ScrollReveal as="div" className="about-copy" direction="right" delay={140}>
          <p>Eseosa's Kitchen is a place like home, bringing the flavors of Nigerian cooking and the joy of good junk food to tables across Benin City.</p>
          <p>From smoky party jollof and comforting soups to loaded shawarma and crispy chicken, every order is prepared with care and served generously.</p>
          <Link className="text-link" to="/contact">Visit or contact us <span>→</span></Link>
        </ScrollReveal>
      </section>

      <section className="values-strip">
        {[
          ['Freshly prepared', 'Made with care, every time.'],
          ['Big portions', 'Come hungry, leave happy.'],
          ['Benin City', 'Local food, local love.'],
        ].map(([title, text], index) => (
          <ScrollReveal key={title} as="div" direction={index % 2 === 0 ? 'up' : 'down'} delay={120 + index * 100}>
            <strong>{title}</strong>
            <span>{text}</span>
          </ScrollReveal>
        ))}
      </section>

      <section className="home-cta">
        <ScrollReveal as="div" direction="left" delay={80}>
          <p className="eyebrow">Hungry already?</p>
          <h2>Let's get you<br /><span>fed.</span></h2>
        </ScrollReveal>
        <ScrollReveal as="div" direction="right" delay={140}>
          <a className="btn" href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">Start an order <span>↗</span></a>
        </ScrollReveal>
      </section>

      <Lightbox isOpen={Boolean(lightboxImage)} onClose={closeLightbox} src={lightboxImage?.src} alt={lightboxImage?.alt} />
    </main>
  );
};

export default Home;
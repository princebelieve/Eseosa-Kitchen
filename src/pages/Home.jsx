import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Home-cooked joy, delivered</p>
          <h1>A place<br /><span>like home.</span></h1>
          <p className="hero-text">Authentic Nigerian food and delicious comfort bites, made fresh in Benin City.</p>
          <div className="hero-actions">
            <a className="btn" href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">Order on WhatsApp <span>↗</span></a>
            <Link className="text-link" to="/menu">Explore our menu <span>→</span></Link>
          </div>
          <div className="hero-note"><span>★ ★ ★ ★ ★</span> Loved by foodies in Benin City</div>
        </div>
        <div className="hero-visual">
          <img className="hero-image" src="/jollof-rice.png" alt="Eseosa's Kitchen jollof rice" />
          <div className="hero-badge"><strong>100%</strong><span>made with<br />heart</span></div>
        </div>
      </section>

      <section className="specialties section-wrap">
        <div className="section-heading"><div><p className="eyebrow">What we're serving</p><h2>Good food,<br /><span>good mood.</span></h2></div><Link className="text-link" to="/menu">See full menu <span>→</span></Link></div>
        <div className="food-grid">
          <article className="food-card food-card-large"><img className="food-image" src="/jollof-rice.png" alt="Party jollof rice" /><div><h3>Party Jollof Rice</h3><p>Smoky, rich, and always worth sharing.</p></div></article>
          <article className="food-card"><img className="food-image" src="/egusi-soup.png" alt="Egusi soup" /><div><h3>Egusi Soup</h3><p>Comfort in every spoonful.</p></div></article>
          <article className="food-card"><img className="food-image" src="/shawama.png" alt="Loaded shawarma" /><div><h3>Loaded Shawarma</h3><p>Messy in the best possible way.</p></div></article>
        </div>
      </section>
      <section className="home-menu-preview section-wrap"><div className="section-heading"><div><p className="eyebrow">A table full of options</p><h2>From our kitchen<br /><span>to your table.</span></h2></div><p className="section-blurb">Nigerian classics, satisfying sides, and quick bites for every kind of hunger.</p></div><div className="category-row"><div><img src="/jollof-rice.png" alt="Rice dishes" /><h3>Rice dishes</h3><p>Jollof and fried rice with your choice of protein.</p></div><div><img src="/ogbono-soup.png" alt="Soups" /><h3>Soups & swallows</h3><p>Egusi, ogbono, okro, and vegetable soup.</p></div><div><img src="/chicken-and-chips.png" alt="Chicken and chips" /><h3>Junk food</h3><p>Shawarma, chicken and chips, plus cold drinks.</p></div></div><Link className="btn" to="/menu">Browse all dishes <span>↗</span></Link></section>

      <section className="process-band">
        <div className="section-wrap"><p className="eyebrow">Easy as one, two, three</p><h2>Your cravings,<br /><span>sorted.</span></h2><div className="steps"><div><b>01</b><h3>Pick your favorites</h3><p>Browse our menu and choose what sounds good.</p></div><div><b>02</b><h3>Send us a message</h3><p>Tell us your order on WhatsApp in seconds.</p></div><div><b>03</b><h3>Eat happy</h3><p>We prepare, package, and get it to you.</p></div></div></div>
      </section>
      <section className="about-section section-wrap"><div><p className="eyebrow">A little about us</p><h2>Food that feels<br /><span>familiar.</span></h2></div><div className="about-copy"><p>Eseosa's Kitchen is a place like home, bringing the flavors of Nigerian cooking and the joy of good junk food to tables across Benin City.</p><p>From smoky party jollof and comforting soups to loaded shawarma and crispy chicken, every order is prepared with care and served generously.</p><Link className="text-link" to="/contact">Visit or contact us <span>→</span></Link></div></section>
      <section className="values-strip"><div><strong>Freshly prepared</strong><span>Made with care, every time.</span></div><div><strong>Big portions</strong><span>Come hungry, leave happy.</span></div><div><strong>Benin City</strong><span>Local food, local love.</span></div></section>
      <section className="home-cta"><div><p className="eyebrow">Hungry already?</p><h2>Let's get you<br /><span>fed.</span></h2></div><a className="btn" href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">Start an order <span>↗</span></a></section>
    </main>
  );
};

export default Home;
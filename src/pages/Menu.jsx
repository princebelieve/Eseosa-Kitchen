import React from 'react';

const Menu = () => {
  return (
    <main className="menu-page section-wrap">
      <div className="page-intro"><p className="eyebrow">Made fresh to order</p><h1>Our <span>menu.</span></h1><p>Big flavors, generous portions, and a little taste of home in every box.</p></div>
      <div className="menu-layout">
        <section className="menu-group">
          <h2>Rice dishes</h2>
          <MenuItem name="Party Jollof Rice" detail="with chicken or fish" image="/jollof-rice.png" />
          <MenuItem name="Fried Rice" detail="with chicken or fish" image="/jollof-rice.png" />
        </section>
        <section className="menu-group">
          <h2>Soups & swallows</h2>
          <MenuItem name="Egusi Soup" detail="rich melon seed soup" image="/egusi-soup.png" />
          <MenuItem name="Ogbono Soup" detail="draw soup, made right" image="/ogbono-soup.png" />
          <MenuItem name="Okro Soup" detail="fresh and hearty" image="/okro-soup.png" />
          <MenuItem name="Vegetable Soup" detail="fresh, savory and filling" image="/vegetable-soup.png" />
        </section>
        <section className="menu-group">
          <h2>Junk food</h2>
          <MenuItem name="Loaded Shawarma" detail="chicken, veggies & sauce" image="/shawama.png" />
          <MenuItem name="Chicken & Chips" detail="crispy, golden, satisfying" image="/chicken-and-chips.png" />
          <MenuItem name="Cold Drinks" detail="something refreshing" image="/drinks.png" />
        </section>
      </div>
      <a className="btn menu-cta" href="https://wa.me/2349120837198?text=Hello%20Eseosa's%20Kitchen!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">Order your favorites <span>↗</span></a>
    </main>
  );
};

const MenuItem = ({ name, detail, image }) => {
  const message = encodeURIComponent(`Hello Eseosa's Kitchen! I would like to order ${name}.`);

  return (
    <a className="menu-item" href={`https://wa.me/2349120837198?text=${message}`} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={name} />
      <div><h3>{name}</h3><p>{detail}</p></div>
      <span aria-hidden="true">→</span>
    </a>
  );
};

export default Menu;
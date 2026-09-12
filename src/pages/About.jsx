import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal.jsx';

const highlights = [
  {
    title: 'Freshly prepared',
    text: 'Every order is prepared with care, from smoky party jollof and comforting soups to crispy chicken and shawarma.',
  },
  {
    title: 'Big portions',
    text: 'We serve generous portions made for satisfying hunger and sharing the joy of good food.',
  },
  {
    title: 'Benin City',
    text: 'We bring local food and local love to tables across Benin City, Edo State.',
  },
];

const About = () => {
  return (
    <main className="about-page section-wrap">
      <ScrollReveal as="div" className="page-intro" direction="left" delay={80}>
        <p className="eyebrow">A little about us</p>
        <h1>A place<br /><span>like home.</span></h1>
        <p>
          Eseosa's Kitchen brings the flavors of Nigerian cooking and the joy of good comfort bites to tables across Benin City.
        </p>
      </ScrollReveal>

      <section className="about-story">
        <ScrollReveal as="div" className="story-card story-card-image" direction="left" delay={120}>
          <img src="/jollof-rice.png" alt="Eseosa's Kitchen party jollof rice" />
        </ScrollReveal>

        <ScrollReveal as="div" className="story-card story-card-copy" direction="right" delay={160}>
          <p className="eyebrow">Our story</p>
          <h2>Food that feels<br /><span>familiar.</span></h2>
          <p>
            Eseosa's Kitchen is a place like home, serving the flavors people know and love with the warmth of a familiar table.
          </p>
          <p>
            From smoky party jollof and rich egusi to loaded shawarma and crispy chicken, every order is prepared with care and
            served generously.
          </p>
        </ScrollReveal>
      </section>

      <section className="about-values">
        {highlights.map(({ title, text }, index) => (
          <ScrollReveal key={title} as="article" className="value-card" direction={index % 2 === 0 ? 'up' : 'down'} delay={120 + index * 120}>
            <strong>{title}</strong>
            <p>{text}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className="about-mission">
        <ScrollReveal as="div" direction="left" delay={120}>
          <p className="eyebrow">Our promise</p>
          <h2>Good food,<br /><span>good mood.</span></h2>
        </ScrollReveal>

        <ScrollReveal as="div" className="mission-copy" direction="right" delay={180}>
          <p>
            We believe good food should feel generous, comforting, and easy to enjoy. That is why we focus on fresh preparation,
            familiar flavors, and a warm experience from order to delivery.
          </p>
          <div className="about-actions">
            <Link className="btn" to="/menu">Explore the menu <span>↗</span></Link>
            <Link className="text-link" to="/contact">Visit us <span>→</span></Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default About;

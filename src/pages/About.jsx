import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal.jsx';

const highlights = [
  {
    title: 'Made from the heart',
    text: 'Every plate is prepared with care, using recipes that remind people of home and family tables.',
  },
  {
    title: 'Comfort food, every day',
    text: 'From hearty soups to crispy chicken and loaded shawarma, we make sure there is something for every craving.',
  },
  {
    title: 'Local and welcoming',
    text: 'We are proud to serve Benin City with warm hospitality, generous portions, and food that keeps people coming back.',
  },
];

const About = () => {
  return (
    <main className="about-page section-wrap">
      <ScrollReveal as="div" className="page-intro" direction="left" delay={80}>
        <p className="eyebrow">A little about us</p>
        <h1>Welcome to<br /><span>Eseosa's Kitchen.</span></h1>
        <p>
          We are a home-grown food brand serving comforting Nigerian classics and satisfying quick bites in Benin City,
          Edo State.
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
            Eseosa's Kitchen began with a simple idea: create a place where people can enjoy generous servings of the flavors
            they love, served with warmth and consistency.
          </p>
          <p>
            Whether it is smoky jollof rice, rich egusi, a steaming bowl of soup, or a satisfying shawarma, we aim to make every
            order feel like a comforting home-cooked experience.
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
          <p className="eyebrow">Why people pick us</p>
          <h2>Fresh food,<br /><span>kind service.</span></h2>
        </ScrollReveal>

        <ScrollReveal as="div" className="mission-copy" direction="right" delay={180}>
          <p>
            We believe good food should be accessible, satisfying, and memorable. That is why we focus on fresh ingredients,
            careful preparation, and quick customer service from order to delivery.
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

import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/2349120837198', icon: FaWhatsapp },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: FaTiktok },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { label: 'X', href: 'https://x.com/', icon: FaXTwitter },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: FaYoutube },
];

const SocialLinks = () => {
  return (
    <nav className="social-links" aria-label="Social media links">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Eseosa's Kitchen on ${label}`}
          title={label}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;

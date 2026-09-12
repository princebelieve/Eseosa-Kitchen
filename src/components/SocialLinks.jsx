import React from 'react';
import { FaFacebookF, FaInstagram, FaShareNodes, FaTiktok, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: FaTiktok },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { label: 'X', href: 'https://x.com/', icon: FaXTwitter },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: FaYoutube },
];

const SocialLinks = () => {
  const handleShareClick = async (event) => {
    event.preventDefault();

    const shareData = {
      title: "Eseosa's Kitchen",
      text: 'Check out Eseosa\'s Kitchen in Benin City.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      // Fail silently to preserve the app flow.
    }
  };

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
      <button
        type="button"
        className="social-link social-share"
        aria-label="Share Eseosa's Kitchen"
        title="Share"
        onClick={handleShareClick}
      >
        <FaShareNodes aria-hidden="true" />
      </button>
    </nav>
  );
};

export default SocialLinks;

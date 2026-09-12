import React, { useState } from 'react';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Eseosa\'s Kitchen',
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
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      }
    } catch (error) {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1500);
        } catch {
          // Ignore clipboard errors silently.
        }
      }
    }
  };

  return (
    <button
      type="button"
      className="share-float"
      aria-label="Share Eseosa's Kitchen"
      title={copied ? 'Link copied' : 'Share'}
      onClick={handleShare}
    >
      {copied ? '✓' : '↗'}
    </button>
  );
};

export default ShareButton;

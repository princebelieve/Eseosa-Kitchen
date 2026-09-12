import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  as: Component = 'div',
  children,
  className = '',
  direction = 'up',
  distance = 36,
  delay = 0,
  duration = 700,
  threshold = 0.2,
  rootMargin = '0px 0px -30px 0px',
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const hasObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window;
    if (!hasObserver) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <Component
      ref={ref}
      className={`reveal-element ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      data-direction={direction}
      style={{
        '--reveal-distance': `${distance}px`,
        '--reveal-delay': `${delay}ms`,
        '--reveal-duration': `${duration}ms`,
      }}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;

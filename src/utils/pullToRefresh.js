export const initPullToRefresh = ({ onRefresh, threshold = 90 } = {}) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  let startY = 0;
  let pullDistance = 0;
  let isPulling = false;

  const handleTouchStart = (event) => {
    if (window.scrollY > 0) {
      return;
    }

    startY = event.touches[0].clientY;
    pullDistance = 0;
    isPulling = true;
  };

  const handleTouchMove = (event) => {
    if (!isPulling || window.scrollY > 0) {
      return;
    }

    const currentY = event.touches[0].clientY;
    pullDistance = Math.max(0, currentY - startY);
  };

  const handleTouchEnd = () => {
    if (pullDistance >= threshold && typeof onRefresh === 'function') {
      onRefresh();
    }

    pullDistance = 0;
    isPulling = false;
  };

  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: true });
  window.addEventListener('touchend', handleTouchEnd, { passive: true });

  return () => {
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };
};

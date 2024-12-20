import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down';

export function useScrollDirection(
  initialDirection: ScrollDirection = 'down',
  threshold: number = 10
): ScrollDirection {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(initialDirection);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0; // Prevent negative scrollY
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollDirection;
}

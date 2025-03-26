import { useEffect, useState } from 'react';

export const useResolution = () => {
  const screen = {
    mobile: 612,
    tablet: 1024,
  };

  const { innerWidth } = window;
  const [isMobile, setIsMobile] = useState(innerWidth <= screen.mobile);
  const [isTablet, setIsTablet] = useState(innerWidth <= screen.tablet && innerWidth > screen.mobile);
  const [isDesktop, setIsDesktop] = useState(innerWidth > screen.tablet);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      if (!(event.currentTarget instanceof Window)) return;
      const width = event.currentTarget.innerWidth;
      setIsDesktop(width > screen.tablet);
      setIsTablet(width <= screen.tablet && width > screen.mobile);
      setIsMobile(width <= screen.mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

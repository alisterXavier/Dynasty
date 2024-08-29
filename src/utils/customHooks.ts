import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useSmallDeviceSize = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setState(window.innerWidth as number);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state && state <= 1024;
};

export const useIsAdmin = () => {
  const [state, setState] = useState(false);
  const location = usePathname();
  useEffect(() => {
    const handleResize = () => {
      if (location.includes('/admin')) setState(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location]);

  return state;
};

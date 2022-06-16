import { useEffect, useState } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const useBreakpoint = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });

      if (window.innerWidth < 576) setBreakpoint('xs');
      else if (window.innerWidth < 768) setBreakpoint('sm');
      else if (window.innerWidth < 992) setBreakpoint('md');
      else if (window.innerWidth < 1200) setBreakpoint('lg');
      else if (window.innerWidth < 1400) setBreakpoint('xl');
      else setBreakpoint('xxl');
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export { useBreakpoint };

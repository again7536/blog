import { useEffect, useState, useCallback } from 'react';
import { throttle } from 'lodash';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const useBreakpoint = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');
  const handleResize = useCallback(() => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });

    if (window.innerWidth < 576) setBreakpoint('xs');
    else if (window.innerWidth < 768) setBreakpoint('sm');
    else if (window.innerWidth < 992) setBreakpoint('md');
    else if (window.innerWidth < 1200) setBreakpoint('lg');
    else if (window.innerWidth < 1400) setBreakpoint('xl');
    else setBreakpoint('xxl');
  }, []);
  const throttledResize = throttle(handleResize, 200);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', throttledResize);

    return () => window.removeEventListener('resize', throttledResize);
  }, []);

  return breakpoint;
};

export { useBreakpoint };

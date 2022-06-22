import { useEffect, useState, useCallback } from 'react';
import { throttle } from 'lodash';
import variables from 'src/styles/variables.module.scss';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Size = {
  [key in Breakpoint]: number;
};

const breakpoints = variables as unknown as Size;

const useBreakpoint = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');

  const handleResize = useCallback(() => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });

    if (window.innerWidth < breakpoints.sm) setBreakpoint('xs');
    else if (window.innerWidth < breakpoints.md) setBreakpoint('sm');
    else if (window.innerWidth < breakpoints.lg) setBreakpoint('md');
    else if (window.innerWidth < breakpoints.xl) setBreakpoint('lg');
    else if (window.innerWidth < breakpoints.xxl) setBreakpoint('xl');
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

export { useBreakpoint, breakpoints };

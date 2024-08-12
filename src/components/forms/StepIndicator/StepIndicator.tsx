import { useMemo } from 'react';
import { useLocation } from '@tanstack/react-router';

const stepWidthMapper = {
  '/contact': 'w-1/4',
  '/personal': 'w-1/2',
  '/legal': 'w-3/4',
  '/summary': 'w-full',
};

const StepIndicator = () => {
  const { pathname } = useLocation();
  const stepWidth = useMemo(() => {
    return stepWidthMapper[pathname as keyof typeof stepWidthMapper];
  }, [pathname]);

  return (
    <div className='mt-12 w-full h-2.5 bg-gray-200 rounded-xl overflow-hidden'>
      <div className={`h-full bg-rainbow rounded-xl ${stepWidth}`}></div>
    </div>
  );
};

export default StepIndicator;

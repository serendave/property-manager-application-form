import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { Header } from '../components';
import { useMemo } from 'react';

const Index = () => {
  const location = useLocation();
  const isRootRoute = location.pathname === '/';

  const bgClass = useMemo(() => {
    return !isRootRoute ? 'bg-formBackground bg-cover bg-center' : '';
  }, [isRootRoute]);

  return (
    <>
      <Header onLogin={() => alert('Log In')} onCreateAccount={() => alert('Sign up')} />
      <main className={`flex items-center justify-center ${bgClass}`}>
        <div className='bg-white bg-opacity-70 backdrop-blur-sm w-full min-h-inherit flex items-center justify-center'>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export const Route = createRootRoute({
  component: () => <Index />,
});

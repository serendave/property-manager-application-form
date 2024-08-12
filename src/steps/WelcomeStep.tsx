import { useNavigate } from '@tanstack/react-router';
import { Button } from '../components';

const WelcomeStep = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-end gap-4 text-center'>
      <h1 className='text-7xl animate-appearFromRight'>Welcome to Buena</h1>
      <p className='text-2xl mb-4 opacity-0 animate-appearFromLeft'>
        Start by filling your information
      </p>
      <div className='opacity-0 animate-appear'>
        <Button size='large' label='Next ->' onClick={() => navigate({ to: '/contact' })} />
      </div>
    </div>
  );
};

export default WelcomeStep;

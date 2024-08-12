import { useNavigate } from '@tanstack/react-router';
import { HomeIcon } from '../../assets/svg';
import Button from '../Button/Button';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className='flex items-center h-20 border-b border-b-[#0000001a] py-4 px-5 justify-between'>
      <div className='flex items-center cursor-pointer' onClick={() => navigate({ to: '/' })}>
        <HomeIcon className='w-8 h-8' />
        <h1 className='text-xl font-semibold ml-2'>Buena</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className='text-sm mr-2.5 text-slate-700'>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size='small' onClick={onLogout} label='Log out' />
          </>
        ) : (
          <div className='flex gap-2'>
            <Button size='small' onClick={onLogin} label='Log in' />
            <Button primary size='small' onClick={onCreateAccount} label='Sign up' />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import cn from 'classnames';
import { useMemo } from 'react';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  type?: HTMLButtonElement['type'];
  onClick?: () => void;
}

const Button = ({ primary = false, size = 'medium', label, ...props }: ButtonProps) => {
  const buttonColor = useMemo(() => {
    return cn({
      'text-black bg-[#fae66e]': primary,
      'text-black bg-transparent': !primary,
    });
  }, [primary]);

  const buttonSize = useMemo(() => {
    return cn({
      'text-sm px-3 py-2': size === 'small',
      'text-base px-4 py-2': size === 'medium',
      'text-lg px-5 py-3': size === 'large',
    });
  }, [size]);

  const buttonClass = useMemo(() => {
    return cn(
      'font-bold rounded-3xl border border-[#00000026] inline-block cursor-pointer',
      buttonSize,
      buttonColor
    );
  }, [buttonSize, buttonColor]);

  return (
    <button className={buttonClass} {...props}>
      {label}
    </button>
  );
};

export default Button;

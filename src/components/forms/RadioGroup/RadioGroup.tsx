import { useMemo } from 'react';
import cn from 'classnames';

export interface RadioGroupProps {
  value: string;
  name: string;
  direction: 'row' | 'column';
  items: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({ items, value, name, direction = 'row', onChange }: RadioGroupProps) => {
  const classNameWrapper = useMemo(() => {
    return cn({
      'flex-row gap-6': direction === 'row',
      'flex-col gap-2': direction === 'column',
    });
  }, [direction]);

  return (
    <div role='radiogroup' className={`inline-flex ${classNameWrapper}`}>
      {items.map((item) => {
        const itemId = `${name}-${item.value}`;
        return (
          <label className='inline-flex items-center cursor-pointer' key={itemId} htmlFor={itemId}>
            <input
              role='radio'
              id={itemId}
              type='radio'
              className='peer hidden'
              name={name}
              checked={value === item.value}
              onChange={onChange}
              value={item.value}
            />
            <div className='w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-white peer-checked:bg-[#fae66e] transition duration-150 ease-in-out'></div>
            <span className='ml-2 text-gray-700'>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioGroup;

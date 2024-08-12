export interface InputFieldProps {
  name?: string;
  type?: HTMLInputElement['type'];
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = (props: InputFieldProps) => {
  return (
    <input
      {...props}
      className='py-2 px-4 text-base bg-transparent rounded-2xl border border-[#00000026] focus:outline-none accent-yellow-500'
    />
  );
};

export default InputText;

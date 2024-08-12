import { ChangeEvent, ComponentProps, ElementType, useCallback, useEffect } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';

export type FormFieldProps<T extends ElementType> = {
  as: T;
  id: string;
  label: string;
  retuired?: boolean;
} & ComponentProps<T>;

function FormField<T extends ElementType>({
  as: FieldComponent,
  label,
  name,
  required,
  ...rest
}: FormFieldProps<T>) {
  const { register, resetField, clearErrors, watch, setValue } = useFormContext();
  const { errors } = useFormState();

  useEffect(() => {
    register(name, { required: required ? `${label} is required` : false });
    return () => {
      resetField(name);
      clearErrors(name);
    };
  }, []);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.target.value);
  }, []);

  return (
    <div className='inline-flex flex-col'>
      <label htmlFor={name} className='form-label text-sm mb-2 text-slate-800'>
        {label}
      </label>
      <FieldComponent value={watch(name)} onChange={onChangeHandler} {...rest} />
      {errors[name] ? (
        <small className='text-red-400 mt-1 text-[12px]'>{errors[name].message as string}</small>
      ) : null}
    </div>
  );
}

export default FormField;

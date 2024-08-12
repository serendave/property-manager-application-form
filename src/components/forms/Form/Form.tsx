import { useForm, FormProvider, FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';
import StepIndicator from '../StepIndicator/StepIndicator';

interface FormProps<TFieldValues extends FieldValues> {
  onSubmit: SubmitHandler<TFieldValues>;
  defaultValues?: TFieldValues;
  title: string;
  children: React.ReactNode;
  actions: React.ReactNode;
}

function Form<TFieldValues extends FieldValues = FieldValues>({
  actions,
  children,
  title,
  onSubmit,
  ...rest
}: UseFormProps<TFieldValues> & FormProps<TFieldValues>) {
  const methods = useForm(rest);

  return (
    <FormProvider {...methods}>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:min-w-[700px] min-w-full'
        onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        noValidate
      >
        <legend className='block text-slate-700 mb-12 text-2xl font-bold'>{title}</legend>
        <fieldset className='mt-5 flex flex-col gap-6'>{children}</fieldset>
        <StepIndicator />
        <div className='flex items-center gap-2 justify-end mt-10'>{actions}</div>
      </form>
    </FormProvider>
  );
}

export default Form;

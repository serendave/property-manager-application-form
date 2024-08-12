import { useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useMultistepFormState } from '../providers';
import { MultiStepFormData } from '../interfaces';
import { Form, FormField, InputText, RadioGroup } from '../components/forms';
import { Button } from '../components';

const incomeOptions = [
  {
    label: '0 - 1.000€',
    value: '0-1000',
  },
  {
    label: '1.000 - 2.000€',
    value: '1.000-2.000',
  },
  {
    label: '2.000 - 3.000€',
    value: '3.000 - 4.000',
  },
  {
    label: 'More than 4.000€',
    value: '4.000+',
  },
];

const LegalInformationStep = () => {
  const { formData, setFormData } = useMultistepFormState();
  const navigate = useNavigate();

  const submitData = useCallback(
    (data: MultiStepFormData['legal']) => {
      setFormData({ ...formData, legal: data });
      navigate({ to: '/summary' });
    },
    [navigate]
  );

  return (
    <Form
      onSubmit={submitData}
      title='Legal information'
      defaultValues={formData.legal}
      actions={
        <>
          <Button label='Back' onClick={() => navigate({ to: '/personal' })} />
          <Button label='Next ->' type='submit' primary />
        </>
      }
    >
      <FormField
        as={InputText}
        name='residence'
        label='Residence'
        placeholder='Residence'
        required
      />
      <FormField
        as={InputText}
        name='city'
        label='City'
        placeholder='Please specify your city'
        required
      />
      <FormField
        as={RadioGroup}
        direction='column'
        required
        name='income'
        label='Your income / month'
        items={incomeOptions}
      />
    </Form>
  );
};

export default LegalInformationStep;

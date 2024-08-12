import { useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useMultistepFormState } from '../providers';
import { MultiStepFormData } from '../interfaces';
import { Form, FormField, InputText, RadioGroup } from '../components/forms';
import { Button } from '../components';

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Diverse', value: 'diverse' },
];

const PersonalInformationStep = () => {
  const { formData, setFormData } = useMultistepFormState();
  const navigate = useNavigate();

  const submitData = useCallback(
    (data: MultiStepFormData['personal']) => {
      setFormData({ ...formData, personal: data });
      navigate({ to: '/legal' });
    },
    [navigate]
  );

  return (
    <Form
      onSubmit={submitData}
      defaultValues={formData.personal}
      title='Personal information'
      actions={
        <>
          <Button label='Back' onClick={() => navigate({ to: '/contact' })} />
          <Button label='Next ->' type='submit' primary />
        </>
      }
    >
      <FormField as={RadioGroup} name='gender' label='Gender' items={genderOptions} required />
      <FormField as={InputText} name='address' label='Address' required />
      <FormField as={InputText} name='postOffice' label='Post number' type='number' />
      <FormField as={InputText} name='dateOfBirth' label='Date of Birth' required type='date' />
    </Form>
  );
};

export default PersonalInformationStep;

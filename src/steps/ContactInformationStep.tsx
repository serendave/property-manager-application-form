import { useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Form, FormField, InputText } from '../components/forms';
import { useMultistepFormState } from '../providers';
import { MultiStepFormData } from '../interfaces';
import { Button } from '../components';

const ContactInformationStep = () => {
  const { formData, setFormData } = useMultistepFormState();
  const navigate = useNavigate();

  const submitData = useCallback(
    (data: MultiStepFormData['contact']) => {
      setFormData({ ...formData, contact: data });
      navigate({ to: '/personal' });
    },
    [navigate]
  );

  return (
    <Form
      onSubmit={submitData}
      defaultValues={formData.contact}
      title='Contact information'
      actions={
        <>
          <Button label='Back' onClick={() => navigate({ to: '/' })} />
          <Button label='Next ->' type='submit' primary />
        </>
      }
    >
      <FormField as={InputText} name='firstName' label='First Name' required />
      <FormField as={InputText} name='lastName' label='Last Name' required />
      <FormField as={InputText} name='email' label='Email' type='email' required />
      <FormField as={InputText} name='password' label='Password' type='password' required />
    </Form>
  );
};

export default ContactInformationStep;

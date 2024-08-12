import { useNavigate } from '@tanstack/react-router';
import { Button, Form } from '../components';
import SummarySection from '../components/forms/SummarySection/SummarySection';
import { useMultistepFormState } from '../providers';
import { useMemo } from 'react';

const SummaryStep = () => {
  const { formData } = useMultistepFormState();
  const navigate = useNavigate();

  const submitHandler = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  const formattedGender = useMemo(() => {
    if (formData.personal?.gender) {
      return formData.personal?.gender[0].toUpperCase() + formData.personal.gender.slice(1);
    }

    return 'N/A';
  }, [formData.personal]);

  return (
    <Form
      title='Summary'
      onSubmit={submitHandler}
      actions={<Button type='submit' label='Submit' primary />}
    >
      <SummarySection
        title='Contact Information'
        onEditClick={() => navigate({ to: '/contact' })}
        items={[
          { label: 'First name', value: formData.contact?.firstName },
          { label: 'Last name', value: formData.contact?.lastName },
          { label: 'Email', value: formData.contact?.email },
        ]}
      />
      <SummarySection
        title='Personal Information'
        onEditClick={() => navigate({ to: '/personal' })}
        items={[
          { label: 'Gender', value: formattedGender },
          { label: 'Address', value: formData.personal?.address },
          { label: 'Date of Birth', value: formData.personal?.dateOfBirth },
        ]}
      />
      <SummarySection
        title='Legal Information'
        onEditClick={() => navigate({ to: '/legal' })}
        items={[
          { label: 'Residence', value: formData.legal?.residence },
          { label: 'City', value: formData.legal?.city },
          {
            label: 'Income',
            value: formData.legal ? formData.legal?.income?.toString() + '€' : 'N/A',
          },
        ]}
      />
    </Form>
  );
};

export default SummaryStep;

import { createFileRoute } from '@tanstack/react-router';
import { ContactInformationStep } from '../steps';

export const Route = createFileRoute('/contact')({
  component: () => <ContactInformationStep />,
});

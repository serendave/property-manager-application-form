import { createFileRoute } from '@tanstack/react-router';
import { LegalInformationStep } from '../steps';

export const Route = createFileRoute('/legal')({
  component: () => <LegalInformationStep />,
});

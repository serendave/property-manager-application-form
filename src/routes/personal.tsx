import { createFileRoute } from '@tanstack/react-router';
import { PersonalnformationStep } from '../steps';

export const Route = createFileRoute('/personal')({
  component: () => <PersonalnformationStep />,
});

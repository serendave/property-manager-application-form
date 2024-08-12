import { createFileRoute } from '@tanstack/react-router';
import { SummaryStep } from '../steps';

export const Route = createFileRoute('/summary')({
  component: () => <SummaryStep />,
});

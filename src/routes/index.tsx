import { createFileRoute } from '@tanstack/react-router';
import { WelcomeStep } from '../steps';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return <WelcomeStep />;
}

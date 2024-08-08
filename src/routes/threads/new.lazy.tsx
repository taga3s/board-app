import { createLazyFileRoute } from '@tanstack/react-router';
import { New } from '../../features/new/components/New';

export const Route = createLazyFileRoute('/threads/new')({
  component: () => <New />,
});

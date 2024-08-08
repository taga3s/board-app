import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/threads/new')({
  component: () => <div>Hello /threads/new!</div>,
});

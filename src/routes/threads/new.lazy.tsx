import { createLazyFileRoute } from '@tanstack/react-router';

import { NewThread } from '../../features/threads/components/newThread/NewThread';

export const Route = createLazyFileRoute('/threads/new')({
  component: () => <NewThread />,
});

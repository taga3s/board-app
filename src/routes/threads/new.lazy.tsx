import { createLazyFileRoute } from '@tanstack/react-router';

import { NewThread } from '../../features/newThread/components/NewThread';

export const Route = createLazyFileRoute('/threads/new')({
  component: () => <NewThread />,
});

import { createLazyFileRoute } from '@tanstack/react-router';

import { Threads } from '../features/threads/components/Threads';

export const Route = createLazyFileRoute('/')({
  component: () => <Threads />,
});

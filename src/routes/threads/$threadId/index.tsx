import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { Posts } from '../../../features/posts/components/Posts';

const searchSchema = z.object({
  title: z.string().catch('Invalid title'),
});

type searchSchema = z.infer<typeof searchSchema>;

export const Route = createFileRoute('/threads/$threadId/')({
  component: () => <Posts />,
  validateSearch: searchSchema,
});

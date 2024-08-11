import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { Threads } from '../features/threads/components/Threads';

const searchSchema = z.object({
  offset: z.number().catch(0),
});

type searchSchema = z.infer<typeof searchSchema>;

export const Route = createFileRoute('/')({
  component: () => <Threads />,
  validateSearch: searchSchema,
});

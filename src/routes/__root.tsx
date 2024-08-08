import { QueryClientProvider } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';

import { AppLayout } from '../components/layouts';
import { queryClient } from '../config/api';

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </QueryClientProvider>
  ),
});

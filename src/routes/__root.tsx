import { QueryClientProvider } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';

import { AppLayout } from '../components/layouts';
import { queryClient } from '../api';
import { ErrorBoundary } from 'react-error-boundary';

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <ErrorBoundary fallback={<p>Sorry, something went wrong.</p>}>
          <Outlet />
        </ErrorBoundary>
      </AppLayout>
    </QueryClientProvider>
  ),
});

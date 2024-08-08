import { useSuspenseQuery } from '@tanstack/react-query';

import { apiClient } from '../../../api/apiClient';

type Thread = {
  id: string;
  title: string;
};

const useListThreads = (params: { offset: number }) => {
  return useSuspenseQuery<Thread[]>({
    queryKey: [`threads-offset-${params.offset}`],
    queryFn: () => apiClient.GET<Thread[]>(`/threads?offset=${params.offset}`),
  });
};

export { useListThreads };

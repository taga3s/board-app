import { useSuspenseQuery } from '@tanstack/react-query';

import { BASE_URL } from '../../../config/api/consts';

const fetcher = async (params: { offset: number }) => {
  const response = await fetch(`${BASE_URL}/threads?offset=${params.offset}`);

  if (!response.ok) {
    throw new Error('Failed to fetch threads');
  }

  return response.json();
};

type Thread = {
  id: string;
  title: string;
};

const useListThreads = (params: { offset: number }) => {
  return useSuspenseQuery<Thread[]>({ queryKey: [`threads-offset-${params.offset}`], queryFn: () => fetcher({ offset: params.offset }) });
};

export { useListThreads };

import { useSuspenseQuery } from '@tanstack/react-query';

import { apiClient } from '../../../api/apiClient';

type Posts = {
  threadId: string;
  posts: {
    id: string;
    post: string;
  }[];
};

const useListPosts = (params: { id: string; offset: number }) => {
  return useSuspenseQuery<Posts>({
    queryKey: [`posts-offset-${params.id}`],
    queryFn: () => apiClient.GET<Posts>(`/threads/${params.id}/posts?offset=${params.offset}`),
    staleTime: 1000 * 60 * 5,
  });
};

export { useListPosts };

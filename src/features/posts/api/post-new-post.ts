import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../../api';
import { apiClient } from '../../../api/apiClient';

const usePostNewPost = () => {
  return useMutation({
    mutationFn: (params: { threadId: string; post: string }) => apiClient.POST(`/threads/${params.threadId}/posts`, { post: params.post }),
    onSuccess: (_, params) => {
      queryClient.refetchQueries({ queryKey: [`posts-${params.threadId}`] });
    },
    onError: () => {
      throw new Error('Failed to post new post');
    },
  });
};

export { usePostNewPost };

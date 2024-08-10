import { useMutation } from '@tanstack/react-query';

import { apiClient } from '../../../api/apiClient';
import { queryClient } from '../../../api';

const usePostThread = () => {
  return useMutation({
    mutationFn: (params: { title: string }) => apiClient.POST('/threads', params),
    onSuccess: () => {
      // Clear the cache to refetch the threads
      queryClient.clear();
    },
    onError: () => {
      throw new Error('Failed to post thread');
    },
  });
};

export { usePostThread };

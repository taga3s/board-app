import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../../api';
import { apiClient } from '../../../api/apiClient';

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

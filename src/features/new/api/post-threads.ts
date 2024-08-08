import { useMutation } from '@tanstack/react-query';

import { apiClient } from '../../../api/apiClient';

const usePostThreads = () => {
  return useMutation({
    mutationFn: (params: { title: string }) => apiClient.POST('/threads', params),
    onError: () => {
      throw new Error('Failed to post thread');
    },
  });
};

export { usePostThreads };

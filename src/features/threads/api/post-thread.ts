import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../../api';
import { apiClient } from '../../../api/apiClient';
import { notifyFailure, notifySuccess } from '../../../utils/toast';

const usePostThread = () => {
  return useMutation({
    mutationFn: (params: { title: string }) => apiClient.POST('/threads', params),
    onSuccess: () => {
      notifySuccess('スレッドが作成されました。');
      // Clear the cache to refetch the threads
      queryClient.clear();
    },
    onError: () => {
      notifyFailure('スレッドの作成に失敗しました。\n時間をおいて再度お試しください。');
    },
  });
};

export { usePostThread };

import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../../api';
import { apiClient } from '../../../api/apiClient';
import { notifyFailure, notifySuccess } from '../../../utils/toast';

const usePostNewPost = () => {
  return useMutation({
    mutationFn: (params: { threadId: string; post: string }) => apiClient.POST(`/threads/${params.threadId}/posts`, { post: params.post }),
    onSuccess: (_, params) => {
      notifySuccess('コメントが投稿されました。');
      queryClient.refetchQueries({ queryKey: [`posts-${params.threadId}`] });
    },
    onError: () => {
      notifyFailure('コメントの投稿に失敗しました。\n時間をおいて再度お試しください。');
    },
  });
};

export { usePostNewPost };

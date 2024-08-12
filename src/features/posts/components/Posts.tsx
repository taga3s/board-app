import { useRouter } from '@tanstack/react-router';
import { Suspense } from 'react';
import { SlArrowLeft } from 'react-icons/sl';

import { Message } from '../../../components';
import { Route } from '../../../routes/threads/$threadId';
import { postsStyle } from './Posts.css';
import { PostsList } from './PostsList';
import { PostsNewPostForm } from './PostsNewPostForm';

const Posts = () => {
  const { threadId } = Route.useParams();
  const { title } = Route.useSearch();
  const router = useRouter();

  return (
    <div className={postsStyle.wrapper}>
      <button className={postsStyle.back} onClick={() => router.history.back()}>
        <SlArrowLeft />
        一覧に戻る
      </button>
      <h2 className={postsStyle.title}>{decodeURIComponent(title)}</h2>
      <PostsNewPostForm threadId={threadId} />
      <Suspense fallback={<Message message='読み込み中...' />}>
        <PostsList threadId={threadId} />
      </Suspense>
    </div>
  );
};

export { Posts };

import { FC } from 'react';

import { useListPosts } from '../api/list-posts';
import { postsListStyle } from './PostsList.css';
import { PostsListItem } from './PostsListItem';

const DEFAULT_OFFSET = 0;

type Props = {
  threadId: string;
};

const PostsList: FC<Props> = ({ threadId }) => {
  const { data } = useListPosts({ id: threadId, offset: DEFAULT_OFFSET });

  return (
    <>
      {data.posts.length > 0 ? (
        <ul className={postsListStyle.list}>{data?.posts.map((post) => <PostsListItem key={post.id} post={post.post} />)}</ul>
      ) : (
        <div className={postsListStyle.noDataMessage}>
          <span>最初のコメントをしましょう！</span>
        </div>
      )}
    </>
  );
};

export { PostsList };

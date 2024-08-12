import { FC } from 'react';

import { useListPosts } from '../api/list-posts';
import { postsListStyle } from './PostsList.css';
import { PostsListItem } from './PostsListItem';

type Props = {
  threadId: string;
};

const PostsList: FC<Props> = ({ threadId }) => {
  const { data } = useListPosts({ id: threadId, offset: 0 });

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

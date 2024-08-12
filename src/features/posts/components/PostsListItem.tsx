import { FC } from 'react';

import { postsListItemStyle } from './PostsListItem.css';

type Props = {
  post: string;
};

const PostsListItem: FC<Props> = ({ post }) => {
  return <div className={postsListItemStyle.wrapper}>{post}</div>;
};

export { PostsListItem };

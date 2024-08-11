import { Link } from '@tanstack/react-router';
import { FC } from 'react';

import { threadsListItemStyle } from './ThreadsListItem.css';

type Props = {
  id: string;
  title: string;
};

const ThreadsListItem: FC<Props> = ({ title, id }) => {
  return (
    <Link className={threadsListItemStyle.wrapper} to={`/threads/${id}/`}>
      <span>{title}</span>
    </Link>
  );
};

export { ThreadsListItem };

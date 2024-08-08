import { FC } from 'react';

import { useListThreads } from '../api/list-threads';
import { threadsListStyle } from './ThreadsList.css';
import { ThreadsListItem } from './ThreadsListItem';

type Props = {
  offset: number;
};

const ThreadsList: FC<Props> = ({ offset }) => {
  const { data } = useListThreads({ offset });

  return (
    <div className={threadsListStyle.list}>
      {data?.map((thread) => <ThreadsListItem id={thread.id} title={thread.title} key={thread.id} />)}
    </div>
  );
};

export { ThreadsList };

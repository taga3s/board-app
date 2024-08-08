import { threadListStyle } from './ThreadList.css';
import { useListThreads } from '../api/list-threads';
import { ThreadListItem } from './ThreadListItem';
import { FC } from 'react';

type Props = {
  offset: number;
};

const ThreadList: FC<Props> = ({ offset }) => {
  const { data } = useListThreads({ offset });

  return (
    <div className={threadListStyle.list}>
      {data?.map((thread) => <ThreadListItem id={thread.id} title={thread.title} key={thread.id} />)}
    </div>
  );
};

export { ThreadList };

import { FC } from 'react';

import { threadsListItemStyle } from './ThreadsListItem.css';

type Props = {
  id: string;
  title: string;
};

const ThreadsListItem: FC<Props> = ({ title }) => {
  return (
    <div className={threadsListItemStyle.wrapper}>
      <span>{title}</span>
    </div>
  );
};

export { ThreadsListItem };

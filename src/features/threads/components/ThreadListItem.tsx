import { FC } from 'react';
import { threadListItemStyle } from './ThreadListItem.css';

type Props = {
  id: string;
  title: string;
};

const ThreadListItem: FC<Props> = ({ id, title }) => {
  return (
    <div className={threadListItemStyle.wrapper}>
      <span>{title}</span>
    </div>
  );
};

export { ThreadListItem };

import { FC } from 'react';

import { messageStyle } from './Message.css';

type Props = {
  message: string;
};

const Message: FC<Props> = (props) => {
  const { message } = props;
  return <span className={messageStyle.layout}>{message}</span>;
};

export { Message };

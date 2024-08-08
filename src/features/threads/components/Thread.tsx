import { Suspense, useState } from 'react';
import { threadStyle } from './Thread.css';
import { ThreadList } from './ThreadList';
import { threadListStyle } from './ThreadList.css';
import { Message } from '../../../components/ui/Message';

const Thread = () => {
  const [offset, setOffset] = useState(0);

  const handleClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setOffset(offset - 10);
    } else {
      setOffset(offset + 10);
    }
  };

  return (
    <div className={threadStyle.wrapper}>
      <h2 className={threadStyle.title}>新着スレッド</h2>
      <div className={threadListStyle.switcher}>
        {offset > 0 && <button onClick={() => handleClick('prev')}>前へ</button>}
        <button onClick={() => handleClick('next')}>次へ</button>
        <div>{offset + 1} ~ {offset + 10} 件</div>
      </div>
      <Suspense fallback={<Message message='読み込み中...' />}>
        <ThreadList offset={offset} />
      </Suspense>
    </div>
  );
};

export { Thread };

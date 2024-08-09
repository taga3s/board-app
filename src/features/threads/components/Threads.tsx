import { startTransition, Suspense, useState } from 'react';

import { Message } from '../../../components/ui/Message';
import { threadsStyle } from './Threads.css';
import { ThreadsList } from './ThreadsList';

const Threads = () => {
  const [offset, setOffset] = useState(0);

  const handleClick = (direction: 'prev' | 'next') => {
    startTransition(() => {
      if (direction === 'prev') {
        setOffset(offset - 10);
      } else {
        setOffset(offset + 10);
      }
    })
  };

  return (
    <div className={threadsStyle.wrapper}>
      <h2 className={threadsStyle.title}>新着スレッド</h2>
      <div className={threadsStyle.switcher}>
        {offset > 0 && <button onClick={() => handleClick('prev')}>前へ</button>}
        <button onClick={() => handleClick('next')}>次へ</button>
        <div>
          {offset + 1} ~ {offset + 10} 件目
        </div>
      </div>
      <Suspense fallback={<Message message='読み込み中...' />}>
        <ThreadsList offset={offset} />
      </Suspense>
    </div>
  );
};

export { Threads };

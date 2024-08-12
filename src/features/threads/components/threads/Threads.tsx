import { Link } from '@tanstack/react-router';
import { Suspense } from 'react';

import { Message } from '../../../../components';
import { Route } from '../../../../routes';
import { threadsStyle } from './Threads.css';
import { ThreadsList } from './ThreadsList';

const Threads = () => {
  const { offset } = Route.useSearch();

  return (
    <div className={threadsStyle.wrapper}>
      <h2 className={threadsStyle.title}>新着スレッド</h2>
      <div className={threadsStyle.switcher}>
        {offset > 0 && (
          <Link from={`/`} search={() => ({ offset: offset - 10 })}>
            前へ
          </Link>
        )}
        <Link from={`/`} search={() => ({ offset: offset + 10 })}>
          次へ
        </Link>
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

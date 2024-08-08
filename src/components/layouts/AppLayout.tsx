import { FC, ReactNode } from 'react';

import { Header } from '../ui/Header';

type Props = {
  children: ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export { AppLayout };

import { FC, ReactNode } from 'react';

import { Header } from '..';

type Props = {
  children: ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export { AppLayout };

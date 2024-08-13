import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { Header } from '..';

type Props = {
  children: ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Toaster />
    </>
  );
};

export { AppLayout };

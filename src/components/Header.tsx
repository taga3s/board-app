import { Link } from '@tanstack/react-router';

import { headerStyle } from './Header.css';

const Header = () => {
  return (
    <header className={headerStyle.wrapper}>
      <Link className={headerStyle.title} to='/' search={() => ({ offset: 0 })}>
        みんなの掲示板
      </Link>
      <Link to='/threads/new'>スレを立てる</Link>
    </header>
  );
};

export { Header };

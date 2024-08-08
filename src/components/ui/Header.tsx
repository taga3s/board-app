import { headerStyle } from './Header.css';

const Header = () => {
  return (
    <header className={headerStyle.wrapper}>
      <h1 className={headerStyle.title}>みんなの掲示板</h1>
    </header>
  );
};

export { Header };

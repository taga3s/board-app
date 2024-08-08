import { newStyle } from './New.css';
import { NewForm } from './NewForm';

const New = () => {
  return (
    <div className={newStyle.wrapper}>
      <h2 className={newStyle.title}>スレを立てる</h2>
      <NewForm />
    </div>
  );
};

export { New };

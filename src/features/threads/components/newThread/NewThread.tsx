import { newThreadStyle } from './NewThread.css';
import { NewThreadForm } from './NewThreadForm';

const NewThread = () => {
  return (
    <div className={newThreadStyle.wrapper}>
      <h2 className={newThreadStyle.title}>スレを立てる</h2>
      <NewThreadForm />
    </div>
  );
};

export { NewThread };

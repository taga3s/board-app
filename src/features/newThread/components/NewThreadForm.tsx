import { useRouter } from '@tanstack/react-router';
import { ChangeEvent, FormEvent, useState } from 'react';

import { Button } from '../../../styles/button.css';
import { usePostThread } from '../api/post-thread';
import { newThreadFormStyle } from './NewThreadForm.css';

const NewThreadForm = () => {
  const router = useRouter();
  const { mutateAsync } = usePostThread();
  const [title, setTitle] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      alert('タイトルを入力してください');
      return;
    }
    mutateAsync({ title }).then(() => {
      router.navigate({ to: '/' });
    });
  };

  return (
    <form className={newThreadFormStyle.wrapper} onSubmit={handleSubmit}>
      <div className={newThreadFormStyle.section}>
        <label htmlFor='title'>タイトル</label>
        <input type='text' id='title' className={newThreadFormStyle.textBox} value={title} onChange={handleChange} />
      </div>
      <div className={newThreadFormStyle.buttonContainer}>
        <button type='submit' className={Button({ padding: 'medium', backgroundColor: 'blue', textColor: 'white' })}>
          投稿
        </button>
      </div>
    </form>
  );
};

export { NewThreadForm };

import { ChangeEvent, FormEvent, useState } from 'react';
import { usePostThreads } from '../api/post-threads';
import { newFormStyle } from './NewForm.css';

import { useRouter } from '@tanstack/react-router';

const NewForm = () => {
  const router = useRouter();
  const { mutateAsync } = usePostThreads();
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
    <form className={newFormStyle.wrapper} onSubmit={handleSubmit}>
      <div className={newFormStyle.section}>
        <label htmlFor='title'>タイトル</label>
        <input type='text' id='title' className={newFormStyle.textBox} value={title} onChange={handleChange} />
      </div>
      <button type='submit' className={newFormStyle.button}>
        投稿
      </button>
    </form>
  );
};

export { NewForm };

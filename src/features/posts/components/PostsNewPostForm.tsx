import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { postsNewPostFormStyle } from './PostsNewPostForm.css';
import { Button } from '../../../styles/button.css';
import { usePostNewPost } from '../api/post-new-post';

type Props = {
  threadId: string;
};

const PostsNewPostForm: FC<Props> = ({ threadId }) => {
  const { mutateAsync } = usePostNewPost();
  const [post, setPost] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!post) {
      alert('内容を入力してください');
      return;
    }
    mutateAsync({ threadId, post }).then(() => {
      setPost('');
    });
  };

  return (
    <form className={postsNewPostFormStyle.wrapper} onSubmit={handleSubmit}>
      <textarea value={post} placeholder='内容を入力' className={postsNewPostFormStyle.textBox} onChange={handleChange} />
      <button type='submit' className={Button({ padding: 'medium', backgroundColor: 'blue', textColor: 'white' })}>
        コメント
      </button>
    </form>
  );
};

export { PostsNewPostForm };

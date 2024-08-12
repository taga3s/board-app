import { style } from '@vanilla-extract/css';

import { vars } from '../../../styles/vars.css';

const postsNewPostFormStyle = {
  wrapper: style({
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    width: '100%',
    marginTop: '24px',
    padding: '16px',
    backgroundColor: vars.color.gray,
    borderRadius: '8px',
  }),
  textBox: style({
    width: '400px',
    height: '80px',
    padding: '8px',
    fontSize: '12px',
    backgroundColor: vars.color.white,
    resize: 'none',
  }),
  buttonContainer: style({
    marginTop: '32px',
  }),
};

export { postsNewPostFormStyle };

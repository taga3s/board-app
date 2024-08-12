import { style } from '@vanilla-extract/css';

const postsStyle = {
  wrapper: style({
    maxWidth: '720px',
    width: '100%',
    margin: '0 auto',
    padding: '24px 16px',
  }),
  title: style({
    marginTop: '24px',
    fontSize: '24px',
  }),
  back: style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }),
};

export { postsStyle };

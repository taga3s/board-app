import { style } from '@vanilla-extract/css';

const threadsStyle = {
  wrapper: style({
    maxWidth: '720px',
    width: '100%',
    margin: '0 auto',
    padding: '24px 16px',
  }),
  title: style({
    fontSize: '24px',
  }),
  switcher: style({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '16px',
  }),
};

export { threadsStyle };

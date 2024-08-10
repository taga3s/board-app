import { style } from '@vanilla-extract/css';

const newThreadStyle = {
  wrapper: style({
    maxWidth: '720px',
    width: '100%',
    margin: '0 auto',
    padding: '24px 16px',
  }),
  title: style({
    fontSize: '24px',
  }),
};

export { newThreadStyle };

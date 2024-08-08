import { style } from '@vanilla-extract/css';

export const boardLayoutStyle = {
  wrapper: style({
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
  }),
  title: style({
    padding: '0 16px',
  }),
  link: style({
    textDecoration: 'none',
    ':hover': {
      opacity: 0.5,
    },
  }),
};

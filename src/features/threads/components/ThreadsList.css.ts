import { style } from '@vanilla-extract/css';

const threadsListStyle = {
  list: style({
    width: '100%',
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }),
};

export { threadsListStyle };

import { style } from '@vanilla-extract/css';

const postsListStyle = {
  list: style({
    width: '100%',
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }),
  noDataMessage: style({
    marginTop: '24px',
    textAlign: 'center',
  }),
};

export { postsListStyle };

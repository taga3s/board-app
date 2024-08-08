import { style } from '@vanilla-extract/css';

const threadListStyle = {
  switcher: style({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '16px',
  }),
  list: style({
    width: '100%',
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }),
};

export { threadListStyle };

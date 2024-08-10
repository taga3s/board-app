import { style } from '@vanilla-extract/css';

import { vars } from '../styles/vars.css';

const headerStyle = {
  wrapper: style({
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${vars.color.gray}`,
  }),
  title: style({
    padding: '0 16px',
    fontSize: '24px',
    fontWeight: 'bold',
  }),
};

export { headerStyle };

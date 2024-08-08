import { style } from '@vanilla-extract/css';

import { vars } from '../../../components/styles/vars.css';

const threadsListItemStyle = {
  wrapper: style({
    width: '100%',
    padding: '16px',
    border: `1px solid ${vars.color.gray}`,
    borderRadius: '8px',
    height: '90px',
  }),
};

export { threadsListItemStyle };

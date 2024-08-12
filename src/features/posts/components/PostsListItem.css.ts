import { style } from '@vanilla-extract/css';

import { vars } from '../../../styles/vars.css';

const postsListItemStyle = {
  wrapper: style({
    width: '100%',
    padding: '16px',
    border: `1px solid ${vars.color.gray}`,
    borderRadius: '8px',
  }),
};

export { postsListItemStyle };

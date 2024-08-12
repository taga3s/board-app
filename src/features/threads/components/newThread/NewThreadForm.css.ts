import { style } from '@vanilla-extract/css';

import { vars } from '../../../../styles/vars.css';

const newThreadFormStyle = {
  wrapper: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: '24px',
  }),
  section: style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  }),
  textBox: style({
    width: '360px',
    padding: '8px',
    fontSize: '16px',
    border: `1px solid ${vars.color.gray}`,
  }),
  buttonContainer: style({
    marginTop: '32px',
  }),
};

export { newThreadFormStyle };

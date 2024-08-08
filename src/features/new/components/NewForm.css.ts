import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/vars.css';

const newFormStyle = {
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
  button: style({
    marginTop: '32px',
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: vars.color.blue,
    color: vars.color.white,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }),
};

export { newFormStyle };

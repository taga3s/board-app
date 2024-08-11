import { recipe } from '@vanilla-extract/recipes';

import { vars } from './vars.css';

const Button = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
  },
  variants: {
    padding: {
      small: { padding: '8px 16px' },
      medium: { padding: '12px 24px' },
      large: { padding: '16px 32px' },
    },
    backgroundColor: {
      blue: { backgroundColor: `${vars.color.blue}` },
    },
    textColor: {
      black: { color: '#000000' },
      white: { color: '#ffffff' },
    },
    fontSize: {
      small: { fontSize: '12px' },
      medium: { fontSize: '14px' },
      large: { fontSize: '16px' },
    },
  },
});

export { Button };

import { createGlobalTheme } from '@vanilla-extract/css';

const vars = createGlobalTheme(':root', {
  color: {
    gray: '#cccccc',
    white: '#ffffff',
  },
});

export { vars };

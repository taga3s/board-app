import { createGlobalTheme } from '@vanilla-extract/css';

const vars = createGlobalTheme(':root', {
  color: {
    gray: '#cccccc',
    white: '#ffffff',
    blue: '#0077cc',
  },
});

export { vars };

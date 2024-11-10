import { createGlobalStyle } from 'styled-components';

export const H1 = {
  fontSize: '3.5rem',
  fontWeight: 700,
  lineHeight: '130%',
};

export const H2 = {
  fontSize: '2.25rem',
  fontWeight: 700,
  lineHeight: '130%',
};

export const H3 = {
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: '130%',
};

export const bodyLarge = (fontWeight: 400 | 600 = 400) => ({
  fontSize: '1rem',
  fontWeight: fontWeight === 600 ? 600 : 400,
  lineHeight: '150%',
});

export const bodySmall = {
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '150%',
};

export const Caption = {
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: '130%',
};

const GlobalStyles = createGlobalStyle`
  :root {
    --neutral-lightest: #f0f0f2;
    --neutral-extra-light: #e0e2e6;
    --neutral-light: #c0c2c8;
    --neutral-medium: #9ea0a5;
    --neutral-dark: #7f8185;
    --neutral-extra-dark: #5e5f63;
    --neutral-darkest: #202122;

    --primary-light: #0b0e3a;
    --primary-medium: #060725;
    --primary-dark: #020318;

    --secondary-light: #ef4c84;
    --secondary-medium: #d31450;
    --secondary-dark: #8c1038;

    --accent1-light: #00bfc1;
    --accent1-medium: #009598;
    --accent1-dark: #006c6e;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Open Sans', sans-serif;
    }
  }`;

export default GlobalStyles;

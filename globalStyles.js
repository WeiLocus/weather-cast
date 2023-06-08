import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* font-family */
    --ff-basic: 'Verdana';

    /* font-size */
    --fs-basic: 1rem; 
    --fs-big-100: 2rem;
    --fs-big-200: 2.6rem;
    --fs-big-500: 6rem;
    --fs-small: 0.8rem;

    /* colors */
    --color-bg: #ededed;
    --color-primary: #f9f9f9;
    --color-secondary: #3f3636;
    --color-temp: #149ECA;

  }

  // css reset
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }


  body {
    font-family: var( --ff-basic);
  }
`

// theme
export const theme = {
  light: {
    bgColor:'#ededed',
    cardColor: '#f9f9f9',
    boxShadow:
      '0 1px 4px 0 rgba(153,153,153)',
    titleColor: '#212121',
    temperatureColor: '#149ECA',
    textColor: '#3f3636',

  },
  dark: {
    bgColor: '#1F2022',
    cardColor: '#121416',
    boxShadow:
      '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
    titleColor: '#f9f9fa',
    temperatureColor: '#149ECA',
    textColor: '#cccccc',
  }
}
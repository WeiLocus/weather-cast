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
    cardColor1: 'rgba(114,185,220, 0.4)',
    cardColor2: 'rgba(238,238,238, 0.4)',
    boxShadow:
      '0 0.3rem 0.5rem 0 rgba(153,153,153)',
    titleColor: '#212121',
    textColor: '#3f3636',
    cardImage:  "./images/bg-card.jpg",

  },
  dark: {
    bgColor: '#252525',
    cardColor: '#121416',
    cardColor1: 'rgba(40,39,0, 0.8)',
    cardColor2: 'rgba(40,39,30, 0.8)',
    boxShadow:
      '0 0 0.3rem 0 rgba(90,90,90)',
    titleColor: '#cdd6d9',
    textColor: '#cccccc',
  }
}
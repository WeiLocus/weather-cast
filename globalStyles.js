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
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* font-family */
    --ff-basic: 'Verdana';

    /* font-size */
    --fs-basic: 1rem; 
    --fs-secondary: 1.2rem;
    --fs-small: 0.8rem;

    /* colors */
    --color-bg: #ededed;
    --color-primary: #f9f9f9;
    --color-secondary: #828282;
    --color-temp: #4770d0;
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
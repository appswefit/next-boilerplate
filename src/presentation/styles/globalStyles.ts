import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --header-height: 68px;

    @media screen and (min-width: 1024px) {
      --header-height: 74px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    -webkit-appearance: none;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  html, body, #__next {
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    background-color: ${props => props.theme.colors.primary};
  }

  button {
    color: ${props => props.theme.colors.white};
    background: none;
    border: none;
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
  }

  img: {
    display: block;
    min-height: 100%;
    min-width: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";
import { DARK_PURPLE, GREY, SOFT_WHITE } from "./variables";

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-family: Sans-Serif;
    scroll-behavior: smooth;
    background: no-repeat linear-gradient(${SOFT_WHITE}, ${GREY});
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    cursor: pointer;
    text-decoration:none;
  }
 
  ul, li, h1, h2, h3, p  {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    border: 0;
    outline: 0;
  }

  body {
   
    margin: 0 auto;
    background: no-repeat linear-gradient(${SOFT_WHITE}, ${GREY});
    color: ${DARK_PURPLE};
    overscroll-behavior: none;
    width: 100%;
    transition: all 0.25s ease;
  }

 

  #app {
    box-shadow: 0 0 10px rgba(0,0,0,.05);
    overflow-x: hidden;
  }
`;

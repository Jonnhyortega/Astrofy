import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --orange-dark:rgb(136, 84, 0);
    --orange: #ff9d01;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
    --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
    --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
    --funnel: "Funnel Display", sans-serif;
    --ubuntu: "Ubuntu", sans-serif;
  }

  ::-webkit-scrollbar {
    width: 20px; 
  }

  ::-webkit-scrollbar-track {
    background: #ff9900;
    border-radius: 10px; 
  }

  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  * {
    scrollbar-width: thin; 
    scrollbar-color: #888 #f1f1f1; 
  }

  html {
    scroll-behavior: smooth; 
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent; 
    overflow-x: hidden; 
  }


`;

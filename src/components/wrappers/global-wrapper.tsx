import { createGlobalStyle } from 'styled-components';

const GlobalWrapper = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Noto Serif', serif;
  }

  body {
    background-color: #f4f3ee;
  }
`;

export default GlobalWrapper;

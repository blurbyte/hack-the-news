import { injectGlobal } from 'styled-components';

injectGlobal`
  html, body {
      width: 100%;
      height: 100%;
    }

  html {
    font-size: 10px;
    font-family: sans-serif;
    box-sizing: border-box;
    line-height: 1.4;
  }

  body {
    background: #f4f0ed;
    overflow-y: scroll;
    font-family: Arial, Helvetica, sans-serif;
  }

  input, textarea, button, select, label, a {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1.4rem;
    color: #444;
    line-height: 1.4;
    margin: 0.8rem 0;
  }
`;

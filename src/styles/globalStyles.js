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
    font-family: Helvetica, Arial, sans-serif;
    /* text selection disabled */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  input, textarea, button, select, label, a {
    outline: none;
  }

  a {
    text-decoration: none;
  }
`;

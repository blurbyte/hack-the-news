import { injectGlobal } from 'styled-components';
import media from './media';

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
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 2.4rem;
    font-weight: 400;
    color: #666;
    /* text selection disabled */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    ${media.phone`font-size: 1.6rem;`}
  }

  input, textarea, button, select, label, a, li {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline: none;
  }

  a {
    text-decoration: none;
  }

  ::-moz-selection {
    background: rgba(254,110,13,0.2);
    color: inherit;
  }

  ::selection {
    background: rgba(254,110,13,0.2);
    color: inherit;
  }
`;

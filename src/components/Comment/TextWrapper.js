import styled from 'styled-components';

const TextWrapper = styled.div`
  padding: 0 4.2rem 2rem 4.2rem;
  /* text selection enabled */
  -webkit-touch-callout: auto;
  -webkit-user-select: auto;
      -moz-user-select: auto;
      -ms-user-select: auto;
          user-select: auto;

  cursor: text;

  & p {
    line-height: 1.4;
    padding: 0;
    margin: 0;
    padding-bottom: 3.2rem;
  }

  & p:first-child {
    margin-top: 1rem;
  }

  & a {
    color: rgba(254,110,13,0.6);
    word-wrap: break-word;
  }

  & code {
    color: #666;
    line-height: 1.2;
  }

  & pre {
    overflow: hidden;
    margin-top: 0;
  }
`;

export default TextWrapper;

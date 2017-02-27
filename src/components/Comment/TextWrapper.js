import styled from 'styled-components';
import media from '../../styles/media';

const TextWrapper = styled.div`
  padding: 0 4.2rem 2.4rem 4.2rem;
  ${media.phone`padding: 0 2.4rem 1rem 2.4rem;`}

  /* text selection enabled */
  -webkit-touch-callout: text;
  -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;

  cursor: text;

  & p {
    line-height: 1.4;
    padding: 0;
    margin: 0;
    padding-bottom: 1.8rem;
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
    ${media.phone`overflow-x: scroll;`}
  }
`;

export default TextWrapper;

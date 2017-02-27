import styled, { css } from 'styled-components';
import media from '../../styles/media';

const StyledList = styled.ul`
  list-style: none;
  background-color: #f4f0ed;
  margin: 0;
  ${props => {
    if (props.root) {
      return 'padding-left: 0';
    }
    else {
      return css`
        padding-left: 4.2rem;
        ${media.phone`
          padding-left: 2rem;
        `}
      `;
    }
  }}
`;

export default StyledList;

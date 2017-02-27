import styled, { css } from 'styled-components';
import media from '../../styles/media';

const StyledComment = styled.li`
  background-color: #fffcfb;
  border-top: 2px solid #f4f0ed;
  overflow: hidden;
  ${props => {
    if (props.expanded) {
      return 'height: auto;';
    }
    else {
      return css`
        height: 8.4rem;
        ${media.phone`
          height: 6.4rem;
        `}
      `;
    }
  }}
`;

export default StyledComment;

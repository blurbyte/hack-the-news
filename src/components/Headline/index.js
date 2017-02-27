import styled from 'styled-components';
import media from '../../styles/media';

const StyledComment = styled.h1`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.1rem;
  margin: 0;
  ${media.phone`
    font-size: 1.8rem;
    letter-spacing: 0;
  `}
`;

export default StyledComment;

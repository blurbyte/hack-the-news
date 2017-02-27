import styled from 'styled-components';
import media from '../../styles/media';

const Banner = styled.header`
  width: 100%;
  height: 12rem;
  background: #fff;

  ${media.phone`
    height: 8rem;
  `}
`;

export default Banner;

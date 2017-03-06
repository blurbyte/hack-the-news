import styled from 'styled-components';
import media from '../../styles/media';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 4.2rem;

  ${media.phone`
    padding: 0 2.4rem;
  `}

  & .logo {
    ${media.phone`
      width: 44px;
      height: 52px;
    `}
  }
`;

export default Wrapper;

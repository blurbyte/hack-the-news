import styled from 'styled-components';
import media from '../../styles/media';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  height: 100%;
  padding: 0 4.2rem;
  display: flex;
  align-items: center;

  ${media.phone`padding: 0 2.4rem;`}
`;

export default Wrapper;

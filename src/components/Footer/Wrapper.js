import styled from 'styled-components';
import media from '../../styles/media';

const Wrapper = styled.footer`
  width: 100%;
  height: 8rem;
  background-color: #fff;
  border-top: 2px solid #f4f0ed;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 4.2rem;
  display: flex;
  align-items: center;

  ${media.phone`padding: 0 2.4rem;`}
`;

export default Wrapper;

import styled from 'styled-components';
import media from '../../styles/media';

const Header = styled.header`
  background-color: #fe6e0d;
  padding: 4.2rem;
  padding-top: 3.8rem;

  ${media.phone`
    padding: 2.4rem;
    padding-top: 2.2rem;
  `}
`;

export default Header;

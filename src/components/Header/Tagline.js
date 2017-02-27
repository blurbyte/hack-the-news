import styled from 'styled-components';
import media from '../../styles/media';

const Tagline = styled.p`
  color: #fa370a;
  font-weight: 300;
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 1.2;
  margin-left: 3.2rem;
  padding-left: 2.6rem;
  border-left: 2px solid #fa370a;

  ${media.phone`
    font-size: 1.6rem;
    margin-left: 1.6rem;
    padding-left: 1.3rem;
    border-left: 1px solid #fa370a;
  `}
`;

export default Tagline;

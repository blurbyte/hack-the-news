import styled from 'styled-components';
import media from '../../styles/media';

import Label from './Label';

const Score = styled(Label)`
  background-color: #fa370a;
  display: block;
  font-weight: 400;
  border-radius: 0.6rem;
  padding: 0.8rem 1.2rem;
  min-width: 5rem;
  text-align: center;

  ${media.phone`
    padding: 0.6rem 1rem;
    min-width: 3.4rem;
  `}
`;

export default Score;

import styled from 'styled-components';
import media from '../../styles/media';

import RegularTime from '../Time';

const Time = styled(RegularTime)`
  color: rgba(255,255,255,0.75);
  margin-right: 3.2rem;
  font-weight: 300;
  ${media.phone`margin-right: 2rem;`}
`;

export default Time;

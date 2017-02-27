import styled from 'styled-components';
import media from '../../styles/media';

const Label = styled.p`
  color: rgba(255,255,255,0.75);
  display: block;
  font-weight: 300;
  letter-spacing: -0.1rem;
  margin: 0 3.2rem 0 0;
  ${media.phone`margin: 0 2rem 0 0;`}
`;

export default Label;

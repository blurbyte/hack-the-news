import styled from 'styled-components';
import media from '../../styles/media';

const Message = styled.p`
  color: #aaa;
  background-color: #fffcfb;
  font-style: oblique;
  padding: 4.2rem;
  padding-top: 3.8rem;
  margin: 0;
  border-top: 2px solid #f4f0ed;
  ${media.phone`
    padding: 2.4rem;
    padding-top: 2rem;
  `}
`;

export default Message;

import styled from 'styled-components';
import media from '../../styles/media';

const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 4.2rem 3.2rem 4.2rem;
  cursor: pointer;
  height: 8.4rem;

  ${media.phone`
    padding: 1.6rem 2.4rem 2.2rem 2.4rem;
    height: 6.6rem;
    width: 100%;
    overflow-x: scroll;
  `}
`;

export default InfoBar;

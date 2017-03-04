import styled from 'styled-components';
import media from '../../styles/media';

const Button = styled.button`
  display: block;
  background-color: #fe6e0d;
  border-radius: 1rem;
  padding: 1rem 2rem;
  color: #fff;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.1rem;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255,255,255,0.3);
  transition: background-color 0.1s linear;

  &:hover {
    background-color: rgba(254,110,13,0.7);
    ${media.phone`background-color: #fe6e0d;`}
  }

  ${media.phone`width: 100%;`}
`;

export default Button;

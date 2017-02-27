import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  background-color: #f4f0ed;
  margin: 0;
  padding-left: ${props => props.root ? 0 : '4.2rem'};
`;

export default StyledList;

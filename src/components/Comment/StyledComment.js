import styled from 'styled-components';

const StyledComment = styled.li`
  background-color: #fffcfb;
  border-top: 2px solid #f4f0ed;
  overflow: hidden;
  height: ${props => props.expanded ? 'auto' : '8.4rem'};
`;

export default StyledComment;

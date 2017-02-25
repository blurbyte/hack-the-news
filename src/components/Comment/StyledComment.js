import styled from 'styled-components';

const StyledComment = styled.li`
  background-color: #fffcfb;
  border-top: 4px solid #f4f0ed;
  overflow: hidden;
  height: ${props => props.expanded ? 'auto' : '11rem'};
`;

export default StyledComment;

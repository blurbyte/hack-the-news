import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ArrowToggleIcon from '../Icons/ArrowToggleIcon';

const Wrapper = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1rem;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    transform: ${props => props.expanded ? 'rotate(0deg)' : 'rotate(90deg)'};
    transition: transform 0.1s linear;
  }
`;

const ToggleIcon = ({expanded}) => {
  return (
    <Wrapper expanded={expanded}>
      <ArrowToggleIcon />
    </Wrapper>
  );
};

ToggleIcon.propTypes = {
  expanded: PropTypes.bool
};

export default ToggleIcon;

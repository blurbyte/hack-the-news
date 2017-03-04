import React, { PropTypes } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

import ArrowToggleIcon from '../Icons/ArrowToggleIcon';

const Wrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 0.6rem;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  ${media.phone`
    width: 2rem;
    height: 2rem;
  `}

  & .icon {
    transform: ${props => props.expanded ? 'rotate(0deg)' : 'rotate(90deg)'};
    transition: transform 0.1s linear;
    ${media.phone`
      width: 1.2rem;
      height: 1.2rem;
    `}
  }
`;

const ToggleIcon = ({expanded}) => {
  return (
    <Wrapper expanded={expanded}>
      <ArrowToggleIcon width={18} height={18} />
    </Wrapper>
  );
};

ToggleIcon.propTypes = {
  expanded: PropTypes.bool
};

export default ToggleIcon;

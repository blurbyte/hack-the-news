import React, { PropTypes } from 'react';
import styled from 'styled-components';

import RegularTime from '../Time';
import FlexWrapper from '../FlexWrapper';
import HourglassIcon from '../Icons/HourglassIcon';

const StyledTime = styled(RegularTime)`
  color: #aaa;
  display: block;
  margin-left: 1.4rem;
`;

const Time = ({time, className}) => {
  return (
    <FlexWrapper>
      <HourglassIcon />
      <StyledTime time={time} className={className} />
    </FlexWrapper>
  );
};

Time.propTypes = {
  time: PropTypes.number,
  className: PropTypes.string
};

export default Time;

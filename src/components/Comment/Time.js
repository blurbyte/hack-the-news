import React, { PropTypes } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

import RegularTime from '../Time';
import RegularFlexWrapper from '../FlexWrapper';
import HourglassIcon from '../Icons/HourglassIcon';

const StyledTime = styled(RegularTime)`
  color: #aaa;
  display: block;
  margin-left: 1.4rem;
  line-height: 2.8rem;
  ${media.phone`margin-left: 0.6rem;`}
`;

const FlexWrapper = styled(RegularFlexWrapper)`
  min-width: 10rem;
  & .icon {
    ${media.phone`
      width: 18px;
      height: 18px;
    `}
  }
`;

const Time = ({time, className}) => {
  return (
    <FlexWrapper>
      <HourglassIcon width={19} height={28}/>
      <StyledTime time={time} className={className} />
    </FlexWrapper>
  );
};

Time.propTypes = {
  time: PropTypes.number,
  className: PropTypes.string
};

export default Time;

import React, { PropTypes } from 'react';

import StyledTime from './StyledTime';

import timestamp from '../../utilities/timestamp';

const Time = ({time, className}) => {
  const timeAgo = timestamp(time * 1000);

  return (
    <StyledTime className={className}>{timeAgo}</StyledTime>
  );
};

Time.propTypes = {
  time: PropTypes.number,
  className: PropTypes.string
};

export default Time;

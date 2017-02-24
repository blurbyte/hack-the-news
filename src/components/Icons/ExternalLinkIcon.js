import React, { PropTypes } from 'react';

const ExternalLinkIcon = ({width = 42, height = 32, fill = '#fff'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 42 32">
    <path fill={fill} d="M28.661,18.994v-5.098c-10.435-2.604-14.331,2.66-16.974,7.854C13.081,8.12,24.637,5.422,28.661,4.998V0L42,9.531 L28.661,18.994z M32.002,22.008V28H4V8h9.506c1.543-1.633,3.301-2.958,5.174-4H4C1.794,4,0,5.794,0,8v20c0,2.205,1.794,4,4,4h28 c2.205,0,4-1.795,4-4v-8.934L32.002,22.008z" />
  </svg>
);

ExternalLinkIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

export default ExternalLinkIcon;

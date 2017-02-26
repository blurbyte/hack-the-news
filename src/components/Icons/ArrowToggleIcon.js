
import React, { PropTypes } from 'react';

const ArrowToggleIcon = ({width = 24, height = 24, fill = '#fffcfb'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
    <path fill={fill} d="M12,24L0.504,8.682c-0.919-1.385-0.547-3.254,0.832-4.176c1.38-0.923,3.241-0.548,4.16,0.835L12,14.129l6.504-8.788 c0.918-1.383,2.778-1.758,4.16-0.835c1.379,0.922,1.751,2.791,0.832,4.176L12,24z" />
  </svg>
);

ArrowToggleIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

export default ArrowToggleIcon;

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M12,24L0.504,8.682c-0.919-1.385-0.547-3.254,0.832-4.176c1.38-0.923,3.241-0.548,4.16,0.835L12,14.129l6.504-8.788 c0.918-1.383,2.778-1.758,4.16-0.835c1.379,0.922,1.751,2.791,0.832,4.176L12,24z" />
</svg>

import React, { PropTypes } from 'react';

const ProfileIcon = ({width = 36, height = 36, fill = '#fe6e0d'}) => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 36">
    <path fill={fill} d="M25.658,25.292c-2.299-0.625-3.576-2.125-3.576-3.25c0,0,0-0.861,0-2.332c1.488-1.146,2.906-3.445,3.418-8.044 C26.582,1.917,21.917,0,18,0s-8.583,1.917-7.5,11.666c0.511,4.598,1.93,6.896,3.417,8.044c0,1.471,0,2.332,0,2.332 c0,1.125-1.277,2.625-3.577,3.25S0,27.834,0,30.834S0,34.5,0,34.5C0,35.292,0.166,36,1.458,36s31.792,0,33.083,0 C35.834,36,36,35.292,36,34.5c0,0,0-0.666,0-3.666S27.959,25.917,25.658,25.292z" />
  </svg>
);

ProfileIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

export default ProfileIcon;

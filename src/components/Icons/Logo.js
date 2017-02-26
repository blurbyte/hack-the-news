import React, { PropTypes } from 'react';

const Logo = ({width = 44, height = 52}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 44 52" aria-labelledby="title">
    <title id="title">Hack the News</title>
    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="14.294" y1="28.253" x2="-12.817" y2="1.142">
      <stop offset="0" stopColor="#FA370A" />
      <stop offset=".33" stopColor="#FE6E0D" />
    </linearGradient>
    <path fill="url(#a)" d="M12,2.902C12,1.246,10.656,0,9,0H3C1.343,0,0,1.246,0,2.902v35.306h12v-14.12V2.902z" />
    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-1568.395" y1="-1126.789" x2="-1595.506" y2="-1153.9" gradientTransform="rotate(180 -769.345 -551.52)">
      <stop offset="0" stopColor="#FA370A" />
      <stop offset=".33" stopColor="#FE6E0D" />
    </linearGradient>
    <path fill="url(#b)" d="M32,49.098C32,50.754,33.344,52,35,52h6c1.657,0,3-1.246,3-2.902V13.792H32v14.12V49.098z" />
    <path fill="#FE6E0D" d="M44.009,3.015c0-0.765-0.292-1.537-0.878-2.123c-1.147-1.147-3.029-1.208-4.17-0.067L5.037,34.191 c-1.171,1.172-3.014,1.104-4.186-0.066c-0.584-0.584-0.877-1.351-0.879-2.117l0,16.977c0,0.766,0.292,1.537,0.877,2.123 c1.148,1.147,3.03,1.207,4.17,0.067l33.924-33.367c1.171-1.171,3.015-1.104,4.187,0.067c0.584,0.584,0.877,1.35,0.879,2.116 L44.009,3.015z" />
  </svg>
);

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Logo;


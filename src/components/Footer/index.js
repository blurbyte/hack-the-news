import React, { PropTypes } from 'react';

import StyledFooter from './StyledFooter';
import Wrapper from './Wrapper';

const Footer = ({ children }) => {
  return (
    <StyledFooter>
      <Wrapper>
        {children}
      </Wrapper>
    </StyledFooter>
  );
};

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;

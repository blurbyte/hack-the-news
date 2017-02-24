import React, { PropTypes } from 'react';
import styled from 'styled-components';

import RegularLink from '../Link';

const Link = styled(RegularLink)`
  color: rgba(255,255,255,0.75);
  display: block;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 3.6rem;
  font-weight: 400;
  letter-spacing: -0.1rem;
`;

const ExternalLink = ({href, children}) => {
  return (
    <Link href={href} target="_blank">{children}</Link>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
};

export default ExternalLink;

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ExternalLinkIcon from '../Icons/ExternalLinkIcon';
import FlexWrapper from '../FlexWrapper';
import RegularLink from '../Link';

const Link = styled(RegularLink)`
  color: rgba(255,255,255,0.75);
  display: block;
  letter-spacing: -0.1rem;
  margin-left: 1.4rem;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ExternalLink = ({href, children}) => {
  return (
    <FlexWrapper>
      <ExternalLinkIcon width={32} height={24} fill="rgba(255,255,255,0.6)" />
      <Link href={href} target="_blank">{children}</Link>
    </FlexWrapper>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
};

export default ExternalLink;

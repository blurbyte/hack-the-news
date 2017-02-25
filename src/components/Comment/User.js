import React, { PropTypes } from 'react';
import styled from 'styled-components';

import FlexWrapper from '../FlexWrapper';
import ProfileIcon from '../Icons/ProfileIcon';

const StyledUser = styled.p`
  color: #fe6e0d;
  letter-spacing: -0.1rem;
  margin: 0;
  display: block;
  margin-right: 4.2rem;
  margin-left: 1.4rem;
  font-style: ${props => props.expanded ? 'normal' : 'oblique'};
`;

const User = ({user, expanded}) => {
  return (
    <FlexWrapper>
      <ProfileIcon />
      <StyledUser expanded={expanded}>{user}</StyledUser>
    </FlexWrapper>
  );
};

User.propTypes = {
  user: PropTypes.string,
  expanded: PropTypes.bool
};

export default User;

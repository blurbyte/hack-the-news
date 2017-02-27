import React, { PropTypes } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

import RegularFlexWrapper from '../FlexWrapper';
import ProfileIcon from '../Icons/ProfileIcon';

const StyledUser = styled.p`
  color: ${props => props.expanded ? '#fe6e0d' : 'rgba(254,110,13,0.6)'};
  letter-spacing: -0.1rem;
  margin: 0;
  display: block;
  margin-right: 4.2rem;
  margin-left: 1.4rem;
  line-height: 2.8rem;
  transition: color 0.1s linear;
  ${media.phone`
    margin-right: 2.8rem;
    margin-left: 0.6rem;
  `}
`;

const FlexWrapper = styled(RegularFlexWrapper)`
  & .icon {
    ${media.phone`
      width: 18px;
      height: 18px;
    `}
  }
`;

const User = ({user, expanded}) => {
  return (
    <FlexWrapper>
      <ProfileIcon width={28} height={28}/>
      <StyledUser expanded={expanded}>{user}</StyledUser>
    </FlexWrapper>
  );
};

User.propTypes = {
  user: PropTypes.string,
  expanded: PropTypes.bool
};

export default User;

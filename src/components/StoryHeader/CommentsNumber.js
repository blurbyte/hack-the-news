import React, { PropTypes } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

import ChatBubbleIcon from '../Icons/ChatBubbleIcon';
import RegularFlexWrapper from '../FlexWrapper';
import Label from './Label';

const FlexWrapper = styled(RegularFlexWrapper)`
  & .icon {
    ${media.phone`
      width: 22px;
      height: 18px;
    `}
  }
`;

const StyledLabel = styled(Label)`
  margin-left: 1rem;
  ${media.phone`margin-left: 0.6rem;`}
`;

const CommentsNumber = ({children}) => {
  return (
    <FlexWrapper>
      <ChatBubbleIcon width={32} height={28} fill="rgba(255,255,255,0.6)" />
      <StyledLabel>{children}</StyledLabel>
    </FlexWrapper>
  );
};

CommentsNumber.propTypes = {
  children: PropTypes.node
};

export default CommentsNumber;

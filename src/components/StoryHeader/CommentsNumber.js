import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ChatBubbleIcon from '../Icons/ChatBubbleIcon';
import FlexWrapper from '../FlexWrapper';
import Label from './Label';

const StyledLabel = styled(Label)`
  margin-left: 1rem;
`;

const CommentsNumber = ({children}) => {
  return (
    <FlexWrapper>
      <ChatBubbleIcon fill="rgba(255,255,255,0.6)" />
      <StyledLabel>{children}</StyledLabel>
    </FlexWrapper>
  );
};

CommentsNumber.propTypes = {
  children: PropTypes.node
};

export default CommentsNumber;

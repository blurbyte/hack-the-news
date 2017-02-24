import React, { PropTypes } from 'react';

import StyledComment from './StyledComment';
import TextWrapper from './TextWrapper';
import InfoBar from './InfoBar';
import User from './User';
import Time from './Time';

const Comment = ({comment, children}) => {
  return (
    <StyledComment>
      <InfoBar>
        <User user={comment.user} />
        <Time time={comment.time} />
      </InfoBar>
      <TextWrapper dangerouslySetInnerHTML={{ __html: comment.text }} />
      {children}
    </StyledComment>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string,
    time: PropTypes.number,
    text: PropTypes.string
  }),
  children: PropTypes.node
};

export default Comment;

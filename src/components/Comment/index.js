import React, { PropTypes } from 'react';

import StyledComment from './StyledComment';
import TextWrapper from './TextWrapper';

const Comment = ({comment, children}) => {
  return (
    <StyledComment>
      <p>{comment.user}</p>
      <p>{comment.time}</p>
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

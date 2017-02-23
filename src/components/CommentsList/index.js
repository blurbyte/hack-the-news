import React, { PropTypes } from 'react';

import StyledComment from './StyledList';
import Comment from '../Comment';

// comments prop is map of all comments
// ids is a list of comments ids to display
// root prop flag for styling
const CommentsList = ({comments, ids, root}) => {
  return (
    <StyledComment root={root}>
      {
        ids.map(id => (
          <Comment key={id} comment={comments[id]}>
            {
              !!comments[id].children.length && <CommentsList
                comments={comments}
                ids={comments[id].children}
              />
            }
          </Comment>
        ))
      }
    </StyledComment>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.object,
  ids: PropTypes.array,
  root: PropTypes.bool
};

export default CommentsList;

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { requestStoryWithComments } from '../../actions/fetchActions';

import isEmpty from 'ramda/src/isEmpty';

import StoryHeader from '../../components/StoryHeader';
import CommentsList from '../../components/CommentsList';
import Wrapper from './Wrapper';

class Story extends React.Component {
  componentDidMount() {
    // provide storyId
    this.props.requestStoryWithComments('13647889');
  }

  render() {
    let content = (<div></div>);

    let {story, comments} = this.props;

    // checkis if story and comments have been loaded
    if (!isEmpty(story) && !isEmpty(comments)) {
      content = (
        <div>
          <StoryHeader story={story} />
          <CommentsList root comments={comments} ids={story.children} />
        </div>
      );

    }

    return (
      <Wrapper>
        {content}
      </Wrapper>
    );
  }
}

Story.propTypes = {
  story: PropTypes.object,
  comments: PropTypes.object,
  requestStoryWithComments: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    story: state.story,
    comments: state.comments
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    requestStoryWithComments: (storyId) => dispatch(requestStoryWithComments(storyId))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Story);

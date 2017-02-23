import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { requestStoryWithComments } from '../../actions/fetchActions';

class Story extends React.Component {
  componentDidMount() {
    // provide storyId
    this.props.requestStoryWithComments('13647889');
  }

  render() {
    return (
      <h1>Hack the News</h1>
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

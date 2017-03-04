import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { requestTopStoriesIds } from '../../actions/fetchActions';

import isEmpty from 'ramda/src/isEmpty';

import StoryHeader from '../../components/StoryHeader';
import CommentsList from '../../components/CommentsList';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import ContentWrapper from './ContentWrapper';

class Story extends React.Component {
  componentDidMount() {
    // fetch top HN stories and randomly pick one
    this.props.requestTopStoriesIds();
  }

  render() {
    let content = (<Loader />);

    let {story, comments} = this.props;

    // checkis if story and comments have been loaded
    // if there are no comments in store display according message
    if (!isEmpty(story)) {
      content = (
        <div>
          <Helmet title={story.title} />
          <StoryHeader story={story} />
          {!isEmpty(comments) ? (<CommentsList root comments={comments} ids={story.children} />) : (<Message>There are no comments in this thread.</Message>)}
          <Footer />
        </div>
      );
    }

    return (
      <ContentWrapper>
        {content}
      </ContentWrapper>
    );
  }
}

Story.propTypes = {
  story: PropTypes.object,
  comments: PropTypes.object,
  requestTopStoriesIds: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    story: state.story,
    comments: state.comments
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    requestTopStoriesIds: () => dispatch(requestTopStoriesIds())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Story);

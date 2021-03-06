import React, { PropTypes } from 'react';

import FlexWrapper from '../FlexWrapper';
import StyledComment from './StyledComment';
import TextWrapper from './TextWrapper';
import InfoBar from './InfoBar';
import User from './User';
import Time from './Time';
import ToggleIcon from './ToggleIcon';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    let {comment, children} = this.props;
    let {expanded} = this.state;

    return (
      <StyledComment expanded={expanded}>
        <InfoBar onClick={this.handleToggle}>
          <FlexWrapper>
            <User expanded={expanded} user={comment.user} />
            <Time time={comment.time} />
          </FlexWrapper>
          <ToggleIcon expanded={expanded}/>
        </InfoBar>
        <TextWrapper dangerouslySetInnerHTML={{ __html: comment.text }} />
        {children}
      </StyledComment>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string,
    time: PropTypes.number,
    text: PropTypes.string
  }),
  children: PropTypes.node
};

export default Comment;

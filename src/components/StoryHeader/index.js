import React, { PropTypes } from 'react';

import Headline from '../Headline';
import Time from './Time';
import Header from './Header';
import Details from './Details';
import Score from './Score';
import Label from './Label';
import CommentsNumber from './CommentsNumber';
import ExternalLink from './ExternalLink';

const StoryHeader = ({story}) => {
  return (
    <Header>
      <Headline>{story.title}</Headline>
      <Details>
        <Score>{story.points}</Score>
        <Label>{story.user}</Label>
        <Time time={story.time} />
        <CommentsNumber>{story.descendants}</CommentsNumber>
      </Details>
      <ExternalLink href={story.url}>{story.url}</ExternalLink>
    </Header>
  );
};

StoryHeader.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string,
    points: PropTypes.number,
    user: PropTypes.string,
    time: PropTypes.number,
    descendants: PropTypes.number,
    url: PropTypes.string
  }),
};

export default StoryHeader;

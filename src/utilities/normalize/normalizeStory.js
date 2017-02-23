import omit from 'ramda/src/omit';
import map from 'ramda/src/map';
import prop from 'ramda/src/prop';
import compose from 'ramda/src/compose';
import evolve from 'ramda/src/evolve';

const comments = evolve({ comments: map(prop('id')) });
const omitStoryProps = omit(['type', 'domain', 'time_ago', 'comments_count']);

const normalizeStory = compose(omitStoryProps, comments);

export default normalizeStory;

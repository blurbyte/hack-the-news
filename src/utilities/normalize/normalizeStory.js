import omit from 'ramda/src/omit';
import map from 'ramda/src/map';
import prop from 'ramda/src/prop';
import compose from 'ramda/src/compose';
import assoc from 'ramda/src/assoc';

const children = (obj) => assoc('children', map(prop('id'), obj.comments), obj);
const descendants = (obj) => assoc('descendants', obj.comments_count, obj);
const omitStoryProps = omit(['type', 'domain', 'time_ago', 'comments_count', 'comments' ]);

const normalizeStory = compose(omitStoryProps, descendants, children);

export default normalizeStory;

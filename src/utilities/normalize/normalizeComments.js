import map from 'ramda/src/map';
import reduce from 'ramda/src/reduce';
import prop from 'ramda/src/prop';
import compose from 'ramda/src/compose';
import assoc from 'ramda/src/assoc';
import curry from 'ramda/src/curry';

// flatten array of comments
const flattenComments = curry((array) => {
  let result = [];
  map(item => {
    result.push(item);
    if (item.comments.length) {
      result = result.concat(flattenComments(item.comments));
    }
  }, array);
  return result;
});

// transforms flattended array into hashmap
const transformComments = reduce((result, item) => {
  return assoc(item.id,
    {
      user: item.user,
      time: item.time,
      text: item.content,
      children: map(prop('id'), item.comments)
    },
    result);
}, {});

const normalizeComments = compose(transformComments, flattenComments, prop('comments'));

export default normalizeComments;

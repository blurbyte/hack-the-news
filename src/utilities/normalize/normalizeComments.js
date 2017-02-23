import map from 'ramda/src/map';
import reduce from 'ramda/src/reduce';
import prop from 'ramda/src/prop';
import compose from 'ramda/src/compose';

const flattenComments = reduce((result, item) => {

  result[item.id] = {
    user: item.user,
    time: item.time,
    text: item.content,
    comments: map(prop('id'), item.comments)
  };

  if (item.comments.length) {
    return flattenComments(item.comments);
  }
  else {
    return result;
  }
}, {});

const normalizeComments = compose(flattenComments, prop('comments'));

export default normalizeComments;

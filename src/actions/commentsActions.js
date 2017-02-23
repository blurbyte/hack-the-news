import * as types from './actionTypes';

export function populateComments(comments) {
  return {
    type: types.POPULATE_COMMENTS,
    comments
  };
}

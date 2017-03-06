import * as types from './actionTypes';

export function requestCommentsSuccess(comments) {
  return {
    type: types.REQUEST_COMMENTS_SUCCESS,
    comments
  };
}

export function clearComments() {
  return {
    type: types.CLEAR_COMMENTS
  };
}

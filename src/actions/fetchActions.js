import * as types from './actionTypes';

export function requestStoryWithComments(storyId) {
  return {
    type: types.REQUEST_STORY_WITH_COMMENTS,
    storyId
  };
}

export function requestStoryWithCommentsSuccess(data) {
  return {
    type: types.REQUEST_STORY_WITH_COMMENTS_SUCCESS,
    data
  };
}

export function requestFail(message) {
  return {
    type: types.REQUEST_FAIL,
    message
  };
}

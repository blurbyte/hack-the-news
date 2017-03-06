import * as types from './actionTypes';

export function requestTopStoriesIds() {
  return {
    type: types.REQUEST_TOP_STORIES_IDS
  };
}

export function requestTopStoriesIdsSuccess(ids) {
  return {
    type: types.REQUEST_TOP_STORIES_IDS_SUCCESS,
    ids
  };
}

export function requestStoryWithComments() {
  return {
    type: types.REQUEST_STORY_WITH_COMMENTS
  };
}

export function requestFail(message) {
  return {
    type: types.REQUEST_FAIL,
    message
  };
}

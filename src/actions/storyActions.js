import * as types from './actionTypes';

export function requestStorySuccess(story) {
  return {
    type: types.REQUEST_STORY_SUCCESS,
    story
  };
}

export function clearStory() {
  return {
    type: types.CLEAR_STORY
  };
}

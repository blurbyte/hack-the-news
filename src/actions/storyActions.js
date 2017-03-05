import * as types from './actionTypes';

export function populateStory(story) {
  return {
    type: types.POPULATE_STORY,
    story
  };
}

export function clearStory() {
  return {
    type: types.CLEAR_STORY
  };
}
